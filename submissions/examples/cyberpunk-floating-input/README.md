# Responsive Floating Input Field (Cyberpunk Styling)

This submission introduces a new variant of the standard input group component: the **Cyberpunk Responsive Floating Input Field**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/cyberpunk-floating-input/`.

## Feature Overview

The Cyberpunk Floating Input brings high-energy, futuristic aesthetics to standard form controls. It leverages `clip-path` for sharp, non-rectangular geometry and CSS hardware-accelerated animations for a digital "glitch" effect, paired with a modern "floating label" interaction.

### Included CSS

1. **Pure CSS Floating Label (`Zero JS`):** This component utilizes the `:not(:placeholder-shown)` CSS pseudo-class hack to detect when the input contains text. Combined with `:focus`, this allows the label to animate from a placeholder position to a floating title position without any JavaScript state management. (Note: This requires `placeholder=" "` in the HTML).
2. **Cyberpunk Design Tokens:** Themed via CSS Custom Properties (`--ease-cyber-bg`, `--ease-cyber-primary`). Colors use a high-contrast neon cyan aesthetic.
3. **Clipped Geometry:** Utilizes `clip-path: polygon(...)` to carve out aggressive, tech-inspired corners on both the input fields and the submit button.
4. **Hardware-Accelerated Glitch Animation:** The input employs a hyper-active glitch effect (`transform: translate()`) when the user focuses on the field. The effect runs entirely on the GPU.
5. **Drop Shadows with Clipped Elements:** Demonstrates the advanced CSS technique of using `filter: drop-shadow()` on a wrapper element to properly cast a shadow from a `clip-path` element (as standard `box-shadow` gets clipped).

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation.
- **Semantic Structure:** Proper use of `<input>` and `<label for="...">` ensures screen readers can correctly associate the floating label with its control.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. The scaling and translation animations of the floating label, as well as the rapid glitching animations, are safely disabled for users with vestibular disorders.
- **Responsiveness:** Standard width scaling (`width: 100%`) allows the input group to respond fluidly across mobile and desktop container boundaries.
