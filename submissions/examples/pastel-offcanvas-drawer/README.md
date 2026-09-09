# Glowing Offcanvas Drawer (Pastel Styling)

This submission introduces a new variant of the standard layout/navigation component: the **Pastel Glowing Offcanvas Drawer**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/pastel-offcanvas-drawer/`.

## Feature Overview

The Pastel Drawer provides a soft, approachable UI overlay perfect for notifications, settings, or mobile navigation. It features muted pastel colors, a soft pink ambient glow, and a bouncy CSS transition.

### Included CSS

1. **Zero JS State Management (`Checkbox Hack`):** This drawer requires absolute zero JavaScript to open and close. It utilizes a visually hidden `<input type="checkbox">` and the general sibling combinator (`~`) to toggle the CSS `transform` properties of the drawer panel. The "Open Drawer" button and the "Backdrop" overlay are both `<label>` elements pointing to that checkbox.
2. **Animated Frosted Backdrop:** When the drawer is triggered, a fixed position overlay immediately covers the screen. It uses `backdrop-filter: blur(4px)` to obscure the background content and smoothly transitions its `opacity` and `visibility`.
3. **Bouncy Slide-in Animation:** The drawer slides in from the right edge (`transform: translateX(100%)` to `translateX(0)`) using a highly tuned cubic-bezier transition (`cubic-bezier(0.34, 1.56, 0.64, 1)`) that gives it a satisfying, slightly overshooting "bounce" effect.
4. **Soft Glow:** Rather than a harsh black drop shadow, the drawer casts a soft, highly diffused pink glow (`box-shadow: 0 0 40px rgba(243, 205, 212, 0.35)`), reinforcing the pastel aesthetic.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation utilizing the checkbox hack.
- **Accessible Native Keyboarding:** The checkbox input is visually hidden but remains in the DOM and receives native keyboard focus. 
- **ARIA Attributes:** Employs `aria-hidden` on the input, `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` on the drawer to provide proper context to screen readers, though full focus-trapping (a WCAG requirement for true modals) generally requires JavaScript.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. All bounding translations, fades, and hover scales are safely stripped out. The drawer will instantly snap open/closed for users with vestibular disorders.
- **Responsiveness:** The drawer has a `max-width` constraint but acts as `width: 100%` on mobile devices, taking up the full screen elegantly.
