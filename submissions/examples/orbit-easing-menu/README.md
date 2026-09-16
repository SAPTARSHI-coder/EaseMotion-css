# Orbit Menu

A pure CSS advanced component for **EaseMotion-css** — closes issue [#88614](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/88614) ("Add pure CSS advanced component iteration 156").

## What it is

A central "Menu" button that, on hover or keyboard focus, blooms into five
satellite action buttons arranged in a circle. Each satellite travels on a
**different named easing curve** — `linear`, `ease-out`, `ease-in-out`,
`spring`, and `bounce` — with a staggered `transition-delay` so the
difference between curves is easy to see side by side. Since this repo is
an easing/motion library, the component doubles as a live demo of the
curves themselves rather than just another animated menu.

## Files

| File | Purpose |
|---|---|
| `index.html` | Component markup |
| `style.css` | All styling and motion, no JS |

## How it works

- No JavaScript. State is driven entirely by `:hover` and `:focus-within`
  on the `.em-orbit` container.
- Satellite buttons sit at the center of the stage (`position: absolute`,
  centered) and are translated outward with `transform: translate()` when
  the parent is hovered/focused — this keeps the animation on
  `transform`/`opacity` only, so it stays on the compositor thread.
- Each satellite defines its own `transition-timing-function` as a custom
  property from a shared curve palette (`--em-ease-out`, `--em-ease-spring`,
  etc.), so the curves are reusable tokens rather than one-off values.
- `prefers-reduced-motion: reduce` collapses all transitions to near-zero
  duration.
- Fully keyboard operable: `Tab` reaches the core button, `:focus-within`
  reveals the satellites, and each satellite is itself focusable and
  `title`-labeled.

## Usage

Open `index.html` directly in a browser, or drop `style.css` + the
`.em-orbit` markup block into an existing page. Update the CSS custom
properties in `:root` (`--em-accent`, `--em-secondary`, etc.) to match your
theme.

## Suggested branch name

```
feat/orbit-easing-menu-156
```