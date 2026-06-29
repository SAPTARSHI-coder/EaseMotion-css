# ease-underline-draw

Animated underline draw-in on hover using CSS `scaleX` and `transform-origin`. Zero JavaScript required.

## Usage

```html
<!-- Draw from left (default) -->
<a class="ease-underline-draw" href="#">Hover to draw underline</a>

<!-- Center out -->
<span class="ease-underline-draw ease-underline-draw-center">From center</span>

<!-- Right to left -->
<span class="ease-underline-draw ease-underline-draw-rtl">Right to left</span>
```

## Direction Variants

| Class | Direction |
|---|---|
| `ease-underline-draw` | Left to right (default) |
| `ease-underline-draw-rtl` | Right to left |
| `ease-underline-draw-center` | Center outward |
| `ease-underline-erase` | Always visible, erases on hover |
| `ease-underline-draw-double` | Two lines animate from opposite sides |

## Color Variants

| Class | Color |
|---|---|
| (default) | `currentColor` |
| `ease-underline-primary` | Indigo |
| `ease-underline-success` | Green |
| `ease-underline-danger` | Red |
| `ease-underline-warning` | Amber |
| `ease-underline-info` | Blue |
| `ease-underline-gradient` | Indigo → purple → pink gradient |

## Thickness Variants

| Class | Height |
|---|---|
| `ease-underline-thin` | 1px |
| (default) | 2px |
| `ease-underline-thick` | 4px |
| `ease-underline-block` | 8px |

## Speed Variants

| Class | Duration |
|---|---|
| `ease-underline-fast` | 0.15s |
| (default) | 0.3s |
| `ease-underline-slow` | 0.6s |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-underline-color` | `currentColor` | Line color |
| `--ease-underline-height` | `2px` | Line thickness |
| `--ease-underline-speed` | `0.3s` | Transition duration |
| `--ease-underline-radius` | `999px` | Line border-radius |

## How It Works

A `::after` pseudo-element is placed at the bottom of the element, full width, with `scaleX(0)`. On hover, `scaleX` transitions to `1`. The `transform-origin` controls which side it draws from. No text-decoration is used — this works on any inline or inline-block element.

## Submission

- **Author:** sudha09-git
- **Issue:** #3854
- **Files:** `style.css`, `demo.html`
