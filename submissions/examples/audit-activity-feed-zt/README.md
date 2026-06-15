# Audit Activity Feed (EaseMotion)

A CSS-only audit activity feed for admin dashboards and audit logs.

Purpose
- Surface recent administrative actions with actor, action description, affected resource, timestamp, and severity.

Use cases
- Audit logs in admin panels
- Security and compliance dashboards
- Activity timelines for incident investigations

Structure
- `section.feed-list > ol > li.feed-item` — single log entry
- `.avatar` — user initials placeholder
- `.actor` — user name and action description
- `.resource` — resource affected and timestamp
- `.badge` — severity indicator (Info, Warning, Critical)

Customization
- Colors and radii are controlled via CSS variables in `style.css` (`:root`).
- Add or remove entries by editing `demo.html`. For live data, integrate with your backend and update badges/statuses dynamically.
- Change severity colors by editing `--info`, `--warning`, and `--critical` variables.

Accessibility
- Feed items are keyboard-focusable and include visible focus outlines.
- Consider adding `time[datetime]` elements for machine-readable timestamps in production.

Why it fits EaseMotion CSS
- Lightweight and composable: pairs well with EaseMotion utility classes (`em-container`, `em-text-*`) and keeps component styles minimal and reusable.
- Developer-focused: clear visual cues for severity and quick scanning for admin users.

Files
- `demo.html` — demo markup with sample audit events.
- `style.css` — component styling (no JavaScript required).

Preview
Open `submissions/examples/audit-activity-feed-zt/demo.html` in a browser to view the component.
