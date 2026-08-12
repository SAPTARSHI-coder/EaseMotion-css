# Expand Collapse Tree

Interactive file-tree with smooth branch slide and node selection.

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--tree-bg` | `#1a1a2e` | Card background |
| `--branch-color` | `rgba(255,255,255,0.1)` | Branch connector tint |
| `--node-hover-bg` | `rgba(255,255,255,0.06)` | Hover highlight on labels |
| `--expand-duration` | `0.3s` | Branch slide open/close duration |

## Interaction

- Click a folder node label to expand or collapse its children
- A rotate chevron (▶ / ▼) indicates expand state
- Branches animate with `max-height` and opacity transitions

## Preview

A dark card with a nested file-tree. Folders have a clickable label and a rotating arrow; child nodes slide in on expand.
