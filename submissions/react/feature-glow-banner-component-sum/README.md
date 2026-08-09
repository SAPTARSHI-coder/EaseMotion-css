# Glow Banner Component

## What does this do?

A React banner that applies a smooth glow when hovered or focused.

## How is it used?

```jsx
import GlowBanner from './GlowBanner';

<GlowBanner>Hello</GlowBanner>
```

## Why is it useful?

Glow feedback makes notices and promo banners feel interactive without heavy animation libraries. The pattern is readable and easy to reuse in EaseMotion-style UIs.

## Accessibility

- Keyboard focus reveals the same glow as hover (`tabIndex={0}`)
- `role="status"` and `aria-label` for assistive tech
- Under `prefers-reduced-motion: reduce`, motion is disabled and a static outline glow remains

## Files

```
submissions/react/feature-glow-banner-component-sum/
├── GlowBanner.jsx
├── style.css
└── README.md
```

Related issue: #50762
