# Morph-Glow Pricing Table

A responsive glassmorphism pricing table with organic morphing glow effects, built entirely with HTML and CSS.

## Usage

Open `demo.html` directly in a browser. The component uses semantic `<article>` cards and standard CSS classes such as `.pricing-grid`, `.plan`, `.plan--featured`, and `.plan__action`.

```html
<section class="pricing-grid" aria-label="Pricing plans">
  <article class="plan">
    <p class="plan__label">Starter</p>
    <p class="plan__price">$9 <small>/ month</small></p>
    <a class="plan__action" href="#starter">Choose Starter</a>
  </article>
</section>
```

## Features

- Pure HTML and CSS; no JavaScript or external framework.
- Glassmorphism panels with layered translucent backgrounds and blur.
- Morphing pseudo-element glows that respond to hover and keyboard focus.
- Responsive three-column-to-single-column layout.
- Keyboard-visible focus states and semantic pricing content.
- `prefers-reduced-motion` support disables the pronounced motion for users who request reduced animation.

## CSS Custom Properties

The main design tokens are defined in `:root`:

| Property | Purpose |
| --- | --- |
| `--page-bg` | Page background color |
| `--panel-bg` | Glass panel background |
| `--panel-border` | Panel border color |
| `--text` | Primary text color |
| `--muted` | Secondary text color |
| `--accent` | Accent color |
| `--accent-soft` | Glow color and intensity |
| `--radius` | Panel corner radius |
| `--transition` | Interaction transition timing |

## Why it fits EaseMotion

The example keeps motion purposeful and lightweight: CSS transitions and pseudo-elements create visual depth without JavaScript, while responsive sizing and reduced-motion support keep the interaction usable across devices and accessibility preferences.
