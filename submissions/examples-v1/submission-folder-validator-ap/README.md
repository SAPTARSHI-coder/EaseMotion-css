# Submission Folder Structure Validator CI Check

Welcome to the **Submission Folder Structure Validator CI Check** guide! This document details how to configure an automated quality gate script that inspects contribution directories to ensure submissions contain high-quality, complete documentation and demo code.

---

## 📋 Table of Contents
1. [Validator Criteria & Thresholds](#1-validator-criteria--thresholds)
2. [Node.js Validation Engine Script](#2-nodejs-validation-engine-script)
3. [GitHub Actions Integration Workflow](#3-github-actions-integration-workflow)
4. [Visual Test Workbench](#4-visual-test-workbench)

---

## 1. Validator Criteria & Thresholds

To pass the validator, submission folders under `submissions/examples/your-feature-name/` must satisfy:

* **README.md**:
  * Must be present in the directory.
  * Character length must be at least **50 characters** (excluding whitespaces).
* **demo.html**:
  * Must be present in the directory.
  * Must not be empty (size > 0 bytes).
* **style.css**:
  * Must be present in the directory.
  * Must not be empty (size > 0 bytes).

---

## 2. Node.js Validation Engine Script (`validate-submission.js`)

Save this file under `scripts/validate-submission.js`:

```javascript
const fs = require('fs');
const path = require('path');

function validateSubmission(dirPath) {
  const readmePath = path.join(dirPath, 'README.md');
  const demoPath = path.join(dirPath, 'demo.html');
  const stylePath = path.join(dirPath, 'style.css');

  let errors = [];

  // 1. Validate README.md
  if (!fs.existsSync(readmePath)) {
    errors.push("README.md is missing.");
  } else {
    const readmeContent = fs.readFileSync(readmePath, 'utf8').trim();
    if (readmeContent.length === 0) {
      errors.push("README.md is empty.");
    } else if (readmeContent.length < 50) {
      errors.push(`README.md is too short (${readmeContent.length}/50 chars required).`);
    }
  }

  // 2. Validate demo.html
  if (!fs.existsSync(demoPath)) {
    errors.push("demo.html is missing.");
  } else {
    const demoContent = fs.readFileSync(demoPath, 'utf8').trim();
    if (demoContent.length === 0) {
      errors.push("demo.html cannot be empty.");
    }
  }

  // 3. Validate style.css
  if (!fs.existsSync(stylePath)) {
    errors.push("style.css is missing.");
  } else {
    const styleContent = fs.readFileSync(stylePath, 'utf8').trim();
    if (styleContent.length === 0) {
      errors.push("style.css cannot be empty.");
    }
  }

  if (errors.length > 0) {
    console.error("Submission validation failed:");
    errors.forEach(err => console.error(` - ${err}`));
    process.exit(1);
  }

  console.log("All checklist matches. Submission folder validated.");
}
```

---

## 3. GitHub Actions Integration Workflow

This workflow runs on every pull request targeting `main`:

```yaml
name: Submission Validator

on:
  pull_request:
    paths:
      - 'submissions/examples/**'

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository files
        uses: actions/checkout@v3

      - name: Setup Node.js runtime
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Run Validator script
        run: |
          # Identify changed folders in submissions/examples/
          CHANGED_FOLDERS=$(git diff --name-only origin/main...HEAD | grep 'submissions/examples/' | cut -d/ -f1-3 | sort -u)
          for folder in $CHANGED_FOLDERS; do
            if [ -d "$folder" ]; then
              node scripts/validate-submission.js "$folder"
            fi
          done
```

---

## 4. Visual Test Workbench

The companion page (`demo.html`) simulates this setup:
* **Sliders & Checks**: Mock file states and sizes dynamically.
* **CLI Runner**: Displays output logs in real-time.
* **Status Checklist**: Visualizes which validation checks are passing or failing.
