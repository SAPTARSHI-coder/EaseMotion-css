# Dynamic Filter Bar Header (Pastel Styling)

This submission introduces a new variant of the standard layout/navigation component: the **Pastel Dynamic Filter Bar Header**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/pastel-filter-bar/`.

## Feature Overview

The Pastel Filter Bar brings a light, airy, and approachable aesthetic to standard navigation controls. It features a soft gradient background on the active filter tab, playful typography (`Quicksand`), and gentle, colored drop shadows that make the active element feel like it's lightly floating above the surface.

### Included CSS

1. **Pure CSS State Management (`Zero JS`):** This component utilizes native HTML radio buttons grouped by the `name` attribute. By visually hiding the radio inputs but keeping them in the DOM flow, we use the `:checked` pseudo-class combined with the adjacent sibling combinator (`+`) to style the corresponding labels dynamically.
2. **Playful Motion Design:** Uses a custom `cubic-bezier(0.34, 1.56, 0.64, 1)` transition timing function that creates a subtle, bouncy "spring" effect when interacting with the filters.
3. **Colored Depth Shadows:** Instead of harsh black/gray drop shadows, the active state employs colored shadows that match the purple-to-pink gradient (`rgba(167, 139, 250, 0.35)`, `rgba(244, 114, 182, 0.25)`). This technique preserves the pastel aesthetic while still providing necessary depth.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation.
- **Accessible Native Keyboarding:** The radio inputs are visually hidden using `opacity: 0` and absolute positioning rather than `display: none`. This allows them to receive native keyboard focus (tabbing and arrow keys), and a `:focus-visible` dashed ring is dynamically applied to the fake label for clear focus indication.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. The scale and translate transformations that create the "bouncy lift" effect are safely stripped out for users with vestibular disorders.
- **Responsiveness:** By default, the filter bar acts as an inline-flex element. On very small screens (`< 480px`), it seamlessly switches to a flex-wrap layout to accommodate all options without breaking the viewport width.
