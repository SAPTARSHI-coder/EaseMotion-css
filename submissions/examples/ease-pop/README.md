# Animation: ease-pop

A quick, one-shot attention animation that scales an element up and snaps it back to draw focus.

## What does this do?

It plays a quick 0.3s scale-up attention animation (`scale(1)` → `scale(1.15)` → `scale(1)`) once on an element when the class is added.

## How is it used?

Add the `ease-pop` class to your HTML element:

```html
<div class="notification-badge ease-pop">3</div>
```

To customize the pop amount, configure the `--ease-pop-amount` variable inline or in your stylesheet:

```html
<button class="btn ease-pop" style="--ease-pop-amount: 1.3;">Click Me</button>
```

## Why is it useful?

It provides a minimal, high-impact micro-interaction pattern that fits EaseMotion CSS's philosophy by prioritizing user attention and feedback without relying on bulky JavaScript frameworks.

---

## Overview

The `ease-pop` animation is designed to draw attention to critical elements dynamically. Rather than scaling from zero as an entrance, it starts at its default layout scale (`1`), scales up to a highlighted peak (default `1.15`), and returns to `1` over exactly `0.3s`.

## Features

- **One-Shot Execution:** Designed to play exactly once when the class is dynamically applied.
- **Highly Customizable:** Easily adjust the pop scale amount using a CSS custom property.
- **Performance Optimized:** Uses GPU-accelerated `transform` scaling for zero layout shifts or lag.
- **Built-in Accessibility:** Includes native overrides for users with reduced motion preferences.

## Usage Examples

### 1. Notification Badges

Pops to draw immediate focus when a new alert or message count arrives:

```html
<div class="badge ease-pop">5</div>
```

### 2. Primary Call-to-Actions (CTAs)

Validates hover/click interactions dynamically:

```html
<button class="cta-button ease-pop">Get Started</button>
```

### 3. Selection / Highlights

Highlights a newly selected dashboard item or pricing tier:

```html
<div class="pricing-card ease-pop">
  <h3>Pro Plan</h3>
</div>
```

## CSS Variables Table

| Variable            | Description                                                | Default | Range                         |
| :------------------ | :--------------------------------------------------------- | :------ | :---------------------------- |
| `--ease-pop-amount` | The peak scale modifier applied at the 50% keyframe state. | `1.15`  | Recommended: `1.05` to `1.50` |

## Accessibility Notes

- **Reduced Motion Support:** For users with `prefers-reduced-motion: reduce`, the animation is disabled and elements instantly render in their final state (`scale(1)`) with no transition effect.
- **Focus Indicators:** Interactive elements should maintain clear `:focus-visible` outline styles to ensure full keyboard navigability.

## Common Use Cases

- Shopping cart badge additions.
- Success confirmation checkpoints.
- Social engagement actions (e.g., clicking a "Heart" or "Like" icon).
- Interactive dashboard selectors.
