# CSS Wobble-Focus Accordion — Neumorphic Soft Layout

A pure CSS accordion where each header rocks with a subtle wobble on keyboard focus, styled with a soft neumorphic surface using dual-tone shadows.

## CSS Custom Properties

| Property                            | Default                              | Description                                |
|----------------------------------------|-------------------------------------------|-----------------------------------------------|
| `--ease-accordion-wobble-duration`   | `0.5s`                                    | Duration of the focus wobble animation        |
| `--ease-accordion-wobble-easing`     | `cubic-bezier(0.34, 1.56, 0.64, 1)`      | Easing curve for the wobble                   |
| `--ease-accordion-wobble-angle`      | `2.5deg`                                  | Maximum rotation angle of the wobble          |
| `--ease-accordion-bg`                | `#e6e9ef`                                 | Panel/page background (neumorphic base)       |
| `--ease-accordion-accent`            | `#6366f1`                                 | Accent color (icon)                           |
| `--ease-accordion-shadow-light`      | `#ffffff`                                 | Light-side neumorphic shadow                  |
| `--ease-accordion-shadow-dark`       | `#b8bcc7`                                 | Dark-side neumorphic shadow                   |
| `--ease-accordion-radius`            | `16px`                                    | Panel corner radius                           |
| `--ease-accordion-max-width`         | `500px`                                   | Maximum accordion width                       |
| `--ease-accordion-focus-ring`        | `#6366f1`                                 | Focus outline color                           |

## Usage

```html
<div class="ease-accordion">
  <div class="ease-accordion__item" data-open="false">
    <button class="ease-accordion__header" aria-expanded="false">
      <span>Notification Preferences</span>
      <svg class="ease-accordion__icon">...</svg>
    </button>
    <div class="ease-accordion__panel">
      <div class="ease-accordion__body">Content</div>
    </div>
  </div>
</div>
```

Toggle `data-open="true"` on `.ease-accordion__item` (and `aria-expanded` on the header) to expand/collapse. The wobble triggers automatically on header `:focus-visible` via a CSS keyframe.

## Accessibility

- Each header is a real `<button>` with `aria-expanded` reflecting open state.
- Fully keyboard operable — headers are natively focusable and clickable via Enter/Space.
- Neumorphic surfaces are famously low-contrast, so the wobble adds a motion-based focus cue beyond just the outline.
- `prefers-reduced-motion: reduce` disables the wobble animation and collapse transition.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed class names and exposes timing, easing, and wobble angle via CSS custom properties for easy theming, matching the framework's zero-JS-overhead, animation-first philosophy. The minimal JS included only toggles the open/closed data attribute — not the animation itself.
