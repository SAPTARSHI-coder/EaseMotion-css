# Animated File Drag Dropzone (Material Design Styling)

This submission introduces a new variant of the standard form component: the **Material Design Animated File Drag Dropzone**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/material-design-dropzone/`.

## Feature Overview

The Material Design Dropzone faithfully adheres to Google's Material Design 2/3 specifications. It features proper use of typography, elevation shadows that react to interaction, state overlays, and a pure CSS implementation of the iconic "ripple" effect.

### Included CSS

1. **Pure CSS Architecture (`Zero JS`):** This component utilizes standard HTML form mechanics (`<input type="file">` wrapped in a `<label>`). By visually hiding the input and styling the label, we create a massive click/drag target that requires zero JavaScript to trigger the native file browser.
2. **Material Elevation & State Layers:** Follows strict Material Design token guidelines. It casts an `elevation-1` shadow by default, lifting to an `elevation-8` shadow on hover. It also utilizes semi-transparent overlays (`::before`) for `:hover` (4% opacity) and `:focus` (12% opacity) states.
3. **Pure CSS Ripple Effect:** The classic Material ink ripple is simulated entirely in CSS using the `::after` pseudo-element. On `:active` (click), the ripple instantly expands at 16% opacity. Upon release, the CSS transitions take over to smoothly fade and shrink the ripple away.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation.
- **Keyboard Navigation:** The hidden `<input type="file">` retains full keyboard focusability. By utilizing the `:focus-within` pseudo-class on the parent container, the elevation and state layers activate perfectly when a keyboard user tabs to the hidden input.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. The dynamic elevation lifts, icon translations, and the ripple animations are safely stripped out for users with vestibular disorders.
- **Responsiveness:** Standard width scaling (`width: 100%`) allows the dropzone to respond fluidly across mobile and desktop container boundaries.
