# Incident Status Dashboard (EaseMotion)

A CSS-only incident and service status dashboard for operational overviews and status pages.

Purpose
- Provide a clear service health overview with uptime metrics, current status per service, and recent incident summaries.

Use cases
- Public status pages and internal status dashboards
- On-call rotations and incident response overviews
- Service-level summaries in admin panels or docs

Structure
- `section.overview-grid` — uptime and summary cards
- `ul.services-list > li.service-row` — per-service row with name, status badge, and uptime
- `section.incidents > article.incident-card` — recent incident summaries with metadata

Customization
- Colors, radii, and shadows are controlled via CSS variables in `style.css` (`:root`).
- Add or remove services by editing `demo.html`'s `ul.services-list` entries.
- Change status text and classes (`status-operational`, `status-degraded`, `status-partial`, `status-major`) to match your status taxonomy.
- Adjust responsive breakpoints in `style.css` to fit your layout needs.

Accessibility
- Uses semantic list and article markup for clarity.
- Incident cards are keyboard-focusable and include visible focus outlines.

Why it fits EaseMotion CSS
- Lightweight and composable: pairs with EaseMotion utilities (`em-container`, `em-p-*`, `em-text-*`) and keeps component-specific styles small.
- Production-ready: subtle elevation, hover states, and responsive behavior make it suitable for real dashboards and status pages.

Files
- `demo.html` — demo page with example services and incidents.
- `style.css` — component styles (no JavaScript required).

Preview
Open `submissions/examples/incident-status-dashboard-zt/demo.html` in a browser to see the dashboard.
