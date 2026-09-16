# AST CSS Duplicate Checker Proposal & Guide

## Description
This documentation package serves as an official proposal and implementation guide for Issue #56794. Because the GSSoC bot restricts contributors from directly modifying files in the root `scripts/` directory, this proposal is submitted via the `submissions/docs/` directory.

## Implementation Guide for Core Maintainers

If this proposal is accepted, a repository maintainer can upgrade the existing duplicate checker to use a robust AST parser by following these two steps.

### 1. Install PostCSS
Run this in the repository root to install the AST parser:
```bash
npm install --save-dev postcss
```

### 2. Replace `scripts/check-duplicates.mjs`
Copy and paste this code to entirely replace the current contents of `scripts/check-duplicates.mjs`. This script parses the CSS into an AST to accurately detect duplicate selectors without failing on whitespace or media query differences.

```javascript
import fs from 'fs';
import path from 'path';
import postcss from 'postcss';

const CSS_FILE = path.resolve('easemotion.css');

if (!fs.existsSync(CSS_FILE)) {
  console.error('❌ Error: easemotion.css not found. Run build first.');
  process.exit(1);
}

const css = fs.readFileSync(CSS_FILE, 'utf8');

postcss([]).process(css, { from: CSS_FILE }).then(result => {
  const seenSelectors = new Set();
  let duplicates = 0;

  result.root.walkRules(rule => {
    // Ignore keyframes as they can have identical percentage selectors
    if (rule.parent && rule.parent.type === 'atrule' && rule.parent.name === 'keyframes') return;

    rule.selectors.forEach(selector => {
      const scope = rule.parent && rule.parent.type === 'atrule' 
        ? `@${rule.parent.name} ${rule.parent.params}` 
        : 'global';
      
      const uniqueId = `${scope} -> ${selector}`;

      if (seenSelectors.has(uniqueId)) {
        console.warn(`⚠️ Duplicate Selector Found: '${selector}' inside ${scope}`);
        duplicates++;
      } else {
        seenSelectors.add(uniqueId);
      }
    });
  });

  if (duplicates > 0) {
    console.error(`\n❌ Failed: Found ${duplicates} duplicate selectors in the AST.`);
    process.exit(1);
  } else {
    console.log('✅ Success: No duplicate selectors found.');
    process.exit(0);
  }
});
```

## Files Provided
- `demo.html` - A visual presentation of this proposal using EaseMotion components.
- `style.css` - Custom styling for the proposal documentation.
- `README.md` - This guide.
