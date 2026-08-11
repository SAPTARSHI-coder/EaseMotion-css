# Tenant Billing Meterboard — EaseMotion CSS example

Purpose
- A CSS-only, accessible billing overview card for multi-tenant SaaS dashboards.
- Shows tenant name, billing cycle, usage meter, monthly spend, plan tier, remaining credits, status indicator, and optional metrics (API, storage, seats).

Use cases
- Billing dashboard widget on an account page.
- Embedded meterboard in admin consoles, team overviews, or marketing demos.
- Lightweight static previews for design systems and docs.

Structure
- `demo.html` — self-contained HTML demo linking `style.css`.
- `style.css` — all CSS required: layout, meters, badges, responsiveness, and subtle animations.

Customization
- Color tokens are defined in `:root` and can be adapted to match brand tokens.
- Adjust usage percentages by editing inline `style="--pct:XX%"` on `.meter-fill`, `.meter-thumb`, and `.mini-fill` elements (no JS required).
- Layout spacing and radii are controlled via CSS variables near the top of `style.css`.

Accessibility
- Progress meters expose `role="progressbar"` and `aria-valuenow"/aria-valuemin"/aria-valuemax` where applicable.
- Focus styles for interactive controls and `prefers-reduced-motion` respected.

Why this fits EaseMotion CSS
- Animation-first, utility-driven projects benefit from polished, accessible examples that show how to combine motion with practical UI.
- This component is pure CSS, self-contained, and follows the repository's contribution guideline for `submissions/examples/*`.
- It demonstrates modern SaaS patterns (cards, meters, badges) using the project's visual language and motion-friendly defaults.

Files
- `demo.html`
- `style.css`
- `README.md`

License
- Add your normal contribution metadata when submitting; this example follows the repository's same licensing model.