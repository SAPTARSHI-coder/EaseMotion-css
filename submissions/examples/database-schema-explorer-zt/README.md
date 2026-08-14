# Database Schema Explorer (EaseMotion)

A CSS-only, developer-focused database schema diagram showcasing tables, columns, PK/FK indicators and visual connectors.

Purpose
- Provide a visual reference of database structure for docs, internal tooling demos, and onboarding materials.

Use cases
- Developer docs and architecture pages
- Internal demos and team knowledge bases
- Onboarding and design reviews

Structure
- `.schema-wrap` — diagram canvas and positioning context
- `.tables` — responsive grid container for table cards
- `.table-card` — individual table with `.table-head` and `.columns` list
- `.badge.pk` / `.badge.fk` — primary key and foreign key indicators
- `.connector` elements — CSS-positioned lines connecting related tables

Customization
- Colors, radii, and shadows are controlled via CSS variables in `style.css` (`:root`).
- Adjust layout by changing `.tables` grid columns or the media query breakpoints.
- Modify connector placement by adjusting the absolute positioning of `.connector` entries (left/top/width).

Accessibility
- Cards are keyboard-focusable and include visible focus outlines.
- Use semantic list markup for columns so content remains readable by assistive tech.

Why it fits EaseMotion CSS
- Lightweight and composable: integrates with EaseMotion utilities (container, spacing, text utilities) while keeping component-specific styles minimal.
- Developer-focused: prioritizes clarity and quick scanning with production-ready styles and subtle animations.

Files
- `demo.html` — demo page that renders a simple Users / Projects / Tasks schema.
- `style.css` — component styles (no JavaScript required).

Preview
Open `submissions/examples/database-schema-explorer-zt/demo.html` in your browser to view the static schema diagram.
