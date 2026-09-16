# Modal Focus Trap

**Fixes:** Issue #4220 — [BUG] No focus trap in modal component
**Label:** `bug` `a11y` | **Severity:** Critical

---

## What does this do?

Locks keyboard focus inside an open modal dialog so users cannot Tab into background content, and returns focus to the triggering element when the modal closes — fixing a critical accessibility failure in the existing modal component.

---

## How is it used?

### HTML structure

```html
<!-- Trigger (button or link) -->
<button data-modal-open="my-modal">Open modal</button>
<!-- or -->
<a href="#my-modal">Open modal</a>

<!-- Modal overlay -->
<!-- Three ARIA attributes are REQUIRED on every modal overlay: -->
<div
  id="my-modal"
  class="ease-modal-overlay"
  role="dialog"
  aria-modal="true"
  aria-labelledby="my-modal-title"
>
  <div class="ease-modal">
    <div class="ease-modal-header">
      <h2 id="my-modal-title">Dialog heading</h2>
      <!-- aria-label is REQUIRED on the close button -->
      <button class="ease-modal-close" aria-label="Close dialog">×</button>
    </div>
    <div class="ease-modal-body">…content…</div>
    <div class="ease-modal-footer">
      <button data-modal-close>Cancel</button>
      <button>Confirm</button>
    </div>
  </div>
</div>

<!-- Page content wrapper — receives aria-hidden while modal is open -->
<div id="page-content">
  …rest of page…
</div>
```

### Close triggers

| Pattern | Behaviour |
|---|---|
| `<button class="ease-modal-close">` | Closes the active modal |
| `data-modal-close` attribute on any element | Closes the active modal |
| Click on the overlay backdrop | Closes the active modal |
| <kbd>Escape</kbd> key | Closes the active modal |

---

## What was broken before this fix?

The previous `core/modal.js` moved focus to `.ease-modal` on open but had two bugs:

1. **No wrap-around on Tab** — pressing Tab past the last focusable element exited the modal entirely.
2. **Shift+Tab edge-case** — the check `document.activeElement === overlay.querySelector('.ease-modal')` only caught the initial focus state; once the user tabbed forward once, Shift+Tab from the first element did not wrap to the last.
3. **No aria-hidden on background** — screen readers could still read and navigate background content while the modal was open.
4. **No focus return** — the trigger element that opened the modal was not remembered, so focus landed unpredictably after close.

---

## What this fix adds

### `modal.js` — drop-in replacement for `core/modal.js`

| Feature | Detail |
|---|---|
| **Focus trap** | Tab and Shift+Tab cycle only through focusable children of the open overlay |
| **Wrap-around** | Last element → Tab → wraps to first; First element → Shift+Tab → wraps to last |
| **Empty focusable list** | Tab press absorbed entirely when no focusable children exist |
| **Focus return** | Trigger element stored on open; focus restored after close transition |
| **aria-hidden background** | `#page-content` (or any `[data-modal-inert]` element) gets `aria-hidden="true"` while modal is open |
| **Escape key** | Closes modal and restores focus |
| **Backdrop click** | Click on overlay (not `.ease-modal`) closes the modal |
| **Hash-link support** | `<a href="#modal-id">` pattern still works alongside `data-modal-open` |
| **Body scroll lock** | `overflow: hidden` on body while modal is open |
| **One modal at a time** | Opening a second modal closes the first |

### `style.css`

| Feature | Detail |
|---|---|
| **`:focus-visible` ring** | All interactive elements inside modal get a `2.5px #6c63ff` outline on keyboard focus |
| **`:focus` suppressed for mouse** | `:focus:not(:focus-visible)` removes outline for mouse clicks (no ring for mouse users, always visible for keyboard users) |
| **`pointer-events: none`** | Background set to non-interactive while modal is open |

---

## Why is it useful for EaseMotion CSS?

EaseMotion's philosophy is **zero JavaScript required for visuals, but JavaScript-enhanced where semantics demand it**. Modal dialogs are one of the very few components where JavaScript is genuinely required — not for animation, but for keyboard accessibility and screen-reader correctness. This fix completes the modal component by making it meet the [ARIA Dialog (Modal) pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) without changing the CSS-first animation system.

---

## Files

| File | Purpose |
|---|---|
| `style.css` | Visual styles + focus-visible ring + backdrop inert companion |
| `modal.js` | Drop-in replacement for `core/modal.js` — focus trap, aria-hidden, focus return |
| `demo.html` | Self-contained demo with 4 test cases and a live event log |

Open `demo.html` directly in a browser — no server required.

---

## Acceptance Criteria (from issue #4220)

- [x] Focus cannot leave `.ease-modal` while overlay is active
- [x] Shift+Tab wraps correctly to last focusable element
- [x] Focus returns to trigger element on close
- [x] `aria-modal="true"` and `role="dialog"` present in demo HTML
- [x] `aria-label="Close dialog"` on close button
- [x] Background hidden from screen readers via `aria-hidden`
- [x] `prefers-reduced-motion` fallback present

---

## Tech Stack

- HTML
- CSS (no frameworks)
- Vanilla JavaScript (IIFE, no dependencies)

---

## Contribution Notes

- Class naming is kept generic (`modal-overlay`, `modal-box`, etc.) — maintainer will rename to `ease-*` convention before merging into `core/`
- `modal.js` is a full replacement for `core/modal.js`, not a separate file — maintainer should decide whether to merge or replace
- `style.css` changes (focus ring, pointer-events) are additive to `components/modals.css`