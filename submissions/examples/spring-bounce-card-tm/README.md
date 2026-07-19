# Spring Bounce Card — EaseMotion CSS Submission

## Overview

The **Spring Bounce Card** (`spring-bounce-card-tm`) is a CSS-only interaction component that delivers satisfying spring-physics feedback on hover, focus, and active states. It uses `cubic-bezier(0.34, 1.56, 0.64, 1)` — the documented `--ease-ease-bounce` token — to achieve the characteristic snap-forward-and-overshoot motion.

## Design Tokens Used

| Token | Value | Role |
|---|---|---|
| `--ease-color-primary` | `#6c63ff` | Accent border on hover |
| `--ease-color-surface` | `#ffffff` | Card background |
| `--ease-color-neutral-200` | `#e2e8f0` | Default border |
| `--ease-color-text` | `#1e293b` | Primary text |
| `--ease-color-muted` | `#64748b` | Secondary text |
| `--ease-speed-fast` | `150ms` | Border/color transitions |
| `--ease-speed-medium` | `300ms` | Transform transitions |
| `--ease-radius-lg` | `1rem` | Card border radius |
| `--ease-radius-md` | `0.5rem` | Inner element radii |
| `--ease-space-4` | `1rem` | Padding/spacing base |
| `--ease-ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring timing function |

## Usage

### Basic Card

```html
<article class="spring-card">
  <img class="spring-card-media" src="..." alt="..." />
  <div class="spring-card-body">
    <h2 class="spring-card-title">Card Title</h2>
    <p class="spring-card-subtitle">Supporting description text.</p>
  </div>
  <div class="spring-card-footer">
    <!-- footer content -->
  </div>
</article>
```

### Size Variants

```html
<!-- Small compact card -->
<article class="spring-card spring-card--sm">...</article>

<!-- Large featured card -->
<article class="spring-card spring-card--lg">...</article>
```

### Color Variants

```html
<article class="spring-card spring-card--primary">...</article>
<article class="spring-card spring-card--success">...</article>
```

### Staggered Entrance Animation

Add `--animate` and `--delay-N` classes for a cascading card-group reveal:

```html
<div class="spring-card-group">
  <article class="spring-card spring-card--animate spring-card--delay-1">...</article>
  <article class="spring-card spring-card--animate spring-card--delay-2">...</article>
  <article class="spring-card spring-card--animate spring-card--delay-3">...</article>
</div>
```

## Accessibility

- All cards are focusable (`tabindex="0"`) and show a visible `:focus-visible` ring using `--ease-color-primary`
- `prefers-reduced-motion: reduce` disables all transforms and animations
- `prefers-color-scheme: dark` provides a fully-themed dark card variant
- `aria-label` attributes on interactive card elements

## Browser Support

Works in all modern browsers. Spring `cubic-bezier` timing is supported since IE9 (with prefix) and all evergreen browsers.
