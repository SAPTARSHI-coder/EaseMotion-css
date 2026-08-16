# Badge, Tag, Avatar & Progress Bar Components

## Summary

Implements the v1.3 roadmap item "Badge, tag, avatar, progress bar"
(issue #88693) as a single `components/badges.css` file covering all
four component types, token-driven via `--ease-*` variables so they
follow dark mode automatically.

## Classes

- Badge: `ease-badge`, `ease-badge-primary`, `ease-badge-success`,
  `ease-badge-danger`, `ease-badge-outline`, `ease-badge-pill`
- Tag: `ease-tag`, `ease-tag-removable`, `ease-tag-remove`
- Avatar: `ease-avatar`, `ease-avatar-sm/md/lg`, `ease-avatar-group`,
  `ease-avatar-overflow`
- Progress: `ease-progress`, `ease-progress-bar`,
  `ease-progress-bar-success/danger`, `ease-progress-striped`,
  `ease-progress-animated`

## Notes

- Progress value is set via the `--ease-progress` CSS custom property
  on `.ease-progress-bar` (e.g. `style="--ease-progress: 65%"`),
  matching the pattern from the issue.
- Striped/animated progress respects `prefers-reduced-motion`.
- `--ease-color-success` and `--ease-color-danger` are assumed to
  exist in `core/variables.css`; fallback hex values are included in
  case they don't, but should be swapped for the real tokens once
  confirmed.

Relates to issue #88693.
