# Broken Link Checker — CI workflow template

A drop-in GitHub Actions workflow that crawls the live docs site with
[lychee](https://github.com/lycheeverse/lychee) and auto-opens a tracking
issue when broken links are found. Resolves issue #63447.

## Why

The docs site links out to the Discord server, the GitHub repo, and internally
between the Buttons/Cards/Animations/Layout sections — any of these can silently
break as the site or Discord invite changes. A weekly automated check catches
dead links before a visitor reports them.

## Install

Copy `broken-link-checker.yml` into your repo's `.github/workflows/` directory:

```bash
mkdir -p .github/workflows
cp broken-link-checker.yml .github/workflows/
```

No other setup is required — the workflow uses public actions and the built-in
`GITHUB_TOKEN`, so no secrets need to be configured.

## What it does

- **Triggers:** weekly schedule (Monday 06:00 UTC) + manual `workflow_dispatch`.
- Runs `lycheeverse/lychee-action@v2` against `https://saptarshi-coder.github.io/EaseMotion-css/`.
- Accepts `100..=399,401,402,403,429` (skip soft rate-limits / auth walls); excludes mailto: links.
- Emits a Markdown report and uploads it as a workflow artifact (14-day retention).
- **On broken links found:** opens (or reuses via title search) a tracking issue labelled `bug,documentation,ci` with the full lychee report — subsequent runs update the same issue instead of spamming.
- **On clean run:** auto-closes the tracking issue with a link to the passing run.

## Permissions

Least-privilege: `contents: read`, `issues: write` (only to open/close the tracking issue).

## Concurrency

`broken-link-checker` group, `cancel-in-progress: false` so a long crawl isn't killed by a stray manual run.

## Files

- `broken-link-checker.yml` — the workflow template (copy to `.github/workflows/`).
- `README.md` — this documentation.
