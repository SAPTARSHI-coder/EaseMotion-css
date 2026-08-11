# ease-skeleton

A CSS-only loading placeholder component with shimmer animation, multiple shape presets, color themes, speed control, and reduced-motion support.

## What

Pure CSS skeleton/shimmer loading placeholders using `::after` pseudo-elements with gradient animations. No JavaScript required.

## How

1. Include `style.css`.
2. Add `<div class="ease-skeleton ease-skeleton--{shape}">` to your markup.
3. Optionally apply modifier classes for colour, animation, speed, and roundedness.

## Why

Provides a lightweight, accessible, zero-dependency loading state for async content. Automatically respects `prefers-reduced-motion`.

## Modifiers

### Shapes
| Class | Description |
|---|---|
| `ease-skeleton--text` | Full-width text line (1em height) |
| `ease-skeleton--heading` | Wider heading line (1.5em height) |
| `ease-skeleton--avatar` | Circular avatar (3rem) |
| `ease-skeleton--avatar-sm` | Small avatar (2rem) |
| `ease-skeleton--avatar-lg` | Large avatar (4rem) |
| `ease-skeleton--button` | Button shape (6rem x 2.5rem) |
| `ease-skeleton--chip` | Pill chip shape |
| `ease-skeleton--thumbnail` | Square thumbnail (5rem) |
| `ease-skeleton--card` | Large card placeholder |
| `ease-skeleton--image` | 16:9 image aspect ratio |

### Animation
| Class | Description |
|---|---|
| _(default)_ | Shimmer sweep |
| `ease-skeleton--pulse` | Opacity pulse |
| `ease-skeleton--wave` | Wave variant |
| `ease-skeleton--fade` | Smooth fade loop |
| `ease-skeleton--static` | No animation |

### Speed
| Class | Description |
|---|---|
| _(default)_ | 1.5s |
| `ease-skeleton--fast` | 0.8s |
| `ease-skeleton--slow` | 3s |

### Color Themes
| Class | Description |
|---|---|
| _(default)_ | Gray |
| `ease-skeleton--primary` | Blue |
| `ease-skeleton--success` | Green |
| `ease-skeleton--danger` | Red |
| `ease-skeleton--warning` | Yellow |
| `ease-skeleton--dark` | Dark gray (for dark backgrounds) |

### Roundedness
| Class | Description |
|---|---|
| `ease-skeleton--rounded-none` | Square |
| `ease-skeleton--rounded-sm` | 0.25rem |
| _(default)_ | 0.375rem |
| `ease-skeleton--rounded-lg` | 0.5rem |
| `ease-skeleton--rounded-xl` | 0.75rem |
| `ease-skeleton--rounded-full` | 9999px |

### Width
| Class | Description |
|---|---|
| `ease-skeleton--width-25` | 25% width |
| `ease-skeleton--width-50` | 50% width |
| `ease-skeleton--width-75` | 75% width |

### Layout Wrappers
| Class | Description |
|---|---|
| `ease-skeleton__wrapper` | Vertical flex column |
| `ease-skeleton__wrapper--row` | Horizontal flex row |
| `ease-skeleton__wrapper--card` | Card with border, padding, vertical |
| `ease-skeleton__wrapper--card-row` | Card with horizontal layout |

## Accessibility

- All skeletons are non-interactive decorative elements.
- Use `aria-hidden="true"` on skeleton containers during loading.
- Automatically disables animation with `prefers-reduced-motion: reduce`.
