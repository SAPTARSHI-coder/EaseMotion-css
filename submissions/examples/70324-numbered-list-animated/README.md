# CSS Numbered List Animated

A pure CSS **animated numbered list** where numbered items reveal with smooth motion as they enter the viewport.

The component combines semantic ordered-list markup with CSS animation and optional CSS Scroll-Driven Animations for modern browsers.

## ✨ Features

- Semantic ordered list
- Animated number badges
- Counting-style number reveal
- Scroll-based item reveal
- Staggered fallback animation
- Responsive layout
- Dark-mode compatible
- Light-mode compatible
- Reduced-motion support
- Hover interactions
- No JavaScript
- No external dependencies

## 🎬 Animation

Each list item enters with:

- Opacity transition
- Vertical translation
- Number badge scale
- Number badge rotation

Modern browsers can use the CSS `view()` timeline:

```css
animation-timeline: view(block);