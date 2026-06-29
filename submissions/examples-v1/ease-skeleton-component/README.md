# ease-skeleton — Shimmer Loading Placeholder Component

A CSS-only shimmer skeleton loader for EaseMotion CSS. Zero JavaScript. Full token customisation. Respects `prefers-reduced-motion`.

## Classes

| Class | Description |
|-------|-------------|
| `.ease-skeleton` | Base skeleton block — any size |
| `.ease-skeleton-text` | Single-line text placeholder |
| `.ease-skeleton-text-block` | Multi-line text block (last line auto-shortened) |
| `.ease-skeleton-avatar` | Circular avatar placeholder (3rem default) |
| `.ease-skeleton-avatar-sm` | Small avatar (2rem) |
| `.ease-skeleton-avatar-lg` | Large avatar (4rem) |
| `.ease-skeleton-btn` | Button-shaped placeholder (2.5rem × 8rem) |
| `.ease-skeleton-card` | Full card with padding and border |
| `.ease-skeleton-card-header` | Card header row with avatar + text |
| `.ease-skeleton-card-body` | Card body text lines |
| `.ease-skeleton-wave` | Reverse shimmer direction |
| `.ease-skeleton-no-shimmer` | Static background, no animation |

## CSS Custom Properties

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-skeleton-bg` | `--ease-color-neutral-200` | Base skeleton background |
| `--ease-skeleton-shimmer-from` | `--ease-color-neutral-100` | Shimmer highlight |
| `--ease-skeleton-shimmer-to` | `--ease-color-neutral-300` | Shimmer shadow |
| `--ease-skeleton-radius` | `--ease-radius-md` | Border radius |
| `--ease-skeleton-duration` | `1.6s` | Animation duration |
| `--ease-skeleton-height` | `1rem` | Default height |
| `--ease-skeleton-width` | `100%` | Default width |
| `--ease-skeleton-avatar-size` | `3rem` | Avatar diameter |

## Usage

```html
<!-- Basic block -->
<span class="ease-skeleton" style="height: 1rem; width: 80%;"></span>

<!-- Avatar -->
<span class="ease-skeleton ease-skeleton-avatar"></span>

<!-- Card skeleton -->
<div class="ease-skeleton-card">
  <div class="ease-skeleton-card-header">
    <span class="ease-skeleton ease-skeleton-avatar ease-skeleton-avatar-sm"></span>
    <div style="flex:1;">
      <span class="ease-skeleton" style="height:0.875rem;width:70%;"></span>
    </div>
  </div>
  <div class="ease-skeleton-card-body">
    <span class="ease-skeleton ease-skeleton-text"></span>
    <span class="ease-skeleton ease-skeleton-text"></span>
  </div>
</div>

<!-- Custom colors -->
<span class="ease-skeleton"
      style="--ease-skeleton-bg: rgba(108,99,255,0.15);
             --ease-skeleton-shimmer-from: rgba(108,99,255,0.3);">
</span>
```

## Accessibility

- Shimmer animation disabled when `prefers-reduced-motion: reduce` is set
- All skeleton elements are `display: block` — use `role="status"` and `aria-label="Loading"` on the container for screen reader support

## Dark Mode

Automatically adapts via `prefers-color-scheme: dark` — darker background and shimmer colors from the `--ease-color-neutral-*` scale.

Closes #11498
