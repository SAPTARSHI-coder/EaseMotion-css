# Minified CSS — Production Usage Demo

## Context

This submission addresses issue **#38163 — "No minified/production CSS build"**.

During review, it was found that the repository **already ships a production
minified build** (`easemotion.min.css` at the project root), built and
maintained by the project's own tooling (see recent commits such as
`chore: auto-build bundle and resolve folder naming conflicts` and
`fix(docs): copy minified CSS directly to docs folder...`). There is also an
open PR (#38181) already targeting the build-script side of this issue.

Because the repository is currently under a **temporary contribution
freeze** on root files, build scripts, and core framework files, this
submission does **not** modify:

- `easemotion.css`
- `easemotion.min.css`
- anything inside `scripts/`
- anything inside `core/` or `components/`

Instead, this submission closes the *practical* gap behind the original
issue — many users didn't know the minified build already existed or how
to correctly wire it into a production page — by providing a self-contained,
correct usage example.

## What's included

| File | Purpose |
|---|---|
| `demo.html` | Minimal page that links the existing `easemotion.min.css` (via jsDelivr CDN) the way a production deployment should, instead of the dev-only `easemotion.css`. |
| `style.css` | Page-level demo styling only — does not override or extend core framework classes. |
| `README.md` | This file. |

## How to view

Open `demo.html` directly in a browser, or serve the folder locally:

```bash
npx serve submissions/docs/minified-css-usage-karishmaram-tech
```

## Suggested follow-up for maintainer

If the maintainer confirms the minified build is fully solved by the
existing pipeline / PR #38181, issue #38163 can likely be closed once that
PR merges, with this submission serving as the documented usage reference
under `submissions/docs/`.
