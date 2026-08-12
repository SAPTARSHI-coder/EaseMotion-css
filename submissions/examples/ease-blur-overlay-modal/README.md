# Component: ease-blur-overlay-modal

**Category:** Component — Popups & Overlays  
**Type:** Pure CSS (No JS)  
**Folder:** `submissions/examples/ease-blur-overlay-modal/`

---

## What does this do?
Displays a frosted glass modal component with a blur backdrop. When triggered, the background blurs smoothly and the modal card slides up into view in a spring-animated sequence.

---

## How is it used?

Include the hidden checkbox state selector and modal container in your markup. Click interactions are triggered entirely via HTML labels matching the checkbox `id`:

```html
<!-- Hidden modal checkbox controller -->
<input type="checkbox" id="my-modal" class="ease-modal-state">

<!-- Modal Viewport Container -->
<div class="ease-modal-container">
  <!-- Clickable backdrop (closes modal when clicking empty space outside) -->
  <label for="my-modal" class="ease-modal-backdrop" aria-label="Close modal"></label>

  <!-- Frosted glass card -->
  <div class="ease-modal-card">
    <!-- Close icon button -->
    <label for="my-modal" class="ease-modal-close" aria-label="Close modal">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </label>

    <!-- Modal Content -->
    <div class="ease-modal-header">
      <h4 class="ease-modal-title">Frosted Glass Modal</h4>
    </div>
    <div class="ease-modal-body">
      <p>Modal body content goes here.</p>
    </div>
    <div class="ease-modal-actions">
      <label for="my-modal" class="ease-modal-btn ease-modal-btn--secondary">Cancel</label>
      <label for="my-modal" class="ease-modal-btn ease-modal-btn--primary">Confirm</label>
    </div>
  </div>
</div>

<!-- Trigger button anywhere on the page -->
<label for="my-modal" class="ease-modal-btn ease-modal-btn--primary">Open Modal</label>
```

---

## Why is it useful?

1. **100% Pure CSS Interactions:** Zero JavaScript payload. Uses hidden inputs (`input[type="checkbox"]`) and sibling combinators (`:checked ~`) to trigger modal states. Closing acts, backdrop clicks, and open actions are all managed natively via HTML `<label>` redirects.
2. **Backdrop Filter Blurs:** Applies hardware-accelerated `backdrop-filter: blur()` properties to render frosted-glass panels.
3. **Animated Card Transition:** Slides and scales content cards smoothly (`transform: scale(0.92) translateY(30px)` to `scale(1) translateY(0)`) utilizing spring overshoot curves.
4. **Animated Close Interactions:** Close buttons spin `rotate(90deg)` and expand on hover for high-quality feedback.
5. **Mobile-first Drawer Layout:** On small screens (`<= 576px`), the card automatically transitions into a mobile drawer sliding up from the bottom for a native app feel.
6. **A11y/Reduced Motion Compliant:** Motion animations are disabled automatically under `prefers-reduced-motion` settings.

---

## Modifier Classes

| Class Suffix | Target Element | Description |
|---|---|---|
| `.ease-modal-state` | Checkbox Input | Controller input (must precede modal wrapper container). |
| `.ease-modal-container` | Modal Wrapper | Base overlay viewport container. Handles visibility and flex layouts. |
| `.ease-modal-backdrop` | Sibling Label | Fullscreen label backdrop that closes the modal on click. |
| `.ease-modal-card` | Modal Card | The frosted glass box. Animates cards to viewport center. |
| `.ease-modal-container--subtle` | Modal Wrapper | Adjusts backdrop frosted blur level to 4px. |
| `.ease-modal-container--deep` | Modal Wrapper | Adjusts backdrop frosted blur level to 24px. |
| `.ease-modal-container--slow` | Modal Wrapper | Lengthens animations duration to 0.75s. |
| `.ease-modal-container--fast` | Modal Wrapper | Quickens animation duration to 0.25s. |

---

## Customization (CSS Variables)

Variables are exposed in `:root` for simple custom overrides:

```css
:root {
  --ease-modal-duration: 0.4s;                  /* Animation timings speed */
  --ease-modal-ease: cubic-bezier(0.34, 1.56, 0.64, 1); /* Custom spring easing curve */
  --ease-modal-backdrop-bg: rgba(15, 23, 42, 0.3); /* Backdrop overlay base color */
  --ease-modal-backdrop-blur: 10px;             /* Frosted glass blur value */
  --ease-modal-card-bg: rgba(30, 41, 59, 0.7);   /* Content card background fill */
  --ease-modal-card-border: rgba(255, 255, 255, 0.08); /* Outline border lines */
  --ease-modal-radius: 20px;                    /* Content card corner rounding */
  --ease-modal-accent: #6366f1;                 /* Primary button accents color */
}
```
