# CSS Spotlight Card

## What does this add?

A pure-CSS spotlight hover effect for cards. When the user hovers over a card,
a soft radial-gradient glow blooms from the top-center of the card surface and
the border color shifts to match. No JavaScript is involved — the effect is
driven entirely by `@property --spotlight-opacity` and a `::before` pseudo-element.

## How does a developer use it?

Add the base class plus one color-variant modifier:

```html
<!-- Purple glow -->
<div class="spotlight-card spotlight-card--purple">
  <h3>Card Title</h3>
  <p>Card description goes here.</p>
</div>

<!-- Cyan glow -->
<div class="spotlight-card spotlight-card--cyan">
  <h3>Card Title</h3>
  <p>Card description goes here.</p>
</div>

<!-- Amber glow -->
<div class="spotlight-card spotlight-card--amber">…</div>

<!-- Pink glow -->
<div class="spotlight-card spotlight-card--pink">…</div>
```

Available variants: `--purple`, `--cyan`, `--amber`, `--pink`.

Custom colors can be added by setting `--spotlight-rgb` to an RGB triplet:

```css
.spotlight-card--brand {
  --spotlight-rgb: 34, 197, 94;
}
```

## Why does it fit EaseMotion CSS?

The existing spotlight-card submission in this repo relies on a `mousemove`
JavaScript listener to update `--x` and `--y` custom properties so the glow
follows the cursor. This submission is the CSS-only baseline: it uses
`@property --spotlight-opacity` (a registered, interpolatable `<number>`) to
animate the glow opacity on `:hover` via a standard CSS transition. No JS event
listeners are needed, making it suitable for static sites, server-rendered pages,
and environments where JS is disabled. The `::before` radial-gradient is hidden
entirely under `prefers-reduced-motion`, keeping the component accessible.
