# Floating Cookie Consent Banner (Material Design Styling)

This submission introduces a new variant of the standard layout component: the **Material Design Floating Cookie Consent Banner**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/material-cookie-banner/`.

## Feature Overview

The Material Design Cookie Banner provides a clean, modern aesthetic that strictly adheres to Google's Material Design guidelines. It features proper typography, elevation shadows, state overlay layers, and a pure CSS ink ripple effect.

### Included CSS

1. **Pure CSS State Management (`Zero JS`):** This component utilizes modern CSS features, specifically the `:has()` pseudo-class, to manage state without JavaScript. It monitors hidden checkbox inputs; when the user clicks "Accept" or "Reject", the CSS engine detects the `:checked` state and permanently dismisses the banner via a smooth `transform` animation.
2. **Accessible Native Keyboarding:** Unlike traditional "CSS Checkbox Hacks" that use `display: none`, this implementation visually hides the checkboxes using `opacity: 0` while stretching them perfectly over the fake button labels. This ensures that native keyboard focus, screen readers, and 'Space/Enter' key toggling work flawlessly right out of the box.
3. **Material Elevation & State Layers:** Follows strict Material Design token guidelines. It casts an `elevation-6` shadow on the banner surface. It also utilizes semi-transparent overlays (`::before`) on the buttons for `:hover` (4% opacity) and `:focus` (12% opacity) states.
4. **Pure CSS Ripple Effect:** The classic Material ink ripple is simulated entirely in CSS using the `::after` pseudo-element on the buttons. On `:active` (click), the ripple instantly expands at 16% opacity. Upon release, the CSS transitions take over to smoothly fade and shrink the ripple away.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation.
- **Semantic Structure:** Proper use of `<input type="checkbox">` and `<label>` pairs ensures accessibility.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. The state overlays, ripple animations, and slide-out dismissal animations are safely stripped out for users with vestibular disorders.
- **Responsiveness:** Standard flexbox layout allows the banner to respond fluidly to content length and viewport boundaries.
