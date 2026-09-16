# CSS Morph Glow Badge

A pure CSS badge component featuring glassmorphism, animated gradient
backgrounds, a neon border/glow effect, gentle floating motion, and an
organic "morph" shape transition on hover — built for the **EaseMotion CSS**
library. No JavaScript, no dependencies.

## Overview

The Morph Glow Badge is a self-contained UI component ideal for SaaS landing
pages, pricing tables, feature highlights, or status indicators. Each badge
combines several CSS-only techniques:

- A blurred glassmorphic surface (`backdrop-filter`)
- An animated gradient border ring, revealed on hover
- A soft neon glow that pulses behind the badge
- A subtle continuous floating motion
- A liquid, organic border-radius "morph" on hover/focus

All behavior is achieved with pure CSS — keyframe animations, custom
properties, pseudo-elements, and CSS masking.

## Features

- 🧊 Glassmorphism surface with blur + saturation
- 🌈 Animated gradient background (page + badge border)
- ✨ Neon glow effect with pulsing hover state
- 🎈 Continuous floating animation, staggered per badge
- 🫧 Morph hover animation (organic border-radius shift)
- 🩶 Soft layered shadows for depth
- 🔲 Border glow using masked gradient pseudo-element
- 📱 Fully responsive, mobile-first grid layout
- 🎛️ Centralized CSS Custom Properties for easy theming
- 🧱 Flexbox + CSS Grid layout
- 🅰️ Modern typography with fluid `clamp()` sizing
- 🌑 Dark SaaS aesthetic out of the box
- 🖱️ Distinct hover and `:focus-visible` states
- ♿ `prefers-reduced-motion` support
- ⚙️ Performance-friendly animations (`transform`/`opacity` only)

## Folder Structure

```
submissions/
└── examples/
    └── css-morph-glow-badge/
        ├── demo.html
        ├── style.css
        └── README.md
```

## Usage

Include `style.css` in your page, then markup any badge using the
`.em-badge` base class plus one color variant modifier:

```html
<link rel="stylesheet" href="style.css" />

<span class="em-badge em-badge--violet" tabindex="0">
  <span class="em-badge__icon" aria-hidden="true">✨</span>
  <span class="em-badge__label">AI Powered</span>
</span>
```

Available color variants:

```
em-badge--violet
em-badge--cyan
em-badge--gold
em-badge--yellow
em-badge--green
em-badge--pink
em-badge--blue
em-badge--orange
```

Place multiple badges inside a `.em-showcase` container to get the
responsive auto-fit grid used in `demo.html`.

## CSS Variables

All tokens are declared on `:root` and can be overridden globally or scoped
per component/variant.

| Variable | Purpose |
|---|---|
| `--bg` | Base page background color (dark SaaS backdrop). |
| `--bg-secondary` | Secondary background tone used in the page gradient. |
| `--surface` | Translucent surface color for the badge's glass background. |
| `--surface-border` | Default (non-hover) border color of the badge. |
| `--text` | Primary text color. |
| `--text-muted` | Secondary/muted text color (descriptions, footer). |
| `--accent` | Primary accent color; drives gradient border + glow start. |
| `--accent2` | Secondary accent color; drives gradient border + glow end. |
| `--glow` | RGBA color used for the outer neon glow shadow on hover. |
| `--radius` | Base border-radius for badges (pill shape by default). |
| `--radius-lg` | Larger radius token available for cards/containers. |
| `--gap` | Grid/flex gap spacing between badges. |
| `--transition` | Standard transition timing/easing for interactive states. |
| `--transition-slow` | Slower transition timing, used for the radius morph. |
| `--shadow` | Elevated shadow used on hover/focus. |
| `--shadow-soft` | Resting-state soft shadow for depth. |

Color variants (`.em-badge--violet`, `.em-badge--cyan`, etc.) locally
override `--accent`, `--accent2`, and `--glow` so the same base component
can produce many themed badges.

## Accessibility

- Interactive badges use `tabindex="0"` and expose a clear `:focus-visible`
  outline in addition to the glow, so keyboard users get equivalent
  feedback to mouse users.
- Decorative emoji icons are marked `aria-hidden="true"`; the visible text
  label carries the accessible name.
- **`prefers-reduced-motion: reduce` is fully supported.** When enabled, all
  floating, gradient, glow-pulse, and morph animations are disabled, and
  transform-based hover motion is removed — only opacity/shadow transitions
  remain, preserving feedback without motion.

## Browser Support

| Browser | Support |
|---|---|
| Chrome | ✅ Full support |
| Firefox | ✅ Full support |
| Safari | ✅ Full support (uses `-webkit-backdrop-filter` / `-webkit-mask`) |
| Edge | ✅ Full support (Chromium-based) |

`backdrop-filter` requires a reasonably modern browser version; in older
browsers the badge gracefully degrades to a solid translucent surface
without blur.

## Customization

- **Colors** — Override `--accent`, `--accent2`, and `--glow` on `:root`
  for a global theme change, or on a single `.em-badge` instance for a
  one-off color.
- **Glow intensity** — Adjust the `filter: blur()` value on `.em-badge::after`
  or the alpha channel of `--glow` to make the neon effect stronger or
  softer.
- **Animation speed** — Change the duration values in the `animation`
  shorthand for `float`, `gradientMove`, `glowPulse`, and `morphHover`
  (e.g. `animation: float 4s ease-in-out infinite;` for faster floating).
- **Border radius** — Update `--radius` to change the base badge shape
  (e.g. `12px` for a rounded-rectangle badge instead of a pill).
- **Spacing** — Adjust `--gap` and the padding on `.em-badge` to change
  density in the showcase grid.
- **Typography** — Update the `font-family` on `body` and `font-size`/
  `font-weight` on `.em-badge` to match your brand's type system.

## License

MIT

## Code Quality

- Pure HTML + CSS only
- No JavaScript
- No external frameworks or libraries
- Responsive on desktop, tablet, and mobile (mobile-first breakpoints)
- Accessible: keyboard focus states, `aria-hidden` decorative icons,
  `prefers-reduced-motion` support
- Maintainable: centralized design tokens via CSS Custom Properties
- Production-ready, semantic markup
- Fully commented CSS, organized into clear sections
- Professional SaaS-style dark theme suitable for inclusion in the
  EaseMotion CSS repository