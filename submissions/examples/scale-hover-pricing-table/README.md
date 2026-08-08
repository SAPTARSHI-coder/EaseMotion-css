# Scale-Hover Pricing Table

A responsive glassmorphism pricing table that gently scales the active card on hover or keyboard focus.

## Usage

Open `demo.html` directly in a browser and use `.plans`, `.plan`, and `.featured` to compose the cards.

```html
<article class="plan">
  <p class="name">Starter</p>
  <p class="price">$9 <small>/ month</small></p>
  <a href="#starter">Choose plan</a>
</article>
```

## CSS custom properties

The component uses `--bg`, `--glass`, `--border`, `--text`, and `--muted` as its primary design tokens.

## Features

- Pure HTML/CSS with a smooth `transform: scale()` interaction.
- Hover and focus states share the same visual treatment.
- Responsive desktop and mobile layout.
- Semantic content and visible keyboard focus indicators.
- `prefers-reduced-motion` disables scaling transitions.

## Why it is useful

A small scale change provides immediate visual hierarchy without scripting, making the pricing choices feel interactive while staying lightweight.
