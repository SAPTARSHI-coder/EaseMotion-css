# Drawer CSS `@layer` Cascade Layers

## Description
This PR introduces CSS `@layer` Cascade Layers to the `drawer` component. This modern CSS feature organizes styles into an explicit, ordered priority hierarchy: `reset -> base -> component -> theme -> utilities`. Styles in higher layers always win, regardless of selector specificity.

This solves the #1 pain point in large CSS codebases: unpredictable specificity wars between base styles, component libraries, themes, and utility classes.

## Layer Architecture
| Layer | Priority | Purpose |
|---|---|---|
| `ease-reset` | Lowest | Box-sizing, margin/padding resets |
| `ease-base` | Low | Font family, line-height defaults |
| `ease-drawer-component` | Medium | Core component structure and colors |
| `ease-drawer-theme` | High | Visual theme overrides (dark, brand) |
| `ease-drawer-utilities` | Highest | One-off utility overrides |

## Changes
- `style.css`: 80+ lines structured across 5 declared `@layer` blocks.
- `demo.html`: 3-card demo showing base, theme, and utility layer overrides.
- `README.md`: Describes the layer architecture and cascade priority.
\nFixes #56561\n