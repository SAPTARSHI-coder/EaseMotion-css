# CSS 3D-Flip Drawer — Fintech Dashboard Layouts

A pure CSS/HTML 3D-flip card component for fintech dashboards. Each account
card flips 180° on the Y-axis to reveal a "quick actions" panel on the back.
No JavaScript — flip state is driven entirely by the checkbox hack.

## Files

- `demo.html` — 3 account cards (Checking / Savings / Investments)
- `style.css` — all flip logic, theming, responsive rules
- `README.md` — this file

## How it works

- A visually-hidden `<input type="checkbox">` stores the flip state.
- A `<label for="...">` wraps the two faces (`.flip-card__face--front` / `--back`).
- Clicking the label toggles the checkbox natively (no JS).
- `:checked + .flip-card__inner` rotates the inner wrapper `rotateY(180deg)`.
- `perspective` (on `.flip-card`) + `transform-style: preserve-3d` (on `.flip-card__inner`)
  create the 3D effect; `backface-visibility: hidden` hides whichever face is turned away.

## Custom properties

| Property | Purpose |
|---|---|
| `--flip-duration` | Flip animation speed (default `0.7s`) |
| `--flip-easing` | Flip timing function |
| `--card-w` / `--card-h` | Card dimensions, overridden per breakpoint |
| `--checking-*`, `--savings-*`, `--invest-*` | Gradient colors per card type |

## Accessibility

- The checkbox is keyboard-focusable and toggles with native `Space`/`Enter`
  (real `<input>` element, not a faked button) — a visible focus ring is
  drawn around the card via `:focus-visible`.
- Each checkbox has a descriptive `aria-label`.
- `prefers-reduced-motion: reduce` swaps the 3D rotation for a simple
  opacity crossfade so the content still switches without motion.

## Responsive behavior

| Breakpoint | Card width | Layout |
|---|---|---|
| Mobile (≤768px) | 100% | single column |
| Tablet (769–1179px) | 280px | auto-fit grid |
| Desktop (≥1180px) | 320px | auto-fit grid |

## Usage

Drop `style.css` into your project and reuse the markup pattern in
`demo.html` for any card you want to flip — swap the front/back content,
keep the `.flip-card` / `.flip-card__toggle` / `.flip-card__inner` /
`.flip-card__face` structure.