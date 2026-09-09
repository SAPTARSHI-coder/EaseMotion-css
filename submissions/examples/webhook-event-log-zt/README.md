# Webhook Event Log (EaseMotion)

A CSS-only webhook event log component for viewing recent webhook deliveries and statuses.

Purpose
- Provide a readable list of webhook events with delivery status, timestamps, and source labels.

Use cases
- Delivery logs in admin dashboards
- Developer tools showing webhook activity
- Incident investigation and retry monitoring (visual mock)

Structure
- `section.log-list > ul > li.log-item` — single event entry
- `.event-name` — event identifier (e.g., payment.succeeded)
- `.event-meta` — timestamp and source label
- `.badge` — status badge (Success, Failed, Pending)
- `.retry` — retry indicator text

Customization
- Colors, radii, and shadows are controlled via CSS variables in `style.css` (`:root`).
- Add more events by copying the `li.log-item` entries in `demo.html`.
- Change badge text or add icons by editing the `.badge` content.

Accessibility
- Log items are keyboard-focusable and include visible focus outlines.
- Timestamps are presented as readable text; consider adding `time[datetime]` elements for machine-readability if desired.

Why it fits EaseMotion CSS
- Minimal and composable: pairs with EaseMotion utilities (`em-container`, `em-text-*`) and maintains focused component CSS.
- Developer-oriented: clear visual cues for status and source, suitable for dashboards and logs.

Files
- `demo.html` — demo markup with sample events.
- `style.css` — component styling (no JavaScript required).

Preview
Open `submissions/examples/webhook-event-log-zt/demo.html` in a browser to view the event log.
