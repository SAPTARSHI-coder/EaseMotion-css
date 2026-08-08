# EaseMotion Contribution Checklist Generator

An interactive documentation tool that helps GSSoC contributors **generate a valid submission checklist** before opening a pull request — folder structure, naming rules, 250-line policy, and Conventional Commits templates.

> Submission track: `submissions/docs/ease-pr-checklist-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #43347

---

## What does this do?

EaseMotion CSS enforces strict contribution policies (issue #13244):

- Only `submissions/` directory — never `core/` or `components/`
- No deletions of existing code
- 250+ lines OR all required files complete
- Unique suffix on folder names (e.g. `-sp`)
- One feature per PR, squashed commits

This generator turns those rules into an interactive checklist you can fill in before every PR.

## How is it used?

1. Open `demo.html` in a browser.
2. Select your **contribution track**: examples, docs, react, or scss.
3. Enter your **feature name** (kebab-case) and **unique suffix** (default: `sp`).
4. Optionally enter your **issue number** for the PR template.
5. Review the auto-generated:
   - **Folder structure** with required files
   - **Naming rules** for your submission
   - **Pre-PR checklist** (12 items per track — check each one)
   - **Commit message** templates (feat / docs / fix)
   - **PR description** template
6. Click **Copy path**, **Copy commit**, or **Copy PR body** as needed.

## Tracks and required files

| Track | Path | Required files |
|-------|------|----------------|
| **examples** | `submissions/examples/ease-{name}-{suffix}/` | `demo.html`, `style.css`, `README.md` |
| **docs** | `submissions/docs/ease-{name}-{suffix}/` | `demo.html`, `style.css`, `README.md` |
| **react** | `submissions/react/ease-{name}-{suffix}/` | `Component.jsx`, `README.md` |
| **scss** | `submissions/scss/ease-{name}-{suffix}/` | `_partial.scss`, `README.md` |

## Commit message format

Follows [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add my-feature showcase (ease-my-feature-sp)
docs: add my-feature guide (ease-my-feature-sp)
fix: resolve my-feature issue (ease-my-feature-sp)
```

## Features

- Track selector for all 4 submission types
- Auto-generated folder structure and file tree
- Naming rules with live suffix preview
- 12-item pre-PR checklist per track (interactive checkboxes)
- Commit templates (feat / docs / fix tabs)
- PR description template with issue number
- Copy-to-clipboard for path, commit, and PR body
- Policy reminders for no core edits and no deletions

## Why is it useful?

- **Prevents invalid PRs** — contributors verify policy compliance before submitting.
- **Saves time** — no need to re-read CONTRIBUTING.md for every submission.
- **GSSoC-friendly** — built specifically for this repo's strict validation bots.
- **Self-contained** — no backend, no build step.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Generator UI + track configs + copy logic |
| `style.css` | Layout styles using `--ease-*` tokens |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/`.
- Uses official CDN bundle (`easemotion.min.css`).
- Folder name carries the unique contributor suffix `-sp`.
