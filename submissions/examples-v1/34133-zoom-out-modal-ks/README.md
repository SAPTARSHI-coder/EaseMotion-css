# Zoom-Out Modal

**Issue:** #34133
**Category:** Modal / Animation
**Tech Stack:** Pure HTML + CSS — zero JavaScript

---

## What the Component Does

A CSS-only modal dialog that opens with a smooth Zoom-Out entrance animation. The modal uses a dedicated CSS keyframe animation named `zoom-out` — starting slightly enlarged (`scale(1.08)`) and transparent, then easing into its natural size and full opacity — giving a polished, purposeful feel without JavaScript. The overlay fades in simultaneously using a CSS transition. Open and close are driven entirely by a hidden `<input type="checkbox">` and CSS `:checked` sibling selectors.

---

## Features

- **Zoom-Out entrance** — modal animates from `scale(1.08), opacity: 0` to `scale(1), opacity: 1` using a dedicated CSS keyframe animation (`@keyframes zoom-out`) that plays once every time the modal opens.
- **CSS-only toggle** — no JavaScript whatsoever. Open/close is handled by a hidden checkbox and label elements.
- **Frosted overlay** — semi-transparent dark backdrop with `backdrop-filter: blur` for depth.
- **Semantic HTML** — `<main>`, `<article>`, `<header>`, `<div>`, `<footer>`, `<h2>`, `<p>` with no unnecessary wrappers.
- **Full accessibility** — `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`, descriptive `aria-label` on interactive controls, and visible `:focus-visible` rings.
- **Reduced-motion safe** — `@media (prefers-reduced-motion: reduce)` disables all transitions and animations; the modal simply appears instantly.
- **Responsive** — `clamp()` for modal width; footer buttons stretch full-width on mobile.
- **Zero dependencies** — open `demo.html` directly in any modern browser, no build step required.

---

## How to Use

1. Copy the `34133-zoom-out-modal-ks/` folder into your project.
2. Open `demo.html` in any modern browser to preview immediately.

To embed in an existing page:

```html
<!-- 1. Link the stylesheet -->
<link rel="stylesheet" href="style.css" />

<!-- 2. Hidden checkbox toggle -->
<input type="checkbox" id="modal-toggle" aria-hidden="true" tabindex="-1" />

<!-- 3. Trigger -->
<label for="modal-toggle" class="btn-trigger" tabindex="0"
       aria-haspopup="dialog">
  Open Settings
</label>

<!-- 4. Overlay + modal -->
<div class="modal-overlay">
  <article class="modal" role="dialog" aria-modal="true"
           aria-labelledby="modal-title" aria-describedby="modal-desc">

    <header class="modal__header">
      <div>
        <h2 class="modal__title" id="modal-title">Your Title</h2>
        <p class="modal__subtitle" id="modal-desc">Supporting description.</p>
      </div>
      <label for="modal-toggle" class="modal__close"
             tabindex="0" aria-label="Close modal">&#x2715;</label>
    </header>

    <div class="modal__body">
      <p>Your modal body content goes here.</p>
    </div>

    <footer class="modal__footer">
      <label for="modal-toggle" class="btn-secondary"
             tabindex="0" aria-label="Cancel and close modal">Cancel</label>
      <label for="modal-toggle" class="btn-primary"
             tabindex="0" aria-label="Confirm action and close modal">Confirm</label>
    </footer>

  </article>
</div>
```

---

## Accessibility

- **Semantic structure** — the modal uses `<article>`, `<header>`, `<footer>`, and heading hierarchy. No `<div>` soup.
- **Dialog role** — `role="dialog"` and `aria-modal="true"` signal the modal's purpose to screen readers.
- **Labelling** — `aria-labelledby` references the `<h2>` title; `aria-describedby` references the subtitle paragraph, giving assistive technologies a complete description.
- **Interactive labels** — close, cancel, and confirm controls carry descriptive `aria-label` values.
- **Keyboard navigation** — all interactive elements carry `tabindex="0"` and are reachable via `Tab`. Every control has a visible `:focus-visible` ring using a contrasting indigo outline.
- **Reduced motion** — `@media (prefers-reduced-motion: reduce)` strips all `transition` and `animation` declarations. The modal and overlay appear at their final states immediately, with no motion whatsoever.

---

## CSS Variables

Override any of these on `:root` to theme the component:

| Variable | Default | Description |
|---|---|---|
| `--primary` | `#4f46e5` | Accent colour for buttons and focus rings |
| `--surface` | `#ffffff` | Modal card background |
| `--overlay` | `rgba(15, 23, 42, 0.65)` | Backdrop colour and opacity |
| `--radius` | `14px` | Border-radius for the card and buttons |
| `--duration` | `0.35s` | Controls the zoom animation duration and overlay fade timing. |
| `--shadow` | layered box-shadow | Depth shadow applied to the modal card |

**Example — softer, warmer theme:**

```css
:root {
  --primary:  #d97706;
  --overlay:  rgba(0, 0, 0, 0.5);
  --radius:   10px;
  --duration: 0.25s;
}
```

---

## Why It Fits EaseMotion CSS

EaseMotion CSS is built on the principle that motion should communicate state — not decorate. The Zoom-Out Modal puts that principle into practice directly:

- **The zoom communicates arrival.** Starting at `scale(1.08)` and settling to `scale(1)` signals that the modal has entered from "above" the page plane, giving the user a clear spatial cue that a new layer has appeared.
- **The animation plays once per open.** There are no loops, no idle motion, no effects that run without user intent. Every animation and transition is a direct response to a state change driven by the user.
- **Custom properties map to EaseMotion's token model.** `--duration` and `--primary` slot naturally alongside any EaseMotion-powered project, making the component trivially themeable without touching its internals.
- **Reduced motion is a first-class concern.** When the user's system preference is set, the modal appears with no animation at all — respecting accessibility without sacrificing functionality.

The component is fully self-contained inside `submissions/examples/34133-zoom-out-modal-ks/` — comprising only `demo.html`, `style.css`, and this `README.md`. No framework files, core styles, or existing components were modified. This follows EaseMotion CSS's submission-first contribution model, where new components are developed and reviewed in isolation before any potential integration into the framework.
