# CSS Jello-Hover Accordion — SaaS Showcase Layout

A pure CSS accordion where each header wobbles playfully on hover, styled with a clean purple-accented SaaS product aesthetic — ideal for FAQ sections.

## CSS Custom Properties

| Property                          | Default                                   | Description                              |
|-------------------------------------|-----------------------------------------------|-------------------------------------------|
| `--ease-accordion-jello-duration`  | `0.45s`                                       | Duration of the expand/collapse transition |
| `--ease-accordion-jello-easing`    | `cubic-bezier(0.68, -0.55, 0.27, 1.55)`      | Overshoot easing curve for the jello wobble|
| `--ease-accordion-bg`              | `#ffffff`                                     | Panel background color                     |
| `--ease-accordion-border`          | `#e5e7eb`                                     | Panel border color                         |
| `--ease-accordion-accent`          | `#6d28d9`                                     | Accent color (icon, hover background)      |
| `--ease-accordion-accent-soft`     | `#ede9fe`                                     | Soft accent background on header hover     |
| `--ease-accordion-radius`          | `12px`                                        | Panel corner radius                        |
| `--ease-accordion-max-width`       | `480px`                                       | Maximum accordion width                    |
| `--ease-accordion-focus-ring`      | `#6d28d9`                                     | Focus outline color                        |

## Usage

```html
<div class="ease-accordion">
  <div class="ease-accordion__item" data-open="false">
    <button class="ease-accordion__header" aria-expanded="false">
      <span>Question</span>
      <svg class="ease-accordion__icon">...</svg>
    </button>
    <div class="ease-accordion__panel">
      <div class="ease-accordion__body">Answer content</div>
    </div>
  </div>
</div>
```

Toggle `data-open="true"` on `.ease-accordion__item` (and `aria-expanded` on the header) to expand/collapse. The jello wobble triggers automatically on header `:hover` via a CSS keyframe.

## Accessibility

- Each header is a real `<button>` with `aria-expanded` reflecting open state.
- Fully keyboard operable — headers are natively focusable and clickable via Enter/Space.
- Visible `:focus-visible` outline on headers.
- `prefers-reduced-motion: reduce` disables the wobble animation and collapse transition.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed class names and exposes timing/easing via CSS custom properties for easy theming, matching the framework's zero-JS-overhead, animation-first philosophy. The minimal JS included only toggles the open/closed data attribute — not the animation itself.
