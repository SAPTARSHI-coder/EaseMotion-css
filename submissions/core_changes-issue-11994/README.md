# Submission Validator: Reject top-level docs, README, LICENSE, package.json, and bundle files

## What does this fix?

The PR submission validator at `.github/workflows/submission-validator.yml` has a whitelist that exempts `README.md`, `LICENSE`, `package.json`, `easemotion.css`, and `easemotion.min.css` from the "Core Framework Protection" check. This allows contributor PRs to modify these top-level files without triggering a validation failure, which contradicts the documented submission-only policy.

## Root Cause

In the validator script (lines 127–133), the following condition skips the core-files check for five top-level files:

```javascript
if (
  filename !== 'README.md' &&
  filename !== 'LICENSE' &&
  filename !== 'package.json' &&
  filename !== 'easemotion.css' &&
  filename !== 'easemotion.min.css'
) {
  coreFiles.push(filename);
}
```

This means PRs that modify `README.md`, `LICENSE`, `package.json`, `easemotion.css`, or `easemotion.min.css` at the repository root are **not** flagged as core framework violations.

## Proposed Fix

Remove the whitelist so that **every** file outside `submissions/` is treated as a core framework file by default. For maintainer-led changes, the `main` branch or privileged workflows can bypass this check — but for contributor PRs (`pull_request_target`), the validator should reject any non-submission change.

### Modified code (in `.github/workflows/submission-validator.yml`)

Replace lines 127–133 with:

```javascript
} else {
  // ALL files outside submissions/ are treated as core files
  coreFiles.push(filename);
}
```

This tightens the validator to match the documented policy: contributors may only modify files inside `submissions/`.

## Alternative Approach Considered

An alternative would be to update CONTRIBUTING.md to document which non-submission files are explicitly allowed. However, this weakens the policy and creates confusion. **Option A** (removing the whitelist) is the recommended fix.

## Files Changed

| File | Change |
|------|--------|
| `.github/workflows/submission-validator.yml` | Remove 5-line whitelist on lines 127–133, making `coreFiles.push(filename)` unconditional for non-submission files |

Fixes #11994
