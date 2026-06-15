# Team Availability Board (EaseMotion)

A lightweight, CSS-only team availability dashboard for teams and remote-first apps.

Purpose
- Provide a quick, scannable view of team member availability and presence using simple cards and status indicators.

Use cases
- Team dashboards and homepages
- Standup panels and meeting readiness views
- Support and ops presence boards
- Onboarding and team directories

Structure
- `section.board-grid` — responsive grid container of team members
- `article.member-card` — individual team member card (focusable)
- `.avatar` — initials or image
- `.status` + `.status-*` — colored indicator for presence
- `.status-label` — short text label (Online, In Meeting, Focus Mode, Away, Offline)

Customization
- Colors and radii are defined via CSS variables in `style.css`'s `:root` block.
- Replace initials with `<img>` inside `.avatar` for real photos.
- Change columns by editing `.board-grid` `grid-template-columns` or media queries.
- Add more statuses by creating additional `.status-*` classes with your color tokens.

Accessibility
- Cards are keyboard-focusable and include visible focus outlines.
- Uses clear text labels and `em-text-*` utility classes for readable sizing.

Why it fits EaseMotion CSS
- Minimal: uses EaseMotion utility classes (`em-container`, `em-p-*`, `em-text-*`) and small, focused component CSS.
- Composable: drop into docs, dashboards, or examples without JS.
- Production-ready: subtle elevation, hover effects, and responsive behavior make it suitable for product UIs.

Files
- `demo.html` — demo page showing example members.
- `style.css` — component styling.

Preview
Open `submissions/examples/team-availability-board-zt/demo.html` in a browser to view the board.
