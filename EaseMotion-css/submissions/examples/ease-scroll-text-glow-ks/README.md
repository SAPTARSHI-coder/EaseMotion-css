# Scroll-Driven Text Glow Reveal (`stg-section`)

## What does this do?

A pure CSS section where headings gain a neon text-shadow glow progressively as they scroll into view. Uses `@property` (syntax: `<length>` + `<number>`) combined with `view-timeline-name` and `animation-timeline: view()` to smoothly interpolate `text-shadow` blur, spread, and opacity — zero JavaScript.

## How is it used?

```html
<section class="stg-section" aria-label="Feature highlights">
  <article class="stg-reveal">
    <h2 class="stg-reveal__heading">Your Heading</h2>
    <p class="stg-reveal__body">Your paragraph text.</p>
  </article>
  <!-- Repeat .stg-reveal blocks as needed -->
</section>
```

Add `style.css` and you're done. Each `.stg-reveal` block gets its own `view-timeline-name` scope so cards animate independently as they enter the viewport.

## Browser support

- **Chrome 115+ / Edge 115+**: Full scroll-driven `@property` + `text-shadow` interpolation.
- **Firefox / Safari**: Falls back to static text with no glow via `@supports not (animation-timeline: view())`.

## Accessibility

- `prefers-reduced-motion`: All animations disabled, text visible immediately.
- `prefers-color-scheme`: Full light mode support.
- `prefers-contrast: high`: Simplified text-shadow + black background.
- `forced-colors: active`: Outline-based visibility instead of glow.
- `:focus-visible`: Keyboard focus ring on each article block.
- Print styles: Static layout with border separators.
