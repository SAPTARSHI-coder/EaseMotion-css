# content-visibility Stagger Reveal

Long-page layout where each section uses `content-visibility: auto` for off-screen rendering performance, while items animate in via `animation-timeline: view()`.

## Classes

| Class | Role |
|---|---|
| `ease-cv-section` | Section with `content-visibility: auto` + `contain-intrinsic-size` |
| `ease-cv-item` | Item that stagger-reveals via `view()` timeline and `--i` delay |

## Usage

```html
<section class="ease-cv-section">
  <div class="ease-cv-item" style="--i:0">Item A</div>
  <div class="ease-cv-item" style="--i:1">Item B</div>
</section>
```

## Key details

- `contain-intrinsic-size: 0 420px` preserves scroll height so the scrollbar doesn't jump when sections come into view
- `animation-delay: calc(var(--i, 0) * 60ms)` staggers items within each section
- `animation-timeline: view()` scoped to each item — fires when it enters the viewport
- Entire animation block inside `@supports (animation-timeline: scroll())` for compatibility
- `prefers-reduced-motion` sets items to `opacity: 1; transform: none` immediately

Closes #9604
