# Release Notes / Changelog (EaseMotion)

A lightweight, CSS-only release notes component for product changelogs and release pages.

Purpose
- Present chronological release information with clear sections (Added, Improved, Fixed) and status badges.

Use cases
- Product release pages
- Documentation changelogs
- In-product "What's New" surfaces

Structure
- `ol.releases` — timeline container
- `li.release-item` — version entry with marker
- `.release-card` — card containing `.release-head` and `.release-body`
- `.changes` sections inside `.release-body` for Added / Improved / Fixed

Customization
- Colors, radii, and elevation are controlled by CSS variables in `style.css` (:root).
- Adjust number of columns for `.release-body` or change breakpoints in media queries.
- Add more status badges by adding `.badge.*` classes.

Accessibility
- Semantic `ol`/`li` structure and `time[datetime]` elements for machine-readable dates.
- Focus styles on `.release-card` allow keyboard navigation.

Why it fits EaseMotion CSS
- Compact and composable: pairs with EaseMotion utilities (`em-container`, `em-text-*`) and stays lightweight.
- Accessible-first and production-ready for docs and product pages.

Files
- `demo.html` — demo page showing sample releases.
- `style.css` — component styling (no JS required).

Preview
Open `submissions/examples/release-notes-changelog-zt/demo.html` in a browser to view the component.
