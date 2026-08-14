# Tooling: CSS Variable Unused Detection Script (#20502)

This directory contains the requested DevOps scripting and an interactive UI visualization for the Dead CSS Variable Detector.

As Node scripts meant to be included in a repository-level `scripts/` folder are currently restricted by the contribution guidelines (which block modifications to core framework and configuration files), this folder provides the script as a copy-paste template, accompanied by an EaseMotion-styled reporting mock.

---

## 🛠 Maintainer Setup Guide

To implement the CSS variable detector, create a file named `scripts/find-unused-vars.js` in the repository root and copy the following script into it:

```javascript
// scripts/find-unused-vars.js
const fs = require('fs');
const path = require('path');

console.log('🔍 Scanning CSS files for custom property usage...\n');

// 1. Find and parse variables.css to get all declared --ease-* vars
const rootDir = path.join(__dirname, '..');
const variablesPath = path.join(rootDir, 'core', 'variables.css');

if (!fs.existsSync(variablesPath)) {
  console.error('❌ Could not find core/variables.css');
  process.exit(1);
}

const declaredVars = new Set();
const varRegex = /(--ease-[a-zA-Z0-9_-]+)\s*:/g;

const varsContent = fs.readFileSync(variablesPath, 'utf8');
let match;
while ((match = varRegex.exec(varsContent)) !== null) {
  declaredVars.add(match[1]);
}

console.log(`Detected ${declaredVars.size} variable declarations in core/variables.css.`);

// 2. Scan all CSS files for usage: var(--ease-*)
const usedVarsMap = new Map();

const getCssFiles = (dir, fileList = []) => {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        getCssFiles(filePath, fileList);
      }
    } else if (filePath.endsWith('.css') && file !== 'variables.css') {
      fileList.push(filePath);
    }
  }
  return fileList;
};

const cssFiles = getCssFiles(rootDir);
let usageCount = 0;

for (const file of cssFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const usageRegex = /var\s*\(\s*(--ease-[a-zA-Z0-9_-]+)/g;
  let usageMatch;
  
  while ((usageMatch = usageRegex.exec(content)) !== null) {
    const varName = usageMatch[1];
    usageCount++;
    if (!usedVarsMap.has(varName)) {
      usedVarsMap.set(varName, []);
    }
    const relativePath = path.relative(rootDir, file).replace(/\\/g, '/');
    usedVarsMap.get(varName).push(relativePath);
  }
}

console.log(`Found ${usageCount} var(--ease-*) usage instances across ${cssFiles.length} files.\n`);

// 3. Compare and Flag
let hasErrors = false;

// Flag declared but unused vars
const unusedVars = Array.from(declaredVars).filter(v => !usedVarsMap.has(v));
if (unusedVars.length > 0) {
  console.error('⚠️ UNUSED VARIABLES (Declared but never used):');
  unusedVars.forEach(v => console.error(`   - ${v}`));
  hasErrors = true;
}

// Flag used but undeclared vars
const undeclaredVars = Array.from(usedVarsMap.keys()).filter(v => !declaredVars.has(v));
if (undeclaredVars.length > 0) {
  console.error('\n⚠️ UNDECLARED VARIABLES (Used but missing in variables.css):');
  undeclaredVars.forEach(v => {
    console.error(`   - ${v} (found in ${usedVarsMap.get(v)[0]})`);
  });
  hasErrors = true;
}

if (hasErrors) {
  console.error('\n💥 Error: Variable inconsistencies found! Clean up variables.css.');
  process.exit(1);
} else {
  console.log('✨ All CSS variables are perfectly synced. No dead code found.');
  process.exit(0);
}
```

### Running the tool

You can run this manually via:
```bash
node scripts/find-unused-vars.js
```

You can also integrate it into your GitHub Actions CI by adding it as a linting step before PRs are merged.

---

## 🎨 About the Demo HTML

To fulfill the `submissions/examples` template requirement, `demo.html` and `style.css` visualize a "Dead CSS Variable Detector Dashboard" utilizing EaseMotion classes:
* `.ease-slide-up-stagger` for the analytical report panels.
* `.ease-fade-in-up` for smooth text and terminal output reveals.
* `.ease-pulse` for the live indicator.

## 🔗 Related Issue
Closes Issue #20502
