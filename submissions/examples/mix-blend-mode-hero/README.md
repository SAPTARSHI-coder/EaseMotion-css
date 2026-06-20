# CSS mix-blend-mode Hero Section

## What does it do?
A creative hero section using CSS `mix-blend-mode` to blend
color overlays with background images/gradients. Includes
7 blend mode variants with hover transitions and an
interactive switcher.

## How is it used?
```html
<section class="ease-blend-hero ease-blend-multiply">
  <div class="ease-blend-hero-bg"></div>
  <div class="ease-blend-hero-overlay"></div>
  <div class="ease-blend-hero-content">
    <h1 class="ease-blend-title">Your Title</h1>
    <p class="ease-blend-subtitle">Your subtitle text here.</p>
    <a href="#" class="ease-blend-cta">Call to Action</a>
  </div>
</section>
```

## Blend Mode Variants
| Class | Mode | Color |
|---|---|---|
| `.ease-blend-multiply` | multiply | indigo |
| `.ease-blend-screen` | screen | violet |
| `.ease-blend-overlay` | overlay | pink |
| `.ease-blend-difference` | difference | cyan |
| `.ease-blend-exclusion` | exclusion | amber |
| `.ease-blend-hue` | hue | emerald |
| `.ease-blend-color-mode` | color | red |

## CSS Variables
- `--ease-hero-bg` — background image/gradient
- `--ease-blend-color` — overlay color
- `--ease-blend-mode` — blend mode
- `--ease-blend-opacity` — overlay opacity (default: 0.6)
- `--ease-blend-hover-opacity` — hover opacity (default: 0.4)

## Features
- 7 blend mode variants
- Hover zoom on background
- Entrance animations on content
- Interactive mode switcher in demo
- Respects prefers-reduced-motion
- Pure HTML + CSS + minimal JS

## Preview
Open `demo.html` directly in browser.