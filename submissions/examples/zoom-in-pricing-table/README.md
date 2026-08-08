# Zoom-In Pricing Table

A responsive glassmorphism pricing table that uses a restrained CSS zoom-in interaction to emphasize a plan on hover or keyboard focus.

## Usage

Open `demo.html` directly in a browser. The component uses the `.pricing__grid`, `.plan`, `.plan--featured`, and `.plan a` classes.

```html
<section class="pricing__grid" aria-label="Pricing plans">
  <article class="plan">
    <p class="plan__name">Starter</p>
    <p class="plan__price">$9 <small>/ month</small></p>
    <a href="#starter">Choose Starter</a>
  </article>
</section>
```

## CSS custom properties

- `--bg` controls the page background.
- `--panel` controls the translucent glass surface.
- `--border` controls the default panel border.
- `--text` and `--muted` control typography colors.
- `--accent` controls the primary accent token.
- `--radius` controls card corner radius.

## Features

- Pure HTML and CSS with no JavaScript or framework dependency.
- Smooth `transform: scale()` zoom interaction on hover and keyboard focus.
- Responsive three-column layout that becomes a single column on smaller screens.
- Semantic pricing cards and visible keyboard focus styles.
- `prefers-reduced-motion` support removes transition motion when requested.

## Why it is useful

The effect gives pricing choices a clear visual hierarchy without adding scripting, while the restrained scale keeps the interaction lightweight and suitable for glassmorphism interfaces.
