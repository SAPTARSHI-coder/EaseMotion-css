# Glowing Offcanvas Drawer (Glassmorphism Styling)

This submission introduces a new variant of the standard layout/navigation component: the **Glassmorphism Offcanvas Drawer**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/glassmorphism-offcanvas-drawer/`.

## Feature Overview

This variant embodies the Glassmorphism aesthetic, characterized by frosted glass blur effects, semi-transparent backgrounds, glowing interactions, and light-catching thin borders.

### Included CSS

1. **Zero JS State Management (`Checkbox Hack`):** This drawer requires absolute zero JavaScript to open and close. It utilizes a visually hidden `<input type="checkbox">` and the general sibling combinator (`~`) to toggle the CSS `transform` properties of the drawer panel. The menu button and the backdrop overlay are both `<label>` elements pointing to that checkbox.
2. **Frosted Glass Blur (`backdrop-filter`):** The core of the glass effect relies on `backdrop-filter: blur(16px)` applied to the drawer. This dynamically blurs whatever content is underneath the drawer in real-time. (Note: A mesh gradient background is included in `demo.html` to properly showcase this effect).
3. **Semi-transparent Backgrounds:** The drawer and interactive elements utilize low-opacity white backgrounds (`rgba(255, 255, 255, 0.1)`).
4. **Light-Catching Borders:** Thin, semi-transparent white borders (`1px solid rgba(255, 255, 255, 0.18)`) are applied to the left edge of the drawer and to navigation items to simulate the physical edge of cut glass catching ambient light.
5. **Glow Effects:** Hovering over navigation items or the trigger button triggers a smooth transition into a soft white box-shadow glow.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation utilizing the checkbox hack.
- **Accessible Native Keyboarding:** The checkbox input is visually hidden but remains in the DOM and receives native keyboard focus. A high-contrast solid outline is applied to the trigger button when navigating via keyboard.
- **ARIA Attributes:** Employs `aria-hidden` on the input, and utilizes semantic `<nav>` and `<header>` HTML tags, along with SVG icons.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. All bounding translations, fades, and interactive box-shadow/border changes are safely stripped out. The drawer will instantly snap open/closed for users with vestibular disorders, and hover effects will be minimized to instant color shifts.
- **Responsiveness:** The drawer is set to a max-width of 380px but acts as `width: 100%` on mobile devices, taking up the full screen elegantly.
