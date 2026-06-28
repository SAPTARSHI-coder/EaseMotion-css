# Changelog / Release Notes Panel (EaseMotion)

A compact, CSS-only release notes panel for changelogs and product updates.

Purpose
- Surface versioned release notes with categorized sections (New Features, Improvements, Bug Fixes) in a timeline-style layout.

Use cases
- Product changelog pages
- In-app "What's New" panels
- Developer release notes and documentation

Structure
- `ol.release-list` — vertical timeline container
- `li.release-item` — release entry (rendered as a card)
- `.release-card` — contains `.release-top` (version + date) and `.release-body` (categorized sections)
- `.badge` — version badge or release type

Customization
- Colors, radii, and elevation are set via CSS variables in `style.css` (`:root`).
- Adjust layout by changing the grid in `.release-body` or the media query breakpoint for narrow screens.
- Add more release entries by copying the `li.release-item` structure in `demo.html`.

Accessibility
- Uses semantic `time[datetime]` values for machine-readable dates.
- Cards are keyboard-focusable with visible focus outlines for keyboard users.

Why it fits EaseMotion CSS
- Lightweight and composable: pairs with EaseMotion utility classes for spacing and typography while keeping the component CSS minimal.
- Developer-friendly: clear hierarchy, readable typography, and subtle animations suitable for product update pages.

Files
- `demo.html` — demo markup with example releases.
- `style.css` — component styles (no JavaScript required).

Preview
Open `submissions/examples/changelog-release-notes-panel-zt/demo.html` in a browser to view the component.
