# Animated Border Utilities — Issue #25571

## 1. What does this do?

Adds four animated border utility classes — rotating gradient border, pulsing border, shimmer sweep border, and marching dashed border — that can be applied to any block-level element.

## 2. How is it used?

Apply the class directly to any element:

```html
<!-- Gradient border that rotates colors -->
<div class="border-gradient-rotate">Content</div>

<!-- Border that pulses with a glow shadow -->
<div class="border-pulse">Content</div>

<!-- Shimmer sweep across the border -->
<div class="border-shimmer">Content</div>

<!-- Dashed border with marching motion -->
<div class="border-dash-running">Content</div>
```

Speed modifiers available for pulse:
- `.border-pulse-slow` — 3s cycle
- `.border-pulse-fast` — 1s cycle

All animations respect `prefers-reduced-motion: reduce` and fall back to static borders.

## 3. Why is this useful?

Animated borders draw attention to important UI elements without adding extra DOM elements. They follow the EaseMotion philosophy of human-readable class names that describe behavior. The effects use CSS-only techniques (`@property`, `border-image`, masks) and require zero JavaScript.
