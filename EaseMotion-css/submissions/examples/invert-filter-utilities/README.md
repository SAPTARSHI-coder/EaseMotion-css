# Invert Filter Utilities CSS Demo — EaseMotion CSS

A premium, interactive demonstration of CSS `invert` filter utility classes, strength presets, and hover transitions.

## What does this do?
This demo highlights the visual capabilities of the CSS `filter: invert()` property. It features:
- **Preset Strength Cards**: Predefined utility classes (`.ease-invert-0` to `.ease-invert` at 100%) to instantly invert element colors.
- **Hover Transitions Gallery**: Demos showing how to dynamically swap values on hover using GPU-accelerated filter transitions (`.ease-hover-invert`, `.ease-hover-invert-none`).
- **Dark/Light Asset Optimization**: Demonstrates how a single dark logo asset can be automatically adapted for light mode blocks using the `.ease-invert` utility class, eliminating the need to download dual image files.
- **Range Slider Playground**: Dynamic slider sandbox to configure custom invert percentages.

## How is it used?

Apply the core utility class along with the transition helper to any image, SVG graphic, or card container:

```html
<!-- Fully inverted element -->
<img src="dark-logo.svg" class="ease-invert">

<!-- Hover transition element -->
<div class="stripe-box ease-transition-filter ease-hover-invert"></div>
```

```css
/* Core stylesheet utility mappings */
.ease-invert {
  filter: invert(100%);
}

.ease-transition-filter {
  transition: filter 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.ease-hover-invert {
  filter: invert(0%);
}
.ease-hover-invert:hover {
  filter: invert(100%);
}
```

## Why is it useful?
- **Asset Overhead Reduction**: Optimizes bandwidth and bundle sizes by reusing single-color SVGs and graphics across light/dark themes.
- **Dynamic Micro-Interactions**: Provides creative hover and status feedback on UI cards, maps, illustrations, or profile photos.
- **Transition Smoothness**: Using GPU-rendered CSS filters avoids layout redraws, maintaining 60fps animations.

## Tech Stack
- HTML5 (semantic markup)
- CSS3 (transitions, filters, variables, grid layouts)
- JavaScript (interactive slider state updates & theme triggers)

## Preview
Open `demo.html` in your web browser to test the utility preset scales and range sandbox.
