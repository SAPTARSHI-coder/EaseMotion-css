# Bundle Size CI Check + Badge

## What does this do?
This proposes adding a GitHub Actions workflow using the `size-limit` tool that measures the gzipped size of the published CSS bundle on every PR, fails the check if it exceeds a 40KB budget, and comments the size delta directly on the PR. It also includes adding a size badge to the README.

## How is it used?
```html
<img src="https://img.shields.io/badge/bundle%20size-18.4kb%20gzip-brightgreen" alt="Bundle Size">
```
It runs automatically on PRs via GitHub Actions.

## Why is it useful?
One of the project's core promises ("0 Dependencies," "Zero Config") is being lightweight. As more components get merged from `submissions/` into `components/`, there's currently no automated guardrail stopping the bundle from silently bloating. This makes "staying lightweight" an enforced CI rule instead of just a stated philosophy.
