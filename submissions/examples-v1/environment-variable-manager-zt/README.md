# Environment Variable Manager (EaseMotion)

A CSS-only environment variable manager UI for dashboards and admin consoles.

Purpose
- Display environment variables in a secure, scannable layout with masked secret values and environment badges.

Use cases
- Admin consoles for deploying applications
- Internal tooling for ops and SRE
- Documentation and design system demos showing secure UX patterns

Structure
- `header.env-header` — search and environment filters
- `section.vars-list > .vars-grid` — list of `article.var-row` entries
- `.key` — variable name
- `.value.secret` — masked secret display
- `.meta` — protected indicator, environment badge, status

Customization
- Colors and radii are controlled via CSS variables in `style.css` (`:root`).
- Toggle which environments appear by editing the filter badges in `demo.html`.
- Replace masked value placeholder by rendering the actual secret client-side only in secure environments.

Accessibility
- Rows are keyboard-focusable and include visible focus outlines.
- Use server-side controls for editing and revealing secrets; this demo intentionally provides a visual-only mock.

Why it fits EaseMotion CSS
- Lightweight and composable: pairs with EaseMotion utilities (`em-container`, `em-p-*`, `em-text-*`) and keeps component styles focused and minimal.
- Security-first: masked secrets and protected labels model good UX for handling sensitive configuration values.

Files
- `demo.html` — demo markup showing example variables.
- `style.css` — component styles (no JavaScript required).

Preview
Open `submissions/examples/environment-variable-manager-zt/demo.html` in a browser to view the manager.
