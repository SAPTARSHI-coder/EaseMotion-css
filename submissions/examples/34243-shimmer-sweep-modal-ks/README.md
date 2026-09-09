# Shimmer Sweep Modal — Neumorphic Soft Layout

**Issue:** #34243  
**Category:** Modal / Animation  
**Tech:** Pure HTML + CSS — zero JavaScript

---

## What the Component Does

A floating dialog modal built on a neumorphic soft-UI surface. The card appears to be extruded from the page background using dual box-shadows (light top-left, dark bottom-right). A diagonal shimmer highlight sweeps across the modal face in two intentional moments:

1. **On open** — fires once as the modal enters view.
2. **On hover or focus** — fires once whenever the user's pointer or keyboard focus re-engages with the card.

The shimmer never loops on its own, keeping the interface calm and distraction-free.

---

## Features

- **Pure CSS toggle** — open/close driven by a hidden `<input type="checkbox">` and `:checked` sibling selectors; no JavaScript needed.
- **Neumorphic depth** — authentic soft-UI achieved with dual `box-shadow` offsets (raised card, inset decorative field, raised buttons) all derived from a single base hue (`#e0e5ec`).
- **Purposeful shimmer** — `::before` pseudo-element with a `linear-gradient` stripe animates via `@keyframes shimmer-sweep` on open, hover, and focus-within. `animation-iteration-count: 1` ensures it never loops.
- **Smooth entrance** — modal slides up and fades in with a `translateY` + `opacity` transition on `:checked`.
- **Full accessibility** — `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`, `aria-label` on interactive elements, and prominent `:focus-visible` rings.
- **Reduced-motion safe** — all transitions and the shimmer animation are disabled when `prefers-reduced-motion: reduce` is set.
- **Responsive** — modal width uses `clamp(300px, 90vw, 520px)`; footer buttons stretch full-width on small screens.

---

## How to Use

1. Copy the `34243-shimmer-sweep-modal-ks/` folder into your project.
2. Open `demo.html` directly in any modern browser — no build step needed.
3. Click **Open Modal** to see the shimmer on entry, then hover or tab into the modal to re-trigger it.

To embed in an existing page:

```html
<!-- 1. Link the stylesheet -->
<link rel="stylesheet" href="style.css" />

<!-- 2. Hidden checkbox (the toggle engine) -->
<input type="checkbox" id="modal-toggle" aria-hidden="true" tabindex="-1" />

<!-- 3. Trigger -->
<label for="modal-toggle" class="modal-trigger" tabindex="0"
       aria-haspopup="dialog">
  Open Modal
</label>

<!-- 4. Overlay + modal -->
<div class="modal-overlay">
  <article class="modal" role="dialog" aria-modal="true"
           aria-labelledby="modal-title" aria-describedby="modal-desc">

    <header class="modal__header">
      <h2 class="modal__title" id="modal-title">Your Title</h2>
      <label for="modal-toggle" class="modal__close"
             tabindex="0" aria-label="Close modal">✕</label>
    </header>

    <div class="modal__body">
      <p id="modal-desc">Your content here.</p>
    </div>

    <footer class="modal__footer">
      <label for="modal-toggle" class="btn btn--ghost"
             tabindex="0">Cancel</label>
      <label for="modal-toggle" class="btn btn--primary"
             tabindex="0">Confirm</label>
    </footer>

  </article>
</div>
```

---

## Accessibility

This component is built with keyboard and assistive-technology users in mind:

- **Keyboard navigation** — every interactive element (trigger, close, cancel, confirm) is reachable using the `Tab` key. Visible focus indicators help keyboard users identify the currently focused element.
- **Visible focus indicators** — `:focus-visible` outlines are applied to all interactive elements using a contrasting accent color (`--neu-focus-ring: #6c8ebf`), meeting WCAG 2.1 SC 2.4.7 (Focus Visible).
- **ARIA roles and properties** — the modal article carries `role="dialog"` and `aria-modal="true"` to signal its purpose to screen readers. `aria-labelledby` points to the `<h2>` title and `aria-describedby` points to the body paragraph, giving assistive technologies a complete description of the dialog's intent. The trigger carries `aria-haspopup="dialog"`.
- **Reduced-motion support** — a `@media (prefers-reduced-motion: reduce)` block disables all CSS transitions and prevents the shimmer animation from running entirely, respecting users who are sensitive to motion.

---

## CSS Variables

Override any of these on `:root` (or a scoped selector) to customise the component:

| Variable | Default | Description |
|---|---|---|
| `--duration` | `0.9s` | Duration of the shimmer sweep animation |
| `--easing` | `cubic-bezier(0.4, 0, 0.2, 1)` | Timing function for shimmer and transitions |
| `--radius` | `20px` | Border-radius of the modal card and buttons |
| `--shimmer-color` | `rgba(255,255,255,0.52)` | Color of the diagonal shimmer highlight |

**Example — faster, tighter shimmer:**

```css
:root {
  --duration: 0.5s;
  --shimmer-color: rgba(255, 255, 255, 0.7);
  --radius: 12px;
}
```

---

## Why It Fits EaseMotion CSS

EaseMotion CSS is built around the idea that motion should be purposeful — enhancing perception of state change rather than decorating for its own sake. This component embodies that principle in two ways:

- **The shimmer communicates state.** It fires on open (the modal has arrived) and on re-engagement (the user is interacting). It does not run in the background doing nothing useful.
- **The animation is driven entirely by CSS custom properties.** `--duration` and `--easing` slot directly into EaseMotion's design-token philosophy, making the component instantly themeable alongside any EaseMotion-powered project.

The neumorphic surface also demonstrates how EaseMotion's `box-shadow`-based depth approach scales beyond simple cards — the same light-source logic applies to the raised trigger, the inset field, and the action buttons, creating a cohesive tactile system from a single base color.

The component is fully self-contained inside `submissions/examples/34243-shimmer-sweep-modal-ks/` — comprising only `demo.html`, `style.css`, and this `README.md`. No framework files, core styles, or existing components were modified in the process. This follows EaseMotion CSS's submission-first contribution model, where new components are developed and reviewed in isolation before any potential integration into the framework.
