# Trial Conversion Insights Dashboard — EaseMotion CSS Example

Purpose
- A CSS-only static dashboard demonstrating trial-to-paid conversion analytics.

Use cases
- Executive overviews for product teams, growth, and revenue ops.
- Design system examples showing KPI widgets, funnels, trend cards, and tier breakdowns.
- Documentation and marketing visuals for analytics features.

Structure
- `demo.html` — Static markup with semantic sections: header, KPI grid, funnel, trends, and tier breakdown.
- `style.css` — Visual tokens, responsive grid, progress bars, and lightweight animations.

Customization
- Theme tokens live in `:root` in `style.css` (e.g., `--accent`, `--accent-2`, `--ok`).
- Funnel and progress lengths use inline `--w` style values on elements to change percentages.
- Add/remove KPI cards by editing the `.kpis` section in `demo.html`.

Accessibility
- Semantic headings and lists; keyboard focus styles included.
- `prefers-reduced-motion` disables animations for motion-sensitive users.

Why it fits EaseMotion CSS
- Aligns with EaseMotion's token-driven, component-first approach.
- Offers a reusable analytics pattern that can be adapted into dashboard kits.

Limitations
- Static-only; dynamic data and interactive selectors require JavaScript.

License
- MIT (match repository)
