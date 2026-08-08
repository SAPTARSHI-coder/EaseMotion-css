# Shimmer-Sweep Pricing Table

A complete glassmorphism pricing experience with a directional CSS shimmer that travels across each card when the user hovers or focuses it.

## File structure

```text
shimmer-sweep-pricing-table/
├── demo.html
├── style.css
└── README.md
```

## Features

- Three detailed pricing tiers with feature lists and supporting copy.
- Glass surfaces with layered gradients, blur, borders, and shadows.
- Directional shimmer implemented with a pseudo-like decorative element and `@keyframes shimmer-sweep`.
- Hover and keyboard-focus states share the same visual treatment.
- Responsive desktop, tablet, and mobile layouts.
- Reduced-motion handling disables the moving highlight and card translation.
- No JavaScript, frameworks, external fonts, or assets.

## Usage

Open `demo.html` in a modern browser. The pricing component can be copied into an existing page by keeping the `.plans` and `.plan` structure and importing `style.css`.

```html
<section class="plans" aria-label="Pricing plans">
  <article class="plan">
    <header class="plan__header">
      <span class="plan__icon">01</span>
      <div><p class="name">Starter</p><p class="summary">For focused individual work.</p></div>
    </header>
    <p class="price">$9 <small>/ month</small></p>
    <a class="action" href="#starter">Choose Starter</a>
  </article>
</section>
```

## Motion details

`.plan__glow` is positioned outside the normal content flow. On hover or focus, it moves from left to right with `shimmer-sweep`. The transform is applied to the highlight itself rather than the card, so text remains stable while the surface appears to catch light.

## Customization

Core colors and timing live in `:root`. Adjust `--violet`, `--cyan`, or the panel tokens to match a product brand. Increase the `900ms` animation duration for a slower premium sweep or reduce it for a sharper interaction.

## Accessibility

The shimmer is decorative and does not convey required information. Links remain real keyboard controls and have visible focus indicators. `prefers-reduced-motion: reduce` removes the sweep and card movement without hiding content.
