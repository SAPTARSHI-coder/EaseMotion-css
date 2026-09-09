# Custom Filter Bar Header (Cyberpunk Styling)

This submission introduces a new variant of the standard layout/navigation component: the **Cyberpunk Custom Filter Bar Header**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/cyberpunk-filter-bar/`.

## Feature Overview

The Cyberpunk Filter Bar provides a high-contrast, aggressive aesthetic inspired by sci-fi interfaces. It features hard angled cuts, neon accents (Cyan, Magenta, Yellow), monospace typography, and a striking CSS-only glitch effect on interaction.

### Included CSS

1. **Pure CSS State Management (`Zero JS`):** This component utilizes native HTML radio buttons grouped by the `name` attribute. By visually hiding the radio inputs but keeping them in the DOM flow, we use the `:checked` pseudo-class combined with the adjacent sibling combinator (`+`) to style the corresponding labels dynamically.
2. **Hard Angled Geometry:** Uses `clip-path: polygon(...)` to slice the corners off both the main container and the individual filter tabs, creating the signature jagged, industrial look typical of the genre.
3. **Advanced CSS Shadows (`:has()` + `drop-shadow`):** Because standard `box-shadow` is ignored by browsers when an element is cut via `clip-path`, this component leverages the new `:has()` pseudo-class to apply `filter: drop-shadow()` to the parent wrapper whenever the internal radio button is checked. This perfectly projects a neon cyan shadow *outside* the clipped boundaries.
4. **Hardware-Accelerated Glitch:** When the user hovers over the active tab, a `::before` pseudo-element injects a sliced duplicate of the text (via `attr(data-text)`). This element runs an infinite, chaotic `@keyframes` animation alternating `transform` and `clip-path` properties to create an authentic screen-tear glitch effect entirely in CSS.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation.
- **Accessible Native Keyboarding:** The radio inputs are visually hidden using `opacity: 0` and absolute positioning rather than `display: none`. This allows them to receive native keyboard focus (tabbing and arrow keys).
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. The chaotic glitch animation is completely disabled for users with vestibular disorders.
- **Responsiveness:** By default, the filter bar acts as an inline-flex element. On very small screens (`< 480px`), it seamlessly switches to a flex-wrap layout to accommodate all options without breaking the viewport width.
