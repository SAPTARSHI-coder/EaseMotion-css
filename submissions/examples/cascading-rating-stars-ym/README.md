# Cascading Rating Stars

A pure-CSS star rating component for **EaseMotion CSS**, styled with a
gaming/arcade motion language: hovering or selecting a star triggers a
cascading pop-and-glow animation across all stars up to that point — no
JavaScript required.

## Preview

Open `demo.html` in any browser to see it live.

- Hover over any star → it and all stars before it "cascade" — popping in
  with a staggered bounce (`animation-delay` driven by a `--i` custom
  property per star).
- Click a star → the rating locks in via native radio buttons, the selected
  stars keep a pulsing amber glow, and a live status line below updates
  ("3 / 5 — decent", etc.) using `:has()` — still no JS.
- Built on the classic pure-CSS star-rating trick: stars are marked up
  5→1 in the HTML but visually reversed with `flex-direction: row-reverse`,
  so `~` sibling selectors can light up "this star and everything before it."

## Files

cascading-rating-stars-ym/
├── demo.html   → standalone live demo (loads style.css)
├── style.css   → component styles, tokens, and keyframes
└── README.md   → this file

## EaseMotion tokens used

Defined at the top of `style.css`, scoped so they won't collide with the rest
of the library:

| Token | Purpose |
|---|---|
| `--ease-cascade-out` | Base easing for color/state transitions |
| `--ease-cascade-pop` | Overshoot/"pop" curve (back-ease) used for the star bounce |
| `--ease-cascade-glow` | Slow ease used for the pulsing glow on the selected rating |

Keyframes:
- `cascade-pop` — the staggered scale/rotate bounce on hover and selection
- `cascade-glow` — the ambient pulsing glow on the locked-in rating

## How to use

1. Copy `style.css` into your project (or merge its rules into your existing
   EaseMotion CSS stylesheet).
2. Copy the markup structure from `demo.html`'s `<section class="cascading-rating-card">`
   block into your page.
3. Keep the stars in **5→1 HTML order** with `flex-direction: row-reverse` in
   the CSS — this is what makes the sibling-selector cascade work.
4. Give each `<input>`/`<label>` pair a unique `name`/`id` per rating widget
   on the page (e.g. `rating-2`, `star5-2`, …) if you're using more than one.

## Accessibility

- Built on native `<input type="radio">` + `<label>` inside a `<fieldset>`/`<legend>`,
  so it's fully keyboard operable (Tab + Arrow keys + Space) and understood
  natively by screen readers as a radio group.
- Each star label includes a visually-hidden (`sr-only`) text description
  ("3 stars") for screen reader users, since the star glyph itself is
  decorative.
- The live readout is marked `role="status"` so rating changes are announced.
- Visible focus outline on the currently focused star via `:focus-visible`.
- Respects `prefers-reduced-motion`: the pop and glow animations are disabled
  for users who request less motion, while the rating still functions.

## Responsive behavior

Below 420px, the card padding tightens, star size scales down slightly, and
gaps between stars shrink so the full row stays comfortably tappable on
small screens.

## Browser support

Uses standard CSS (flexbox, custom properties, `:has()`, the radio
sibling-selector trick). `:has()` is supported in all current evergreen
browsers (Chrome/Edge 105+, Safari 15.4+, Firefox 121+); on older browsers
the readout text simply won't update, while star selection and animation
still work normally. No JavaScript, no build step.