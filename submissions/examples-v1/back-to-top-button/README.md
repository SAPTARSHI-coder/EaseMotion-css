# Back to Top Button

A production-grade floating scroll-to-top button for EaseMotion CSS with an SVG progress ring, spring-physics entrance animation, pulse on appear, CSS variable theming, and full accessibility support.

---

## Features

| Feature | Description |
|---|---|
| **SVG progress ring** | Circular ring fills as the user scrolls down the page |
| **Spring entrance** | Button appears with a cubic-bezier overshoot + pulse ring |
| **Smooth scroll** | Native `scrollTo({ behavior: 'smooth' })` |
| **CSS variable theming** | 7 custom properties — change color, size, position from `:root` |
| **Pulse on appear** | One-shot pulse ring animation when the button first shows |
| **Hover lift** | Button lifts with a shadow boost on hover |
| **Reduced-motion safe** | All animations disabled via `prefers-reduced-motion: reduce` |
| **Accessible** | `aria-label`, keyboard-focusable, `role` on wrapper |

---

## Files

```
submissions/examples/back-to-top-button/
├── demo.html    — self-contained demo, opens directly in browser
├── style.css    — the feature CSS (what gets integrated)
├── btt.js       — scroll listener, progress ring, class toggler
└── README.md    — this file
```

---

## Usage

**1. Add the markup to `<body>`:**
```html
<div class="em-btt-wrap" id="emBttWrap" role="complementary" aria-label="Back to top">
  <svg class="em-btt-svg" viewBox="0 0 52 52" aria-hidden="true">
    <circle class="em-btt-track"    cx="26" cy="26" r="23" />
    <circle class="em-btt-progress" cx="26" cy="26" r="23" id="emBttProgress" />
  </svg>
  <button class="em-btt" id="emBtt" aria-label="Scroll back to top">
    <span class="em-btt-arrow" aria-hidden="true"></span>
  </button>
</div>
```

**2. Link the stylesheet and script:**
```html
<link rel="stylesheet" href="style.css">
<script src="btt.js"></script>
```

**3. (Optional) Override the theme:**
```css
:root {
  --em-btt-color: #0ea572;     /* main color */
  --em-btt-size: 56px;         /* button + ring size */
  --em-btt-bottom: 32px;       /* distance from bottom */
  --em-btt-right: 32px;        /* distance from right */
}
```

---

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--em-btt-color` | `#6c63ff` | Main button and ring color |
| `--em-btt-accent` | `#ff6584` | Reserved for accent states |
| `--em-btt-size` | `52px` | Total width/height of the component |
| `--em-btt-bottom` | `28px` | Distance from bottom of viewport |
| `--em-btt-right` | `28px` | Distance from right of viewport |
| `--em-btt-radius` | `50%` | Button border radius |
| `--em-btt-ring-width` | `3px` | SVG ring stroke width |

---

## Accessibility

- Button has `aria-label="Scroll back to top"` for screen readers
- Fully keyboard-navigable (tab + enter/space)
- `prefers-reduced-motion: reduce` disables all animations and transitions
- `pointer-events: none` on wrapper when hidden prevents ghost clicks

---

## Browser Testing

| Browser | Tested | Result |
|---|---|---|
| Chrome 125+ | ✅ | Pass |
| Firefox 126+ | ✅ | Pass |
| Edge 125+ | ✅ | Pass |
| Safari 17+ | ✅ | Pass |

---

## Why it fits EaseMotion CSS

EaseMotion CSS is animation-first. This component:
- Expresses every state (hidden, visible, hover, active) via CSS transitions and `@keyframes`
- Exposes 7 CSS custom properties for zero-config theming
- Keeps JS as a thin scroll listener — only class toggling and one SVG attribute update
- Follows the `em-` naming convention
- Requires zero dependencies and zero build tools

Fixes #[ISSUE_NUMBER]