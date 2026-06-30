# Contrast Filter Utilities

## What does this do?

Provides a set of CSS utility classes to easily scale and control element contrast levels (50%, 100%, and 150%) dynamically across light and dark modes.

## How is it used?

Add the contrast utility classes directly to any HTML elements:

```html
<!-- Muted / Disabled element (50% contrast) -->
<div class="ease-filter-contrast-50">Muted Content</div>

<!-- Default/Normal element (100% contrast) -->
<div class="ease-filter-contrast">Default Content</div>

<!-- High contrast highlight element (150% contrast) -->
<div class="ease-filter-contrast-150">High-Contrast Content</div>
```

### Hover Transitions & Micro-interactions

You can combine these utilities with transition properties to create smooth interactions:

```html
<div class="ease-contrast-transition ease-hover-contrast-150">
  Hover to Increase Contrast
</div>
```

## Why is it useful?

- **Accessibility (a11y)**: Allows creators to boost contrast dynamically for visual impairment support, especially on dark background elements.
- **Disabled States**: Easily mute secondary content, form fields, cards, or loading targets to 50% contrast.
- **Aesthetics**: Simplifies hover interactions on images, icons, and card components without requiring custom keyframes.

## Features

- **Dual Themes**: Full dark/light mode toggle integration. Custom colors dynamically map to system values.
- **Responsiveness**: Optimized grid layout and sandbox canvas dimensions for seamless viewing on mobile, tablet, and desktop screens.
- **No Overhead**: Pure, lightweight CSS, avoiding any external frameworks or scripts.

## Tech Stack

- HTML5
- CSS3 (Variables, Flexbox, CSS Grid, media queries)
