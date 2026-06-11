# Fix: Slide-in Animation Overflow on Mobile (#1626)

1. **What's the bug?** Slide-in animation classes (`ease-slide-in-from-left`, `ease-slide-in-from-right`, `ease-slide-in-from-top-left`, etc.) animate using `transform: translate(±100%, ...)`. On narrow mobile viewports, this could push the element's bounding box outside the viewport during the animation, contributing to unwanted horizontal scrolling.
2. **The fix:** Added `max-width: 100%` to all 10 directional slide-in utility classes in `core/animations.css`:
```css
.ease-slide-in-left { max-width: 100%; ... }
.ease-slide-in-right { max-width: 100%; ... }
.ease-slide-in-from-top { max-width: 100%; ... }
.ease-slide-in-from-bottom { max-width: 100%; ... }
.ease-slide-in-from-left { max-width: 100%; ... }
.ease-slide-in-from-right { max-width: 100%; ... }
.ease-slide-in-from-top-left { max-width: 100%; ... }
.ease-slide-in-from-top-right { max-width: 100%; ... }
.ease-slide-in-from-bottom-left { max-width: 100%; ... }
.ease-slide-in-from-bottom-right { max-width: 100%; ... }
```
3. **How is it tested?** `demo.html` shows all four diagonal/directional slide-in variants on a mobile-width viewport — none of them cause horizontal scroll.
4. **Why is it a safe fix?** `max-width: 100%` constrains the animated element to never exceed its parent's width, which prevents any `translate()`-based overflow regardless of the element's natural size — without changing the visual animation itself.