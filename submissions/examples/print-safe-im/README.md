# Print-Safe Animation Utilities

## What does this do?
A focused set of `@media print` utility classes that target **animation state** specifically — freezing all animations/transitions, forcing scroll-revealed or hidden-until-animated content to be visible, and adding page-break controls — so animated dashboards, landing pages, and pricing tables print cleanly instead of showing blank gaps, frozen mid-transforms, or awkwardly split cards.

## How to use it
```html
<body class="ease-print-safe">

  <!-- Hide screen-only chrome from print -->
  <header class="ease-print-hide">...</header>

  <!-- Force scroll-revealed content visible in print -->
  <div class="ease-card ease-scroll-reveal ease-print-show">
    Always printable, regardless of scroll state
  </div>

  <!-- Start a new printed page before this section -->
  <section class="ease-print-break-before">...</section>

  <!-- Keep this card on one printed page -->
  <div class="ease-card ease-print-avoid-break">...</div>

</body>
```

## Classes
| Class | Effect (print only) |
|---|---|
| `.ease-print-safe` | Container scope — freezes all animations/transitions inside it, sets sensible light-page colors |
| `.ease-print-show` | Forces `opacity: 1`, `transform: none`, `visibility: visible` — for scroll-reveal/animated-in content |
| `.ease-print-break-before` | `break-before: page` — starts a new printed page |
| `.ease-print-break-after` | `break-after: page` — ends the current printed page |
| `.ease-print-avoid-break` | `break-inside: avoid` — keeps a card/section on one page |
| `.ease-print-hide` | `display: none` — hides screen-only chrome (nav, spinners, FABs) |

## Why this matters
Animated pages commonly break when printed:
- Content with `opacity: 0` waiting for a scroll-trigger never appears in print preview
- Mid-animation transforms can clip or offset content off the printed page
- Long cards split awkwardly across page boundaries

This utility set handles all three with four small, composable classes — no JS, applied directly in markup.

## Why it fits EaseMotion CSS
EaseMotion already has general print utilities (`print-utilities-v1`, `print-media-queries-av`), but none target *animation state* specifically. This is a focused gap-fill: any component using `ease-scroll-reveal`, `ease-fade-in`, spinners, or hover-only effects can now be made print-safe with a handful of utility classes, without per-component overrides.
