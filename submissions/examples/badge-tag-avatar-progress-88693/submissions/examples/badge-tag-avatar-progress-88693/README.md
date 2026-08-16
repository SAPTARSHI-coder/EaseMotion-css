# Badge, Tag, Avatar & Progress Bar Components

## Summary

Proposed implementation for the v1.3 roadmap item "Badge, tag, avatar,
progress bar" (issue #88693). Self-contained under submissions/examples/
per CONTRIBUTING.md — no files outside submissions/ are modified.

## Why this is a submissions/example, not a components/ edit

The repo's contribution guard only allows changes inside `submissions/`;
a previous attempt that added `components/badges.css` directly was
auto-closed for touching files outside that folder. This version keeps
everything self-contained in `style.css`, for the maintainer to fold
into `components/badges.css` as they see fit.

## Classes

- Badge: `ease-badge`, `ease-badge-primary`, `ease-badge-success`,
  `ease-badge-danger`, `ease-badge-outline`, `ease-badge-pill`
- Tag: `ease-tag`, `ease-tag-removable`, `ease-tag-remove`
- Avatar: `ease-avatar`, `ease-avatar-sm/md/lg`, `ease-avatar-group`,
  `ease-avatar-overflow`
- Progress: `ease-progress`, `ease-progress-bar`,
  `ease-progress-bar-success/danger`, `ease-progress-striped`,
  `ease-progress-animated`

## Files

- `demo.html` — live demo of all four components
- `style.css` — token declarations + all component styles

Relates to issue #88693.
