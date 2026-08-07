# Gaming Hub 3D-Flip Rank Badge

A pure CSS/HTML rank badge for gaming hub and profile layouts. On hover or
keyboard focus, the badge performs a smooth 3D flip to reveal a HUD-style
stats panel on the back — no JavaScript required.


## Files

| File | Purpose |
|---|---|
| `demo.html` | Standalone showcase page with a 6-tier badge wall |
| `style.css` | All component styles, animations, and responsive rules |
| `README.md` | This document |

Open `demo.html` directly in a browser — there is no build step and no
external JavaScript dependency.

## How it works

Each badge is two stacked faces inside a `perspective`-ed container. Hovering
or focusing rotates the inner element `180deg` on the Y axis; `backface-visibility:
hidden` keeps the correct face pointing at the viewer at all times.

```html
<div class="em-badge" data-tier="gold">
  <button class="em-badge-flip" aria-label="Gold rank badge, flip for stats">
    <div class="em-badge-face em-badge-face--front">...</div>
    <div class="em-badge-face em-badge-face--back">...</div>
  </button>
</div>
```

The trigger is a real `<button>`, so the flip is reachable and operable with
a keyboard (`Tab` + hover-equivalent `:focus-visible`) and announced properly
by screen readers via `aria-label`. On touch devices, the flip fires on
`:active` as a tap fallback.

### Signature detail: the holo sheen

The front face has an animated diagonal light sweep (`::before` with a
`conic`-free linear gradient and `mix-blend-mode: overlay`), giving each
badge the foil-card look familiar from trading-card and loot-drop UIs. This
is the one deliberately eye-catching motion in the component; everything
else (the flip, the meter fill) is quick and utilitarian by comparison.

### Stat meters

The back face includes a thin progress meter for the headline stat (win
rate). It fills via `transform: scaleX()` on flip, driven by a per-badge
`--fill` custom property set inline in the HTML:

```html
<div class="em-meter" style="--fill:71%">
  <div class="em-meter__fill"></div>
</div>
```

## CSS custom properties

### Global tokens (set on `:root`)

| Property | Default | Description |
|---|---|---|
| `--em-void` | `#0a0e1a` | Page background base |
| `--em-void-raised` | `#10162a` | Badge surface background |
| `--em-ink` | `#eef1fa` | Primary text color |
| `--em-ink-dim` | `#8892ac` | Secondary/label text color |
| `--em-holo-a` | `#2de2ff` | Sheen + focus-ring accent (cyan) |
| `--em-holo-b` | `#ff3dad` | Title gradient accent (magenta) |
| `--em-flip-duration` | `0.7s` | Duration of the 3D flip |
| `--em-flip-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | Flip easing curve |
| `--em-sheen-duration` | `3.2s` | Loop time of the holo sweep |
| `--em-font-display` | `'Rajdhani', sans-serif` | Headline / tier name typeface |
| `--em-font-body` | `'Inter', sans-serif` | Body typeface |
| `--em-font-mono` | `'Share Tech Mono', monospace` | HUD data typeface |

### Per-badge tokens (set on `.em-badge`, or via `data-tier`)

| Property | Description |
|---|---|
| `--tier` | Badge accent color (ring, tier label, meter highlight) |
| `--tier-deep` | Darker shade used for gradients/shadows |
| `--tier-glow` | Translucent glow color behind the emblem |

Six tiers ship out of the box via `data-tier`: `bronze`, `silver`, `gold`,
`platinum`, `diamond`, `champion`. Add a new tier by setting the three
tokens on any selector:

```css
.em-badge[data-tier="obsidian"] {
  --tier: #b39dff;
  --tier-deep: #4a2f9e;
  --tier-glow: rgba(179, 157, 255, 0.4);
}
```

## Features

- **Pure CSS/HTML** — zero JavaScript, zero build tooling.
- **Real 3D flip** — `transform-style: preserve-3d` + `backface-visibility`,
  not an opacity crossfade (except under reduced motion, see below).
- **Keyboard accessible** — the flip trigger is a native `<button>` with an
  `aria-label`; `:focus-visible` drives the same flip as `:hover`.
- **Touch-friendly** — `:active` fallback flips the badge on tap for coarse
  pointers.
- **Fully responsive** — a CSS Grid badge wall (`auto-fit`/`minmax`) reflows
  from a multi-column desktop layout down to a 2-column mobile grid, with
  `clamp()`-based fluid type throughout.
- **`prefers-reduced-motion` support** — when reduced motion is requested,
  the 3D rotation and holo-sheen animation are replaced with a quick,
  gentle opacity crossfade so the same information is still revealed.

## Customization examples

**Slow the flip down for a heavier, more deliberate feel:**

```css
.em-badge { --em-flip-duration: 1.1s; }
```

**Recolor the whole component to a different brand accent:**

```css
:root {
  --em-holo-a: #ffd23f;
  --em-holo-b: #ff5757;
}
```

**Reuse the badge outside the demo grid** — drop a single `.em-badge` block
anywhere flex or grid layout is already in place; it has no dependency on
the `.em-badge-grid` or `.em-hub` wrapper classes beyond needing a defined
width/height (an `aspect-ratio` is set by default).