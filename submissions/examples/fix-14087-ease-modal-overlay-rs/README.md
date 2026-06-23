# Fix: `.ease-modal-overlay` visibility transition is not interruptible in all browsers

**Issue:** [#14087](https://github.com/saptarshi-coder/easemotion-css/issues/14087)

---

## 1. What does this do?

Fixes `.ease-modal-overlay` by removing `visibility` from the `transition` shorthand and replacing it with a delayed snap pattern that is fully interruptible in all browsers (Chrome, Firefox, Safari).

---

## 2. How is it used?

No HTML usage changes — the fix is purely in CSS. The class usage stays the same:

```html
<div id="my-modal" class="ease-modal-overlay">
  <div class="ease-modal">...</div>
</div>
```

**Proposed fix for `components/modals.css`:**

```css
/* Hidden state: opacity fades out, visibility snaps AFTER fade completes */
.ease-modal-overlay {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity var(--ease-speed-medium, 300ms) var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1)),
    visibility 0s linear var(--ease-speed-medium, 300ms);
}

/* Active state: visibility snaps immediately, THEN opacity fades in */
.ease-modal-overlay:target,
.ease-modal-overlay.is-active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transition:
    opacity var(--ease-speed-medium, 300ms) var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1)),
    visibility 0s linear 0s;
}
```

---

## 3. Why is it useful?

`visibility` is a **discrete CSS property** — it does not interpolate between `hidden` and `visible`. When included in a `transition` shorthand, it snaps at the 50% mark of the duration rather than smoothly transitioning. This causes two problems:

1. **Interrupted transitions flicker** — if the modal is opened/closed rapidly, browsers (especially Safari and Firefox) handle the snap inconsistently, causing the overlay to flicker or get stuck.
2. **Inconsistent cross-browser behavior** — Chrome, Firefox, and Safari all implement the interrupted `visibility` transition differently.

The fix uses the established pattern for cross-browser overlay transitions:
- **On hide:** `visibility` delays its snap to `hidden` by the full transition duration, so it only hides after `opacity` has fully faded out.
- **On show:** `visibility` snaps to `visible` immediately (delay `0s`), so the overlay is accessible before `opacity` fades in.

This pattern is fully interruptible — reversing mid-transition works correctly in all browsers.
