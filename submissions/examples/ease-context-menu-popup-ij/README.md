# Context Menu Popup

A custom right-click context menu with a fade+scale entrance animation. JavaScript handles positioning at the cursor and closing on outside click. CSS custom properties control menu appearance and transition.

## Features

- Right-click to open at cursor position
- Fade + scale entrance animation with configurable `--scale-start`
- Menu items with hover highlight
- Divider between item groups
- Click-outside to dismiss
- Action selection logged for demo

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--menu-bg` | `#1e293b` | Menu background color |
| `--menu-item-hover` | `#334155` | Hover background for items |
| `--fade-duration` | `0.2s` | Fade/scale transition duration |
| `--scale-start` | `0.85` | Initial scale before open (e.g. 0.85) |

## Usage

The `.cmp-menu` is positioned absolutely within `.cmp-area`. Toggle `.open` class to show/hide with animation. JS sets `left`/`top` for cursor positioning.
