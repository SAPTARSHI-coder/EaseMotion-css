# Git Branch Visualizer Board — EaseMotion CSS Example

Purpose
- A CSS-only static visualization of Git branches, commits, and merges for documentation and design previews.

Use cases
- Show branch topology in docs, READMEs, and design systems.
- Visualize Git workflows for onboarding or architecture discussions.
- Provide a lightweight, embeddable graph for marketing or product pages.

Structure
- `demo.html` — Static markup with columns for `main`, `feature/*`, and `release/*` branches. Commits are represented as focusable elements with meta labels.
- `style.css` — Visual tokens, branch colors, commit nodes, and connectors. Add pseudo-element rules to craft custom connector lines.

Customization
- Colors and tokens are defined in `:root` of `style.css` (e.g., `--main`, `--feature`, `--release`).
- Add or remove `.commit` elements to show more commits; use `.merge` for merge commits.
- Modify connector visuals by editing the CSS pseudo-element rules under "Visual connectors".

Accessibility
- Commits are keyboard focusable (`tabindex`) and have clear focus outlines.
- Semantic headings and descriptive text are provided for assistive tech.

Why it fits EaseMotion CSS
- Token-driven styling and small, reusable pieces align with EaseMotion's component philosophy.
- Useful for illustrating developer-focused UI patterns without introducing runtime dependencies.

Limitations
- This demo is presentational; a fully interactive graph with pan/zoom and dynamic commits requires JS.

License
- MIT (match repository)
