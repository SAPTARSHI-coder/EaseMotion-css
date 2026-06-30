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

function fetchRaw(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'Authorization': `token ${token}`, 'User-Agent': 'NodeJS' } }, res => {
      let data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => resolve(Buffer.concat(data)));
    }).on('error', reject);
  });
}

async function run() {
  console.log(`=== RUNNING HONEYPOT SANDBOX RELOCATION FOR PR #${prNum} by @${author} ===`);

  // 1. Fetch files list for the PR
  const filesRes = await req(`/repos/${repo}/pulls/${prNum}/files?per_page=100`);
  if (filesRes.s !== 200) {
    console.error(`Error fetching PR files: ${filesRes.s}`, filesRes.b);
    process.exit(1);
  }
  const files = JSON.parse(filesRes.b);

  const destDir = path.join('submissions', 'special-submissions', author, `PR-${prNum}`);
  fs.mkdirSync(destDir, { recursive: true });

  console.log(`Relocating ${files.length} files to ${destDir}...`);

  for (const file of files) {
    if (file.status === 'removed') continue;
    console.log(`Downloading: ${file.filename}`);
    
    // Download content from the raw_url
    try {
      const content = await fetchRaw(file.raw_url);
      const destPath = path.join(destDir, path.basename(file.filename));
      fs.writeFileSync(destPath, content);
      console.log(`  Saved to ${destPath}`);
    } catch (e) {
      console.error(`  Error downloading ${file.filename}: ${e.message}`);
    }
  }

  // 2. Setup Git Config
  execSync('git config user.name "github-actions[bot]"');
  execSync('git config user.email "github-actions[bot]@users.noreply.github.com"');

  // 3. Commit and Push directly to main
  console.log('Staging files...');
  execSync(`git add "${destDir}"`);
  
  const status = execSync('git status --porcelain').toString();
  if (status.trim() === '') {
    console.log('No files to commit. Sandbox directory already matches.');
  } else {
    console.log('Committing sandbox files...');
    execSync(`git commit -m "chore(sandbox): relocate @${author} PR #${prNum} submissions to special-submissions"`);
    console.log('Pushing to main...');
    execSync('git push origin main');
  }

  // 4. Update Labels (gssoc:invalid, gssoc:spam, gssoc:ai-slop, duplicate, ai-slop)
  console.log('Assigning spam/honeypot labels...');
  await req(`/repos/${repo}/issues/${prNum}/labels`, 'POST', {
    labels: ['gssoc:invalid', 'gssoc:spam', 'gssoc:ai-slop', 'duplicate', 'ai-slop']
  });

  // Strip GSSoC points labels
  for (const l of ['gssoc:approved', 'accepted', 'integrated', 'level:intermediate', 'level:advanced']) {
    await req(`/repos/${repo}/issues/${prNum}/labels/${l}`, 'DELETE');
  }

  // 5. Greet the spammer with a custom sandbox bot message and close the PR
  console.log('Adding comment and closing PR...');
  const comment = `🤖 **EaseMotion Honeypot Sandbox Active** 👋\n\n` +
    `Hello @${author}! Your submission has been captured and successfully integrated into our specialized submissions registry under \`submissions/special-submissions/${author}/PR-${prNum}\`.\n\n` +
    `📢 **GSSoC Leaderboard Status:** All required verification tags (\`gssoc:invalid\`, \`gssoc:spam\`, \`gssoc:ai-slop\`) have been assigned to this pull request. Thank you for participating!`;

  await req(`/repos/${repo}/issues/${prNum}/comments`, 'POST', { body: comment });
  await req(`/repos/${repo}/pulls/${prNum}`, 'PATCH', { state: 'closed' });

  console.log('✅ Honeypot sandbox process completed successfully.');
}

run().catch(e => {
  console.error('Unhandled script error:', e);
  process.exit(1);
});
