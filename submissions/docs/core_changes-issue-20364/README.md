# Core Changes Proposal: Issue #20364

## Problem Description

Issue [#20364](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/20364) reports that `npm run release:check` fails because the repository URL validation in `scripts/validate-package.mjs` is case-sensitive.

**The bug** is located in `scripts/validate-package.mjs` on line 41:

```javascript
if (!manifest.repository?.url?.includes("SAPTARSHI-coder/EaseMotion-css"))
```

This checks for the exact mixed-case string `SAPTARSHI-coder/EaseMotion-css`.

**The actual value** in `package.json` line 37 is:

```json
"url": "git+https://github.com/saptarshi-coder/easemotion-css.git"
```

GitHub repository paths are case-insensitive, so both forms point to the same repo. However, `String.prototype.includes()` performs a case-sensitive comparison, so the validation fails with:

```
package.json validation failed: repository.url must point to SAPTARSHI-coder/EaseMotion-css
```

## Proposed Fix

Normalize both sides to lowercase before comparing on line 41 of `scripts/validate-package.mjs`.

**Change from:**

```javascript
if (!manifest.repository?.url?.includes("SAPTARSHI-coder/EaseMotion-css")) {
  fail("repository.url must point to SAPTARSHI-coder/EaseMotion-css");
}
```

**Change to:**

```javascript
const repoUrl = (manifest.repository?.url ?? "").toLowerCase();
const requiredRepo = "saptarshi-coder/easemotion-css";
if (!repoUrl.includes(requiredRepo)) {
  fail("repository.url must point to SAPTARSHI-coder/EaseMotion-css");
}
```

This ensures that any casing variant of the repository URL will pass validation.

## Why this is submitted here

Per the `CONTRIBUTING.md` policy and Core Framework Protection, this fix is proposed as a formal submission in the `submissions/` directory rather than modifying `scripts/validate-package.mjs` directly.

Fixes #20364
