# Delete-Detection Explainer (Valid vs Invalid Diffs)

A policy education guide that shows fake before/after diffs teaching contributors what gets auto-closed (editing existing files) versus what passes review (only new folders under `submissions/`).

> Submission track: `submissions/docs/ease-nodelete-policy-explainer-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #47701

---

## What does this do?

Many invalid PRs are closed because contributors edit `core/`, delete existing code, or place files outside the four allowed `submissions/` tracks. This guide makes those rules visible with side-by-side fake diffs and clear policy callouts.

## How is it used?

1. Open `demo.html` in a browser.
2. Browse invalid vs valid diff examples by violation type.
3. Read "why this gets closed" explanations.
4. Check line-count ≥250 and 3-file rule callouts.
5. Copy the compliant submission checklist before opening a PR.

## Features

- Fake before/after diff panels for invalid and valid contributions
- Clear labels for policy violations (core edits, wrong path, missing files, deletions)
- Callouts for line-count ≥250 and 3-file rule requirements
- Track-specific examples (`examples/`, `docs/`, `react/`, `scss/`)
- "Why this gets closed" explanations for common invalid patterns
- Copy-ready valid folder structure and PR checklist
- Responsive and beginner-friendly documentation UI

## Why is it useful?

- **Reduces invalid PR spam** — contributors see violations before submitting.
- **Different from claim simulator / PR checklist** — focused on diff policy, not workflow.
- **Visual learning** — fake diffs are easier to understand than prose rules alone.
- **Self-contained** — no edits to `core/`, `components/`, or existing files.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Diff explorer UI, policy callouts, checklist |
| `style.css` | Diff styling, badges, responsive layout |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/ease-nodelete-policy-explainer-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Folder name carries the unique contributor suffix `-sp`.
