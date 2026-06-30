# ease-progress

A CSS-only progress bar component with animated fill, color variants, sizes, stripes, gradients, indeterminate state, vertical orientation, stacked segments, and label support.

## What

Progress bar built with CSS custom properties (`--ease-progress-value`) for dynamic width/height control. No JavaScript required for styling, transitions, or animations.

## How

1. Include `style.css`.
2. Add `<div class="ease-progress" style="--ease-progress-value: 50%;">` with a child `.ease-progress__bar`.
3. Optionally add `.ease-progress__label` inside the bar for overlay text.
4. Apply modifier classes for size, color, style, and orientation.

## Why

Provides a lightweight, reusable, accessible progress indicator that integrates with any framework. The value is set via CSS custom property, making it easy to update from JavaScript.

## Modifiers

### Sizes

| Class                | Height             |
| -------------------- | ------------------ |
| `ease-progress--sm`  | 0.375rem           |
| `ease-progress--md`  | 0.625rem (default) |
| `ease-progress--lg`  | 1rem               |
| `ease-progress--xl`  | 1.5rem             |
| `ease-progress--2xl` | 2rem               |

### Colors

| Class                      | Description    |
| -------------------------- | -------------- |
| `ease-progress--primary`   | Blue (default) |
| `ease-progress--secondary` | Gray           |
| `ease-progress--success`   | Green          |
| `ease-progress--danger`    | Red            |
| `ease-progress--warning`   | Amber          |
| `ease-progress--info`      | Cyan           |
| `ease-progress--accent`    | Purple         |
| `ease-progress--pink`      | Pink           |
| `ease-progress--orange`    | Orange         |

### Styles

| Class                          | Description                   |
| ------------------------------ | ----------------------------- |
| _(default)_                    | Solid fill                    |
| `ease-progress--striped`       | Diagonal stripe pattern       |
| `ease-progress--animated`      | Animated moving stripes       |
| `ease-progress--gradient`      | Gradient fill                 |
| `ease-progress--indeterminate` | Looping bar (no value needed) |

### Orientation & Layout

| Class                     | Description                                   |
| ------------------------- | --------------------------------------------- |
| _(default)_               | Horizontal                                    |
| `ease-progress--vertical` | Vertical (set height, value controls height%) |
| `ease-progress--stacked`  | Multiple segments in one bar                  |
| `.ease-progress__wrapper` | Flex container with label                     |

### Rounded

| Class                         | Description   |
| ----------------------------- | ------------- |
| `ease-progress--rounded-none` | Square        |
| _(default)_                   | 9999px (pill) |
| `ease-progress--rounded-sm`   | 0.25rem       |
| `ease-progress--rounded-lg`   | 0.5rem        |
| `ease-progress--rounded-xl`   | 0.75rem       |

## Sub-components

- `.ease-progress__bar` — The fill element
- `.ease-progress__label` — Overlay text inside the bar
- `.ease-progress__text` — Side label text (used in `.ease-progress__wrapper`)

## Accessibility

- Use `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax` attributes.
- Set `aria-label` for screen reader context.
- Respects `prefers-reduced-motion: reduce` by disabling all transitions and animations.
