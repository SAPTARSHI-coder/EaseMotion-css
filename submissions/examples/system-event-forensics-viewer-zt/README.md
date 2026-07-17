# System Event Forensics Viewer — EaseMotion CSS Example

Purpose
- A CSS-only presentation of a system event forensics viewer for logs, incidents, and correlations.

Use cases
- Security and SRE documentation showing timeline and incident correlation UIs.
- Design system examples for severity badges, event lists, and incident summaries.
- Embedding in docs where a static illustration of log analysis is needed.

Structure
- `demo.html` — Static markup with an event timeline, incident correlation panel, and event details/filters.
- `style.css` — Visual tokens, timeline styles, severity colors, and responsive rules.

Customization
- Colors and tokens are in `:root` in `style.css` (e.g., `--critical`, `--warn`, `--info`).
- Add `.event` items in `demo.html` to expand the timeline.
- Use classes like `.critical`, `.warn`, and `.info` on `.event` to change severity visuals.

Accessibility
- Headings and list structure provide semantic context; interactive-like items are keyboard-focusable.
- `prefers-reduced-motion` respects reduced motion preferences.

Why it fits EaseMotion CSS
- Token-driven styling and small, reusable UI pieces map well to EaseMotion's component-first approach.
- Provides a straightforward, JS-free visual for security and operations teams.

Limitations
- Search, live correlation, and dynamic filtering require scripting and telemetry backends.

License
- MIT (match repository)
