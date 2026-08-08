# Expandable Floating Action Button (`fab-expandable-menu-ksk`)

1. What does this do?  
A self-contained Floating Action Button (FAB) fixed to the bottom-right corner of the viewport. Clicking the primary FAB triggers a smooth 135° morphing rotation of the plus icon into a close (`×`) icon while expanding four staggered sub-action buttons (New Note, Upload Image, Bookmark, Quick Share) with spring bounce entry animations.

2. How is it used?  
Place the hidden checkbox `<input type="checkbox" id="fab-toggle" class="fab-checkbox">` and the backdrop label overlay next to `.fab-wrapper`. Customize physics and appearance via CSS custom properties:

```css
.fab-wrapper {
  --fab-size:             56px;            /* main button size */
  --fab-action-size:      44px;            /* sub-action button size */
  --fab-duration:         0.4s;            /* spring animation time */
  --fab-spring:           cubic-bezier(0.34, 1.56, 0.64, 1);
  --fab-stagger:          0.06s;           /* stagger delay between items */
  --fab-accent:           #6366f1;         /* primary theme color */
}
```

Support for Light and Dark mode is built-in out of the box via `.light-theme` or custom property overrides.

3. Why is it useful?  
Provides quick access to primary user actions in mobile apps and modern desktop web applications while saving screen space. Includes keyboard accessibility (`tabindex="0"`, `role="button"`), tooltip action labels, and backdrop dismiss click handler—operating 100% without framework dependencies.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #52372.*
