# Ripple-Wave Navbar (`ripple-wave-navbar-hr18`)

A pure-CSS navbar combining a per-link hover ripple with a continuous
ambient wave, styled for gaming hub layouts, built for issue
[#56481](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/56481).

## What it does

Two motions work together to earn the "Ripple-Wave" name:

- **Ripple** — hovering or focusing any nav link expands a soft radial
  glow outward from the link's own center via a `::before` pseudo-element
  scaling from `0` to `14`, then fading. This needs no click-coordinate
  tracking or JavaScript — it's centered on the element itself, not a
  cursor position, so it works identically for a mouse hover and a
  keyboard `Tab`.
- **Wave** — a slim, two-tone gradient band along the bottom edge of the
  bar drifts continuously via an animated `background-position`, giving
  the whole navbar a subtle sense of motion even before anyone interacts
  with it.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

```html
<nav class="ease-navbar-ripple-wave-hr18" aria-label="Gaming hub">
  <span class="rwn-logo-hr18">NEONFRAG</span>
  <div class="rwn-links-hr18">
    <a href="#" class="rwn-link-hr18 is-active-hr18">Home</a>
    <a href="#" class="rwn-link-hr18">Store</a>
    <a href="#" class="rwn-link-hr18">Leaderboard</a>
  </div>
</nav>
```

Add `is-active-hr18` to whichever link represents the current page — it
gets a filled background and a small glowing dot underneath, independent
of the ripple/wave motion.

### Tuning the animation

| Property | Default | Controls |
|---|---|---|
| `--ease-ripple-duration-hr18` | `900ms` | How long each link's hover ripple takes to fully expand |
| `--ease-wave-duration-hr18` | `5s` | How long one full cycle of the ambient wave drift takes |

```css
.ease-navbar-ripple-wave-hr18.snappy {
  --ease-ripple-duration-hr18: 400ms;
  --ease-wave-duration-hr18: 3s;
}
```

## Accessibility notes

- Links are real `<a>` elements, and the ripple triggers on
  `:focus-visible` as well as `:hover`, so keyboard users see identical
  feedback to mouse users.
- The ripple pseudo-element uses `z-index: -1` with `isolation: isolate`
  on the link, so it never sits visually above the link's own text and
  never intercepts clicks.
- The navbar itself carries `aria-label="Gaming hub"` so it's announced
  as a distinct landmark.
- `@media (prefers-reduced-motion: reduce)` disables the ambient wave
  drift entirely and turns the ripple into a simple, near-instant opacity
  fade with no scaling motion — feedback on hover/focus is preserved,
  just without any movement.

## Responsiveness

Below `560px`, the bar switches from a single row to a stacked layout
(logo above links), and the links themselves space out to fill the full
width with smaller padding, so the navbar stays usable on a phone rather
than cramming everything into one overflowing row.

## Why this fits EaseMotion CSS

A pure-CSS, zero-JavaScript component — both the ripple and the wave are
plain `@keyframes`/transition rules — with every timing value exposed as
a tunable custom property, matching the issue's "no external JS
frameworks" and "smooth CSS transitions and keyframe animations"
requirements directly.

All classes, custom properties, and the folder itself use a `-hr18`
suffix to avoid colliding with any other contributor's submission under
`submissions/examples/`.
