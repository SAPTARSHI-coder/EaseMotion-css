# Automated Bundle Size Budgeting & Brotli Compression CI/CD (#57289)

> **Track:** Core & Docs Showcase (`submissions/docs/57289-bundle-size-budget-devops/`)  
> **Issue ID:** #57289  
> **Author:** DevOps / Performance Maintainer  

---

## ⚡ Overview & Motivation

As EaseMotion CSS grows with new community keyframes and utility classes, tracking total bundle size becomes critical. Unmonitored expansion risks heavy mobile performance degradation.

This documentation submission details the implementation of an automated **size-limit** budget checking pipeline with **Brotli compression** analysis.

---

## 📊 Performance Budget Specifications

* **Target Asset:** `easemotion.min.css`
* **Compression Algorithm:** Brotli (`.brotli = true`)
* **Maximum Budget Threshold:** `18 KB` (Current baseline minified size is **17.65 KB Brotli**, providing ~0.35 KB safety headroom).
* **CI Action:** Fails with exit code `1` on PRs exceeding 18 KB and posts size delta metrics directly as a PR comment.

---

## 🏗️ Maintainer Integration Specs

When integrating this curated showcase into core:

### 1. `package.json` Additions

```json
{
  "scripts": {
    "size": "size-limit"
  },
  "devDependencies": {
    "@size-limit/file": "^11.1.6",
    "size-limit": "^11.1.6"
  }
}
```

### 2. Root `.size-limit.json` Configuration

```json
[
  {
    "name": "EaseMotion CSS Core Library",
    "path": "easemotion.min.css",
    "brotli": true,
    "limit": "18 KB"
  }
]
```

### 3. GitHub Action Workflow (`.github/workflows/bundle-size.yml`)

```yaml
name: Bundle Size Budget Check

on:
  pull_request:
    branches:
      - main
    paths:
      - '**/*.css'
      - 'core/**'
      - 'components/**'
      - 'easemotion/**'
      - 'scripts/**'
      - 'package.json'
      - '.size-limit.json'
      - '.github/workflows/bundle-size.yml'

permissions:
  contents: read
  pull-requests: write

jobs:
  size:
    name: Check CSS Bundle Size Limit (Brotli)
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci || npm install

      - name: Build CSS Bundle
        run: npm run build

      - name: Check Bundle Size & Post PR Comment
        uses: andresz1/size-limit-action@v1
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
```

---

## 🧪 Local Verification Command

```bash
npm install
npm run build
npx size-limit
```

Calculated Output:
- Raw Minified Size: **178.27 KB**
- Brotli Compressed Size: **17.65 KB** (Passes 18 KB budget check).
