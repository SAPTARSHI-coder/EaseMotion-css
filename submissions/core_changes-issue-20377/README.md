# Core Changes Proposal: Issue #20377

## Problem Description

Issue [#20377](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/20377) reports that `.github/workflows/test.yml` defines a full lint and validation job but its only trigger is `workflow_dispatch`, so it never runs automatically on pushes or pull requests.

**The bug** is in `.github/workflows/test.yml` on lines 3–4:

```yaml
on:
  workflow_dispatch:
```

The separate `ci.yml` workflow only checks changed HTML/CSS files and does not run the full suite (`npm run lint`, `npm run lint:duplicates`, `npm test`). This means changes can be merged without running the complete validation pipeline.

## Proposed Fix

Add `pull_request` and `push` triggers to `.github/workflows/test.yml`, scoped to the paths that affect the validation results (core CSS, components, scripts, tests, configs, and package manifests):

```yaml
on:
  push:
    branches: [ main ]
    paths:
      - 'core/**'
      - 'components/**'
      - 'easemotion/**'
      - 'scss/**'
      - 'scripts/**'
      - 'tests/**'
      - 'package.json'
      - 'package-lock.json'
      - 'stylelint.config.json'
      - '.github/workflows/test.yml'
  pull_request:
    branches: [ main ]
    paths:
      - 'core/**'
      - 'components/**'
      - 'easemotion/**'
      - 'scss/**'
      - 'scripts/**'
      - 'tests/**'
      - 'package.json'
      - 'package-lock.json'
      - 'stylelint.config.json'
      - '.github/workflows/test.yml'
  workflow_dispatch:
```

This ensures the full validation suite (Stylelint + duplicate linter + tests) runs automatically when relevant files change, while retaining manual dispatch.

## Why this is submitted here

Per the `CONTRIBUTING.md` policy and Core Framework Protection, this fix is proposed as a formal submission in the `submissions/` directory rather than modifying `.github/workflows/test.yml` directly.

## Files changed

| File | Change |
|------|--------|
| `.github/workflows/test.yml` | Add `push` and `pull_request` triggers with path filters |

Fixes #20377
