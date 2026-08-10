# npm Package Validation CI Workflow — Proposal

## What does this do?
Proposes a GitHub Actions workflow that performs a dry-run `npm pack` before every release, catching packaging issues early and ensuring only intended files are included in the published npm package.

## How is it used?
This is CI infrastructure, not a runtime HTML/CSS feature — so there's no class usage. `demo.html` in this folder documents the proposed workflow YAML and mocks the CI output/artifact it would produce, since actual `.github/workflows/*.yml` files sit outside the `submissions/` contribution model (workflow files can access repo secrets, so they're typically restricted to maintainers).

Proposed workflow (`.github/workflows/package-validation.yml`):
```yaml
name: Package Validation
on:
  pull_request:
  push:
    branches: [main]
  push:
    tags:
      - 'v*'

jobs:
  validate-package:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm ci
      - name: Dry-run package
        run: npm pack --dry-run
      - name: Generate package tarball for inspection
        run: npm pack
      - name: Upload package artifact
        uses: actions/upload-artifact@v4
        with:
          name: npm-package-preview
          path: '*.tgz'
```

## Why is it useful?
Issue #63661 notes that a package may accidentally publish unnecessary files (e.g. `.github`, tests, screenshots) or miss important assets like the compiled CSS, README, or license. An automated validation step run via `npm pack --dry-run` prevents broken npm releases by:
1. Running automatically in CI on pull requests, pushes to `main`, and version tags.
2. Verifying the package is generated successfully and uploading its contents as a workflow artifact for inspection.
3. Failing the workflow if packaging errors occur, so bad releases never slip through.

This satisfies the issue's acceptance criteria: automatic CI validation, successful `npm pack --dry-run`, artifact upload, and failure on packaging issues.

Relates to #63661.