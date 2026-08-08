# Sticky Card Cascade (`ease-cascade`)

## What does this do?

A pure CSS scroll-driven sticky card section where each feature card stacks using `position: sticky` and animates into view with `view-timeline` — creating an Apple-style product showcase experience with zero JavaScript.

## How is it used?

```html
<section class="ease-cascade" aria-label="Feature showcase">
  <ol class="ease-cascade__list">
    <li class="ease-cascade__item">
      <div class="ease-cascade__card">
        <div class="ease-cascade__content">
          <span class="ease-cascade__step">Step 1</span>
          <h2 class="ease-cascade__title">Your Title</h2>
          <p class="ease-cascade__desc">Your description text.</p>
        </div>
        <div class="ease-cascade__visual" aria-hidden="true">🎨</div>
      </div>
    </li>
    <!-- Add more <li> items as needed -->
  </ol>
</section>
```

## Why is it useful?

This component fills a gap in EaseMotion CSS for **scroll-driven storytelling layouts**. It leverages modern CSS APIs (`position: sticky`, `view-timeline-name`, `animation-timeline: view()`, `color-mix()`, `@container`) to deliver a polished, highly accessible interactive experience that:

- **Works without JavaScript** — pure CSS progressive enhancement
- **Auto-staggers** — each card independently triggers its entrance/exit animation via its own `view-timeline`
- **Auto-colors** — 6-card color cycle using `:nth-child()` + `color-mix()` for visual backgrounds
- **Gracefully degrades** — falls back to plain static cards in unsupported browsers
- **Fully accessible** — respects `prefers-reduced-motion`, `prefers-color-scheme`, `prefers-contrast`, `forced-colors`, and includes print styles
- **Container-responsive** — uses `@container` queries to switch between stacked and side-by-side layouts

### Modern CSS APIs demonstrated

| Feature | Usage |
|---|---|
| `position: sticky` | Cards stack as user scrolls |
| `view-timeline-name` | Each card gets its own scroll timeline |
| `animation-timeline: view()` | Attaches animation to scroll progress |
| `animation-range` | Controls when animation triggers |
| `color-mix()` | Tints visual backgrounds from accent colors |
| `@container` | Responsive layout without media queries |
| `@supports` | Progressive enhancement for unsupported browsers |
