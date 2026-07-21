# CSS Jello-Hover Accordion — Glassmorphism UI Layout

A pure CSS accordion where each header wobbles playfully on hover, wrapped in a frosted-glass (glassmorphism) visual style.

## CSS Custom Properties

| Property                          | Default                                   | Description                              |
|-------------------------------------|-----------------------------------------------|-------------------------------------------|
| `--ease-accordion-jello-duration`  | `0.5s`                                        | Duration of the expand/collapse transition |
| `--ease-accordion-jello-easing`    | `cubic-bezier(0.68, -0.55, 0.27, 1.55)`      | Overshoot easing curve for the jello wobble|
| `--ease-accordion-bg`              | `rgba(255, 255, 255, 0.15)`                  | Panel background (frosted glass)           |
| `--ease-accordion-border`          | `rgba(255, 255, 255, 0.3)`                   | Panel border color                         |
| `--ease-accordion-accent`          | `#7c3aed`                                     | Accent color                               |
| `--ease-accordion-radius`          | `14px`                                        | Panel corner radius                        |
| `--ease-accordion-max-width`       | `480px`                                       | Maximum accordion width                    |
| `--ease-accordion-focus-ring`      | `#7c3aed`                                     | Focus outline color                        |

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
