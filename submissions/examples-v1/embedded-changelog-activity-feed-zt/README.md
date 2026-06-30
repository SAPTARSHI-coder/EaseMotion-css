# Embedded Changelog Activity Feed — EaseMotion CSS Example

Purpose
- A compact, embeddable changelog and activity feed component for product updates, releases, and announcements.

Use cases
- Embedding release notes into product docs or marketing pages.
- In-app activity panels for product teams and users to see recent changes.
- Showcase UI patterns for timeline-style feeds in design systems.

Structure
- `demo.html` — Static markup with a pinned update and a chronological feed of release, feature, improvement, and bug-fix entries.
- `style.css` — Tokens, timeline connectors, avatars, badges, and responsive rules.

Customization
- Colors and tokens are exposed in `:root` in `style.css` (e.g., `--accent`, `--new`, `--fix`).
- Add or remove `.entry` blocks in `demo.html` to modify the feed.
- Change connector visuals by editing `.connector` rules.

Accessibility
- Semantic headings and lists; clear focus outlines for keyboard users.
- Compact layout designed to be readable at small widths.
- `prefers-reduced-motion` support disables animations.

Why it fits EaseMotion CSS
- Lightweight, token-driven component that maps well to EaseMotion's utility and component approach.
- Useful for design systems and documentation where small embeddable patterns are valuable.

Limitations
- Static demo: dynamic fetching, filtering, and timeline ordering need JS in production.

License
- MIT (match repository)
