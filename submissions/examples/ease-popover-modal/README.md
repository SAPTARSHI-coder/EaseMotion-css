# ease-popover-modal

> **Issue #61501** — Native Popover API + `@starting-style` enter/exit animations · Zero JavaScript

---

## What does this do?

`ease-popover-modal` is a **fully-animated modal dialog** built entirely with the native [HTML Popover API](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover) and the CSS [`@starting-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style) at-rule.

**The problem it solves:**  
When a browser toggles a popover from `display: none` to `display: block`, the element jumps instantly into view — there is no "before" state to transition from. `@starting-style` fixes this by letting you declare what the CSS values should be treated as *before* the first frame of the open state, giving the browser a genuine start point for the opening transition.

The component delivers:

- **Smooth entry** — modal scales from `scale(0.95)` + `opacity: 0` → `scale(1)` + `opacity: 1`, driven by `@starting-style`.
- **Smooth exit** — the reverse plays out before the browser removes the element from the top layer, thanks to `allow-discrete` on `display` and `overlay`.
- **Blurred backdrop** — `::backdrop` transitions its `opacity` in perfect synchrony using the same `@starting-style` technique.
- **Zero JavaScript** — open, close, light-dismiss, and Escape handling are all provided by the browser natively.
- **Accessibility built-in** — top-layer promotion, focus trapping, and `Escape` support are handled by the browser's Popover API.
- **Motion-safe** — `prefers-reduced-motion: reduce` disables all transitions.

---

## How is it used?

### 1. Add the trigger button

```html
<!-- popovertarget connects the button to the modal by ID -->
<button popovertarget="ease-modal-demo" class="ease-btn">
  Open Popover Modal
</button>
```

### 2. Add the modal container

```html
<!-- popover attribute opts the element into the Popover API -->
<div id="ease-modal-demo" popover class="ease-popover-modal">

  <div class="modal-header">
    <h2 class="modal-title">Modal Title</h2>

    <!-- popovertargetaction="hide" closes the popover -->
    <button
      popovertarget="ease-modal-demo"
      popovertargetaction="hide"
      class="modal-close-x"
      aria-label="Close"
    >×</button>
  </div>

  <div class="modal-body">
    <p>Modal content goes here.</p>
  </div>

  <div class="modal-footer">
    <button
      popovertarget="ease-modal-demo"
      popovertargetaction="hide"
      class="modal-btn-ghost"
    >Close</button>

    <button
      popovertarget="ease-modal-demo"
      popovertargetaction="hide"
      class="modal-btn-primary"
    >Confirm</button>
  </div>

</div>
```

### 3. Link the stylesheet

```html
<link rel="stylesheet" href="style.css" />
```

That's it — **no JavaScript needed**.

---

## Why is it useful?

### The old way (JavaScript required)

Before `@starting-style`, animating a modal's lifecycle required:

```js
// 1. Add a class to trigger CSS transition
modal.classList.add('is-opening');

// 2. Wait for transition to end before hiding
modal.addEventListener('transitionend', () => {
  modal.style.display = 'none';
}, { once: true });

// 3. Or use a setTimeout hack for the entry animation
modal.style.display = 'block';
setTimeout(() => modal.classList.add('is-visible'), 16); // ← the rAF/setTimeout hack
```

This pattern is fragile: timing depends on frame budget, `transitionend` can fire multiple times, and it forces developers to maintain JS-driven "animation state" (opening / open / closing / closed) alongside CSS state.

### The new way (`@starting-style` + native Popover API)

```css
/* 1. Closed state — also the exit-end state */
.ease-popover-modal {
  opacity: 0;
  transform: scale(0.95);
  transition:
    opacity   0.4s ease,
    transform 0.4s ease,
    overlay   0.4s allow-discrete,   /* keeps element in top layer during exit */
    display   0.4s allow-discrete;   /* defers display:none until exit is done */
}

/* 2. Open state */
.ease-popover-modal:popover-open {
  opacity: 1;
  transform: scale(1);
}

/* 3. Entry start — without this, the opening transition is skipped */
@starting-style {
  .ease-popover-modal:popover-open {
    opacity: 0;
    transform: scale(0.95);
  }
}
```

**What `@starting-style` eliminates:**

| Old JS approach | With `@starting-style` |
|---|---|
| `setTimeout` / `requestAnimationFrame` hacks to seed entry state | ✅ Handled by browser via `@starting-style` |
| `transitionend` listeners to defer `display: none` | ✅ Handled by `allow-discrete` on `display` |
| Manual "animation state machine" (opening/closing/open/closed) | ✅ Handled by `:popover-open` pseudo-class |
| External libraries (e.g. Framer Motion, GSAP) for modal lifecycle | ✅ Pure CSS — no dependencies |
| JS to manage focus trap + Escape key + backdrop dismiss | ✅ Native Popover API |

The result is a **declarative, CSS-only modal** with production-quality enter/exit animations — no JS state management, no `setTimeout` hacks, no external libraries.

---

## Browser Support

| Browser | Popover API | `@starting-style` |
|---|---|---|
| Chrome | 114+ | 117+ |
| Edge | 114+ | 117+ |
| Safari | 17+ | 17.5+ |
| Firefox | 125+ | 129+ |

For browsers without support, the modal falls back to instantly showing/hiding (no animation), which is still fully functional.

---

## Files

| File | Description |
|---|---|
| [`demo.html`](./demo.html) | Self-contained demo — zero external dependencies, zero JS |
| [`style.css`](./style.css) | Component stylesheet with `@starting-style`, `allow-discrete` transitions, and backdrop |
| [`README.md`](./README.md) | This document |

---

## Related Resources

- [MDN: HTML `popover` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover)
- [MDN: CSS `@starting-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style)
- [MDN: `transition-behavior: allow-discrete`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-behavior)
- [Chrome Developers: Popover API](https://developer.chrome.com/blog/introducing-popover-api)
- [web.dev: Four new CSS features for smooth entry and exit animations](https://web.dev/blog/entry-exit-animations)
