# Pulse Banner Component

## What does this do?

A React banner that applies a smooth pulse when hovered or focused.

## How is it used?

```jsx
import PulseBanner from './PulseBanner';

<PulseBanner>Hello</PulseBanner>
```

## Why is it useful?

Pulsing banners draw attention to alerts and CTAs in a lightweight, readable way — fitting EaseMotion’s animation-first, zero-dependency style.

## Accessibility

- Keyboard focus starts the same pulse as hover (`tabIndex={0}`)
- `role="status"` and `aria-label` for assistive tech
- Under `prefers-reduced-motion: reduce`, animation stops and a static inset border remains

## Files

```
submissions/react/feature-pulse-banner-component-sum/
├── PulseBanner.jsx
├── style.css
└── README.md
```

Related issue: #50760
