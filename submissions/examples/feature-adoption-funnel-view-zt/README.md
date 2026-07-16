# Feature Adoption Funnel View — EaseMotion CSS Example

Purpose
- A CSS-only funnel visualization showing feature adoption stages, conversion percentages, and insights.

Use cases
- Product analytics dashboards to communicate adoption and drop-off.
- Design system examples for funnel blocks, conversion cards, and stage comparisons.
- Documentation or slides where a static visual suffices.

Structure
- `demo.html` — Static markup with a stages list, funnel visualization blocks using inline `--w` widths, and insight cards.
- `style.css` — Tokens, funnel block visuals, responsive grid, and subtle interactions.

Customization
- Tokens live in `:root` of `style.css` (e.g., `--accent`, `--accent-2`).
- Change funnel widths by editing inline `--w` values on `.f-block` elements.
- Add/remove `.stage` items in the stages list to reflect different funnels.

Accessibility
- Semantic headings and list structure; regions include descriptive labels.
- Focusable stage items with visible outlines for keyboard users.
- `prefers-reduced-motion` disables animations.

Why it fits EaseMotion CSS
- Token-driven, small component pattern aligns with EaseMotion's design principles.
- Lightweight and JS-free, suitable for inclusion in examples and documentation.

Limitations
- This is a presentational example; dynamic metrics and interactivity require JS and data backends.

License
- MIT (match repository)
