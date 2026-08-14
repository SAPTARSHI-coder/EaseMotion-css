# motion-sensitivity-pulse

An accessible pulse animation (badges + a live status dot) that **respects `prefers-reduced-motion` automatically** *and* exposes a **manual motion-sensitivity toggle** so users can calm the animation on demand. This demonstrates the fix for the issue where `.ease-badge-pulse` ran forever regardless of accessibility settings.

## What does this do?

- **Pulse effect** — a badge emits an expanding "ping" ring (`::before` scales up + fades, `@keyframes ms-ping`) plus a gentle scale "breathe" on the badge itself (`@keyframes ms-breathe`). A live status dot does a `box-shadow` ripple pulse (`@keyframes ms-status-pulse`).
- **Automatic motion control** — `@media (prefers-reduced-motion: reduce)` disables **all** the pulse/breathe/status animations unconditionally and hides the static ring. If the user's OS requests reduced motion, nothing animates — full WCAG 2.3.3 compliance.
- **Manual motion control** — the demo's "Reduce" button sets `body.motion-reduced`, which also disables the animations (so users can calm the UI even without an OS setting). "On" restores `body.motion-full`. The media query always wins over the manual toggle, so a reduced-motion OS user stays calm even if "On" is pressed.
- The demo also reads `matchMedia('(prefers-reduced-motion: reduce)')` to display the live OS setting.

## How is it used?

1. Link the stylesheet + the tiny script (in `demo.html`).
2. Use the markup below. Put `body` class `motion-full` (default) or `motion-reduced` to set the app-level motion policy.

```html
<link rel="stylesheet" href="style.css" />
<body class="motion-full">
  <span class="badge badge--pulse">1</span>
  <span class="badge badge--pulse badge--ok">12</span>
  <span class="status-dot status-dot--pulse"></span>
</body>
```

To wire the manual toggle, toggle `motion-full` / `motion-reduced` on `<body>` from a control (the demo's `.seg` buttons do this).

## Why is this useful?

- **Directly fixes the a11y issue** — the original `.ease-badge-pulse` ignored `prefers-reduced-motion`; this example shows the correct pattern (media query kills the infinite animation).
- **Goes further with a manual toggle** — some users are motion-sensitive without an OS setting; the app-level `body.motion-reduced` gives them an in-app calm switch, with the media query as a backstop that always wins.
- **Additive example** — ships under `submissions/examples/` without touching the core `.ease-badge-pulse` class, so it's a safe reference implementation the maintainer can adopt.
- **Reusable** — configurable via CSS custom properties (`--ms-dur`, `--ms-accent`, badge colors, etc.); badge color variants (`--ok`/`--warn`/`--danger`) and the status dot reuse the same motion primitives.

## Files

- `demo.html` — self-contained showcase (open directly in a browser; no server, CDNs, or frameworks). Motion toggle, pulse badges (5 color variants), live status dot, and the tiny toggle/matchMedia script.
- `style.css` — pulse `@keyframes` (ping + breathe + status ripple), manual `body.motion-reduced` control, automatic `prefers-reduced-motion` control (always wins), badge palette + status dot.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
