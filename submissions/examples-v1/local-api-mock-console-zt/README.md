# Local API Mock Console — EaseMotion CSS Example

Purpose
- A CSS-only mock of an API testing console for documentation, design previews, and UI patterns.

Use cases
- Developer tools pages showing request/response workflows.
- Design system examples for method selectors, endpoint input, response badges, and split panels.
- Static screenshots and docs where an interactive console is unnecessary.

Structure
- `demo.html` — Layout with a sidebar for collections/history, a main request/response split pane, and a right column for mock endpoints and environment selection.
- `style.css` — Visual tokens, panels, badges, code-like blocks, and responsive rules.

Customization
- Colors and tokens are in `:root` of `style.css` (e.g., `--accent`, `--ok`).
- Method buttons and status badges are simple elements; adapt classes to show different states.
- Replace the sample JSON in `.json` block to show different responses.

Accessibility
- Semantic headings, ARIA labels for regions, and visible focus outlines for keyboard users.
- `prefers-reduced-motion` support disables animations.

Why it fits EaseMotion CSS
- Token-driven, reusable UI pieces align with EaseMotion's design approach and provide a developer-focused component pattern.

Limitations
- This demo is non-functional; executing requests and mocking responses require backend logic and JS.

License
- MIT (match repository)
