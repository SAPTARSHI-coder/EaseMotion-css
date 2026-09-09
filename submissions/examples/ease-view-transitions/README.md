# Cross-document View Transitions Demo

## What does this do?
A two-page (gallery → detail) demo showcasing the CSS View Transitions API for cross-document (MPA) navigation. A gallery card "morphs" into the detail page hero using shared `view-transition-name` elements.

## How is it used?
Open `demo.html` in a Chromium-based browser (Chrome/Edge 126+) and click any card. The browser captures the old state, transitions to the new page, and animates the shared element.

## How it works
- `@view-transition { navigation: auto }` enables cross-document transitions
- Cards in `demo.html` use `view-transition-name: card-N` on their image
- `detail.html` sets the matching `view-transition-name` on the hero via JS
- `::view-transition-old()` and `::view-transition-new()` apply custom fade animations
- Graceful degradation: unsupported browsers navigate normally with no animation

## Framework features showcased
- `ease-card`, `ease-card-shadow`, `ease-card-flat` — card components
- `ease-grid`, `ease-grid-cols-3` — responsive grid layout
- `ease-text-*`, `ease-font-bold`, `ease-text-muted` — typography
- `--ease-color-*` tokens — design tokens
- `prefers-reduced-motion` support

## File structure
| File | Purpose |
|------|---------|
| `demo.html` | Gallery page with 3 cards, each linking to detail |
| `detail.html` | Detail page showing card info, sets matching `view-transition-name` |
| `style.css` | Imports framework, view transition config, custom animations |
| `README.md` | This file |

## Browser support
- ✅ Chrome/Edge 126+ (full support for cross-document View Transitions)
- ❌ Firefox, Safari (no support yet; navigates normally)
