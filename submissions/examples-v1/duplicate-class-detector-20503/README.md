# Tooling: Duplicate Animation Class Detector (#20503)

This directory contains the requested DevOps scripting and an interactive UI visualization for the CSS Duplicate Class Detector.

As Node scripts meant to be included in a repository-level `scripts/` folder are currently restricted by the contribution guidelines (which block modifications to core framework and configuration files), this folder provides the script as a copy-paste template, accompanied by an EaseMotion-styled reporting mock.

---

## 🛠 Maintainer Setup Guide

To implement the duplicate class detector, create a file named `scripts/find-duplicates.js` in the repository root and copy the following script into it:

```javascript
// scripts/find-duplicates.js
const fs = require("fs");
const path = require("path");

console.log("🔍 Scanning CSS files in project...");

const getCssFiles = (dir, fileList = []) => {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== "node_modules" && file !== ".git") {
        getCssFiles(filePath, fileList);
      }
    } else if (filePath.endsWith(".css")) {
      fileList.push(filePath);
    }
  }
  return fileList;
};

const rootDir = path.join(__dirname, "..");
const cssFiles = getCssFiles(rootDir);
console.log(`Found ${cssFiles.length} CSS files to parse.\n`);

const keyframesMap = new Map();
const classesMap = new Map();
let hasDuplicates = false;

for (const file of cssFiles) {
  const content = fs.readFileSync(file, "utf8");
  const lines = content.split(/\r?\n/);

  lines.forEach((line, index) => {
    const relativePath = path.relative(rootDir, file).replace(/\\/g, "/");
    const lineNumber = index + 1;

    // 1. Detect @keyframes
    const kfMatch = line.match(/@keyframes\s+([a-zA-Z0-9_-]+)/);
    if (kfMatch) {
      const name = kfMatch[1];
      if (!keyframesMap.has(name)) keyframesMap.set(name, []);
      keyframesMap.get(name).push(`${relativePath} (Line ${lineNumber})`);
    }

    // 2. Detect .ease-* classes
    // Note: This simple regex catches class declarations. More robust parsing can be added if needed.
    const classMatch = line.match(/\.(ease-[a-zA-Z0-9_-]+)\s*\{/g);
    if (classMatch) {
      classMatch.forEach((match) => {
        const name = match.replace(/[\.\{\s]/g, "");
        if (!classesMap.has(name)) classesMap.set(name, []);
        classesMap.get(name).push(`${relativePath} (Line ${lineNumber})`);
      });
    }
  });
}

console.log("Checking for duplicate @keyframes...");
keyframesMap.forEach((locations, name) => {
  if (locations.length > 1) {
    console.error(`⚠️ DUPLICATE KEYFRAME DETECTED: '${name}'`);
    locations.forEach((loc) => console.error(`   - ${loc}`));
    hasDuplicates = true;
  }
});

console.log("\nChecking for duplicate .ease-* classes...");
let classesDuplicated = false;
classesMap.forEach((locations, name) => {
  if (locations.length > 1) {
    console.error(`⚠️ DUPLICATE CLASS DETECTED: '${name}'`);
    locations.forEach((loc) => console.error(`   - ${loc}`));
    hasDuplicates = true;
    classesDuplicated = true;
  }
});

if (!classesDuplicated) {
  console.log("✅ No duplicate classes found.");
}

if (hasDuplicates) {
  console.error(
    "\n💥 Error: Duplicate definitions found! Silent overrides may occur."
  );
  process.exit(1);
} else {
  console.log("\n✨ All checks passed! No duplicates found.");
  process.exit(0);
}
```

### Running the tool

You can run this manually via:

```bash
node scripts/find-duplicates.js
```

You can also integrate it into your GitHub Actions CI by adding it as a step before minification.

---

## 🎨 About the Demo HTML

To fulfill the `submissions/examples` template requirement, `demo.html` and `style.css` visualize a "Code Quality Inspector Dashboard" utilizing EaseMotion classes:

- `.ease-slide-up-stagger` for the analytical report panels.
- `.ease-fade-in-up` for smooth text and terminal output reveals.
- `.ease-pulse` for the live inspector indicator.

## 🔗 Related Issue

Closes Issue #20503
