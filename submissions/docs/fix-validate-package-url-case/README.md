# Fix: validate-package.mjs URL Case-Sensitivity

## 1. What does this do?
It fixes a critical bug where `npm run release:check` fails immediately on fresh clones due to a case-sensitive check on the GitHub repository URL in `package.json`.

## 2. How is it used?
Since contributors cannot directly edit `scripts/validate-package.mjs` according to the repository's strict submission rules, this folder acts as a vehicle to submit the fix for maintainer review. 

**Proposed Code Change to `scripts/validate-package.mjs` (line 41):**

Change this:
```javascript
if (!manifest.repository?.url?.includes("SAPTARSHI-coder/EaseMotion-css")) {
```

To this:
```javascript
if (!manifest.repository?.url?.toLowerCase().includes("saptarshi-coder/easemotion-css")) {
```

## 3. Why is it useful?
It allows contributors to run `npm run validate:release` locally to check their CSS submissions before creating Pull Requests, which is currently broken on all clones.
