# CSS Jello-Hover Accordion — Interactive Interface Layout

A pure CSS accordion where each item wobbles with a playful squash-and-stretch "jello" effect on hover, built entirely with a CSS keyframe animation.

## CSS Custom Properties

| Property                       | Default   | Description                          |
|-----------------------------------|-----------|------------------------------------------|
| `--ease-accordion-jello-duration` | `0.6s`    | Duration of the hover wobble animation      |
| `--ease-accordion-jello-easing`   | `cubic-bezier(0.68, -0.6, 0.32, 1.6)` | Overshoot easing curve for the wobble |
| `--ease-accordion-bg`             | `#ffffff` | Item background color                      |
| `--ease-accordion-accent`         | `#4f46e5` | Icon and focus ring color                  |
| `--ease-accordion-radius`         | `12px`    | Item corner radius                         |

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

Hovering an item triggers the `ease-jello-wobble` keyframe (alternating `scaleX`/`scaleY` values simulating squash-and-stretch). Open/close state is independent, toggled via `ease-accordion__item--open`.

## Accessibility

- Native `<button>` headers with `aria-expanded`.
- Fully keyboard operable.
- Visible `:focus-visible` outline.
- `prefers-reduced-motion: reduce` disables the wobble animation entirely.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed classes and CSS custom properties for wobble timing/easing theming, consistent with the framework's zero-dependency philosophy. The squash-and-stretch technique uses only `transform: scale()` keyframes — no plugins or JS physics needed.
