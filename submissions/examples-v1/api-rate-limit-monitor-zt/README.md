# API Rate Limit Monitor (EaseMotion)

A CSS-only dashboard for visualizing API quota usage, reset timers, and warning states.

Purpose

- Provide quick visibility into API usage and remaining quota with animated progress bars and clear metrics.

Use cases

- Developer dashboards showing live or sampled quota usage
- Billing and usage overview pages
- Admin panels for API owners and SRE teams (visual mockups)

Structure

- `section.cards-grid` — responsive grid of `.quota-card` entries
- `article.quota-card` — single quota card with `.metrics`, `.meta-row`, and `.progress` bar
- State classes: `.healthy`, `.warning`, `.danger` to reflect usage thresholds

Customization

- Colors, radii, and shadows are controlled via CSS variables in `style.css` (`:root`).
- Adjust progress percentage by changing the inline `width` on `.progress-fill`.
- Modify thresholds (healthy/warning/danger) by toggling the corresponding classes on `.quota-card` elements.

Accessibility

- Cards are keyboard-focusable and include visible focus outlines.
- All data is presented as text — integrate `aria-live` regions if you connect a real-time backend.

Why it fits EaseMotion CSS

- Lightweight and composable: pairs with EaseMotion utility classes (`em-container`, `em-text-*`) and keeps component CSS minimal and focused.
- Developer-friendly: clear hierarchy, readable metrics, and subtle animations suitable for product dashboards.

Files

- `demo.html` — demo markup with example quota cards.
- `style.css` — component styles (no JS required).

Preview
Open `submissions/examples/api-rate-limit-monitor-zt/demo.html` in a browser to view the monitor.
