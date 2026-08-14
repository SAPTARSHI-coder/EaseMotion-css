# Glassmorphism Breadcrumb

`.ease-glass-breadcrumb` — a frosted-glass breadcrumb bar for SaaS
dashboards. Real `backdrop-filter` blur, a hover underline that grows in
from center, and a fade-scroll edge mask so a long trail degrades to
horizontal scroll on narrow viewports instead of wrapping awkwardly or
overflowing the bar. Pure CSS.

## Files

| File | Purpose |
|---|---|
| `demo.html` | Short trail, long trail (try narrowing the window), and a dark variant |
| `style.css` | The component, its variant, and the demo backdrop |
| `README.md` | This file |

## Usage

```html
<nav class="ease-glass-breadcrumb" aria-label="Breadcrumb">
  <ol class="breadcrumb-list">
    <li class="breadcrumb-item">
      <a href="#" class="breadcrumb-link">Home</a>
    </li>
    <li class="breadcrumb-item" aria-hidden="true"><span class="breadcrumb-sep">/</span></li>
    <li class="breadcrumb-item">
      <span class="breadcrumb-link breadcrumb-current" aria-current="page">Overview</span>
    </li>
  </ol>
</nav>
```

Like any glassmorphism component, this needs something visually busy
behind it — the demo ships a colorful backdrop specifically so the blur
is visible; over a flat background it'll just look like a translucent
bar.

## Long trails: fade-scroll instead of wrapping

Rather than trying to make a breadcrumb bar reflow onto a second line (a
common source of janky, tall headers) or collapsing middle items into a
"…" that then needs its own interaction, this component takes the
simplest robust approach: the list scrolls horizontally, and a CSS
`mask-image` fades both edges so the cut-off feels intentional rather
than abrupt:

```css
.breadcrumb-list {
  overflow-x: auto;
  mask-image: linear-gradient(
    to right,
    transparent 0,
    black 16px,
    black calc(100% - 16px),
    transparent 100%
  );
}
```

When the trail is short enough to fit without scrolling, the mask has
nothing to fade against and is effectively invisible — this one rule
covers both cases without a media query or a "does it overflow"
JavaScript check.

## The hover underline

Rather than a static border, each link's underline is a `::after`
element that scales in from the center on hover:

```css
.breadcrumb-link::after {
  transform: scaleX(0);
  transform-origin: center;
  transition: transform var(--bc-duration) var(--bc-ease);
}

.breadcrumb-link:hover::after {
  transform: scaleX(1);
}
```

Scaling (rather than animating `width`) keeps the browser on the GPU
compositor path, and animating from a `scaleX(0)` center point reads as
more deliberate than a line that just fades or slides in from one side.

## CSS custom properties

| Property | Default | Controls |
|---|---|---|
| `--bc-glass-bg` | `rgba(255,255,255,0.12)` | The glass tint |
| `--bc-glass-border` | `rgba(255,255,255,0.3)` | Edge highlight |
| `--bc-glass-blur` | `16px` | Backdrop blur radius |
| `--bc-accent` | `#7de0c0` | Underline + focus ring color |
| `--bc-duration` / `--bc-ease` | `200ms` / custom curve | Hover transitions |

## Dark surface variant

`.ease-glass-breadcrumb-dark` swaps the glass tint from a light,
white-based one to a dark, black-based one — useful over lighter
backdrops where white-tinted glass would wash out, same reasoning as the
frosted-glass-card submission's dark variant.

## Accessibility

- Uses a real `<nav aria-label="Breadcrumb">` wrapping an `<ol>` — the
  semantically correct structure for a breadcrumb trail, not a `<div>`
  soup.
- The current page is a `<span aria-current="page">`, not a link — it's
  not actionable, and screen readers announce it as the current location
  rather than a clickable item.
- Separators (`/`) are `aria-hidden="true"` on their `<li>`, since
  they're purely visual — the `<ol>`'s own list semantics already convey
  the sequence to assistive tech.
- Every real link has a visible `:focus-visible` ring in the accent
  color, distinct from hover styling.
- Respects `prefers-reduced-motion: reduce`: hover transitions collapse
  to `1ms`.

## Fallback for unsupported browsers

```css
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .ease-glass-breadcrumb {
    background: rgba(16, 18, 24, 0.85);
  }
}
```

Where `backdrop-filter` isn't supported, the bar falls back to a solid
dark panel rather than a fully see-through one with illegible text over
a busy backdrop.

## Responsive behavior

Below `520px`, link padding and font size tighten slightly; the
fade-scroll mechanism handles overflow at any width without a dedicated
breakpoint of its own.

## Browser support

`backdrop-filter` needs the `-webkit-` prefix on Safari (included above)
and `mask-image` needs it too for the same reason — both included. Where
`mask-image` is unsupported, the list simply clips at a hard edge instead
of fading, with no loss of function.