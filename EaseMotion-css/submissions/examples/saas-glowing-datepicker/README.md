# Glowing Datepicker Calendar (SaaS Modern Styling)

This submission introduces a new variant of the standard datepicker component: the **SaaS Modern Glowing Datepicker**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/saas-glowing-datepicker/`.

## Feature Overview

The SaaS Modern Glowing Datepicker emphasizes clean typography, refined border radii, volumetric shadows, and highly polished micro-interactions typical in modern B2B SaaS applications (e.g. Stripe, Linear, Vercel). 

### Included CSS

1. **Pure CSS Hack (`Zero JS`):** This component utilizes the "Checkbox Hack" to handle the open/close state of the datepicker popup entirely within CSS, requiring zero JavaScript overhead for the demonstration.
2. **SaaS Design Tokens:** Themed via CSS Custom Properties (`--ease-saas-primary`, `--ease-saas-surface`, `--ease-saas-shadow`) allowing for easy customization of the refined, low-contrast aesthetic.
3. **Soft Volumetric Glows:** When the input is focused, instead of a harsh outline, it emits a soft, semi-transparent volumetric glow (`--ease-saas-glow-fx`). This is also applied as a drop-shadow to the actively selected date.
4. **Hardware-Accelerated Transitions:** The calendar popup utilizes a scale + translate animation that originates from the top-center (`transform-origin`), creating a smooth, physical "pop out" effect. 

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation.
- **Keyboard Navigation:** The input trigger is fully navigable via keyboard (`Tab` to focus, `Space` to open). The dates within the calendar are implemented as `<button>` elements, ensuring they are inherently focusable and semantic.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. The scaling and translation animations on the popup, as well as the hover transitions on the dates, are safely stripped out for users with vestibular disorders.
- **Responsiveness:** Uses CSS Grid (`grid-template-columns: repeat(7, 1fr)`) to ensure the calendar layout is fluid and scales perfectly on mobile viewports.
