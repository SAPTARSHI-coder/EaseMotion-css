# Dark Mode Token Layer

## Summary

A proposed dark-mode token layer for EaseMotion CSS, addressing the "Dark
mode token layer" item on the README's v1.1 roadmap (issue #88689). Instead
of new component classes, this overrides the existing `--ease-*` custom
property values so every current component (`ease-card`, `ease-btn`, etc.)
gets dark styling automatically, with zero markup changes.

## Activation

Two ways to activate, both included in `style.css`:

1. **Automatic** — `@media (prefers-color-scheme: dark)` follows the user's
   OS-level setting with no JavaScript required.
2. **Manual override** — a `[data-theme="dark"]` (or `"light"`) attribute
   on `<html>` takes priority over the media query, for apps that want a
   user-facing toggle. `demo.html` includes a working toggle button that
   cycles system → dark → light → system.

## Why this is a submissions/example, not a core/ edit

Per `CONTRIBUTING.md`, `core/` is maintainer-only and direct edits get
closed without review. Following the precedent set by PR #25657 (merged
theme-toggle contribution, also submitted under `submissions/examples/`),
this submission is self-contained: `style.css` re-declares the light-mode
token values it needs so the demo works standalone, and proposes the dark
overrides for the maintainer to fold into `core/variables.css` /
`core/dark-mode.css` as they see fit. **No files under `core/` or
`components/` are modified by this PR.**

## Files

- `demo.html` — live toggle demo (card, button, muted text, all token-driven)
- `style.css` — token declarations + dark overrides + demo styling

## Notes for maintainer review

The token names used here (`--ease-color-bg`, `--ease-color-surface`,
`--ease-color-text`, `--ease-color-muted`, `--ease-color-border`,
`--ease-color-primary`, `--ease-shadow-md`) follow the naming pattern shown
in the README's Customization section. If `core/variables.css` uses
different exact names, the override block only needs the variable names
adjusted to match — the `prefers-color-scheme` / `[data-theme]` activation
strategy stays the same.

Relates to issue #88689.
