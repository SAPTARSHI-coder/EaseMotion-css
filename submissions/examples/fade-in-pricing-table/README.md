# Fade-In Pricing Table

A responsive glassmorphism pricing table with a staggered CSS fade-in reveal.

## Usage

Open `demo.html` directly in a browser. The main classes are `.grid`, `.card`, `.featured`, and `.badge`.

```html
<section class="grid" aria-label="Pricing plans">
  <article class="card">
    <p class="name">Starter</p>
    <p class="price">$9 <small>/ month</small></p>
    <a href="#starter">Choose plan</a>
  </article>
</section>
```

## CSS custom properties

`--bg` controls the page background, `--glass` the translucent panel, `--border` the panel border, `--text` and `--muted` typography, and `--accent` the primary accent token.

## Features

- Pure HTML/CSS with a performant `@keyframes` fade-in.
- Staggered card delays create a subtle entrance sequence.
- Responsive three-column-to-single-column layout.
- Keyboard focus states and semantic pricing content.
- `prefers-reduced-motion` disables the reveal and interaction motion.

## Why it is useful

The reveal establishes hierarchy when the pricing section enters view while remaining lightweight, dependency-free, and consistent with EaseMotion's animation-first philosophy.
