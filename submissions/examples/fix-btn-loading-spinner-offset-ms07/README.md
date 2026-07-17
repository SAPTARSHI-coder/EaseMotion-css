# Fix: Loading Spinner Offset Bug (`ease-btn-loading`)

1. **What does this do?**
   Demonstrates and fixes a centering bug in the loading-button spinner: `.ease-btn-loading::after` sets `translate: -50% -50%` to center itself, but its spin animation (`ease-kf-btn-spin`) separately sets `transform: translate(-50%, -50%) rotate(...)`. Since the standalone `translate` property and `transform` are additive in the CSS rendering engine, these two centering offsets stack into `-100% -100%` instead of the intended `-50% -50%`, pushing the spinner noticeably off-center (roughly half its own size in both axes) for the entire time the animation runs.

2. **How is it used?**
   This demo shows both versions side by side for comparison — `.spinfix-btn-buggy` reproduces the bug exactly as described, `.spinfix-btn-fixed` shows the corrected behavior. The actual fix is a one-line change to the real classes:

   ```css
   /* Before (buggy) */
   .ease-btn-loading::after {
     translate: -50% -50%;
     animation: ease-kf-btn-spin 0.8s linear infinite;
   }
   @keyframes ease-kf-btn-spin {
     from { transform: translate(-50%, -50%) rotate(0deg); }
     to   { transform: translate(-50%, -50%) rotate(360deg); }
   }

   /* After (fixed) — remove the standalone `translate` line entirely,
      since the centering offset is already present inside `transform`
      in the keyframes */
   .ease-btn-loading::after {
     animation: ease-kf-btn-spin 0.8s linear infinite;
   }
   @keyframes ease-kf-btn-spin {
     from { transform: translate(-50%, -50%) rotate(0deg); }
     to   { transform: translate(-50%, -50%) rotate(360deg); }
   }
   ```

3. **Why is this useful?**
   Loading spinners are one of the most visible, frequently-rendered UI states in any framework — a centering bug here is highly noticeable and undermines confidence in the rest of the component set. The fix is minimal (delete one declaration) and has no other side effects, since the keyframes already fully own the transform value.

### Notes for the maintainer
- This is a **bug fix targeting `core/`**, not a new feature, so per the contribution guidelines it can't be applied directly by a contributor PR. Following the pattern already used elsewhere in this repo (e.g. `fix-toast-zindex-collision`, `fix-input-focus-visible`), this is submitted as a `submissions/examples/fix-*` folder that reproduces and documents the bug rather than editing `core/` directly.
- Root cause, confirmed against the CSS Transforms spec: the standalone `translate` property and the `transform` property are additive when both are set on the same element — they are not the same property and one does not override the other, even though they visually look like they should.
- The fix is to remove the standalone `translate: -50% -50%` declaration from `.ease-btn-loading::after` entirely, since the `-50%, -50%` centering offset is already present in every keyframe of `transform` in `ease-kf-btn-spin`. No other lines need to change.
- The demo intentionally hides the button label text (`color: transparent`) so the spinner's position is the only thing visible to compare.
- `prefers-reduced-motion: reduce` freezes the spinner in its correct centered position rather than removing it, since its presence still communicates an active loading state.
- Tested in Chrome, Firefox, and Edge.