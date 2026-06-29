# ease-border-color-flash

## Overview

A lightweight animation class that rapidly flashes the border of an element to a highlight color and returns it to its original color. This effect is ideal for form inputs during validation errors, success confirmations, or drawing user attention to specific interactive components.

## Features

- Fast, non-obtrusive `0.3s` one-shot animation.
- Highly customizable using the `--ease-flash-border-color` CSS variable.
- Smart keyframe interpolation that automatically handles any initial border colors.
- Full accessibility support via `prefers-reduced-motion` fallbacks.

## How it works

The animation transitions the element's border color to a specified highlight color (defaulting to `#ff4d4f`) at `50%` of the duration, then returns to its original color at `100%`. Since we omit `0%` and `100%` in the `@keyframes` block, the browser uses the element's baseline border-color implicitly, ensuring a seamless start and end transition.

## How to Apply

Simply apply the `.ease-border-color-flash` class. You can trigger it dynamically upon page load, form validation triggers, hover, focus, or click states:

```html
<!-- Trigger on active / click state -->
<button class="demo-button ease-border-color-flash">Submit Form</button>
```

### Customizing the Flash Color

You can override the flash color by defining the `--ease-flash-border-color` variable:

```css
.success-element {
  --ease-flash-border-color: #22c55e; /* Green highlight flash */
}
```

## Customization Variables

| Variable                    | Default Value | Description                                                     |
| :-------------------------- | :------------ | :-------------------------------------------------------------- |
| `--ease-flash-border-color` | `#ff4d4f`     | The highlight color applied at the peak of the flash animation. |

## Accessibility Notes

If the system has `prefers-reduced-motion: reduce` configured, the animation is disabled and the highlight border color is applied immediately without transitions to prevent flashing or sudden brightness shifts from causing cognitive strain.
