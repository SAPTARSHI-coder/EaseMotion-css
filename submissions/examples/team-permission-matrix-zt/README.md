# Team Permission Matrix (EaseMotion)

A CSS-only team permission matrix for admin panels and access control documentation.

Purpose
- Display team members, their roles, and a granular permission grid (read/write/deploy/billing/manage users).

Use cases
- Admin dashboards for access control
- Documentation pages showing role capabilities
- Team management UIs (visual mockups)

Structure
- `table.matrix-table` — responsive table displaying members and permission columns
- `.member` — contains `.avatar` and `.name`
- `.role.badge` — role label (Admin, Editor, Viewer)
- `.perm` cells — granted/denied indicators for each permission
- `.access.badge` — summarized access level badge

Customization
- Colors, radii, and elevation are controlled via CSS variables in `style.css` (`:root`).
- Change role badge colors by editing `.role.badge.*` rules.
- Toggle granted/denied by changing `.perm` classes in the markup.
- Adjust responsive breakpoint in the media query to suit your layout.

Accessibility
- Table uses semantic markup (`table`, `thead`, `tbody`, `th`, `td`).
- Rows are focusable and include visible focus outlines for keyboard navigation.

Why it fits EaseMotion CSS
- Lightweight and composable: uses EaseMotion utility classes for spacing and typography while keeping component-specific styles small and reusable.
- Developer-focused: clean, readable matrix suitable for product admin UX and documentation.

Files
- `demo.html` — demo markup with example users and permissions.
- `style.css` — component styles (no JavaScript required).

Preview
Open `submissions/examples/team-permission-matrix-zt/demo.html` in a browser to view the matrix.
