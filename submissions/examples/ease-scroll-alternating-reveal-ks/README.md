# Scroll-Driven Alternating Side Reveal (`sar-section`)

## What does this do?

A pure CSS feature showcase where each row's visual and text content slide in from alternating sides (left/right/left/right) as they scroll into view. Each `.sar-row` gets its own scoped `view-timeline-name` so every row animates independently — zero JavaScript.

## How is it used?

```html
<section class="sar-section" aria-label="Feature highlights">

  <header class="sar-section__header">
    <h2 class="sar-section__title">Section Title</h2>
    <p class="sar-section__subtitle">Section description.</p>
  </header>

  <!-- Slides in from right -->
  <div class="sar-row">
    <div class="sar-row__visual">...</div>
    <div class="sar-row__content">
      <h3 class="sar-row__heading">Heading</h3>
      <p class="sar-row__text">Description.</p>
    </div>
  </div>

  <!-- Slides in from left — add sar-row--reverse -->
  <div class="sar-row sar-row--reverse">
    <div class="sar-row__visual">...</div>
    <div class="sar-row__content">
      <h3 class="sar-row__heading">Heading</h3>
      <p class="sar-row__text">Description.</p>
    </div>
  </div>

</section>
```

## Browser support

- **Chrome 115+ / Edge 115+**: Full scroll-driven alternating side-reveal animations.
- **Firefox / Safari**: Falls back to fully visible static layout via `@supports not (animation-timeline: view())`.

## Accessibility

- `prefers-reduced-motion`: All animations disabled, content fully visible.
- `prefers-color-scheme`: Full light mode support.
- `prefers-contrast: high`: White borders, black background.
- `forced-colors: active`: Static layout with border-based visibility.
- `:focus-visible`: Outline ring on each row.
- Print styles: Border separators between rows, all content visible.
