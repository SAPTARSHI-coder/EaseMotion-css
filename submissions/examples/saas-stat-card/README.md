# Custom Stat Metric Card (SaaS Modern Styling)

This submission introduces a new variant of the standard layout/dashboard component: the **SaaS Modern Custom Stat Metric Card**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/saas-stat-card/`.

## Feature Overview

The SaaS Modern Stat Card is designed for highly polished, data-driven applications (like B2B dashboards or analytics platforms). It relies on clean white space, very subtle highly-diffused drop shadows, crisp border radiuses, and semantic color tokens.

### Included CSS

1. **Diffused Drop Shadows:** Rather than a harsh, single-layer box-shadow, this component uses multi-layered, ultra-diffused shadows (`--ease-saas-shadow-sm` and `--ease-saas-shadow-hover`) to create a professional, "floating paper" aesthetic standard in modern SaaS design.
2. **Subtle Gradient Accent:** A linear-gradient top bar is implemented using a `::before` pseudo-element. It is initially hidden (`opacity: 0`) and smoothly fades in on hover to provide a premium branded feel without being overbearing.
3. **Color Inversion on Hover:** To draw attention and indicate interactivity, the primary icon's background and foreground colors invert upon hovering the card, transitioning smoothly via CSS.
4. **Dynamic Trend Pill:** Features a fully rounded pill (`border-radius: 999px`) utilizing semantic colors (e.g., Emerald green for positive trends). It includes a micro-interaction where the pill slides slightly to the right (`translateX(2px)`) on card hover to emphasize forward momentum.

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation.
- **Semantic Structure:** Proper use of header tags, SVG iconography, and `aria-hidden` attributes for decorative elements.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. The floating translation, background fades, and trend pill translations are safely disabled for users with vestibular disorders.
- **Responsiveness:** Built with fluid flexbox layouts and percentage-based constraints. It scales cleanly down to small mobile viewports without requiring complex media queries.
