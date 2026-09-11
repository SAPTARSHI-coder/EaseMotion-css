# Glowing Filter Bar Header (Claymorphism Styling)

This submission introduces a new variant of the standard layout/navigation component: the **Claymorphism Glowing Filter Bar Header**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/claymorphism-glowing-filter-bar/`.

## Feature Overview

The Claymorphism Filter Bar combines the soft, extruded 3D aesthetic of Neumorphism with the rounded, floating, and double-shadowed characteristics of Claymorphism. It uses a recessed track with floating, glowing pill buttons to indicate the active filter state.

### Included CSS

1. **Pure CSS State Management (`Zero JS`):** This component utilizes native HTML radio buttons grouped by the `name` attribute. By visually hiding the radio inputs but keeping them in the DOM flow, we use the `:checked` pseudo-class combined with the adjacent sibling combinator (`+`) to style the corresponding labels dynamically.
2. **Claymorphic Shadows:** The outer container utilizes a double inner shadow (`inset`) to create a recessed track. The active label employs a complex stack of 5 shadows: an outer drop shadow (dark and light), an inner double shadow to soften the edges (Claymorphism signature), and an outer neon glow (`0 0 15px rgba(...)`).
3. **Hardware-Accelerated Lifts:** The active state applies `transform: translateY(-2px)` to physically lift the glowing button off the recessed track, enhancing the 3D effect.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation.
- **Accessible Native Keyboarding:** The radio inputs are visually hidden using `opacity: 0` and absolute positioning rather than `display: none`. This allows them to receive native keyboard focus (tabbing and arrow keys), and a `:focus-visible` ring is dynamically applied to the fake label.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. The physical lifting transforms and color transition timings are safely stripped out for users with vestibular disorders.
- **Responsiveness:** By default, the filter bar acts as an inline-flex element. On very small screens (`< 480px`), it seamlessly switches to a flex-wrap layout to accommodate all options without breaking the viewport width.
