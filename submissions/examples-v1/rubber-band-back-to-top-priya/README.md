# Rubber Band Back To Top (CSS-Only)

A floating "back to top" button with a playful, elastic squash-and-stretch bounce inspired by classic rubber-band easing curves — built entirely with pure CSS, no JavaScript required.

## Features
* **Elastic Rubber-Band Bounce:** A custom `ease-kf-rubber-band` keyframe scales the button non-uniformly (squash/stretch) on hover and keyboard focus, giving it a tactile, springy feel.
* **Keyboard Accessible:** Triggers the same animation on `:focus-visible`, with a clear focus ring for keyboard-only users.
* **Reduced Motion Compliance:** Respects `prefers-reduced-motion` — disables the bounce and smooth scroll for users who need it.
* **Responsive:** Scales down gracefully on small screens so it never overlaps mobile content.
* **EaseMotion Token-Based:** Colors, durations, and easing curves pull from EaseMotion's shared design tokens (`--ease-color-primary`, `--ease-speed-slow`, `--ease-ease-bounce`) with local overrides available.

## Variable Reference Map

| CSS Parameter | Default Value | Purpose |
| :--- | :--- | :--- |
| `--ease-rb-size` | `52px` | Width/height of the circular button. |
| `--ease-rb-bg` | `var(--ease-color-primary)` | Background color of the button. |
| `--ease-rb-hover-bg` | `var(--ease-color-primary-dark)` | Background color on hover/focus. |
| `--ease-rb-duration` | `var(--ease-speed-slow)` (600ms) | Duration of the bounce animation. |
| `--ease-rb-bounce-curve` | `var(--ease-ease-bounce)` | Easing curve used for the elastic effect. |

## Usage
```html
<a href="#top" class="ease-rubber-back-to-top" aria-label="Back to top">
  <svg class="ease-rb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
</a>
```

## Customization
Override any of the CSS custom properties on `:root` or scoped to a parent container to theme the button without touching the core file:
```css
:root {
  --ease-rb-bg: #ff6b6b;
  --ease-rb-size: 60px;
}
```

## Accessibility Notes
* Uses `aria-label="Back to top"` since the icon alone has no accessible text.
* `:focus-visible` provides a visible outline for keyboard navigation.
* All motion is disabled under `prefers-reduced-motion: reduce`.