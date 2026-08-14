# CSS Complexity Metrics Proposal & Guide

## Description
This documentation package serves as an official architectural proposal and implementation guide for Issue #56797. Because the GSSoC bot restricts contributors from modifying root directories and core files, this structural proposal is submitted via the `submissions/docs/` directory.

## Implementation Guide for Core Maintainers

To dramatically improve Render Performance and prevent "specificity wars", EaseMotion should track CSS complexity and fail the CI if a PR introduces overly specific selectors.

### 1. Install Wallace CSS Analyzer
Run this in the repository root to install the analyzer:
```bash
npm install --save-dev @projectwallace/css-analyzer
```

### 2. Create the Benchmark Script
Create a new file `benchmarks/complexity.mjs` and paste the following code:

```javascript
import fs from 'fs';
import path from 'path';
import { analyze } from '@projectwallace/css-analyzer';

const CSS_FILE = path.resolve('easemotion.css');
const MAX_ALLOWED_SPECIFICITY = 30; // 0,3,0 limit

if (!fs.existsSync(CSS_FILE)) {
  console.error('❌ Error: easemotion.css not found. Run build first.');
  process.exit(1);
}

const css = fs.readFileSync(CSS_FILE, 'utf8');

analyze(css).then(stats => {
  console.log(`📊 CSS Complexity Metrics:`);
  console.log(`- Selectors: ${stats.selectors.total}`);
  console.log(`- Average Specificity: ${stats.selectors.specificity.average.join(',')}`);
  console.log(`- Maximum Specificity: ${stats.selectors.specificity.max.join(',')}`);
  console.log(`- Declarations (Total): ${stats.declarations.total}`);
  
  // Calculate a rough integer score from specificity array [id, class, tag]
  const maxSpecScore = 
    (stats.selectors.specificity.max[0] * 100) + 
    (stats.selectors.specificity.max[1] * 10) + 
    stats.selectors.specificity.max[2];

  if (maxSpecScore > MAX_ALLOWED_SPECIFICITY) {
    console.error(`\n❌ Failed: Maximum specificity (${stats.selectors.specificity.max.join(',')}) exceeds the allowed limit.`);
    process.exit(1);
  } else {
    console.log(`\n✅ Success: Specificity is well within allowed limits.`);
    process.exit(0);
  }
});
```

### 3. Integrate with CI
Add the script to your `package.json`:
```json
"scripts": {
  "benchmark:complexity": "node benchmarks/complexity.mjs"
}
```
Run `npm run benchmark:complexity` in your GitHub Actions workflow after the CSS build step.

## Files Provided
- `demo.html` - A visual presentation of this proposal.
- `style.css` - Custom styling for the proposal documentation.
- `README.md` - This guide.
