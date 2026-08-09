# Scroll-Driven Border Fill (`sbf-section`)

## What does this do?

A pure CSS card grid where each card's `conic-gradient` border fills progressively as it scrolls into view. Uses `@property` to register an animatable custom property, then drives it with `view-timeline` — no JavaScript required.

## How is it used?

```html
<section class="sbf-section" aria-label="Feature cards">
  <article class="sbf-card" tabindex="0">
    <span class="sbf-card__icon" aria-hidden="true">⚡</span>
    <h3 class="sbf-card__title">Card title</h3>
    <p class="sbf-card__desc">Card description goes here.</p>
  </article>
  <!-- Add up to 6 cards -->
</section>
```

```css
@import url('style.css');
```

## How does it work?

1. `@property --sbf-border-progress` registers a `<percentage>` that the browser can interpolate
2. Each `.sbf-card` gets a unique `view-timeline-name` via scoped custom property (`--_card-timeline`)
3. `::before` pseudo-element uses a `conic-gradient` as the border, with the angle and fill amount both animated via `animation-timeline: var(--_card-timeline)`
4. As the card enters the viewport, the gradient border fills from 0% to 100% while spinning 360 degrees

## Key features

- **Scroll-driven**: Border fill tracks actual scroll position, not time
- **Independent cards**: Each card gets its own `view-timeline-name`, so borders animate independently
- **Alternating palettes**: Every 2nd and 3rd card cycles through different gradient color combos
- **Progressive enhancement**: `@supports` guard falls back to a static border
- **Responsive**: Single column on mobile, 2-column grid at 640px+
- **Full a11y**: `prefers-reduced-motion`, `prefers-contrast`, `forced-colors`, `:focus-visible`, print styles

## Browser support

| Browser | Support |
|---------|---------|
| Chrome 115+ / Edge 115+ | Full scroll-driven animations |
| Firefox / Safari | Falls back to static bordered cards |

## Accessibility

- `prefers-reduced-motion`: Animations disabled, static border shown
- `prefers-contrast: high`: High contrast override
- `forced-colors: active`: Border uses system colors
- `:focus-visible`: Keyboard focus ring on cards
- Print styles: Clean bordered cards with `break-inside: avoid`
