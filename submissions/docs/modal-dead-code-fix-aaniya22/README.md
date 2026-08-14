# Dead Code Fix — checkModal() in core/modal.js

Fixes [#60093](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/60093)

## What

`checkModal()` in `core/modal.js` (lines 28-30) contains an
unreachable `if` block. It checks whether `overlay` does **not** have
the `is-active` class, but `is-active` is added on line 24 —
immediately before this check runs. The condition is therefore always
`false`, and the block inside it never executes.

## Why

Dead code adds confusion for anyone reading or maintaining
`checkModal()` later — it looks like conditional logic that matters,
but it's a no-op. No functional bug exists today (nothing currently
depends on the dead branch), so this is a clarity / maintainability
fix, not a behavior change.

## How

Per the contribution guide, contributors cannot edit `core/` directly
— that path is maintainer-only. This submission documents the exact
change for the maintainer to apply, and includes a standalone demo
that mirrors the **corrected** logic to prove the fix preserves
existing modal-focus behavior.

### Current code (buggy)

\`\`\`js
const modal = overlay.querySelector(".ease-modal");
if (modal) {
  if (!overlay.classList.contains("is-active")) { // ALWAYS FALSE
    previousFocusedElement = document.activeElement;
  }
  modal.setAttribute("tabindex", "-1");
  modal.focus();
}
\`\`\`

### Suggested fix

\`\`\`js
const modal = overlay.querySelector(".ease-modal");
if (modal) {
  modal.setAttribute("tabindex", "-1");
  modal.focus();
}
\`\`\`

The unreachable inner `if` block is removed entirely. `previousFocusedElement`
was only ever set inside that dead branch, so removing it does not
change any currently-observable behavior — that assignment never ran.

## Files

- `README.md` — this file, with the exact before/after patch for `core/modal.js`.
- `demo.html` — standalone repro showing the modal open/focus/close
  cycle working correctly using the corrected `checkModal()` logic,
  reimplemented locally (does not import the real `core/modal.js`,
  per the no-core-edits rule).
- `style.css` — minimal styling for the demo modal/overlay.

## Testing

1. Open `demo.html` in a browser.
2. Click "Open Modal" — focus moves into the modal, tabindex is set.
3. Close the modal (Escape or close button) — no console errors,
   focus behavior matches current production behavior with the dead
   branch removed.
