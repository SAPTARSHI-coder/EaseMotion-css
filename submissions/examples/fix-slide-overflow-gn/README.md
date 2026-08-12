# Fix: Slide-in Animation Overflow on Mobile (#1626)

> ⚠️ **For Maintainer:** This submission demonstrates a fix that requires
> a small change to `core/animations.css`. As contributors cannot modify
> `core/` directly, the proposed `max-width: 100%` addition is provided
> here as a CSS override (in `style.css`) for review. Please apply it to
> the corresponding classes in `core/animations.css` if approved.

1. **What's the bug?** Slide-in animation classes use `transform: translate(±100%, ...)`, which can push the element's bounding box outside the viewport on narrow screens, contributing to horizontal scroll.
2. **Proposed fix:** Add `max-width: 100%` to all 10 directional `.ease-slide-in-*` classes (shown as an override in `style.css`).
3. **How is it tested?** `demo.html` shows all variants with the override applied — resize to mobile width to confirm no horizontal scroll.
4. **Why is it safe?** `max-width: 100%` constrains the element to its parent's width without altering animation timing or visuals.