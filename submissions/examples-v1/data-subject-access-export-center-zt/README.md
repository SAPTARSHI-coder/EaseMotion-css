# Data Subject Access & Export Center — EaseMotion CSS Example

Purpose

- A CSS-only privacy management panel demonstrating export requests, retention info, and timelines.

Use cases

- Privacy dashboards for GDPR/CCPA compliance and user data export workflows.
- In-app privacy centers allowing users to request and download their data.
- Design system examples for compliance-related UI patterns.

Structure

- `demo.html` — Static markup with three-column layout: data categories, export requests, and request history/timeline.
- `style.css` — Tokens, layout rules, badges, progress bars, and responsive behaviors.

Customization

- Theme variables live in `:root` in `style.css` (e.g., `--accent`, `--ok`, `--warn`).
- Adjust progress using inline `--w` on `.bar` elements.
- Add or remove `.request` items to reflect additional history.

Accessibility

- Semantic headings, lists, and clear focus outlines for keyboard users.
- `prefers-reduced-motion` support disables animations.

Why it fits EaseMotion CSS

- Token-driven styles and small, reusable UI pieces match the EaseMotion design philosophy.
- Privacy UX is a common enterprise need; this demo provides a lightweight pattern without JS.

Limitations

- Live export generation, scheduling, and secure downloads require backend logic and scripting.

License

- MIT (follow repository)
