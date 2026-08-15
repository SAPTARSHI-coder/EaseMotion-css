# Responsive Offcanvas Drawer (Material Design Styling)

This submission introduces a new variant of the standard layout/navigation component: the **Material Design Offcanvas Drawer** (also known as a Navigation Drawer). 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/material-design-offcanvas-drawer/`.

## Feature Overview

This variant strictly adheres to Google's Material Design (M2/M3 hybrid) specifications for navigation drawers, built entirely without JavaScript.

### Included CSS

1. **Zero JS State Management (`Checkbox Hack`):** This drawer requires absolute zero JavaScript to open and close. It utilizes a visually hidden `<input type="checkbox">` and the general sibling combinator (`~`) to toggle the CSS `transform` properties of the drawer panel. The app-bar hamburger menu and the backdrop overlay are both `<label>` elements pointing to that checkbox.
2. **Material Scrim (Backdrop):** When the drawer is triggered, a fixed position overlay immediately covers the screen. It transitions opacity to 32% black (`rgba(0, 0, 0, 0.32)`), per Material spec for modal drawers.
3. **Material Motion Curves:** 
   - Uses standard Material deceleration (`cubic-bezier(0.0, 0.0, 0.2, 1)`) for entering (sliding in).
   - Uses standard curve (`cubic-bezier(0.4, 0.0, 0.2, 1)`) for exiting (sliding out).
4. **Material Elevation:** When opened, the drawer dynamically gains Elevation Level 16 (`0px 16px 24px 2px rgba(0,0,0,0.14)`), casting a realistic physical shadow over the app content and scrim.
5. **Material Typography & Spacing:** Implements standard Roboto/system font stacks, 56px app bars, 256px drawer widths, and 8px inset border radii for active navigation items.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation utilizing the checkbox hack.
- **Accessible Native Keyboarding:** The checkbox input is visually hidden but remains in the DOM and receives native keyboard focus. A semi-transparent overlay circle highlights the trigger button when navigating via keyboard.
- **ARIA Attributes:** Employs `aria-hidden` on the input, and utilizes semantic `<nav>` and `<header>` HTML tags.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. All bounding translations and fades are safely stripped out. The drawer will instantly snap open/closed for users with vestibular disorders.
- **Responsiveness:** The drawer is set to a fixed 256px width, but uses `max-width: calc(100vw - 56px)` to guarantee that even on incredibly small viewports (like an iPhone SE), at least 56px of the scrim remains clickable to dismiss the drawer.
