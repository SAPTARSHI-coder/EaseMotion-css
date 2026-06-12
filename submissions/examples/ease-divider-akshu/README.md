# Ease Divider

## What does this do?

Provides reusable horizontal divider components that visually separate content sections with optional labels, gradient styling, and lightweight animations.

## How is it used?

Add the desired divider class to any HTML element:

```html
<div class="ease-divider"></div>

<div class="ease-divider-label">
  <span>OR</span>
</div>

<div class="ease-divider-gradient"></div>

<div class="ease-divider-animated"></div>
```

## Customization

The component can be customized using CSS variables:

```css
--divider-color
--divider-accent
--divider-height
--divider-duration
```

Example:

```css
:root {
  --divider-accent: #8b5cf6;
  --divider-height: 3px;
}
```

## Why is it useful?

Dividers help establish visual hierarchy and separate content without introducing heavy UI elements. The component includes multiple variants suitable for forms, dashboards, authentication screens, landing pages, and modern interfaces while remaining lightweight and dependency-free.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to view all divider variants.

## Contribution Notes

- Class naming was handled by the contributor.
- Maintainer may rename classes to the `ease-*` convention before merging.
- Includes Simple, Labeled, Gradient, and Animated divider variants.
- Supports reduced-motion accessibility preferences.
