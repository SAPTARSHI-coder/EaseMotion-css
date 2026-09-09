# Interactive Filter Bar Header (Dark Mode Styling)

This submission introduces a new variant of the standard layout/navigation component: the **Dark Mode Interactive Filter Bar Header**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/dark-mode-filter-bar/`.

## Feature Overview

The Dark Mode Filter Bar provides a sleek, minimalist aesthetic designed for modern dark-themed interfaces. It discards heavy drop shadows in favor of subtle, semi-transparent borders and relies on high contrast accents to indicate state.

### Included CSS

1. **Pure CSS State Management (`Zero JS`):** This component utilizes native HTML radio buttons grouped by the `name` attribute. By visually hiding the radio inputs but keeping them in the DOM flow, we use the `:checked` pseudo-class combined with the adjacent sibling combinator (`+`) to style the corresponding labels dynamically.
2. **Minimalist Dark Aesthetics:** Uses a deep surface color (`#1e1e1e`) with a delicate 8% opacity white border. The active state is indicated by brightening the text to pure white, adding a subtle 8% white background layer, and sliding up a crisp, glowing blue accent line at the bottom.
3. **Animated Accent Indicator:** The active indicator (`::after`) uses a targeted `@keyframes` animation (`ease-dark-slide-up`) to slide into view with a soft fade-in, creating a premium interaction feel without JavaScript.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation.
- **Accessible Native Keyboarding:** The radio inputs are visually hidden using `opacity: 0` and absolute positioning rather than `display: none`. This allows them to receive native keyboard focus (tabbing and arrow keys), and a `:focus-visible` ring is dynamically applied to the fake label for clear focus indication (inset using `outline-offset` to keep the dark mode design clean).
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. The slide-up animation on the active indicator and all color transitions are safely stripped out for users with vestibular disorders.
- **Responsiveness:** By default, the filter bar acts as an inline-flex element. On very small screens (`< 480px`), it seamlessly switches to a flex-wrap layout to accommodate all options without breaking the viewport width.
