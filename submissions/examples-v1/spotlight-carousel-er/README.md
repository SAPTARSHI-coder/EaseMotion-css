# Spotlight Carousel

A pure-CSS carousel component with animated spotlight reveal effects. Designed for startup landing pages and hero sections. **No JavaScript required** — slide switching is handled entirely via native `<input type="radio">` `:checked` pseudo-class.

## What does this do?

Provides a multi-slide carousel where each slide features an animated spotlight glow effect (radial gradient) that sweeps, pulses, drifts, or rotates across the content. Users navigate between slides using dot indicators or arrow buttons, all powered by pure CSS.

## How is it used?

```html
<section class="spotlight-carousel" aria-label="Carousel">
  <div class="spotlight-carousel__track">
    <input type="radio" name="spotlight-slide" id="slide-1" class="spotlight-carousel__radio" checked />
    <input type="radio" name="spotlight-slide" id="slide-2" class="spotlight-carousel__radio" />

    <div class="spotlight-carousel__slides">
      <article class="spotlight-carousel__slide">
        <div class="spotlight-carousel__spotlight"></div>
        <div class="spotlight-carousel__content">
          <span class="spotlight-carousel__tag">Label</span>
          <h2 class="spotlight-carousel__title">Slide Title</h2>
          <p class="spotlight-carousel__desc">Description text here.</p>
        </div>
      </article>
      <!-- More slides -->
    </div>

    <nav class="spotlight-carousel__nav" aria-label="Carousel navigation">
      <label for="slide-1" class="spotlight-carousel__dot" aria-label="Go to slide 1"></label>
      <label for="slide-2" class="spotlight-carousel__dot" aria-label="Go to slide 2"></label>
    </nav>
  </div>
</section>
```

Each slide gets a unique spotlight effect via the `.spotlight-carousel__spotlight` inner element. The `#slide-N:checked` selector activates the correct slide and its spotlight animation.

## Why is it useful?

Carousels are among the most commonly needed UI elements in startup landing pages. This spotlight variant provides a polished, reusable building block with cinematic lighting effects that contributors can drop directly into their hero sections. It fits EaseMotion CSS's animation-first philosophy by using `ease-kf-spotlight-*` keyframes and CSS custom properties for theming, while remaining fully accessible and responsive.

## Features

- Pure CSS — zero JavaScript dependencies
- Four unique spotlight animations: sweep, pulse, drift, rotate
- Dot navigation with active state indicators
- Arrow navigation for prev/next
- Keyboard accessible (Tab + Space/Enter)
- `prefers-reduced-motion` support — disables animations for accessibility
- Responsive sizing via CSS custom properties
- BEM naming convention with `spotlight-carousel__` prefix
- Startup-inspired dark theme design

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-carousel-duration` | `0.5s` | Base transition duration |
| `--ease-carousel-easing` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard easing curve |
| `--ease-carousel-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bounce easing for interactions |
| `--ease-carousel-bg` | `#0f172a` | Page background color |
| `--ease-carousel-surface` | `#1e293b` | Carousel surface color |
| `--ease-carousel-accent` | `#38bdf8` | Accent color for dots and tags |
| `--ease-carousel-spotlight-size` | `280px` | Spotlight gradient radius |

## Accessibility

- Uses native `<input type="radio">` for keyboard-operable slide switching
- Navigation dots wrapped in `<label>` for large click targets
- `aria-label` on carousel region and navigation elements
- Visible `:focus-visible` outline on interactive elements
- `prefers-reduced-motion: reduce` collapses all transitions and animations
- Semantic `<article>`, `<nav>`, and `<main>` elements
