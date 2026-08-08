# Self-Serve SSO Provisioning Panel — EaseMotion CSS Example

Purpose
- A CSS-only demonstration of an enterprise-facing SSO and provisioning dashboard panel.

Use cases
- Admin consoles for SaaS products managing identity providers (Okta, Auth0, Azure AD, Google Workspace).
- Onboarding flows where security teams verify domains, enable SCIM/SCIM provisioning, and monitor connection health.
- Documentation screenshots, design systems, and pattern libraries showing SSO setup UX.

Structure
- `demo.html` — Static markup presenting provider cards, provisioning steps, connected domains, and status panels.
- `style.css` — Visual styles, layout, tokens, responsive rules, and lightweight animations.

Customization
- Theme colors and tokens live in `:root` variables in `style.css` (e.g., `--accent`, `--ok`, `--warn`).
- Provider rows are simple markup; add or remove list items to represent different integrations.
- Progress ring uses `--pct` inline style on the `.ring` element to represent completion.

Accessibility
- Keyboard-focusable cards (`tabindex`) and visible focus outlines.
- Uses semantic headings, lists, and description lists for assistive technologies.
- `prefers-reduced-motion` respected to disable animations.

Why it fits EaseMotion CSS
- Reusable, token-driven styling aligns with EaseMotion's design principles.
- Demonstrates enterprise UI patterns without JS, making it easy to adapt into the repo's component library.

Limitations
- This example is intentionally JavaScript-free; real provisioning flows require API calls and scripting to function.

License
- MIT (follow repository license)
