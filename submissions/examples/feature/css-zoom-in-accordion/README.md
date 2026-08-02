# CSS Zoom-In Accordion

A premium, pure CSS accordion component for FAQ and feature sections. Built
entirely with the radio-button technique — panels zoom and fade into view,
glow along their border while open, and automatically close a sibling panel
when a new one is selected. No JavaScript, no frameworks.

## Overview

The Zoom-In Accordion is designed for modern SaaS landing pages that need a
polished, interactive FAQ or feature list without shipping any JavaScript.
Each item is a `radio` input paired with a `label` header and a content
panel. Because all inputs share one `name`, opening one item natively closes
any other — the browser handles the exclusivity, not custom logic.

Opening a panel triggers:

- A smooth height expansion using a CSS Grid `0fr → 1fr` transition
- A scale + fade "zoom-in" animation on the panel content
- A pulsing glow border around the active item
- A rotating chevron indicator

## Features

- 🧊 Glassmorphism container with blur + saturation
- 🌈 Gradient-tinted dark SaaS background
- ✨ Zoom-in + fade opening animation
- 💡 Pulsing glow border on the active panel
- 🎈 Floating animation on the accordion container
- 🩶 Soft layered shadows for depth
- 🖱️ Hover lift on headers, brighter glow on open items
- 📱 Fully responsive with desktop, tablet, and mobile breakpoints
- 🎛️ Centralized CSS Custom Properties for easy theming
- 🧱 Flexbox + CSS Grid layout (grid powers the height animation)
- 🅰️ Modern typography with fluid `clamp()` sizing
- 🖲️ Pure radio-button accordion logic — zero JavaScript
- 🖱️ Distinct hover and `:focus-visible` states
- ♿ `prefers-reduced-motion` support

## Folder Structure

```
submissions/
└── examples/
    └── css-zoom-in-accordion/
        ├── demo.html
        ├── style.css
        └── README.md
```

## Installation

1. Copy the `css-zoom-in-accordion` folder into your project (or your
   EaseMotion CSS `submissions/examples/` directory).
2. Link `style.css` in the `<head>` of your page.
3. Copy the accordion markup from `demo.html` and edit the content.

No build step, package manager, or JavaScript bundle is required.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<div class="em-accordion">

  <!-- One item -->
  <div class="em-accordion__item">
    <input
      type="radio"
      name="em-accordion"
      id="em-acc-1"
      class="em-accordion__input"
      checked
    />
    <label for="em-acc-1" class="em-accordion__header" id="em-acc-1-label">
      <span class="em-accordion__icon" aria-hidden="true">🚀</span>
      <span class="em-accordion__title">Fast Performance</span>
      <span class="em-accordion__chevron" aria-hidden="true"></span>
    </label>
    <div
      class="em-accordion__panel"
      role="region"
      aria-labelledby="em-acc-1-label"
    >
      <div class="em-accordion__panel-inner">
        <p>Your detailed description goes here.</p>
      </div>
    </div>
  </div>

  <!-- Repeat .em-accordion__item for each additional entry,
       reusing the same `name="em-accordion"` on every input -->

</div>
```

**Important:** every `input` in the group must share the same `name`
attribute (`em-accordion` above) — that shared name is what makes opening
one item close the others. Give exactly one item the `checked` attribute if
you want a panel open by default.

## CSS Variables

All tokens are declared on `:root` and can be overridden globally or scoped
to a single accordion instance.

| Variable | Purpose |
|---|---|
| `--bg` | Base page background color (dark SaaS backdrop). |
| `--bg-secondary` | Secondary background tone used in the page gradient. |
| `--surface` | Translucent background of the outer accordion container. |
| `--card` | Background color of each individual accordion item. |
| `--border` | Default border color for items and the container. |
| `--text` | Primary text color (headers, active state). |
| `--muted` | Secondary/muted text color (descriptions, chevron, eyebrow text). |
| `--primary` | Primary accent color; drives the glow border and gradient title. |
| `--secondary` | Secondary accent color; used in gradients and focus outlines. |
| `--accent` | Extra highlight accent available for icons or custom states. |
| `--glow` | RGBA color used for the pulsing glow shadow on the open item. |
| `--radius` | Border-radius of each accordion item. |
| `--radius-sm` | Smaller radius token available for nested elements. |
| `--gap` | Vertical spacing between accordion items. |
| `--transition` | Standard transition timing/easing for hover and focus states. |
| `--transition-slow` | Slower transition timing used for panel open/close. |
| `--shadow` | Elevated shadow used on the active/open item. |
| `--shadow-soft` | Resting-state soft shadow on the outer container. |

## Animations

**Zoom animation (`zoomInPanel`)** — When a panel opens, its inner content
scales from `0.96` to `1`. Combined with the grid-based height transition,
this produces a soft "zoom into view" effect rather than an abrupt reveal.

**Fade animation (`fadePanel`)** — Runs alongside the zoom, taking panel
content from `opacity: 0` to `opacity: 1` so text doesn't pop in harshly.

**Glow effect (`glowPulse`)** — Applied to the currently open item via
`:has(.em-accordion__input:checked)`. The box-shadow glow gently pulses in
intensity, drawing attention to the active panel without being distracting.

**Hover transition** — Headers lift by 1px and get a faint background tint
on `:hover`, using the shared `--transition` timing for a responsive feel.

**Reduced motion** — All keyframe animations are disabled and transition
durations are collapsed to near-zero under `@media (prefers-reduced-motion:
reduce)`. The accordion remains fully functional — panels still open and
close — just without motion.

## Accessibility

- **Keyboard friendly** — Every accordion item is a native `radio` input;
  users can tab between headers and use arrow keys to move through the
  group and the Space/Enter behavior native to radio inputs.
- **Focus styles** — `:focus-visible` on the input triggers a visible
  outline on its associated header label, so keyboard users always see
  which item is focused.
- **Semantic structure** — Each panel uses `role="region"` with
  `aria-labelledby` pointing to its header's `id`, giving assistive
  technology a clear, named landmark for the content.
- **Reduced motion support** — Respects
  `prefers-reduced-motion: reduce` system-wide, disabling zoom, fade, and
  glow-pulse animations while keeping the accordion fully operable.

> Note: Because this is a CSS-only component, panel visibility is achieved
> via layout collapse (`grid-template-rows: 0fr`) rather than `hidden` or
> dynamic `aria-expanded`, which is the standard trade-off for JavaScript-free
> accordions. If you need dynamic `aria-expanded` state, consider layering a
> small progressive-enhancement script on top of this markup.

## Browser Support

| Browser | Support |
|---|---|
| Chrome | ✅ Full support |
| Firefox | ✅ Full support |
| Safari | ✅ Full support (Safari 15+ for `:has()` and grid-row animation) |
| Edge | ✅ Full support (Chromium-based) |

The glow-border effect uses the `:has()` relational selector. In browsers
without `:has()` support, panels still open, close, zoom, and fade correctly
— only the item-level glow border/shadow on the parent wrapper is skipped.

## Customization

- **Colors** — Override `--primary`, `--secondary`, `--accent`, and
  `--glow` on `:root` (or scoped to `.em-accordion`) to re-theme the entire
  component.
- **Radius** — Change `--radius` for more rounded or more squared-off
  accordion items; `--radius-sm` is available for smaller nested shapes.
- **Spacing** — Adjust `--gap` for the space between items, and tweak the
  `padding` values on `.em-accordion__header` / `.em-accordion__panel-inner`
  for denser or airier layouts.
- **Animation speed** — Update `--transition` (hover/focus) and
  `--transition-slow` (panel open/close, zoom, fade) to speed up or slow
  down the interaction feel.
- **Typography** — Update the `font-family` on `body`, or `font-size` /
  `font-weight` on `.em-accordion__header` and `.em-accordion__panel-inner p`
  to match your brand's type system.
- **Accordion width** — The accordion inherits its width from `.em-page`
  (`max-width: 880px`). Adjust that value, or wrap `.em-accordion` in your
  own container, to make it narrower or wider.

## Performance

- Pure CSS — no JavaScript is loaded, parsed, or executed.
- GPU-friendly transforms — `scale()` and `translateY()` are used for the
  zoom, float, and hover-lift effects instead of layout-triggering
  properties.
- Height animation uses the `grid-template-rows: 0fr → 1fr` technique,
  which avoids animating `height`/`max-height` directly and stays smooth
  even with variable content length.
- Animations are scoped to `transform`, `opacity`, and `box-shadow`,
  keeping repaints cheap and avoiding layout thrashing.

## License

MIT