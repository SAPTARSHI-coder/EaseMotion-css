# CSS 3D Perspective Tilt Accordion — Interactive Interface Layout

A pure CSS accordion where each item subtly tilts in 3D space on hover using `perspective` and `rotateX`, flattening back to neutral when expanded.

## CSS Custom Properties

| Property                        | Default   | Description                          |
|------------------------------------|-----------|------------------------------------------|
| `--ease-accordion-tilt-angle`      | `6deg`    | Hover tilt rotation angle                  |
| `--ease-accordion-perspective`     | `800px`   | 3D perspective depth for the container      |
| `--ease-accordion-duration`        | `0.4s`    | Transition duration                        |
| `--ease-accordion-easing`          | `cubic-bezier(0.4, 0, 0.2, 1)` | Transition easing curve |
| `--ease-accordion-bg`              | `#ffffff` | Item background color                      |
| `--ease-accordion-accent`          | `#4f46e5` | Icon and focus ring color                  |
| `--ease-accordion-radius`          | `12px`    | Item corner radius                         |

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

Toggle the `ease-accordion__item--open` class on an item and `aria-expanded` on its header (see `demo.html` for the toggle logic). The expand/collapse itself uses a `grid-template-rows: 0fr → 1fr` technique for smooth height animation without JS-measured heights.

## Accessibility

- Each header is a real `<button>` with `aria-expanded` reflecting state.
- Fully keyboard operable (native button focus/Enter/Space).
- Visible `:focus-visible` outline on headers.
- `prefers-reduced-motion: reduce` disables the tilt transform, keeping only a subtle shadow change.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed classes and CSS custom properties for tilt/timing theming, consistent with the framework's zero-dependency philosophy. The `grid-template-rows` expand technique avoids the common `max-height` hack, giving a smoother, content-agnostic collapse animation.
