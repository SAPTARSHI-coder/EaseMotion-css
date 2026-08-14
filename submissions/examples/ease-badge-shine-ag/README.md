# Badge Shine Sweep

## What does this do?

Sweeps a diagonal linear-gradient glare reflection across badges, labels, and tags periodically to give them a premium, shiny look.

## How is it used?

Add the base class to any button, tag, or badge element:

```html
<!-- Periodic Repeating Shine (Runs automatically every few seconds) -->
<span class="badge badge-premium ease-badge-shine-ag">Premium</span>

<!-- Hover-Triggered Shine (Only runs when hovered) -->
<span class="badge badge-new ease-badge-shine-ag shine-on-hover">New</span>
```

### Custom Options & Variances

Customize the glare intensity, slant, or loop speed via CSS variables or utility overrides:

```css
:root {
  --ease-shine-color: rgba(255, 255, 255, 0.5); /* Customize glare glare */
  --ease-shine-period: 3s; /* Loop interval duration */
  --ease-shine-angle: -30deg; /* Diagonal skew angle */
}
```

```html
<!-- Glare preset variations -->
<span class="badge ease-badge-shine-ag shine-dark">Pro</span>
<span class="badge ease-badge-shine-ag shine-tint-gold">VIP Gold</span>
```

## Why is it useful?

It provides a subtle, premium visual cue to direct the user's attention to status indicators (like "New" alerts, "Premium" upgrade paths, or "Sale" discounts). The periodic looping combined with GPU hardware acceleration ensures that the animation feels extremely smooth and native without consuming excessive system resources.

## Tech Stack

- HTML
- CSS (no external frameworks, keyframe-driven loop)
- Integrated accessibility controls (`prefers-reduced-motion: reduce` fallback)
