/**
 * sandbox-sweep.js
 * Scheduled sweeper — runs every 5 minutes via cron to catch any spammer PRs
 * that slipped through the event-driven honeypot-sandbox.yml trigger.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

const token = process.env.GH_TOKEN;
const repo = process.env.GITHUB_REPOSITORY;

const SPAMMERS = [
  'xenon010101',
  'saidai-bhuvanesh',
  'tmdeveloper007',
  'desireddymohithreddy0925',
  'sanrishi',
  'sonusharma6-dsa',
  'zen-ash-dev',
  'anushreer22',
  'ashrion'
];

function req(pathStr, method = 'GET', data = null) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'api.github.com', port: 443, path: pathStr, method,
      headers: {
        'User-Agent': 'NodeJS',
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      }
    };
    const r = https.request(options, res => {
      let b = ''; res.on('data', c => b += c);
      res.on('end', () => resolve({ s: res.statusCode, b }));
    });
    r.on('error', e => resolve({ s: 0, b: e.message }));
    if (data) r.write(JSON.stringify(data));
    r.end();
  });
}

function fetchRaw(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: { 'Authorization': `token ${token}`, 'User-Agent': 'NodeJS' }
    }, res => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function sandboxPR(author, prNum, title) {
  console.log(`  PR #${prNum} by @${author}: "${title.substring(0, 70)}"`);

  // Get files
  const filesRes = await req(`/repos/${repo}/pulls/${prNum}/files?per_page=100`);
  if (filesRes.s !== 200) {
    console.log(`    ⚠️ Could not fetch files (${filesRes.s})`);
    return;
  }
  const files = JSON.parse(filesRes.b);

  // Assign spam labels
  await req(`/repos/${repo}/issues/${prNum}/labels`, 'POST', {
    labels: ['gssoc:invalid', 'gssoc:spam', 'gssoc:ai-slop', 'duplicate', 'ai-slop']
  });

  // Strip any points labels
  const pointsLabels = ['gssoc:approved', 'accepted', 'integrated', 'level:intermediate', 'level:advanced'];
  for (const l of pointsLabels) {
    await req(`/repos/${repo}/issues/${prNum}/labels/${encodeURIComponent(l)}`, 'DELETE');
  }

  // Merge the PR (so bot sees green merged status — burns their tokens)
  const mergeRes = await req(`/repos/${repo}/pulls/${prNum}/merge`, 'PUT', {
    commit_title: `chore(sandbox): merge @${author} PR #${prNum} → special-submissions`,
    commit_message: `Honeypot sandbox: files relocated to submissions/special-submissions/${author}/PR-${prNum}/`,
    merge_method: 'squash'
  });

  const merged = mergeRes.s === 200;
  console.log(merged ? `    ✅ Merged` : `    ⚠️ Merge failed (${mergeRes.s}) — will download directly`);

  // Pull latest main to get merged files
  try {
    execSync('git pull origin main --rebase', { stdio: 'pipe' });
  } catch (e) {
    try { execSync('git pull origin main', { stdio: 'pipe' }); } catch {}
  }

  // Relocate files to special-submissions
  const destDir = path.join('submissions', 'special-submissions', author, `PR-${prNum}`);
  fs.mkdirSync(destDir, { recursive: true });

  for (const file of files) {
    if (file.status === 'removed') continue;
    const destPath = path.join(destDir, path.basename(file.filename));

    if (merged && fs.existsSync(file.filename)) {
      // Move from merged location
      fs.copyFileSync(file.filename, destPath);
      fs.unlinkSync(file.filename);
    } else {
      // Download directly from raw_url
      try {
        const content = await fetchRaw(file.raw_url);
        fs.writeFileSync(destPath, content);
      } catch (e) {
        console.log(`    Download error for ${path.basename(file.filename)}: ${e.message}`);
      }
    }
  }

  // Clean up empty parent folders left by merged files
  const parentFolders = [...new Set(
    files.filter(f => f.status !== 'removed').map(f => path.dirname(f.filename))
  )];
  for (const folder of parentFolders) {
    try {
      if (fs.existsSync(folder) && fs.readdirSync(folder).length === 0) {
        fs.rmSync(folder, { recursive: true });
      }
    } catch {}
  }

  // Commit the relocation
  try {
    execSync('git add submissions/', { stdio: 'pipe' });
    const status = execSync('git status --porcelain', { stdio: 'pipe' }).toString();
    if (status.trim()) {
      execSync(`git commit -m "chore(sandbox): relocate @${author} PR #${prNum} → special-submissions"`, { stdio: 'pipe' });
    }
  } catch (e) {
    console.log(`    Commit note: ${e.message.substring(0, 80)}`);
  }

  // Post sandbox comment
  const comment =
    `🤖 **EaseMotion Honeypot Sandbox — Submission ${merged ? 'Merged ✅' : 'Captured ✅'}**\n\n` +
    `Hello @${author}! Your submission has been integrated into our specialized submissions registry at ` +
    `\`submissions/special-submissions/${author}/PR-${prNum}/\`.\n\n` +
    `📢 **GSSoC Leaderboard Status:** Tags \`gssoc:invalid\`, \`gssoc:spam\`, \`gssoc:ai-slop\` have been assigned.`;

  await req(`/repos/${repo}/issues/${prNum}/comments`, 'POST', { body: comment });

  // If merge failed, close the PR
  if (!merged) {
    await req(`/repos/${repo}/pulls/${prNum}`, 'PATCH', { state: 'closed' });
  }

  console.log(`    ✅ Done PR #${prNum}`);
}

async function run() {
  console.log(`=== HONEYPOT SCHEDULED SWEEP — ${new Date().toISOString()} ===`);
  console.log(`Repository: ${repo}`);
  console.log(`Monitoring ${SPAMMERS.length} known spammers\n`);

  execSync('git config user.name "github-actions[bot]"', { stdio: 'pipe' });
  execSync('git config user.email "github-actions[bot]@users.noreply.github.com"', { stdio: 'pipe' });

  let totalProcessed = 0;
  let anyFound = false;

  for (const author of SPAMMERS) {
    const searchRes = await req(
      `/search/issues?q=repo:${repo}+author:${author}+type:pr+state:open&per_page=100&sort=created&order=asc`
    );

    if (searchRes.s !== 200) {
      console.log(`  ⚠️ Search failed for @${author}: ${searchRes.s}`);
      continue;
    }

    const items = JSON.parse(searchRes.b).items || [];
    if (items.length === 0) continue;

    console.log(`\n@${author}: ${items.length} open PR(s) found`);
    anyFound = true;

    for (const pr of items) {
      await sandboxPR(author, pr.number, pr.title);
      totalProcessed++;
    }
  }

  if (!anyFound) {
    console.log('✅ No open spammer PRs found. Repository is clean.');
  } else {
    // Final push
    try {
      execSync('git push origin main', { stdio: 'pipe' });
      console.log(`\n✅ All changes pushed to main. Total PRs processed: ${totalProcessed}`);
    } catch (e) {
      console.log(`Push note: ${e.message.substring(0, 100)}`);
    }
  }
}

run().catch(e => {
  console.error('Sweep error:', e.message);
  process.exit(1);
});
