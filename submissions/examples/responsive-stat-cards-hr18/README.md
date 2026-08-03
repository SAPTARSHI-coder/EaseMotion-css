# Responsive Statistics Cards (`responsive-stat-cards-hr18`)

A responsive row of statistic cards — icon, big number, label, hover lift
— with a count-up entrance animation, built for issue
[#55318](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55318).

## A note on naming

The issue's own filenames (`index.html`, `styles.css`) don't match this
repo's actual enforced submission convention — `demo.html` + `style.css`
+ `README.md`. This submission uses that convention instead.

## What it does

Four stat cards (Active users, Downloads today, Monthly revenue, Customer
satisfaction), each with an icon badge, a large number, and a short label.
Hovering a card lifts it with a soft shadow, per the issue's spec. Beyond
the literal starter snippet, each number **counts up from 0** to its
final value once the card scrolls into view, rather than appearing
instantly — a small addition in keeping with the framework's
animation-first philosophy, since a static number felt like a missed
opportunity for motion in an otherwise animated card.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

```html
<div class="ease-stats-container-hr18">
  <div class="ease-stat-card-hr18">
    <span class="rsc-icon-hr18" aria-hidden="true"><!-- icon SVG --></span>
    <h2><span class="rsc-count-hr18" data-target="12.4" data-decimals="1">0</span>K</h2>
    <p>Active users</p>
  </div>
  <!-- more cards -->
</div>
```

`.ease-stats-container-hr18` is a wrapping flex row; `.ease-stat-card-hr18`
is the individual card, with its hover-lift transition defined entirely in
CSS. The count-up itself is handled by a small script in `demo.html`:

- `data-target` on the `.rsc-count-hr18` span holds the final numeric
  value (e.g. `12.4`, `350`, `98`)
- `data-decimals` controls how many decimal places to display
- Any prefix/suffix (`$`, `K`, `%`) is written as plain static text
  directly around the span in the markup, so the animated part is only
  ever the number itself

An `IntersectionObserver` triggers each card's count-up once, the first
time it's at least 40% visible, using `requestAnimationFrame` and an
eased curve (`easeOutCubic`) rather than a linear count, so the animation
feels like it settles into place instead of ticking mechanically.

## Accessibility notes

- `font-variant-numeric: tabular-nums` on the number keeps each digit the
  same width, so the card doesn't visibly reflow or jitter as the count-up
  animation changes how many characters are displayed.
- `@media (prefers-reduced-motion: reduce)` is checked before the
  animation ever starts — if set, every number jumps straight to its
  final value with no count-up at all, and the card's hover-lift
  `transition` is also disabled.
- The icon badges are marked `aria-hidden="true"`, since they're purely
  decorative next to a text label that already conveys the same
  information.

## Responsiveness

Cards wrap onto additional rows via `flex-wrap` as the viewport narrows,
and below `480px` each card switches from a fixed width to a
`max-width`-constrained full-width block, so there's never an awkward
half-width card left dangling at the end of a row on a phone.

## Why this fits EaseMotion CSS

A self-contained, reusable component matching the issue's exact spec
(icon, number, label, hover lift, responsive), with one small,
purposeful animation addition — a count-up gated behind
`prefers-reduced-motion` — that reflects the framework's animation-first
character rather than presenting static numbers.

All classes and the folder itself use a `-hr18` suffix to avoid colliding
with any other contributor's submission under `submissions/examples/`.
