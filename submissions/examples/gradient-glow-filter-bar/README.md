# Animated Filter Bar Header (Gradient Glow Styling)

This submission introduces a new variant of the standard layout/navigation component: the **Gradient Glow Animated Filter Bar Header**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/gradient-glow-filter-bar/`.

## Feature Overview

The Gradient Glow Filter Bar brings high-energy, vibrant aesthetics to standard navigation controls. It features a continuously spinning multi-color gradient border on the active filter tab, complete with a volumetric background blur-glow that significantly intensifies in speed and brightness when the user hovers over it.

### Included CSS

1. **Pure CSS State Management (`Zero JS`):** This component utilizes native HTML radio buttons grouped by the `name` attribute. By visually hiding the radio inputs but keeping them in the DOM flow, we use the `:checked` pseudo-class combined with the adjacent sibling combinator (`+`) to style the corresponding labels dynamically.
2. **Animated Gradient Glows:** The vibrant active tab border and glowing shadow are generated using `::before` and `::after` pseudo-elements. The `::after` element receives a strong `filter: blur()` to cast a volumetric glow. Both are animated infinitely using `background-position` over an oversized `background-size`.
3. **Interactive States:** When the active item detects `:hover`, the blur radius of the glow increases, and the `animation-duration` of the spinning gradient is dynamically sped up, creating a highly responsive and "alive" feel.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation.
- **Accessible Native Keyboarding:** The radio inputs are visually hidden using `opacity: 0` and absolute positioning rather than `display: none`. This allows them to receive native keyboard focus (tabbing and arrow keys), and a `:focus-visible` dashed ring is dynamically applied to the fake label for clear focus indication.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. The infinite spinning gradient animation and transition effects are safely disabled for users with vestibular disorders.
- **Responsiveness:** By default, the filter bar acts as an inline-flex element. On very small screens (`< 480px`), it seamlessly switches to a flex-wrap layout to accommodate all options without breaking the viewport width.
