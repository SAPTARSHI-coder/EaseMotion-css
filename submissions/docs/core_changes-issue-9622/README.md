# Core Changes Proposal: Issue 9622

## Problem Description
Issue [#9622](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/9622) reports that the CSS bundler fails to parse `@import` statements when they include CSS cascade layers or media queries after the URL.

The bug is located in `scripts/build-minified-css.mjs` on line 9:
```javascript
const localImportPattern = /@import\s+url\((["']?)(.*?)\1\)\s*;/gi;
```
This regex strictly expects a semicolon immediately after the closing parenthesis (with optional whitespace). If a layer or media query is added, such as `@import url("theme.css") layer(base);`, the regex fails to match, and the bundler throws an error or fails to inline the file.

## Why this is submitted here
PR #9646 originally attempted to fix this by modifying `scripts/build-minified-css.mjs` directly. However, due to the repository's strict Core Framework Protection policy and current Contribution Freeze on core files, the PR was closed automatically.

Following `CONTRIBUTING.md`, this fix is proposed as a formal submission in the `submissions/` directory.

## Proposed Fix
Update the `localImportPattern` regex in `scripts/build-minified-css.mjs` to allow any characters up to the semicolon.

**Change from:**
```javascript
const localImportPattern = /@import\s+url\((["']?)(.*?)\1\)\s*;/gi;
```

**Change to:**
```javascript
const localImportPattern = /@import\s+url\((["']?)(.*?)\1\)[^;]*;/gi;
```

This ensures that statements like `@import url("...") layer(base);` are correctly matched and processed.
