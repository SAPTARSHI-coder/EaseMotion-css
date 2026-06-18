# CSS :nth-child(an+b of .scoped)

## Overview
This example demonstrates the scoped variant of the :nth-child() pseudo-class — :nth-child(an+b of selector). Unlike the regular :nth-child which counts among all siblings, the scoped version counts only siblings matching the given selector.

## Features
- **:nth-child(an+b of .visible)** — counts only elements matching .visible
- **Filterable grids** — re-style items based on their filtered position
- **No JavaScript counting** — CSS handles the positional logic
- **Composable** — works with any selector complex

## How to Use
1. Use :nth-child(an+b of .class) to select the nth element matching .class among its siblings
2. Combine with filterable content — hide some items and restyle the remaining ones based on their new visual position
3. The of syntax scopes the counting to only matching elements

## Browser Support
- Chrome 133+
- Edge 133+
- Firefox 135+
- Safari 18.4+
