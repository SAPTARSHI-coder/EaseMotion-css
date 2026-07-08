# ease-star-rating

## What does this do?

Provides a **star rating** component for displaying and collecting ratings. Supports 1-5 star display, half-stars, interactive click-to-rate, size variants, color themes, and animated entrance (bounce/zoom).

## How is it used?

```html
<div class="ease-rating">
  <span class="ease-star ease-star-filled"></span>
  <span class="ease-star ease-star-filled"></span>
  <span class="ease-star ease-star-filled"></span>
  <span class="ease-star ease-star-filled"></span>
  <span class="ease-star"></span>
</div>
```

### Available Classes

| Class | Purpose |
|-------|---------|
| `.ease-rating` | Star rating container (inline-flex) |
| `.ease-star` | Individual star (CSS clip-path) |
| `.ease-star-filled` | Filled star (amber) |
| `.ease-star-half` | Half-filled star (via `::before`) |
| `.ease-rating-interactive` | Clickable rating with cursor pointer |
| `.ease-rating-sm` | Small size (1em) |
| `.ease-rating-lg` | Large size (1.75em) |
| `.ease-rating-xl` | Extra large size (2.25em) |
| `.ease-rating-color-blue` | Blue star color |
| `.ease-rating-color-green` | Green star color |
| `.ease-rating-color-red` | Red star color |
| `.ease-rating-color-purple` | Purple star color |
| `.ease-rating-animate-bounce` | Bounce-in entrance animation |
| `.ease-rating-animate-zoom` | Zoom-in entrance animation |
| `.ease-rating-score` | Text score label |
| `.ease-rating-label` | Text label beside rating |

### Size Variants

| Class | Star Size | Best for |
|-------|-----------|----------|
| `.ease-rating-sm` | 1em | Compact lists, product cards |
| (default) | 1.25em | Standard ratings |
| `.ease-rating-lg` | 1.75em | Reviews, testimonials |
| `.ease-rating-xl` | 2.25em | Hero sections, featured content |

### Color Themes

| Class | Color |
|-------|-------|
| (default) | Amber `#f59e0b` |
| `.ease-rating-color-blue` | Blue `#3b82f6` |
| `.ease-rating-color-green` | Green `#16a34a` |
| `.ease-rating-color-red` | Red `#dc2626` |
| `.ease-rating-color-purple` | Purple `#8b5cf6` |

### Animation

| Class | Keyframes | Delay |
|-------|-----------|-------|
| `ease-rating-animate-bounce` | `ease-star-bounce-in` | 0.05s stagger per star |
| `ease-rating-animate-zoom` | `ease-star-zoom-in` | 0.05s stagger per star |

### Interactive (JavaScript)

The demo includes JS that handles hover preview and click-to-rate. Data attributes (`data-value`) on each star track the position (1-5).

### Design Tokens Used

| Token | Fallback | Purpose |
|-------|----------|---------|
| `--ease-rating-color` | `#f59e0b` | Filled star color |
| `--ease-rating-empty` | `#e2e8f0` / `#475569` | Empty star color |
| `--ease-color-neutral-200` | `#e2e8f0` | Empty star (light) |
| `--ease-color-neutral-400` | `#94a3b8` | Label text |
| `--ease-color-neutral-500` | `#64748b` | Score text |
| `--ease-color-neutral-600` | `#475569` | Empty star (dark) |
| `--ease-text-sm` | `0.875rem` | Score font size |
| `--ease-text-xs` | `0.75rem` | Label font size |
| `--ease-speed-fast` | `150ms` | Star transition |

Fixes #25558
