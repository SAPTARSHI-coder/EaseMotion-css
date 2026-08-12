# Core Changes Proposal: Issue #20378

## Problem Description

Issue [#20378](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/20378) reports that the `CI` workflow path filters in `.github/workflows/ci.yml` miss JavaScript helpers, tests, and package manifest changes.

**Current path filters** (push and pull_request):

```yaml
paths:
  - '**/*.css'
  - '**/*.html'
  - 'scripts/**'
  - '.github/workflows/ci.yml'
  - 'stylelint.config.json'
  - 'htmlhint.config.json'
```

**Missing paths that can affect runtime behavior or validation:**

- `**/*.js` — JavaScript helpers (`core/modal.js`, `core/tabs.js`, `core/reveal.js`, etc.)
- `tests/**` — Smoke tests and test utilities
- `package.json` — Dependency changes affect install and test behavior
- `package-lock.json` — Lockfile reflects actual dependency resolutions
- `vitest.config.js` — Test runner configuration

Without these, a PR changing only `core/modal.js` or `tests/smoke.test.js` receives no automated validation at all.

## Proposed Fix

Add the missing paths to both `push` and `pull_request` triggers in `.github/workflows/ci.yml`:

```yaml
on:
  push:
    branches: [ main ]
    paths:
      - '**/*.css'
      - '**/*.html'
      - '**/*.js'
      - 'scripts/**'
      - 'tests/**'
      - 'package.json'
      - 'package-lock.json'
      - 'vitest.config.js'
      - '.github/workflows/ci.yml'
      - 'stylelint.config.json'
      - 'htmlhint.config.json'
  pull_request:
    branches: [ main ]
    paths:
      - '**/*.css'
      - '**/*.html'
      - '**/*.js'
      - 'scripts/**'
      - 'tests/**'
      - 'package.json'
      - 'package-lock.json'
      - 'vitest.config.js'
      - '.github/workflows/ci.yml'
      - 'stylelint.config.json'
      - 'htmlhint.config.json'
```

## Why this is submitted here

Per the `CONTRIBUTING.md` policy and Core Framework Protection, this fix is proposed as a formal submission in the `submissions/` directory rather than modifying `.github/workflows/ci.yml` directly.

## Files changed

| File | Change |
|------|--------|
| `.github/workflows/ci.yml` | Add `**/*.js`, `tests/**`, `package.json`, `package-lock.json`, `vitest.config.js` to path filters |

Fixes #20378
