# Shimmer Sweep Progress Bar

A lightweight, pure CSS progress bar with a smooth shimmer-sweep animation, inspired by creative portfolio aesthetics.

## Usage

Add `style.css` to your project and use the `.shimmer-sweep-progress-bar` class:

```html
<div
  class="shimmer-sweep-progress-bar"
  role="progressbar"
  aria-valuenow="70"
  aria-valuemin="0"
  aria-valuemax="100"
  style="--progress-width: 70%;"
></div>
```

## CSS Custom Properties

| Property                   | Default                 | Description                          |
| -------------------------- | ----------------------- | ------------------------------------ |
| `--progress-width`         | `50%`                   | Width of the filled progress         |
| `--progress-duration`      | `2.5s`                  | Shimmer animation duration           |
| `--progress-easing`        | `ease-in-out`           | Shimmer animation easing             |
| `--progress-accent-color`  | `#6c5ce7`               | Color of the progress fill           |
| `--progress-shimmer-color` | `rgba(255,255,255,0.4)` | Color of the shimmer sweep highlight |

## Why?

Adds a polished, motion-rich progress indicator without JavaScript. The shimmer sweep creates a glass-like reflection that moves across the fill, giving a modern, creative feel. Respects `prefers-reduced-motion` for accessibility.
