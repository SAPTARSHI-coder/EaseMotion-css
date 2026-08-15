# Responsive Floating Input Field (Claymorphism Styling)

This submission introduces a new variant of the standard input group component: the **Claymorphism Responsive Floating Input Field**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/claymorphism-floating-input/`.

## Feature Overview

The Claymorphism Floating Input leverages the emerging UI trend characterized by light colors, very round corners, and complex double inner shadows that create a soft, puffy, 3D clay-like aesthetic. It pairs this with a pure CSS "floating label" interaction pattern.

### Included CSS

1. **Pure CSS Floating Label (`Zero JS`):** This component utilizes the `:not(:placeholder-shown)` CSS pseudo-class hack to detect when the input contains text. Combined with `:focus`, this allows the label to seamlessly animate from a placeholder position to a floating title position without any JavaScript state management. (Note: This requires `placeholder=" "` in the HTML).
2. **Claymorphism Design Tokens:** Themed via CSS Custom Properties (`--ease-clay-bg`, `--ease-clay-shadow-out`, `--ease-clay-shadow-in`).
3. **Puffy Shadows:** The signature look is achieved by combining a standard neumorphic outer drop shadow with a complex double *inner* shadow (`inset`) on the input field itself, simulating depth and material thickness.
4. **Hardware-Accelerated Transitions:** The floating label utilizes `transform: translateY() scale()` for smooth, 60fps animations. 

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation.
- **Semantic Structure:** Proper use of `<input>` and `<label for="...">` ensures screen readers can correctly associate the floating label with its control.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. The smooth scaling and translation animations of the floating label are safely disabled, instantly snapping to the final state for users with vestibular disorders.
- **Responsiveness:** Standard width scaling (`width: 100%`) allows the input group to respond fluidly across mobile and desktop container boundaries.
