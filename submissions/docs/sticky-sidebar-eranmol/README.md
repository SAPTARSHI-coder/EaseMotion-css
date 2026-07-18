# Sticky Documentation Sidebar

Fixes issue **#47378** — makes the documentation sidebar sticky while scrolling.

## What does this do?

This submission demonstrates the fix for the documentation sidebar. It changes the sidebar from `position: fixed` to `position: sticky`, which keeps the sidebar visible during scroll while maintaining proper document flow.

## How is it used?

Apply `position: sticky` to the `.docs-sidebar` element with `top` set to the header height:

```css
.docs-sidebar {
  position: sticky;
  top: 60px;
  width: 260px;
  height: calc(100vh - 60px);
  overflow-y: auto;
  flex-shrink: 0;
}
```

The `.docs-shell` parent uses `display: flex` so the sticky sidebar and `.docs-content` sit side by side naturally.

## Why is it useful?

`position: sticky` is the modern, recommended approach for documentation sidebars. It:

- Keeps the sidebar in the normal document flow (no manual offsets needed)
- Allows the sidebar to scroll independently when its content exceeds the viewport
- Works correctly in both light and dark themes
- Respects `prefers-reduced-motion` without extra configuration
- Is used by Tailwind CSS, React, and Next.js documentation sites

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Self-contained demo with long scrollable content to verify sticky behavior |
| `style.css` | CSS with `position: sticky` sidebar, responsive breakpoints, and theme support |
| `README.md` | This file |

## Key Changes from Current Implementation

| Property | Current | Fixed |
|----------|---------|-------|
| `position` | `fixed` | `sticky` |
| `top` | `60px` | `60px` (unchanged) |
| `height` | `auto` (via `bottom: 0`) | `calc(100vh - 60px)` |
| `overflow-y` | `auto` | `auto` (unchanged) |
| `flex-shrink` | not set | `0` |

## Responsive Behavior

- **Desktop (>900px):** Full sticky sidebar at 260px width
- **Tablet (769-900px):** Narrower sticky sidebar at 220px
- **Mobile (<768px):** Sidebar converts to a scrollable top panel (relative position)
