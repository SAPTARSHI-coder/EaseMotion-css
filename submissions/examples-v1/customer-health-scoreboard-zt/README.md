# Customer Health Scoreboard — EaseMotion CSS Example

Purpose

- A CSS-only scoreboard for customer success teams to view health scores, risks, and engagement metrics.

Use cases

- Customer success dashboards showing at-a-glance health and renewal status.
- Design system patterns for rings, badges, and metric cards.
- Docs and internal tools where a static visual pattern suffices.

Structure

- `demo.html` — Static markup with a customer list, insights panel, and an action center.
- `style.css` — Visual tokens, ring-style health indicators, badges, and responsive rules.

Customization

- Tokens live in `:root` in `style.css` (e.g., `--accent`, `--ok`, `--warn`).
- Health ring uses inline `--score` on `.ring` to display score percentage.
- Add/remove `.customer` items to modify the roster.

Accessibility

- Focusable list items and clear focus outlines for keyboard users.
- Semantic headings and lists; readable color contrast is considered.
- `prefers-reduced-motion` support disables hover transitions.

Why it fits EaseMotion CSS

- Token-driven and component-oriented styles map well to EaseMotion's approach.
- Reusable pattern for enterprise admin UIs that avoids adding JS for simple visualizations.

Limitations

- This example is presentational; live updates, SSO, and server-driven metrics require scripting and backend services.

License

- MIT (match repository)
