# SVG Checkbox Path-Drawing Micro-interaction

1. **What does this do?**
   A custom checkbox where checking it draws the checkmark's SVG path from start to end (via an animated `stroke-dashoffset`), and unchecking it reverses the drawing. The checkbox container also "pops" with a small bounce-scale animation the instant it's checked.

2. **How is it used?**
   Wrap a native `<input type="checkbox">` and the visual box in a `.draw-checkbox` label, with the checkmark as inline SVG inside `.draw-checkbox-box`:

   ```html
   <label class="draw-checkbox">
     <input type="checkbox" class="draw-checkbox-input">
     <div class="draw-checkbox-box">
       <svg class="draw-checkbox-checkmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
         <path d="M20 6L9 17L4 12" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>
     </div>
     <span class="draw-checkbox-label">Subscribe to newsletter</span>
   </label>
   ```

3. **Why is this useful?**
   It's a high-fidelity micro-interaction that gives immediate, satisfying feedback on a control people interact with constantly, achieved with pure CSS (`stroke-dashoffset` transitions) and zero JavaScript — the underlying `<input type="checkbox">` does all the state-tracking natively. It also demonstrates full keyboard support and a clean `prefers-reduced-motion` fallback, in line with EaseMotion CSS's accessibility-conscious, animation-first philosophy.

### Notes for the maintainer
- The component CSS here matches the snippet proposed in the issue as closely as possible, since the class names (`draw-checkbox-*`) were already given unprefixed and ready for `ease-*` renaming on integration.
- `stroke-dasharray: 24` was checked against the actual path length of `M20 6L9 17L4 12` (≈22.6 units) — close enough that the checkmark draws fully with no visible gap, so this value is intentional, not a placeholder.
- One addition beyond the original snippet: a `:disabled` state (greyed-out box/label, `not-allowed` cursor, hover suppressed) was added since the demo includes a disabled checkbox example and the original snippet didn't cover that state. The `:has()` selector used for the label's cursor/hover override is supported in all major browsers as of 2026; the core disabled styling (box and label color) doesn't depend on it, so the example degrades gracefully even without `:has()` support.
- Keyboard support comes for free from the native `<input type="checkbox">` plus the `:focus-visible` outline rule — no `tabindex` or custom key handling needed.
- `prefers-reduced-motion: reduce` removes the draw transition and the pop animation, while keeping the background/border color change so the checked state is still clearly visible.
- Tested in Chrome, Firefox, and Edge.