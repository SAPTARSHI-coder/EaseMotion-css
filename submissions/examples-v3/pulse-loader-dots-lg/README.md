# Pulse Loader Dots

A CSS-only loading indicator using three dots with a staggered pulse animation.

## Class: `ease-pulse-loader-dots-lg`

### Features
- Pure CSS keyframe animation, zero JavaScript
- Staggered dot timing (0ms, 200ms, 400ms delays) for a smooth wave-like pulse
- Size variants: `--sm`, default, `--lg`
- Color variants: `--success`, `--danger`, `--neutral`
- Fully customizable via CSS custom properties
- Respects `prefers-reduced-motion`

### Usage

```html
<div class="ease-pulse-loader-dots-lg">
  <span class="ease-pulse-loader-dots-lg__dot"></span>
  <span class="ease-pulse-loader-dots-lg__dot"></span>
  <span class="ease-pulse-loader-dots-lg__dot"></span>
</div>
```

### Variants

```html
<!-- Size -->
<div class="ease-pulse-loader-dots-lg ease-pulse-loader-dots-lg--sm">...</div>
<div class="ease-pulse-loader-dots-lg ease-pulse-loader-dots-lg--lg">...</div>

<!-- Color -->
<div class="ease-pulse-loader-dots-lg ease-pulse-loader-dots-lg--success">...</div>
<div class="ease-pulse-loader-dots-lg ease-pulse-loader-dots-lg--danger">...</div>
<div class="ease-pulse-loader-dots-lg ease-pulse-loader-dots-lg--neutral">...</div>
```

### Customization

```css
.ease-pulse-loader-dots-lg {
  --dot-size: 16px;
  --dot-color: #f97316;
  --dot-duration: 900ms;
}
```

### Author
Lakshay Gujjar ([@lakshaygujjar273-cys](https://github.com/lakshaygujjar273-cys))

Closes #37624
