# Submission Validator: Remove top-level file whitelist

## What does this fix?

The PR submission validator at `.github/workflows/submission-validator.yml` has a whitelist that exempts `README.md`, `LICENSE`, `package.json`, `easemotion.css`, and `easemotion.min.css` from the "Core Framework Protection" check. This allows contributor PRs to modify these top-level files without triggering a validation failure, which contradicts the documented submission-only policy.

## Root Cause

In the validator script (lines 160–166), the following condition skips the core-files check for five top-level files:

```javascript
} else {
  if (
    filename !== 'README.md' &&
    filename !== 'LICENSE' &&
    filename !== 'package.json' &&
    filename !== 'easemotion.css' &&
    filename !== 'easemotion.min.css'
  ) {
    coreFiles.push(filename);
  }
}
```

This means PRs that modify `README.md`, `LICENSE`, `package.json`, `easemotion.css`, or `easemotion.min.css` at the repository root are **not** flagged as core framework violations.

## Proposed Fix

Remove the whitelist so that **every** file outside `submissions/` is treated as a core framework file. Replace lines 160–168 with:

```javascript
} else {
  coreFiles.push(filename);
}
```

## Files to Change

| File | Change |
|------|--------|
| `.github/workflows/submission-validator.yml:160-168` | Remove the 5-line whitelist condition, making `coreFiles.push(filename)` unconditional for all non-submission files |

Fixes #11994
