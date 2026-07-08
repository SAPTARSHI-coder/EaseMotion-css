# PR Impact Heatmap — EaseMotion CSS Example

Purpose
- A CSS-only visualization for pull request impact, review activity, and code risk scoring.

Use cases
- Engineering dashboards showing PR activity and areas of risk.
- Design system examples for heatmap grids, metric cards, and impact badges.
- Documentation and internal reports where a lightweight visual is helpful.

Structure
- `demo.html` — Static markup with PR cards, a weekly heatmap grid, and insight panels.
- `style.css` — Visual tokens, layout, heatmap cell styles, impact bar, and responsive rules.

Customization
- Colors and tokens are defined in `:root` within `style.css` (for example: `--heat-1`..`--heat-5`).
- Heat intensity is represented by classes `.heat-1` to `.heat-5` on `.cell` elements.
- Add or remove `.pr-card` elements in `demo.html` to show additional PRs.
- Adjust the impact bar percentage by changing the inline `--p` value in the `.score .bar span` element.

Accessibility
- Semantic headings, lists, and ARIA attributes for the heatmap grid are included.
- Commit/pr cards are keyboard-focusable with visible focus outlines.
- `prefers-reduced-motion` is respected to disable transitions.

Why it fits EaseMotion CSS
- Token-driven, component-like styling aligns with EaseMotion's design principles.
- Provides a reusable, embeddable analytics visualization useful for product and engineering teams.

Limitations
- This is a presentational example; dynamic data binding and interactivity require JavaScript and backend integration.

License
- MIT (match repository)
