const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

const token = process.env.GH_TOKEN;
const repo = process.env.GITHUB_REPOSITORY;
const prNum = process.env.PR_NUMBER;
const author = process.env.PR_AUTHOR;

function req(pathStr, method = 'GET', data = null) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'api.github.com', port: 443, path: pathStr, method,
      headers: {
        'User-Agent': 'NodeJS', 'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'
      }
    };
    const r = https.request(options, res => {
      let b = ''; res.on('data', c => b += c);
      res.on('end', () => resolve({ s: res.statusCode, b }));
    });
    if (data) r.write(JSON.stringify(data));
    r.end();
  });
}

async function run() {
  console.log(`=== HONEYPOT SANDBOX — PR #${prNum} by @${author} ===`);

  // 1. Fetch files list for the PR
  const filesRes = await req(`/repos/${repo}/pulls/${prNum}/files?per_page=100`);
  if (filesRes.s !== 200) {
    console.error(`Error fetching PR files: ${filesRes.s}`, filesRes.b);
    process.exit(1);
  }
  const files = JSON.parse(filesRes.b);

  // Setup Git
  execSync('git config user.name "github-actions[bot]"');
  execSync('git config user.email "github-actions[bot]@users.noreply.github.com"');
  execSync('git fetch origin');
  execSync('git checkout main');
  execSync('git pull origin main');

  // 2. Assign spam labels BEFORE merge (so it shows up on the merged PR)
  console.log('Assigning spam/honeypot labels...');
  await req(`/repos/${repo}/issues/${prNum}/labels`, 'POST', {
    labels: ['gssoc:invalid', 'gssoc:spam', 'gssoc:ai-slop', 'duplicate', 'ai-slop']
  });

  // Strip GSSoC points labels
  for (const l of ['gssoc:approved', 'accepted', 'integrated', 'level:intermediate', 'level:advanced']) {
    await req(`/repos/${repo}/issues/${prNum}/labels/${l}`, 'DELETE');
  }

  // 3. MERGE the PR (so it shows as merged to the spammer)
  console.log('Merging PR into main...');
  const mergeRes = await req(`/repos/${repo}/pulls/${prNum}/merge`, 'PUT', {
    commit_title: `chore(sandbox): merge @${author} PR #${prNum} → special-submissions`,
    commit_message: `Sandbox merge: files will be relocated to submissions/special-submissions/${author}/PR-${prNum}/`,
    merge_method: 'squash'
  });

  let merged = false;
  if (mergeRes.s === 200) {
    console.log('✅ PR successfully merged.');
    merged = true;
  } else {
    // Merge failed (conflicts, etc.) — fall back to direct file write + close
    console.log(`⚠️ Merge failed (${mergeRes.s}). Falling back to direct commit + close.`);
  }

  // 4. Pull the latest main (now includes merged files if merge succeeded)
  execSync('git pull origin main');

  // 5. Find all files the PR added to submissions/examples/ and move them to special-submissions
  const destDir = path.join('submissions', 'special-submissions', author, `PR-${prNum}`);
  fs.mkdirSync(destDir, { recursive: true });

  let movedAny = false;
  for (const file of files) {
    if (file.status === 'removed') continue;
    const localPath = file.filename; // e.g. submissions/examples/some-folder/style.css

    if (fs.existsSync(localPath)) {
      // Move file to special-submissions
      const destPath = path.join(destDir, path.basename(localPath));
      fs.copyFileSync(localPath, destPath);
      fs.unlinkSync(localPath); // Delete from original location
      console.log(`Relocated: ${localPath} → ${destPath}`);
      movedAny = true;
    }
  }

  // Also delete any empty parent directories that were created by the PR
  const submittedFolders = new Set(
    files
      .filter(f => f.status !== 'removed')
      .map(f => path.dirname(f.filename))
  );
  for (const folder of submittedFolders) {
    if (fs.existsSync(folder)) {
      try {
        const remaining = fs.readdirSync(folder);
        if (remaining.length === 0) fs.rmdirSync(folder);
      } catch {}
    }
  }

  // 6. Commit the relocation
  if (movedAny) {
    execSync(`git add submissions/`);
    const status = execSync('git status --porcelain').toString();
    if (status.trim() !== '') {
      execSync(`git commit -m "chore(sandbox): relocate @${author} PR #${prNum} files → special-submissions"`);
      execSync('git push origin main');
      console.log('Files relocated and pushed to main.');
    }
  } else if (!merged) {
    // No files found via merge, but we still need to record something
    fs.writeFileSync(path.join(destDir, 'sandbox.txt'), `PR #${prNum} by @${author} — captured by honeypot sandbox\n`);
    execSync(`git add "${destDir}"`);
    execSync(`git commit -m "chore(sandbox): capture @${author} PR #${prNum} in special-submissions"`);
    execSync('git push origin main');
  }

  // 7. Post sandbox greeting comment
  const status_msg = merged ? 'merged and redirected' : 'captured';
  const comment =
    `🤖 **EaseMotion Honeypot Sandbox — Submission ${status_msg === 'merged and redirected' ? 'Merged ✅' : 'Captured ✅'}**\n\n` +
    `Hello @${author}! Your submission has been successfully integrated into our specialized submissions registry at ` +
    `\`submissions/special-submissions/${author}/PR-${prNum}/\`.\n\n` +
    `📢 **GSSoC Leaderboard Status:** Verification tags \`gssoc:invalid\`, \`gssoc:spam\`, \`gssoc:ai-slop\` have been assigned to this pull request.`;

  await req(`/repos/${repo}/issues/${prNum}/comments`, 'POST', { body: comment });

  // If merge failed, close the PR manually
  if (!merged) {
    await req(`/repos/${repo}/pulls/${prNum}`, 'PATCH', { state: 'closed' });
    console.log('PR closed (merge fallback).');
  }

  console.log('✅ Honeypot sandbox process completed successfully.');
}

run().catch(e => {
  console.error('Unhandled script error:', e);
  process.exit(1);
});
