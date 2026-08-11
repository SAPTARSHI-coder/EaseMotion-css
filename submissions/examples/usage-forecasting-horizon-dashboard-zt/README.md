# Usage Forecasting Horizon Dashboard — EaseMotion CSS Example

Purpose
- A CSS-only dashboard pattern to showcase usage metrics, forecasts, and capacity planning.

Use cases
- SaaS product telemetry pages showing current usage, short-term forecasts, and capacity warnings.
- Internal finance or infra dashboards for forecasting cost and resource needs.
- Design system examples demonstrating KPI cards, timeline charts, and projection cards without JS.

Structure
- `demo.html` — Static markup with KPI grid, monthly timeline, horizon projection cards, and resource summary.
- `style.css` — Visual tokens, layout grid, capacity bar, mini heatmaps, and responsive rules.

Customization
- Theme tokens live in `:root` of `style.css` (e.g., `--accent`, `--heat-5`).
- Timeline bars use inline `--h` values on `.bar` elements to change heights.
- Capacity bar uses inline `--p` on `.cap-bar` to reflect utilization.
- Add/remove `.horiz-card` elements to show additional forecast horizons.

Accessibility
- Semantic headings and lists are used; chart areas include descriptive aria labels.
- Keyboard focus styles provided for interactive-like elements.
- `prefers-reduced-motion` disables animations for sensitive users.

Why it fits EaseMotion CSS
- Token-driven styling and small composable components align with EaseMotion's design principles.
- Reusable pattern for analytics and admin dashboards that can be incorporated into the component library.

Limitations
- This example is presentational; real forecasting and live updates need backend processing and JS.

License
- MIT (match repository)
