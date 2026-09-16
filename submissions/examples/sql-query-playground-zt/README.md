# SQL Query Playground — EaseMotion CSS Example

Purpose
- A CSS-only mockup of a SQL editor and results viewer for documentation, design systems, and UI previews.

Use cases
- Developer-facing dashboards and data tools showcasing query workflows.
- Design system examples for editor UIs, tabs, execution status badges, and result tables.
- Static screenshots or documentation where a lightweight, JS-free representation is needed.

Structure
- `demo.html` — Static markup containing database selector, query tabs, an editor area (preformatted SQL), execute button, and a sample results table.
- `style.css` — Tokens, layout, editor styling, tabs, badges, and responsive rules.

Customization
- Theme tokens are in `:root` of `style.css` (e.g., `--accent`, `--accent-2`, `--success`).
- Replace the SQL in the `<pre class="code">` block to show different example queries.
- Adjust results by editing `.rt-row` entries in `demo.html`.

Accessibility
- Semantic headings, ARIA labels for regions and controls, and focus outlines for keyboard users.
- `prefers-reduced-motion` support disables animations.

Why it fits EaseMotion CSS
- Token-driven, component-like styling matches the EaseMotion approach and provides a reusable pattern for developer tools.
- Small, isolated CSS-only example is easy to adapt into the repo's examples folder.

Limitations
- This demo is non-functional — executing queries requires a backend and JS.

License
- MIT (match repository)
