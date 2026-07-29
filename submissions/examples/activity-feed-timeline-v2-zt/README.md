# Activity Feed Timeline v2 (EaseMotion)

Modern, CSS-only vertical activity timeline for feeds, changelogs and histories.

Purpose
- Display chronological activity in a readable vertical timeline with contextual metadata (avatar, status, timestamp).

Use cases
- Project activity feeds in dashboards
- Team activity or audit logs
- Deployment and release history views
- Changelogs and event streams in docs

Structure
- `ol.timeline` — ordered list containing timeline items
- `li.timeline-item` — a single event row
- `.timeline-marker` — visual marker on the central timeline
- `.activity-card` — event card containing `.avatar`, `.card-content`, and `<time>` timestamp

Customization
- Colors and radii are driven by CSS variables in `style.css` (`:root` at the top).
- Swap avatar images or replace initials with `<img>` inside `.avatar`.
- Add more status colors by defining `.status.*` classes and marker colors.
- Adjust spacing by changing the `padding-left` value on `.timeline` and sizes in `.avatar`.

Accessibility
- Uses semantic `ol`/`li` plus `time[datetime]` for machine-readable timestamps.
- Focus styles on `.activity-card` provide keyboard navigability.

Why it fits EaseMotion CSS
- Minimal: leverages EaseMotion utility classes (`em-container`, `em-p-*`, `em-text-*`) to integrate with existing docs and layouts.
- Accessible and composable: designed to slot into EaseMotion pages and follow the project's spacing and typography conventions.
- Production-ready: subtle shadows, hover states, and responsive behavior make it suitable for real dashboards.

Files
- `demo.html` — demo page showing example activities.
- `style.css` — component styles (no JavaScript required).

Preview
Open `submissions/examples/activity-feed-timeline-v2-zt/demo.html` in a browser to view the component.
