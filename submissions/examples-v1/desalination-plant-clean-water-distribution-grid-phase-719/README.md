# AQUAGRID — Desalination Plant Clean Water Distribution Grid (Phase #719)

A single-page UI showcase for a desalination plant's control dashboard and its
downstream clean-water distribution grid — built as a themed demonstration of
motion-driven UI patterns for EaseMotion CSS.

## 1. What does this do?

It's a self-contained, 60fps HTML/CSS dashboard concept for a desalination
plant (Phase #719): a live-style status hero, an animated five-stage
treatment pipeline (intake → pre-filtration → reverse osmosis →
remineralization → distribution), a hover-driven distribution zone map, a
scrolling metrics ticker, and a component gallery — all driven by pure CSS,
with zero JavaScript and zero external dependencies.

## 2. How is it used?

Every effect on the page is a standalone, reusable class that can be dropped
onto any element:

```html
<!-- Staggered entrance -->
<div class="fade-flow-up" style="animation-delay: 160ms;">...</div>

<!-- Elevation on hover / keyboard focus -->
<article class="stage-card hover-lift">...</article>

<!-- Underline sweep for links -->
<a class="flow-underline" href="#process">Process</a>

<!-- Expanding ring on hover/focus, good for icon buttons -->
<button class="ripple-hover">...</button>

<!-- Looping ambient status pulse -->
<div class="pulse-glow" role="img" aria-label="Live status"></div>

<!-- CSS-only toggle switch (hidden checkbox + styled label) -->
<label class="valve-toggle">
  <input type="checkbox" checked />
  <span class="track"></span>
  <span class="valve-label">ZONE C2 VALVE</span>
</label>

<!-- Skeleton loading sweep -->
<div class="shimmer-load"></div>

<!-- Slide-in status banner -->
<div class="alert-banner">Zone C2 pressure over spec</div>
```

The signature piece is an inline SVG pipeline (`.pipeline-flow`,
`.pipeline-droplet`) animated with `stroke-dasharray` / `stroke-dashoffset`
to suggest water moving continuously through the treatment stages.

Open `demo.html` directly in any modern browser — there's no build step, no
server, and no CDN calls. `style.css` is linked locally.

### Component breakdown

| Class | Purpose |
|---|---|
| `.fade-flow-up` | Opacity + translateY entrance, staggered via `animation-delay` |
| `.hover-lift` | Elevates an element and brightens its border on hover/focus |
| `.flow-underline` | Left-to-right underline sweep for text links |
| `.ripple-hover` | Expanding ring pulse on hover/focus, for icon buttons |
| `.pulse-glow` | Looping ambient glow for live/healthy status indicators |
| `.valve-toggle` | CSS-only switch (checkbox + label), no scripting |
| `.shimmer-load` | Gradient-sweep skeleton loader for pending data |
| `.alert-banner` | Slide-in-from-left status/warning banner |
| `.tilt-hover` | Subtle 3D perspective tilt on hover/focus |
| `.pipeline-flow` / `.pipeline-droplet` | Dash-offset flow animation for the SVG pipeline schematic |
| `.zone-node` / `.zone-detail` | Hover/focus-revealed tooltip card for a grid zone, pure CSS (`:hover`, `:focus-within`) |
| `.ticker-track` | Seamless-loop horizontal marquee for live metrics |

All animations respect `prefers-reduced-motion: reduce`, and every
interactive element (nav links, toggle, ripple button, zone nodes) has a
visible `:focus-visible` state for keyboard users.

## 3. Why is it useful?

EaseMotion CSS is meant to make interfaces feel alive without reaching for a
JS animation library. This submission stress-tests that idea against a
genuinely data-dense UI — status readouts, a multi-stage process flow, a
grid of live nodes — where motion has to *communicate state* (nominal /
caution / critical, loading, live) rather than just decorate. It's also a
useful reference for two patterns that are easy to reach for JS
unnecessarily: hover-revealed detail cards (`.zone-node`) and a toggle
switch (`.valve-toggle`), both done here with plain CSS.

## Live preview

1. Clone or download this folder.
2. Open `demo.html` directly in a browser (double-click, or drag it into a
   browser window) — no server or install step needed.
3. Resize the window to see the responsive layout collapse (grid map,
   process cards, and header nav all reflow below ~960px / ~640px).
4. Try tabbing through the page with the keyboard to see the focus states
   on nav links, the valve toggle, the ripple button, and the zone nodes.