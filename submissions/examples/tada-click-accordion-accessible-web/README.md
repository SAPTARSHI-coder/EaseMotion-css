# CSS Tada-Click Accordion — Accessible Web Layout

A pure CSS accordion where each header plays a quick "tada" scale-and-rotate burst on click, giving a strong, non-color-dependent confirmation that the action registered.

## CSS Custom Properties

| Property                          | Default        | Description                              |
|-------------------------------------|-------------------|---------------------------------------------|
| `--ease-accordion-tada-duration`  | `0.6s`             | Duration of the tada click animation        |
| `--ease-accordion-tada-easing`    | `ease-in-out`      | Easing curve for the tada burst             |
| `--ease-accordion-bg`             | `#ffffff`          | Panel background color                      |
| `--ease-accordion-border`         | `#d1d5db`          | Panel border color                          |
| `--ease-accordion-accent`         | `#1d4ed8`          | Accent color (icon)                         |
| `--ease-accordion-accent-soft`    | `#dbeafe`          | Soft accent background on hover             |
| `--ease-accordion-radius`         | `10px`             | Panel corner radius                         |
| `--ease-accordion-max-width`      | `520px`            | Maximum accordion width                     |
| `--ease-accordion-focus-ring`     | `#1d4ed8`          | Focus outline color                         |

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

Add the `is-tada` class on click (removing it on `animationend`) to replay the tada burst; toggle `data-open`/`aria-expanded` to expand/collapse.

## Accessibility

- Each header is a real `<button>` with `aria-expanded` reflecting open state.
- Fully keyboard operable — Enter/Space both trigger the same click handler and tada animation.
- Bold 2px border and strong focus outline ensure state is never conveyed by color alone.
- `prefers-reduced-motion: reduce` disables the tada animation and collapse transition.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed class names and exposes timing/easing via CSS custom properties for easy theming, matching the framework's zero-JS-overhead, animation-first philosophy. The minimal JS included only toggles classes/attributes — not the animation itself.
