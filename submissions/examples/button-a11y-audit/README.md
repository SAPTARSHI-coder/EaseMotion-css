# Button Accessibility Audit (#381)

### What does this do?

This submission fixes WCAG AA contrast ratio failures on button components and repairs bugs with the `prefers-reduced-motion` implementation.

### How is it used?

The maintainer should merge the CSS overrides in `style.css` directly into `components/buttons.css`.
Specifically:

- Replace lines 229-242 with the fixed `@media` query block.
- Replace the `.ease-btn-hover` transition block (lines 193-199) with the fixed one.
- Integrate the contrast fixes for the base states into the respective button classes.

### Why is it useful?

**Findings from the audit:**

1. **Layout Shifts**: Pass! The button animations (`scale` and `translateY`) use hardware-accelerated transforms and do not affect the box model or sibling flow.
2. **Contrast Bug**: The original `ease-btn-success` base state (`#22c55e`) against white text produced a terrible 2.5:1 ratio. This fix mathematical guarantees a 4.5:1+ pass by switching the text to `neutral-900` on bright base states.
3. **Reduced Motion Bug**: The original code disabled _all_ transitions when reduced motion was requested. This is an anti-pattern. The new code explicitly preserves color and box-shadow fades, providing a vastly superior, non-nauseating experience without making the UI feel broken.
