# ease-underline-slide-right

## Overview

A persistent CSS animation that automatically draws an underline beneath an element on page load, sliding it in smoothly from left to right. This utility is ideal for emphasizing page headers, active navigation paths, or calling attention to key content blocks upon entrance.

## Features

- Fully CSS-driven page-load animation (starts automatically once, not hover-based).
- Customizable color via `--ease-underline-color` variable.
- Customizable stroke height via `--ease-underline-thickness` variable.
- Full accessibility support through system-wide `prefers-reduced-motion` reduction checks.

## How it works

The utility sets `position: relative` on the target element and creates a pseudo-element (`::after`) positioned at the bottom-left boundary (`left: 0; bottom: 0;`). The initial state is set to `width: 0`, and the `@keyframes` block animates it to `width: 100%` in `0.5s` using an ease transition.

## How to Apply to Any Element

Add the `.ease-underline-slide-right` class to any inline or block element supporting pseudo-elements:

```html
<h1 class="ease-underline-slide-right">Section Title</h1>
```

### Customizing Color and Thickness

You can specify custom styles by overriding the corresponding CSS variables inline or inside your style declarations:

```css
.accented-link {
  --ease-underline-color: #22c55e; /* Green Underline */
  --ease-underline-thickness: 3px; /* Thicker stroke */
}
```

## Customization Variables

| Variable                     | Default Value  | Description                                  |
| :--------------------------- | :------------- | :------------------------------------------- |
| `--ease-underline-color`     | `currentColor` | The background color of the drawn underline. |
| `--ease-underline-thickness` | `2px`          | The stroke thickness of the underline line.  |

## Accessibility Notes

When `prefers-reduced-motion: reduce` is configured, the slide-in transition is ignored and the underline is displayed as immediately and fully drawn, preventing motion distraction while preserving context.
