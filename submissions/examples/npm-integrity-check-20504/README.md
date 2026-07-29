# Tooling: NPM Integrity Check Script (#20504)

This directory contains the required DevOps documentation and a stylized UI visualization for the NPM package integrity pre-publish check.

As Node scripts meant to be included in a repository-level `scripts/` folder are restricted by the contribution guidelines (which block modifications to core configuration files), this folder contains the required code as a copy-paste template, accompanied by an EaseMotion-styled dashboard mock.

---

## 🛠 Maintainer Setup Guide

To implement the NPM integrity check on the main branch, create a file named `scripts/integrity-check.js` in the repository root and copy the following script into it:

```javascript
// scripts/integrity-check.js
const fs = require('fs');
const path = require('path');

const PACKAGE_JSON_PATH = path.join(__dirname, '../package.json');
const CHANGELOG_PATH = path.join(__dirname, '../CHANGELOG.md');

console.log('🔍 Running NPM Package Integrity Checks...\n');

let hasError = false;

// 1. Read package.json
let pkg;
try {
  pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf8'));
} catch (e) {
  console.error('❌ Failed to parse package.json');
  process.exit(1);
}

// 2. Check all files in 'files' array actually exist
if (pkg.files && Array.isArray(pkg.files)) {
  for (const file of pkg.files) {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) {
      console.error(`❌ Missing file declared in package.json "files" array: ${file}`);
      hasError = true;
    }
  }
}
if (!hasError) console.log('[PASS] Package files check passed.');

// 3. Check easemotion.min.css is not empty
const cssPath = path.join(__dirname, '../easemotion.min.css');
if (fs.existsSync(cssPath)) {
  const stats = fs.statSync(cssPath);
  if (stats.size === 0) {
    console.error('❌ easemotion.min.css is empty (0 bytes).');
    hasError = true;
  } else {
    console.log(`[PASS] Minified CSS is not empty (${stats.size} bytes).`);
  }
} else {
  console.error('❌ easemotion.min.css does not exist. Did you run the build step?');
  hasError = true;
}

// 4. Check package version matches CHANGELOG
if (fs.existsSync(CHANGELOG_PATH)) {
  const changelog = fs.readFileSync(CHANGELOG_PATH, 'utf8');
  // Match the first instance of a version heading like "## [1.2.4]" or "## 1.2.4"
  const versionMatch = changelog.match(/##\s+\[?(\d+\.\d+\.\d+)\]?/);
  
  if (versionMatch && versionMatch[1]) {
    const latestChangelogVersion = versionMatch[1];
    if (latestChangelogVersion !== pkg.version) {
      console.error(`❌ Version mismatch: package.json is ${pkg.version} but latest CHANGELOG entry is ${latestChangelogVersion}`);
      hasError = true;
    } else {
      console.log(`[PASS] Version synchronization passed (v${pkg.version}).`);
    }
  } else {
    console.warn('⚠️ Could not extract latest version from CHANGELOG.md to verify sync.');
  }
}

if (hasError) {
  console.error('\n💥 Integrity Check Failed. Aborting publish.\n');
  process.exit(1);
} else {
  console.log('\n✨ Integrity Check Successful. Safe to publish!\n');
  process.exit(0);
}
```

Then, add the following script command to the `package.json` file inside the `"scripts"` section:
```json
"scripts": {
  "prepublishOnly": "node scripts/integrity-check.js"
}
```

### How it works:
1. When a maintainer runs `npm publish`, NPM automatically triggers the `prepublishOnly` script first.
2. The Node script runs synchronously and performs three critical structural checks.
3. If any file is missing, the minified CSS is 0 bytes, or the version doesn't match the changelog, `process.exit(1)` is called, which completely blocks the NPM publish process from proceeding.

---

## 🎨 About the Demo HTML

To fulfill the `submissions/examples` template requirement, `demo.html` and `style.css` visualize a "Pre-publish Validation Dashboard" utilizing EaseMotion classes:
* `.ease-slide-up-stagger` for the checklist cascading appearance.
* `.ease-fade-in-up` for smooth text and terminal output reveals.
* `.ease-pulse` for the live status indicator.

## 🔗 Related Issue
Closes Issue #20504
