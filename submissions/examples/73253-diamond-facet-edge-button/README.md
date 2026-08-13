# CSS Button: Diamond Facet Edge Variation

A sharp, geometric button component featuring a Diamond Facet Edge
visual style using pure HTML and Vanilla CSS.

## ✨ Features

- Diamond-inspired clipped button edges
- Multiple button variants
- Smooth hover transitions
- Subtle elevation effect
- Layered facet highlights
- Responsive layout
- Native keyboard accessibility
- Visible focus states
- Dark-mode compatible styling
- Reduced-motion support
- No JavaScript required
- No external dependencies

## 🎨 Variations

The demo includes:

- Primary
- Secondary
- Success
- Warning
- Danger
- Ghost

## 💎 Diamond Facet Technique

The geometric edges are created entirely with CSS using `clip-path`:

```css
clip-path:
  polygon(
    8px 0,
    calc(100% - 8px) 0,
    100% 8px,
    100% calc(100% - 8px),
    calc(100% - 8px) 100%,
    8px 100%,
    0 calc(100% - 8px),
    0 8px
  );