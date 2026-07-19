# A11y ARIA Fix — Animated Components

## What does this do?
Adds complete accessibility attributes to animated components, including a global `prefers-reduced-motion` switch.

## How is it used?
```html
<div class="deco-ring" aria-hidden="true" role="presentation"></div>
```

## Why is it useful?
Makes animated components WCAG 2.1 AA compliant.

## Contribution Notes
- Fixes: #29264
