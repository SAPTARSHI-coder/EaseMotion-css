# Broken Link Checker CI Workflow — Proposal

## What does this do?
Proposes a scheduled GitHub Actions workflow that crawls the live docs site (`https://saptarshi-coder.github.io/EaseMotion-css/`) using [lychee](https://github.com/lycheeverse/lychee), a fast Rust-based link checker, and automatically opens a GitHub Issue if any internal or external link returns a broken status.

## How is it used?
This is not a runtime HTML/CSS feature — it's CI infrastructure, so there's no class usage. Instead, `demo.html` in this folder documents the proposed workflow YAML and what the auto-filed issue would look like, since actual `.github/workflows/*.yml` files are outside the `submissions/` contribution model and need direct maintainer setup (workflow files can access repo secrets, so they're typically restricted to maintainers for security reasons).

Proposed workflow (`.github/workflows/broken-link-checker.yml`):
```yaml
name: Broken Link Checker
on:
  schedule:
    - cron: "0 6 * * 1"  # weekly, Monday 6am UTC
  workflow_dispatch:

jobs:
  lychee:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Link Checker
        id: lychee
        uses: lycheeverse/lychee-action@v1
        with:
          args: --verbose --no-progress 'https://saptarshi-coder.github.io/EaseMotion-css/'
          fail: false
      - name: Create Issue on broken links
        if: steps.lychee.outputs.exit_code != 0
        uses: peter-evans/create-issue-from-file@v5
        with:
          title: "🔗 Broken links found in docs site"
          content-filepath: ./lychee/out.md
          labels: bug, documentation, automated
```

## Why is it useful?
The docs site links out to the Discord server, the GitHub repo, and internally between the Buttons/Cards/Animations/Layout sections seen on the demo page — any of these can silently break as the site or Discord invite changes. A weekly automated check catches this proactively instead of relying on a user reporting it. This satisfies issue #63447's acceptance criteria: a scheduled crawl using lychee, and automatic issue creation on broken-link detection.

Relates to #63447.