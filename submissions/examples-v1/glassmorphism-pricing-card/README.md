# Glassmorphism Pricing Card

A self-contained, animated frosted-glass pricing card component for SaaS landing pages and subscription UIs.

## What does it do?

Renders a single pricing tier card using the glassmorphism aesthetic — `backdrop-filter: blur()` on a semi-transparent background to produce a "frosted glass" look against any vivid gradient scene.

**Animations included:**

| Name | Trigger | Keyframe |
|---|---|---|
| Card entrance | Page load | `ease-card-in` — fade + slide up |
| Shimmer sweep | Hover | `ease-shimmer` — diagonal highlight sweep |
| Badge pulse | Continuous | `ease-pulse` — radiating glow ring |
| Ambient orbs | Continuous | `ease-float` — slow vertical float |

All animations respect `prefers-reduced-motion`.

## Why is it useful?

Glassmorphism pricing cards are the de-facto standard on modern SaaS landing pages. EaseMotion CSS already ships glow and magnetic card examples; this fills the missing frosted-glass slot and demonstrates how `backdrop-filter` pairs with `@keyframes` in a drop-in, zero-dependency component.

## How to use it

1. Copy the `glassmorphism-pricing-card/` folder into your project.
2. Open `demo.html` directly in a browser — no build step required.
3. To customise, edit the CSS variables in `:root` inside `style.css`:

```css
:root {
  --accent-primary:   #a78bfa;   /* change to your brand colour */
  --accent-secondary: #38bdf8;
  --glass-blur:       18px;      /* frosted-glass intensity */
  --card-radius:      1.5rem;
}
```

4. Swap the plan name, price, and feature list directly in `demo.html`.

## File structure

```
submissions/examples/glassmorphism-pricing-card/
├── demo.html    ← open in browser, zero dependencies
├── style.css    ← all styles + keyframes
└── README.md    ← this file
```

## Browser support

`backdrop-filter` is supported in all modern browsers (Chrome 76+, Firefox 103+, Safari 9+, Edge 79+). A graceful fallback (slightly more opaque background) is provided for unsupported environments via the semi-transparent `--glass-bg` variable.