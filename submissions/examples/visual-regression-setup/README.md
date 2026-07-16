# Visual Regression Testing Setup

This submission fixes Issue #39535 by showing how to set up visual regression testing for EaseMotion submissions.  
It uses Playwright + pixelmatch to capture screenshots of demo components and compare them against a baseline.

## Steps

1. Install dependencies:
```bash
npm install --save-dev playwright pixelmatch jest
