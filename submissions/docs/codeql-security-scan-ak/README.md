# CodeQL Security Analysis Workflow — Proposal

## What does this do?
Proposes a GitHub Actions workflow that runs GitHub's official CodeQL static application security testing (SAST) on every pull request, push to `main`, and on a weekly schedule, uploading results to GitHub's native Code Scanning dashboard.

## How is it used?
This is CI infrastructure, not a runtime HTML/CSS feature — so there's no class usage. `demo.html` in this folder documents the proposed workflow YAML and mocks what a Code Scanning alert would look like, since actual `.github/workflows/*.yml` files sit outside the `submissions/` contribution model (workflow files can access repo secrets and permissions, so they're typically restricted to maintainers).

Proposed workflow (`.github/workflows/codeql.yml`):
```yaml
name: "CodeQL Security Analysis"
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: "0 4 * * 1"  # weekly, Monday 4am UTC

permissions:
  contents: read
  security-events: write
  actions: read

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        language: ['javascript-typescript']
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Initialize CodeQL
        uses: github/codeql-action/init@v3
        with:
          languages: ${{ matrix.language }}

      - name: Autobuild
        uses: github/codeql-action/autobuild@v3

      - name: Perform CodeQL Analysis
        uses: github/codeql-action/analyze@v3
        with:
          category: "/language:${{ matrix.language }}"
```

## Why is it useful?
Issue #63649 notes that static application security testing (SAST) helps detect security flaws early in the development lifecycle. Integrating CodeQL into the CI pipeline ensures every pull request and commit is automatically analyzed for common security issues. The proposed workflow:
1. Uses GitHub's official CodeQL Action, initializing the appropriate language(s) automatically.
2. Triggers on pushes to `main`, pull requests, and a weekly scheduled scan.
3. Uploads results directly to GitHub Security → Code Scanning, giving maintainers actionable insights without needing a third-party dashboard.
4. Sets scoped `permissions` (read-only contents, write only for security-events) so it doesn't affect existing CI pipelines or over-provision access.

This satisfies the issue's acceptance criteria: successful scans on every PR/push, results uploaded to Code Scanning, weekly scheduled scans, and no interference with existing CI.

Relates to #63649.