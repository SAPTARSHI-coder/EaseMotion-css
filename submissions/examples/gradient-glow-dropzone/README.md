# Dynamic File Drag Dropzone (Gradient Glow Styling)

This submission introduces a new variant of the standard form component: the **Gradient Glow Dynamic File Drag Dropzone**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/gradient-glow-dropzone/`.

## Feature Overview

The Gradient Glow Dropzone brings high-energy, vibrant aesthetics to standard file upload fields. It features a continuously spinning multi-color gradient border that significantly intensifies in brightness and speed when the user interacts with it (hovering or keyboard focus).

### Included CSS

1. **Pure CSS Architecture (`Zero JS`):** This component utilizes standard HTML form mechanics (`<input type="file">` wrapped in a `<label>`). By visually hiding the input and styling the label, we create a massive click/drag target that requires zero JavaScript to trigger the native file browser.
2. **Animated Gradient Glows:** The vibrant border and glowing shadow are generated using `::before` and `::after` pseudo-elements. The `::after` element receives a strong `filter: blur()` to cast a volumetric glow. Both are animated infinitely using `background-position` over an oversized `background-size`.
3. **Interactive States:** When the wrapper detects `:hover` or `:focus-within`, the opacity and blur radius of the glow increase, and the `animation-duration` of the spinning gradient is dynamically sped up, creating a highly responsive and "alive" feel.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation.
- **Keyboard Navigation:** The hidden `<input type="file">` retains full keyboard focusability. By utilizing the `:focus-within` pseudo-class on the parent container, the gradient glow intensifies perfectly when a keyboard user tabs to the hidden input.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. The infinite spinning gradient animation and hover scaling effects are safely disabled for users with vestibular disorders.
- **Responsiveness:** Standard width scaling (`width: 100%`) allows the dropzone to respond fluidly across mobile and desktop container boundaries.
