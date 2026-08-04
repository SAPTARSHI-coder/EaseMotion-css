# Automated CHANGELOG.md Proposal & Guide

## Description
This documentation package serves as an official proposal and implementation guide for Issue #56793. Because the GSSoC bot restricts contributors from directly submitting Pull Requests that modify root repository files (like `package.json` and `.github/`), this proposal is submitted via the `submissions/docs/` directory.

## Implementation Guide for Core Maintainers

If this proposal is accepted, a repository maintainer can simply run the following steps to fully automate the generation of `CHANGELOG.md` based on Conventional Commits.

### 1. Install Dependencies
Run this in the repository root:
```bash
npm install --save-dev husky @commitlint/cli @commitlint/config-conventional standard-version
```

### 2. Configure Commitlint
Create a `commitlint.config.js` in the root:
```javascript
module.exports = { extends: ['@commitlint/config-conventional'] };
```

### 3. Configure Husky
Initialize Husky to lint commits before they happen:
```bash
npx husky install
npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"
```

### 4. Update package.json
Add the following to your `package.json` scripts:
```json
"scripts": {
  "release": "standard-version"
}
```

### Usage
Once implemented, simply running `npm run release` will automatically:
1. Bump the version in `package.json` based on the commits (major/minor/patch).
2. Generate the `CHANGELOG.md` exactly as requested.
3. Commit the changes and tag the release.

## Files Provided
- `demo.html` - A visual presentation of this proposal using EaseMotion components.
- `style.css` - Custom styling for the proposal documentation.
- `README.md` - This guide.
