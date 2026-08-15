# Interactive Offcanvas Drawer (Minimalist Styling)

This submission introduces a new variant of the standard layout/navigation component: the **Minimalist Interactive Offcanvas Drawer**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/minimalist-offcanvas-drawer/`.

## Feature Overview

This variant embodies the Minimalist aesthetic, relying on elegant typography, generous whitespace, and a sophisticated easing curve rather than heavy shadows or bright colors.

### Included CSS

1. **Zero JS State Management (`Checkbox Hack`):** This drawer requires absolute zero JavaScript to open and close. It utilizes a visually hidden `<input type="checkbox">` and the general sibling combinator (`~`) to toggle the CSS `transform` properties of the drawer panel. The "Menu" button and the backdrop overlay are both `<label>` elements pointing to that checkbox.
2. **Elegant Motion:** Utilizes a very long, elegant easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`) for a sophisticated feel.
3. **Staggered Link Animation:** When the drawer opens, the navigation links slide in sequentially. This is achieved purely in CSS by applying incremental `transition-delay` values using the `:nth-child` selector tied to the checked state of the hidden input.
4. **Absence of Clutter:** No heavy drop shadows. Just a single crisp 1px border and a light frosted glass backdrop (`backdrop-filter: blur(8px)`).
5. **Interactive Underlines:** Uses `::after` pseudo-elements for clean, animated underline reveals on hover for interactive elements like the close button and social links.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation utilizing the checkbox hack.
- **Accessible Native Keyboarding:** The checkbox input is visually hidden but remains in the DOM and receives native keyboard focus. A high-contrast outline is applied to the trigger button when navigating via keyboard.
- **ARIA Attributes:** Employs `aria-hidden` on the input, and utilizes semantic `<nav>` and `<header>` HTML tags.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. All bounding translations, fades, and staggered text animations are safely stripped out. The drawer will instantly snap open/closed for users with vestibular disorders.
- **Responsiveness:** The drawer is set to a max-width of 440px but acts as `width: 100%` on mobile devices, taking up the full screen elegantly.
