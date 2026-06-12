# ease-counter

Animated number count-up using CSS `@property`, `counter()`, and `animation-timeline: view()`. Zero JavaScript required.

## Usage

```html
<!-- Count up to 500 on page load -->
<div class="ease-counter" style="--ease-counter-to: 500;"></div>

<!-- Count up to 500 when scrolled into view -->
<div class="ease-counter-scroll" style="--ease-counter-to: 500;"></div>
```

## How It Works

- `@property --ease-count` declares an animatable integer CSS custom property
- `counter-reset` and `counter()` render the number as text via `::after`
- `animation-timeline: view()` triggers the animation as the element enters the viewport

## Variants

| Class                 | Description                                       |
| --------------------- | ------------------------------------------------- |
| `ease-counter`        | Animates on page load                             |
| `ease-counter-scroll` | Scroll-triggered via `animation-timeline: view()` |
| `ease-counter-fast`   | 0.8s duration                                     |
| `ease-counter-slow`   | 3.5s duration                                     |

## Delay Variants (for staggered groups)

| Class            | Delay |
| ---------------- | ----- |
| `ease-delay-100` | 100ms |
| `ease-delay-200` | 200ms |
| `ease-delay-300` | 300ms |
| `ease-delay-400` | 400ms |
| `ease-delay-500` | 500ms |

## Custom Property

| Property            | Default | Description                  |
| ------------------- | ------- | ---------------------------- |
| `--ease-counter-to` | `100`   | Target number to count up to |

## Browser Support

Requires `@property` (Chrome 85+) and `animation-timeline: view()` (Chrome 115+) for the scroll variant. Falls back gracefully — shows the final number statically in unsupported browsers.

## Submission

- **Author:** sudha09-git
- **Issue:** #3824
- **Files:** `style.css`, `demo.html`
