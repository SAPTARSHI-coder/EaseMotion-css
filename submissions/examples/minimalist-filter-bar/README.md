# Responsive Filter Bar Header (Minimalist Styling)

This submission introduces a new variant of the standard layout/navigation component: the **Minimalist Responsive Filter Bar Header**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/minimalist-filter-bar/`.

## Feature Overview

The Minimalist Filter Bar focuses purely on typography, high contrast, and generous negative space (whitespace). It deliberately avoids heavy shadows, gradients, and 3D effects to provide an extremely clean, flat design suitable for modern, content-heavy interfaces.

### Included CSS

1. **Pure CSS State Management (`Zero JS`):** This component utilizes native HTML radio buttons grouped by the `name` attribute. By visually hiding the radio inputs but keeping them in the DOM flow, we use the `:checked` pseudo-class combined with the adjacent sibling combinator (`+`) to style the corresponding labels dynamically.
2. **Animated Underline Indicator:** The active state is denoted by an elegant, thin underline (`::after` pseudo-element) that expands outwards from the center using `transform: scaleX()`. This provides a smooth, hardware-accelerated micro-interaction.
3. **Seamless Track Alignment:** By utilizing a `-1px` negative bottom margin on the filter items, the active underline indicator perfectly overlaps the continuous, muted bottom border of the parent container track.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation.
- **Accessible Native Keyboarding:** The radio inputs are visually hidden using `opacity: 0` and absolute positioning rather than `display: none`. This allows them to receive native keyboard focus (tabbing and arrow keys), and a `:focus-visible` ring is dynamically applied to the fake label for clear focus indication.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. The center-expanding scale animation on the active indicator is safely disabled for users with vestibular disorders.
- **Responsiveness:** By default, the filter bar acts as an inline-flex element with a continuous bottom border. On very small screens (`< 480px`), it seamlessly switches to a flex-wrap layout and adjusts the border logic to ensure the design doesn't break when items wrap to a new line.
