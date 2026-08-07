# Rotate-Click Glassmorphism Modal

A pure-CSS animated modal dialog that opens with a smooth 3D rotate-click transition and is styled with a modern glassmorphism (frosted glass) aesthetic. **Zero JavaScript** is used for the open/close animation — everything is driven by a hidden checkbox and CSS state selectors, making the component lightweight, fully keyboard accessible, and easy to customize via CSS custom properties.

---

## 1. What does this do?

It renders an accessible modal dialog that opens and closes with a smooth rotate + scale + fade animation, backed by a blurred glassmorphism panel — all with zero JavaScript, and fully customizable through CSS variables for timing, easing, rotation angle, scale, blur, and colors.

## 2. How is it used?

The modal is driven by a hidden `<input type="checkbox">`. A `<label>` tied to that checkbox acts as the trigger, and another label inside the modal (or on the backdrop) closes it. Because native `<label>` elements are keyboard-focusable and clickable, this pattern is fully accessible without any JS.

### Minimal HTML usage

```html
<!-- State-holding checkbox (visually hidden, still focusable) -->
<input type="checkbox" id="modal-1" class="modal-toggle" aria-hidden="true" />

<!-- Trigger -->
<label for="modal-1" class="btn btn--primary" tabindex="0" role="button" aria-haspopup="dialog">
  Open Modal
</label>

<!-- Modal -->
<div class="ease-rc-modal" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
  <label for="modal-1" class="ease-rc-modal__backdrop" aria-label="Close modal"></label>

  <div class="ease-rc-modal__panel">
    <label for="modal-1" class="ease-rc-modal__close" aria-label="Close" tabindex="0" role="button">
      <span aria-hidden="true">×</span>
    </label>

    <h2 id="modal-1-title" class="ease-rc-modal__title">Modal Title</h2>
    <p class="ease-rc-modal__text">Your modal content goes here.</p>

    <div class="ease-rc-modal__actions">
      <label for="modal-1" class="btn btn--ghost" tabindex="0" role="button">Cancel</label>
      <a href="#confirm" class="btn btn--primary">Confirm</a>
    </div>
  </div>
</div>
```

### Available classes

| Class | Purpose |
|---|---|
| `.modal-toggle` | Hidden checkbox that holds the open/close state |
| `.ease-rc-modal` | Root modal wrapper (fixed, full-screen, centered) |
| `.ease-rc-modal--danger` | Modifier — red/orange tinted panel for destructive actions |
| `.ease-rc-modal__backdrop` | Blurred backdrop; clicking it closes the modal |
| `.ease-rc-modal__panel` | The glass card — rotates and scales in when opened |
| `.ease-rc-modal__close` | Circular close button (top-right); rotates on hover |
| `.ease-rc-modal__title` | Modal heading |
| `.ease-rc-modal__text` | Modal body copy |
| `.ease-rc-modal__input` | Styled input field for form-style modals |
| `.ease-rc-modal__actions` | Right-aligned action row |
| `.btn` / `.btn--primary` / `.btn--ghost` / `.btn--danger` | Button variants |

### Customizable design tokens (CSS custom properties)

All animation and visual parameters are exposed as CSS variables that can be overridden on the `.ease-rc-modal` root (or globally on `:root`).

```css
:root {
  --ease-rc-duration:    0.55s;                              /* animation duration     */
  --ease-rc-ease:        cubic-bezier(0.22, 1, 0.36, 1);     /* easing curve           */
  --ease-rc-rotate:      -12deg;                             /* Y-axis rotate angle    */
  --ease-rc-scale-from:  0.85;                               /* closed-state scale     */
  --ease-rc-scale-to:    1;                                  /* open-state scale       */
  --ease-rc-blur:        18px;                               /* backdrop-filter blur   */
  --ease-rc-panel-bg:    rgba(255, 255, 255, 0.08);          /* glass panel base       */
  --ease-rc-panel-brd:   rgba(255, 255, 255, 0.18);          /* glass panel border     */
  --ease-rc-backdrop:    rgba(10, 8, 30, 0.55);              /* full-screen backdrop   */
  --ease-rc-radius:      1.15rem;                            /* panel border radius    */
  --ease-rc-shadow:      0 25px 60px -15px rgba(0,0,0,0.6);  /* panel drop shadow      */
}
```

Example: a faster, more aggressive rotate:

```css
.my-modal {
  --ease-rc-duration: 0.35s;
  --ease-rc-rotate: -25deg;
  --ease-rc-scale-from: 0.7;
}
```

## 3. Why is it useful?

Modal dialogs are a foundational UI pattern used on nearly every product surface — confirmations, subscriptions, destructive-action guards, onboarding steps, and forms. This component fully embodies EaseMotion's **animation-first, zero-friction philosophy**:

- **Zero JavaScript overhead** — the open/close animation runs entirely through CSS, so it can be used in server-rendered pages, static sites, and even inside frameworks without any runtime logic.
- **Modern glassmorphism aesthetic** — matches contemporary iOS / macOS / visionOS design language.
- **Smooth rotate-click transition** — the panel enters with a subtle 3D rotate + scale that feels tactile and premium, instead of the typical instant snap.
- **Fully keyboard accessible** — labels associated with a focusable checkbox make the trigger reachable via Tab and activatable via Space/Enter.
- **Deeply customizable** — every timing, angle, scale, and color value is exposed as a CSS custom property, so contributors can drop this into a design system without rewriting the CSS.
- **Respects `prefers-reduced-motion`** — motion is disabled for users who request reduced motion.

---

## Features

- 🎬 **Rotate-click animation** — smooth 3D rotate + scale open/close
- 🪟 **Glassmorphism styling** — frosted glass panel with backdrop blur & saturation
- 🚫 **Zero JavaScript** — pure CSS state via checkbox-hack
- ⌨️ **Keyboard accessible** — Tab to focus, Space/Enter to trigger, works with screen readers
- 🎛️ **CSS custom properties** — tune duration, easing, rotate angle, scale, blur, colors
- 🎨 **Multiple variants** — default + danger tint (easy to extend)
- 📱 **Fully responsive** — mobile-first sizing, stacked actions on small screens
- ♿ **`prefers-reduced-motion` support** — motion disabled for accessibility
- 🧩 **Multiple modals per page** — each modal has its own independent checkbox

---

## Files

| File | Description |
|---|---|
| `demo.html` | Self-contained demo with 3 real-world modal examples (upgrade, delete, subscribe) |
| `style.css` | All component styles, animations, and design tokens |
| `README.md` | This documentation |

---

## Closes

Issue **#33277** — Enhancement: Add CSS Rotate-Click Modal for Glassmorphism UI Layouts
