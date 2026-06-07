import { request } from 'node:https';

function getJson(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Node.js-PR-Checker',
        'Accept': 'application/vnd.github.v3+json'
      }
    };
    
    const req = request(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(new Error(`Failed to parse JSON: ${e.message}`));
          }
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    });
    
    req.on('error', (err) => reject(err));
    req.end();
  });
}

async function checkPRs() {
  try {
    console.log('Fetching open pull requests...');
    const prs = await getJson('https://api.github.com/repos/SAPTARSHI-coder/EaseMotion-css/pulls?state=open');
    console.log(`Found ${prs.length} open pull requests. Checking files for each...\n`);
    
    for (const pr of prs) {
      const prNumber = pr.number;
      const title = pr.title;
      const author = pr.user.login;
      const filesUrl = `https://api.github.com/repos/SAPTARSHI-coder/EaseMotion-css/pulls/${prNumber}/files`;
      
      let files = [];
      try {
        files = await getJson(filesUrl);
      } catch (err) {
        console.error(`Error fetching files for PR #${prNumber}: ${err.message}`);
        continue;
      }
      
      // Analyze files in PR
      const filesChanged = files.map(f => f.filename);
      
      // Group files by directory
      const folders = {};
      for (const filename of filesChanged) {
        if (filename.startsWith('submissions/')) {
          const parts = filename.split('/');
          if (parts.length >= 2) {
            let folderPath = '';
            if (parts[1] === 'examples' && parts.length >= 3) {
              folderPath = `submissions/examples/${parts[2]}`;
            } else if (parts[1] !== 'examples') {
              folderPath = `submissions/${parts[1]}`;
            }
            if (folderPath) {
              if (!folders[folderPath]) folders[folderPath] = [];
              folders[folderPath].push(parts[parts.length - 1]);
            }
          }
        }
      }
      
      console.log(`--------------------------------------------------------------------------------`);
      console.log(`PR #${prNumber}: "${title}" by @${author}`);
      console.log(`Link: ${pr.html_url}`);
      
      const folderKeys = Object.keys(folders);
      if (folderKeys.length === 0) {
        console.log(`⚠️  No changes found under submissions/ directory.`);
        continue;
      }
      
      for (const folder of folderKeys) {
        const fileList = folders[folder];
        console.log(`  Folder: ${folder}`);
        console.log(`    Files modified: ${fileList.join(', ')}`);
        
        // Check 3 required files
        const required = ['demo.html', 'style.css', 'README.md'];
        const missing = [];
        const invalidCasing = [];
        
        for (const req of required) {
          const matched = fileList.find(f => f.toLowerCase() === req.toLowerCase());
          if (!matched) {
            missing.push(req);
          } else if (matched !== req) {
            invalidCasing.push({ expected: req, actual: matched });
          }
        }
        
        if (missing.length > 0 || invalidCasing.length > 0) {
          console.log(`    ❌ INVALID SUBMISSION:`);
          if (missing.length > 0) {
            console.log(`       - Missing required files: ${missing.join(', ')}`);
          }
          if (invalidCasing.length > 0) {
            for (const c of invalidCasing) {
              console.log(`       - Incorrect casing: expected "${c.expected}", found "${c.actual}"`);
            }
          }
        } else {
          console.log(`    ✅ VALID SUBMISSION (all 3 files present with correct casing)`);
        }
      }
    }
  } catch (err) {
    console.error(`Global error: ${err.message}`);
  }
}

checkPRs();
