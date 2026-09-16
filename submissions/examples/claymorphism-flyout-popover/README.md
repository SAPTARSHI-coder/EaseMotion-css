# Dynamic Flyout Popover (Claymorphism Styling)

This submission introduces a new variant of a core interaction component: the **Claymorphism Flyout Popover** (Dropdown Menu). 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/claymorphism-flyout-popover/`.

## Feature Overview

This variant embodies the Claymorphism aesthetic, utilizing soft pastel colors, extreme border radii, bouncy spring physics, and complex layered shadows to create a 3D "clay-like" user interface.

### Included CSS

1. **Zero JS State Management (`Checkbox Hack`):** This flyout requires absolute zero JavaScript to open and close. It utilizes a visually hidden `<input type="checkbox">` and the general sibling combinator (`~`) to toggle the CSS `opacity`, `visibility`, and `transform` properties of the absolute-positioned popover menu. The trigger button and the invisible backdrop overlay are both `<label>` elements pointing to that checkbox.
2. **Clay Shadows:** The 3D extrusion effect is achieved by combining three distinct shadows (`--ease-clay-shadow-combined`):
   - An outer drop shadow (light on top-left, dark on bottom-right)
   - A light inner shadow (top-left) to simulate a highlight
   - A dark inner shadow (bottom-right) to simulate volume
3. **Bouncy Physics:** When triggered, the popover utilizes a custom spring-like transition curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`) to playfully scale up and bounce into place.
4. **Tactile Button:** Clicking the trigger button switches the shadows to a deep inset state (`--ease-clay-shadow-pressed`), physically "pressing" the button into the clay surface.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation utilizing the checkbox hack.
- **Accessible Native Keyboarding:** The checkbox input is visually hidden but remains in the DOM and receives native keyboard focus. When focused, the trigger button receives a high-contrast outline to ensure visibility against the soft clay background.
- **ARIA Attributes:** Employs `aria-hidden` on the input, and utilizes semantic labeling on the labels/buttons.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. The bouncy scale animation and hover/active state translations are safely stripped out. The popover will instantly snap open/closed for users with vestibular disorders.
- **Responsiveness:** The popover is strictly bounded to a reasonable width (220px) and anchored centrally below its relative container, making it completely fluid across mobile and desktop.
