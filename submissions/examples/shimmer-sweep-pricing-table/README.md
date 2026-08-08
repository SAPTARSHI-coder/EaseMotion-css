# Shimmer-Sweep Pricing Table

A responsive glassmorphism pricing table with a directional shimmer sweep that runs on hover or keyboard focus.

## Usage

Open `demo.html` directly in a browser. Use `.plans`, `.plan`, and `.featured` to compose the pricing layout.

```html
<section class="plans" aria-label="Pricing plans">
  <article class="plan">
    <p class="name">Starter</p>
    <p class="price">$9 <small>/ month</small></p>
    <a href="#starter">Choose plan</a>
  </article>
</section>
```

## CSS custom properties

`--bg`, `--glass`, `--border`, `--text`, and `--muted` control the primary design tokens.

## Features

- Pure HTML/CSS and no JavaScript dependency.
- CSS `@keyframes` shimmer sweeps a highlight across each glass card.
- Responsive layout for desktop, tablet, and mobile.
- Focus-visible states make the interaction keyboard accessible.
- `prefers-reduced-motion` disables the moving highlight.

## Why it is useful

The restrained highlight communicates interactivity and depth while keeping the component lightweight and aligned with EaseMotion's animation-first approach.
