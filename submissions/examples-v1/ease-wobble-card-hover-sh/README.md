# Wobble Card Hover

A grid of gummy, sticker-style feature cards that lean toward the cursor as
you move over them, then spring back with a little overshoot "wobble" when
the cursor leaves.

## What it does

- **Cursor-following tilt** — each card rotates on its X/Y axis based on
  where the cursor is over it, with the icon/title/text lifted slightly for
  a subtle 3D pop.
- **Springy settle** — on mouse leave, the card eases back to flat using a
  cubic-bezier curve with overshoot, giving it a soft "wobble" rather than a
  linear snap.
- **Keyboard accessible** — tabbing to a card triggers the same lift/settle
  effect on focus/blur, so keyboard users get the interaction too.
- **Motion toggle** — a checkbox lets anyone turn the tilt animation off
  entirely (box-shadow hover feedback still works). Also automatically
  disabled if the OS-level "reduce motion" preference is set.

## Files

- `demo.html` — markup + logic (vanilla JS, no build step, no frameworks)
- `style.css` — all styling, sticker-card visual theme
- `README.md` — this file

## Running it

Just open `demo.html` in any modern browser. No server, build step, or
dependencies beyond a Google Fonts stylesheet link.

## Design notes

The visual concept is a set of thick-outlined, sticker-like cards on a dotted
corkboard background — bold flat colors, chunky rounded typography (Baloo 2
for headings, Nunito for body), and an offset drop shadow that grows on
hover to reinforce the "lifting toward you" feel.

## Accessibility

- Cards are focusable (`tabindex="0"`) and respond to keyboard focus/blur
  the same way they respond to mouse enter/leave.
- Respects `prefers-reduced-motion` automatically, and also exposes an
  in-page toggle so anyone can turn the tilt off regardless of OS setting.
- Color contrast on card text was chosen against each pastel background for
  readability.
- Fully responsive down to narrow mobile widths (grid collapses to a single
  column).

## Known limitations

- Tilt is calculated from raw mouse position, so on touch devices there's no
  hover/tilt — cards just show their resting state, which is an acceptable
  and common trade-off for a hover-driven effect.
- The 3D effect relies on `perspective` and `transform-style: preserve-3d`;
  it degrades gracefully (cards just stay flat) in any environment that
  doesn't support these, since they're a progressive enhancement here.
