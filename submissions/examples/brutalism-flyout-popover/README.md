# Animated Flyout Popover (Brutalism Styling)

This submission introduces a new variant of a core interaction component: the **Neo-Brutalism Flyout Popover** (Dropdown Menu). 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/brutalism-flyout-popover/`.

## Feature Overview

This variant embodies the Neo-Brutalism aesthetic, utilizing high contrast, solid harsh shadows, thick borders, and monospaced typography to create a bold, unapologetic user interface.

### Included CSS

1. **Zero JS State Management (`Checkbox Hack`):** This flyout requires absolute zero JavaScript to open and close. It utilizes a visually hidden `<input type="checkbox">` and the general sibling combinator (`~`) to toggle the CSS `opacity`, `visibility`, and `transform` properties of the absolute-positioned popover menu. The trigger button and the invisible backdrop overlay are both `<label>` elements pointing to that checkbox.
2. **Brutalist Shadows:** Unlike typical web shadows that are soft and blurred, brutalism uses solid blocks of color. This is achieved via `box-shadow: 6px 6px 0 0 #000;`.
3. **Thick Outlines:** Every interactive element is boxed in with a solid `3px solid #000` border, adhering to brutalist guidelines.
4. **Physical Press Interactions:** Hovering or focusing the trigger button physically translates the element downwards and to the right while shrinking its box-shadow, creating the illusion of a mechanical button being physically depressed into the page.
5. **High Contrast Colors:** Employs pure white, stark black, and saturated primary colors (yellow, red, blue, green).

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation utilizing the checkbox hack.
- **Accessible Native Keyboarding:** The checkbox input is visually hidden but remains in the DOM and receives native keyboard focus. When focused, the trigger button enters its "depressed" active state, providing clear visual feedback.
- **ARIA Attributes:** Employs `aria-hidden` on the input, and utilizes semantic labeling.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. All bounding translations and active-state physical presses are safely stripped out. The popover will instantly snap open/closed for users with vestibular disorders.
- **Responsiveness:** The popover is strictly bounded to a reasonable width (260px) and anchored centrally below its relative container, making it completely fluid across mobile and desktop.
