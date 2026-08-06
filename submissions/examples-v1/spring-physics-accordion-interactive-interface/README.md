# CSS Spring Physics Accordion — Interactive Interface Layout

A pure CSS accordion where the expand/collapse animation uses an overshoot easing curve to mimic spring physics damping — no JavaScript animation logic required.

## CSS Custom Properties

| Property                          | Default   | Description                          |
|--------------------------------------|-----------|------------------------------------------|
| `--ease-accordion-spring-duration`   | `0.55s`   | Expand/collapse transition duration        |
| `--ease-accordion-spring-easing`     | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Overshoot easing curve simulating spring damping |
| `--ease-accordion-bg`                | `#ffffff` | Item background color                      |
| `--ease-accordion-accent`            | `#4f46e5` | Icon and focus ring color                  |
| `--ease-accordion-radius`            | `12px`    | Item corner radius                         |

## Usage

```html
<div class="ease-accordion">
  <div class="ease-accordion__item">
    <button class="ease-accordion__header" aria-expanded="false">
      Question
      <svg class="ease-accordion__icon">...</svg>
    </button>
    <div class="ease-accordion__panel">
      <div class="ease-accordion__panel-inner">
        <div class="ease-accordion__body">Answer content</div>
      </div>
    </div>
  </div>
</div>
```

Toggle `ease-accordion__item--open` and `aria-expanded` on the header (see `demo.html`). The panel expands via `grid-template-rows: 0fr → 1fr`, and the body content fades/slides in with the same spring easing.

## Accessibility

- Native `<button>` headers with `aria-expanded` reflecting state.
- Fully keyboard operable.
- Visible `:focus-visible` outline.
- `prefers-reduced-motion: reduce` swaps the overshoot spring curve for a fast, simple `ease` transition — no bounce.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed classes and CSS custom properties for spring-curve/timing theming, consistent with the framework's zero-dependency philosophy. Demonstrates that convincing "physics-based" motion doesn't require JS spring libraries — a well-chosen `cubic-bezier()` overshoot curve gets remarkably close.
