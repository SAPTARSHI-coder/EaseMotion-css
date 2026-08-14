# ease-badge-contrast-wcag

WCAG AA-compliant colored badges. Fixes the accessibility issue where white text on light colored badges (warning / info / success) failed the minimum 4.5:1 contrast ratio.

## What does this do?

- **Two AA-passing styles per semantic color** (primary / success / warning / danger / info):
  - **Filled** — darkened background + white text (all ≥ 4.5:1).
  - **Subtle** — soft tint + dark text (all ≥ 14:1).
- **Verified ratios** — every color pair was checked with the WCAG relative-luminance formula. The demo includes a contrast-ratio table showing before (failing) vs after (passing).

| Color | Before (white on tint) | After (filled) | After (subtle) |
|---|---|---|---|
| Primary | 6.29:1 (pass) | 7.90:1 | 14.49:1 |
| Success | 2.54:1 (fail) | 5.48:1 | 15.74:1 |
| Warning | 2.15:1 (fail) | 7.09:1 | 16.03:1 |
| Danger  | 3.76:1 (fail) | 8.31:1 | 14.61:1 |
| Info    | 2.77:1 (fail) | 5.93:1 | 15.56:1 |

Threshold: WCAG AA normal text = 4.5:1.

## How is it used?

```html
<link rel="stylesheet" href="style.css" />

<!-- filled -->
<span class="ease-badge ease-badge--warning">Warning</span>
<!-- subtle -->
<span class="ease-badge ease-badge--subtle ease-badge--warning-subtle">Warning</span>
```

## Why is this useful?

- **Directly fixes the a11y issue** — warning/info/success badges now meet WCAG AA instead of failing at 2.15–2.77:1.
- **Two styles** — filled (darkened bg + white text) for emphasis, subtle (tint + dark text) for calmer UIs; both pass.
- **Additive** — ships under `submissions/examples/` without modifying core badge classes.
- **Reusable** — colors are CSS custom properties (`--ease-badge-*`), so themes can override while keeping the darkened/tinted structure that guarantees contrast.

## Files

- `demo.html` — self-contained showcase (filled + subtle badge rows + contrast-ratio table). No server/CDN/frameworks.
- `style.css` — badge base, filled (darkened) + subtle (tint) color variants, contrast table.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions.
