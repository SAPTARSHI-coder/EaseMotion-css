# Custom Offcanvas Drawer (Neumorphism Styling)

This submission introduces a new variant of the standard layout/navigation component: the **Neumorphism Custom Offcanvas Drawer**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/neumorphism-offcanvas-drawer/`.

## Feature Overview

This variant embodies the Neumorphism (Soft UI) aesthetic, relying on matching background colors and dual-box-shadows to simulate physical extrusion from the surface of the screen.

### Included CSS

1. **Zero JS State Management (`Checkbox Hack`):** This drawer requires absolute zero JavaScript to open and close. It utilizes a visually hidden `<input type="checkbox">` and the general sibling combinator (`~`) to toggle the CSS `transform` properties of the drawer panel. The app-bar menu button and the backdrop overlay are both `<label>` elements pointing to that checkbox.
2. **Dual Shadows (Extrusion vs Inset):** 
   - Standard elements use `--ease-neu-shadow-flat`: A light top-left shadow and a dark bottom-right shadow, making elements appear raised.
   - Active/Clicked elements use `--ease-neu-shadow-pressed`: The exact same shadows but using the `inset` keyword, making the elements appear physically depressed into the screen.
3. **Color Matching:** The background color of the page, the drawer, and the buttons are exactly the same (`#e0e5ec`). This is a hard requirement for the Neumorphism effect to work.
4. **Frosted Backdrop:** A soft, highly transparent backdrop with `backdrop-filter: blur(4px)` is used to gently obscure the background without breaking the soft UI aesthetic.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation utilizing the checkbox hack.
- **Accessible Native Keyboarding:** The checkbox input is visually hidden but remains in the DOM and receives native keyboard focus. A high-contrast dashed outline is applied to the trigger button when navigating via keyboard.
- **ARIA Attributes:** Employs `aria-hidden` on the input, and utilizes semantic `<nav>` and `<header>` HTML tags, along with SVG icons.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. All bounding translations, fades, and interactive box-shadow changes are safely stripped out. The drawer will instantly snap open/closed for users with vestibular disorders.
- **Responsiveness:** The drawer is set to a max-width of 340px but acts as `width: 100%` on mobile devices, taking up the full screen elegantly.
