# Infinite Marquee Tech Stack Carousel (`infinite-marquee-carousel-hr18`)

A pure-CSS infinitely looping horizontal logo ticker, built for issue
[#55695](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55695).

## A note on naming

The issue's own filenames (`index.html`, `styles.css`) and its suggested
folder (`infinite-marquee-carousel-em`, no per-contributor suffix) don't
match this repo's actual enforced submission convention —
`demo.html` + `style.css` + `README.md`, in a uniquely-suffixed folder.
This submission uses that convention instead, matching what the repo's
automated submission validator checks for.

## What it does

A row of technology badges (React, Node.js, Docker, Figma, TypeScript,
PostgreSQL, AWS, GraphQL) scrolls continuously to the left and loops
seamlessly, with soft fade masks on both edges and a smooth pause on
hover — no JavaScript involved anywhere.

**How the seamless loop works:** the badge list appears twice in the
markup, back to back, inside one flex track. The track only ever animates
from `translateX(0)` to `translateX(-50%)` — exactly the width of one
copy — so the instant it finishes, the second copy sits in precisely the
position the first one started in. The animation then restarts (`infinite`)
and the transition is invisible; there's no jump, reset, or visible seam.

The edge fades use `mask-image: linear-gradient(...)` (with a
`-webkit-mask-image` fallback) rather than solid gradient overlay `<div>`s,
so they work over any background color without needing to match it.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

```html
<div class="ease-marquee-hr18" role="group" aria-label="Technology stack">
  <div class="imc-track-hr18">
    <!-- your items, once -->
    <span class="imc-badge-hr18">React</span>
    <span class="imc-badge-hr18">Node.js</span>

    <!-- the exact same items again, marked aria-hidden -->
    <span class="imc-badge-hr18" aria-hidden="true">React</span>
    <span class="imc-badge-hr18" aria-hidden="true">Node.js</span>
  </div>
</div>
```

The second copy must be identical to the first (same items, same order)
for the loop math to line up, and should carry `aria-hidden="true"` since
it's a visual duplicate, not new content.

### Tuning the marquee

| Property | Default | Controls |
|---|---|---|
| `--ease-marquee-duration-hr18` | `22s` | How long one full loop takes — lower is faster |
| `--ease-marquee-gap-hr18` | `2.5rem` | Spacing between items |
| `--ease-marquee-fade-width-hr18` | `12%` | How wide the edge fade masks are, as a percentage of the row's width |

```css
.ease-marquee-hr18.fast {
  --ease-marquee-duration-hr18: 12s;
}
```

## Accessibility notes

- The visible copy of the badge list is real, readable content; the
  duplicate copy needed for the seamless loop is marked
  `aria-hidden="true"` so screen readers only announce the list once.
- The whole row carries `role="group"` and a descriptive `aria-label`
  ("Technology stack"), so it reads as one coherent unit rather than a
  stream of unrelated items.
- The scroll pauses on `:hover` **and** `:focus-within`, so keyboard users
  tabbing through any focusable items in the row (if badges are made into
  links) get the same "stop and read" behavior mouse users get from
  hovering.
- `@media (prefers-reduced-motion: reduce)` disables the scrolling
  animation entirely, leaving a static row of badges — a continuously
  moving ticker is exactly the kind of motion that preference is meant to
  suppress.

## Responsiveness

The row's width is intrinsic to its content (`width: max-content`) inside
an `overflow: hidden` frame that fills its container, so it scales cleanly
at any viewport width without a media query — the same technique works
identically on mobile and desktop.

## Why this fits EaseMotion CSS

A pure-CSS, zero-JavaScript animated component exactly as the issue
requires — flexbox layout, one `@keyframes` translation, and
`mask-image` for the fades — with every timing/spacing value exposed as a
tunable custom property and `prefers-reduced-motion` respected as a
first-class part of the design.

All classes, custom properties, and the folder itself use a `-hr18` suffix
to avoid colliding with any other contributor's submission under
`submissions/examples/`.
