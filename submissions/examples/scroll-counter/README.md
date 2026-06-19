# Scroll Counter Component

A scroll-triggered animated counter for statistics, dashboards, and landing pages. Numbers count up when they enter the viewport and support custom prefixes, suffixes, and timing variants.

## Features

* Count-up animation from zero
* Scroll-triggered activation
* Prefix and suffix support
* Slow, normal, and fast variants
* Fade + slide-up entrance animation
* Reduced motion support

## Usage

```html
<div
  class="ease-counter ease-counter--normal"
  data-target="450"
  data-prefix="$"
  data-suffix="K"
>
  <div class="counter-value">$450K</div>
</div>
```

### Timing Variants

```html
<div class="ease-counter ease-counter--slow"></div>
<div class="ease-counter ease-counter--normal"></div>
<div class="ease-counter ease-counter--fast"></div>
```

## Accessibility

Respects:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled, animations are skipped and the final value is displayed immediately.

