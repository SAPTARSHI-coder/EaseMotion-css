# Cyberpunk Skew Carousel

A pure CSS carousel — zero JavaScript. Slides transition with a smooth
skew-and-settle motion, styled as a neon cyberpunk interface panel.

## What it does

- **Pure CSS state machine.** Hidden (but focusable) radio inputs drive
  which slide is active, using the sibling combinator (`~`) to show the
  matching slide, highlight the matching dot, and reveal the matching
  prev/next arrow. There is no `<script>` tag anywhere in `demo.html`.
- **Skew-active transition.** Inactive slides sit skewed, shifted, and
  scaled down with `opacity: 0`; the active slide animates back to a flat,
  full-opacity, full-scale resting state.
- **Free keyboard support.** Because slide selection is backed by a native
  `<input type="radio">` group, Tab and the arrow keys move between slides
  automatically — no custom key handling needed.
- **Exposed custom properties** for consumers to override:
  - `--carousel-duration` — transition length
  - `--carousel-easing` — transition timing function
  - `--carousel-skew` — skew angle for inactive slides
  - `--carousel-travel` — horizontal offset for inactive slides
  - `--carousel-scale-inactive` — scale factor for inactive slides
- **Live speed presets** (Fast / Normal / Slow) — also pure CSS, using the
  same radio + sibling-combinator technique to override the properties
  above on the fly, so you can feel the difference the custom properties
  make without touching a stylesheet.

## Files

- `demo.html` — markup only, no JavaScript
- `style.css` — all styling and all interaction logic
- `README.md` — this file

## Running it

Open `demo.html` in any modern browser. No server, build step, or
dependencies beyond a Google Fonts stylesheet link.

## Design notes

The visual theme is a cyberpunk "uplink" terminal: a near-black background
with a faint cyan grid, glowing neon borders and text-shadow, and a
condensed, wide-tracking display font (Orbitron) paired with Rajdhani for
body copy. Each slide has its own accent color (cyan, magenta, yellow,
green) carried through its heading glow and eyebrow label.

## How the pure-CSS mechanics work

- Four radio inputs (`#s1`–`#s4`, one `name` group) are visually hidden with
  a standard clip-based technique that keeps them in the accessibility tree
  and the tab order.
- Each slide's default (inactive) state is skewed/offset/scaled/hidden.
  A rule like `#s1:checked ~ .viewport .slide-1 { ...flat, visible... }`
  overrides that only for the slide matching the checked radio.
- Dots and arrows are `<label for="...">` elements pointing at a specific
  radio, so clicking them is just a native label-click — no JS needed to
  "jump" to a slide. Because there's one prev/next label pair per possible
  current slide, the correct pair is revealed with the same
  `:checked ~ selector` pattern and all others stay hidden/non-interactive.
- The speed-preset radios sit as earlier siblings of `.carousel` in the
  DOM, so their `:checked` state can override `.carousel`'s custom
  properties the same way — demonstrating the exposed API without any JS.

## Accessibility

- The slide radios remain focusable and screen-reader-visible even though
  hidden visually; each has a descriptive `aria-label` (e.g. "Slide 2 of 4:
  Grid Runner").
- The carousel container uses `role="group"` and
  `aria-roledescription="carousel"` with a descriptive `aria-label`.
- Dots and arrows are marked `aria-hidden="true"` since they're mouse/touch
  conveniences that duplicate the native radio-group keyboard behavior;
  this avoids screen readers announcing eight extra, sparsely-labeled
  controls on top of the four properly-labeled radios.
- A visible focus ring appears on the dot matching whichever radio currently
  has keyboard focus (`:focus-visible`).
- Respects `prefers-reduced-motion` by collapsing the skew/scale transition
  down to a quick opacity fade.
- Fully responsive: the viewport's aspect ratio and padding adjust at
  narrow widths.

## Known limitations

- The number of slides (4) is currently hardcoded into the CSS selectors
  (one rule per slide/dot/arrow pair), which is the standard trade-off for
  a no-JavaScript, radio-driven carousel — adding a 5th slide means adding
  one more radio, one more slide rule, one more dot rule, and one more
  prev/next arrow pair.
- There's no autoplay, since a "zero JavaScript overhead" carousel has no
  timer mechanism to drive one; this can be added later as an optional,
  separate JS-enhanced variant if the project wants one.
