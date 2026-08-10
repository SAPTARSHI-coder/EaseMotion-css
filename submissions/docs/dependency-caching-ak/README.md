# GitHub Actions Dependency Caching — Proposal

## What does this do?
Proposes adding npm dependency caching (via `actions/setup-node`'s built-in `cache: 'npm'` option, keyed to `package-lock.json`) to the GitHub Actions workflows that currently install dependencies from scratch on every run, reducing CI execution time and GitHub Actions minute usage.

## How is it used?
This is CI infrastructure, not a runtime HTML/CSS feature — so there's no class usage. `demo.html` in this folder documents the specific gaps found and the proposed diff for each affected workflow, since editing existing `.github/workflows/*.yml` files sits outside contributor-writable paths (workflow files can access repo secrets/permissions, so they're typically maintainer-only).

**Confirmed gaps** (checked via `grep -l "actions/setup-node" .github/workflows/*.yml | xargs grep -L "cache:"` plus manual review of `ci.yml`):
1. `.github/workflows/ci.yml` — the `lint` job's `setup-node` step has no caching (the `test` job in the same file already has `cache: 'npm'`, so this is an inconsistency, not a from-scratch gap).
2. `.github/workflows/release-minified-css.yml` — `setup-node` step has no caching at all.
3. `.github/workflows/honeypot-sandbox.yml` — `setup-node` step has no caching at all.

**Proposed change** (example for `ci.yml`'s lint job):
```diff
       - name: Setup Node.js
         if: steps.changed-files.outputs.any_changed == 'true'
         uses: actions/setup-node@v4
         with:
           node-version: 20
+          cache: 'npm'
```

The same one-line addition applies to `release-minified-css.yml` and `honeypot-sandbox.yml`'s respective `setup-node` steps.

## Why is it useful?
Issue #63638 notes that every workflow run currently installs dependencies from scratch, increasing build times and consuming unnecessary GitHub Actions minutes. `actions/setup-node`'s built-in `cache: 'npm'` option:
1. Generates cache keys from the dependency lockfile (`package-lock.json`) automatically — no extra `actions/cache` step needed.
2. Restores cached dependencies automatically on subsequent runs, and invalidates the cache whenever the lockfile changes.
3. Requires only a single added line per affected `setup-node` step, minimizing risk of breaking existing workflows.

This satisfies the issue's acceptance criteria: caching enabled for Node.js workflows, cache keys from the lockfile, automatic restoration, and no workflow changes beyond adding caching (so existing jobs continue passing).

Relates to #63638.