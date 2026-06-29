# Fix: `.ease-btn:active` Overrides `.ease-btn-hover:hover` Lift (#3650)

> ⚠️ **For Maintainer:** This fix requires a change to `components/buttons.css`, which contributors cannot modify directly. This submission documents the proposed patch for review.

1. **What's the bug?** `.ease-btn:active { transform: scale(0.97); }` is a global rule. When a button has both `.ease-btn` and `.ease-btn-hover`, clicking while hovering triggers `:active`, which overrides `.ease-btn-hover:hover`'s `translateY(-3px)` — the button loses its lift and just shrinks instead of lifting *and* squishing.
2. **Proposed fix:** Add a new rule scoped to `.ease-btn-hover:active` that combines both transforms, placed after `.ease-btn-hover:hover` inside the existing `@media (hover: hover) and (pointer: fine)` block in `components/buttons.css`:
```css
@media (hover: hover) and (pointer: fine) {
  .ease-btn-hover:hover {
    transform: translateY(-3px);
    /* ...existing box-shadow... */
  }

  .ease-btn-hover:active {
    transform: translateY(-3px) scale(0.97);
  }
}
```
3. **How is it tested?** `demo.html` shows two buttons — one without the fix (shrinks on click, losing lift) and one with `.ease-btn-hover:active` applied (lifts and squishes together).
4. **Why is it safe?** The new rule only applies to elements with both `.ease-btn-hover` and `:active` — it doesn't change `.ease-btn:active`'s behavior for buttons without `.ease-btn-hover`, and the `prefers-reduced-motion` block (which sets `transform: none !important` on `.ease-btn:active, .ease-btn-hover:hover`) should also have `.ease-btn-hover:active` added to it for consistency.