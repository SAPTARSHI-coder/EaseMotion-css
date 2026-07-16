# Shadow Pop Alert Banner

**Issue:** #41466
**Category:** Alert / Animation
**Tech Stack:** Pure HTML + CSS — zero JavaScript

---

## Description

A modern, production-ready alert banner component for the EaseMotion CSS library. Each alert enters the page with a **Shadow Pop** animation — scaling up from 90% while fading in, with the `box-shadow` visibly bursting outward at peak scale (1.04×) before the alert settles to its resting size and soft layered shadow. The component integrates directly with the EaseMotion CSS utility layer: it links `core/variables.css` and `core/animations.css`, applies existing `.ease-zoom-in` and `.ease-delay-*` classes, and references EaseMotion design tokens (`--ease-*`) throughout its custom styles. The custom `@keyframes shadow-pop` fills the gap — it extends the base zoom-in with an explicit per-variant coloured shadow burst that does not yet exist in the library.

---

## Features

- **EaseMotion CSS integration** — links `core/variables.css` and `core/animations.css`; applies `.ease-zoom-in` (scale+fade entrance) and `.ease-delay-100/200/400/600` (stagger) from the library; uses `--ease-ease-bounce`, `--ease-speed-*`, `--ease-shadow-*`, `--ease-color-*`, `--ease-radius-*`, `--ease-space-*`, and `--ease-font-sans` design tokens.
- **Shadow Pop entrance** — custom `@keyframes shadow-pop` with three stops: invisible → peak scale with large coloured shadow burst → settled. Each variant injects its own shadow colour via `--pop-shadow` so the burst matches the variant's accent.
- **Four semantic variants** — Success (green), Info (blue), Warning (amber), Error (red). All colours, shadows, and button states are driven by CSS custom properties.
- **Wider container** — `max-width: 740px` matches modern dashboard and analytics alert contexts.
- **Natural stagger** — delays of 0 / 0.2s / 0.4s / 0.6s between alerts, with `.ease-delay-*` classes providing the EaseMotion-native implementation.
- **Improved hover** — `translateY(-3px) scale(1.01)` lift with an amplified coloured shadow; aligns with the `.ease-hover-lift-shadow` pattern from the library.
- **Improved dismiss button** — subtle `translateY(-1px)` lift on hover, active press-down, and a per-variant coloured `box-shadow` glow on hover. Smooth transitions on all states.
- **Visible focus ring** — `:focus-visible` outline uses `currentColor` so it matches the variant accent automatically.
- **Accessible** — `role="alert"` + `aria-live="assertive"` for Warning/Error; `role="status"` + `aria-live="polite"` for Info; `aria-atomic="true"` on all. Dismiss buttons are native `<button>` with unique `aria-label`. Icon emoji carry `aria-hidden="true"`.
- **Reduced-motion safe** — `@media (prefers-reduced-motion: reduce)` disables all animations and transitions; alerts render immediately at full opacity.
- **Responsive** — layout wraps at ≤ 520px; icon shrinks; padding reduces.
- **Zero JavaScript** — CSS-only, no scripting required.

---

## Folder Structure

```
submissions/
└── examples/
    └── 41466-shadow-pop-alert-banner-ks/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## Technologies Used

- HTML5 — semantic elements, ARIA live regions, native `<button>`
- CSS3 — custom properties, keyframe animations, flexbox, media queries
- EaseMotion CSS — `core/variables.css`, `core/animations.css`
- No JavaScript, no external libraries, no build tools

---

## How to Preview

**Option 1 — Direct file open (recommended):**
Open `demo.html` directly in any modern browser. The relative paths to EaseMotion core files (`../../../core/`) resolve correctly from the file system.

**Option 2 — VS Code Live Server:**
1. Open the repository root in VS Code.
2. Install the **Live Server** extension.
3. Right-click `demo.html` → **Open with Live Server**.

---

## Responsive Support

| Breakpoint | Behavior |
|---|---|
| Desktop (> 520px) | Full horizontal layout: icon → content → dismiss button in one row |
| Mobile (≤ 520px) | Layout wraps; icon shrinks to 2.1rem; dismiss button drops below content |

---

## Accessibility Notes

- **Live regions** — `role="alert"` + `aria-live="assertive"` for Warning and Error (time-sensitive). `role="status"` + `aria-live="polite"` for Info. All carry `aria-atomic="true"` so assistive technologies read the complete message on injection.
- **Dismiss buttons** — native `<button type="button">` elements with unique `aria-label` values describing which alert variant they dismiss. Fully keyboard-operable.
- **Focus indicators** — `:focus-visible` rings use `2.5px solid currentColor` with a 3px offset — contrasts against each variant's tinted background.
- **Decorative icons** — emoji icons use `aria-hidden="true"` so screen readers skip them and announce only the text content.
- **Color contrast** — all title and body text colors are chosen to meet WCAG 2.1 AA contrast ratios against their tinted alert backgrounds.
- **Reduced motion** — `@media (prefers-reduced-motion: reduce)` removes `shadow-pop`, `.ease-zoom-in`, all hover transforms, and all CSS transitions. Alerts render immediately at full opacity in their final position.

---

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--alert-radius` | `var(--ease-radius-lg)` | Alert card border-radius |
| `--alert-radius-btn` | `var(--ease-radius-md)` | Dismiss button border-radius |
| `--alert-duration` | `0.52s` | Shadow-pop animation duration |
| `--alert-hover-duration` | `0.22s` | Hover transition duration |
| `--alert-easing` | `var(--ease-ease-bounce)` | Spring easing for the pop animation |
| `--alert-easing-smooth` | `var(--ease-ease)` | Smooth easing for hover/dismiss transitions |
| `--*-shadow-pop` | per-variant | Coloured shadow used at peak scale in the pop keyframe |
