# Parallax Tilt Effect

**Category:** Animation — 3D Interaction  
**Type:** Pure CSS  
**Folder:** `submissions/examples/parallax-tilt-effect/`

---

## Overview

The Parallax Tilt Effect makes a card appear to pivot in three-dimensional space when a user hovers over it. The illusion is achieved entirely in CSS using `perspective`, `rotateX()`, `rotateY()`, and `translateZ()` — no JavaScript, no event listeners, no libraries.

The technique works by dividing the card into four invisible quadrant triggers. Each quadrant is a sibling element that, when hovered, applies a directional `transform` to the card's content wrapper via the CSS adjacent-sibling combinator (`~`). Child layers inside the card sit at different `translateZ` depths, giving the impression that the artwork, badge, and text float at distinct heights above the card surface.

A shimmer pseudo-element shifts its gradient origin to match the active quadrant, simulating a directional light source catching the card face — the detail that makes the effect feel physical.

---

## Features

- **Pure CSS** — zero JavaScript, zero dependencies
- **4-quadrant tilt detection** — top-left, top-right, bottom-left, bottom-right each produce distinct rotations
- **Layered Z-depth** — image band, badge, and body text sit at progressively higher `translateZ` values
- **Directional shimmer** — a radial gradient highlight shifts to the active corner to mimic light reflection
- **Amber border glow** — card border transitions to a warm glow on hover, reinforcing the active state
- **Smooth spring easing** — `cubic-bezier(0.22, 1, 0.36, 1)` for a snappy-yet-soft feel
- **Touch-safe** — tilt is automatically disabled on small screens (`≤ 480px`) where hover semantics are unreliable
- **Accessible markup** — decorative elements marked `aria-hidden`, heading hierarchy preserved, links included

---

## File Structure

```
submissions/examples/parallax-tilt-effect/
├── demo.html      — Standalone demo with two portfolio cards
├── style.css      — All styles; no dependencies except two Google Fonts
└── README.md      — This file
```

---

## Usage

### Minimal HTML Structure

```html
<div class="em-tilt-wrapper">
  <div class="em-tilt-card">

    <!-- Four invisible quadrant hover zones -->
    <div class="em-tilt-quadrant em-tilt-quadrant--tl" aria-hidden="true"></div>
    <div class="em-tilt-quadrant em-tilt-quadrant--tr" aria-hidden="true"></div>
    <div class="em-tilt-quadrant em-tilt-quadrant--bl" aria-hidden="true"></div>
    <div class="em-tilt-quadrant em-tilt-quadrant--br" aria-hidden="true"></div>

    <!-- Visible content lives here — transforms in 3D -->
    <div class="em-tilt-transform">
      <div class="em-tilt-shimmer" aria-hidden="true"></div>
      <div class="em-tilt-card-inner">

        <!-- Your card content -->

      </div>
    </div>

  </div>
</div>
```

### Key Rules

| Class | Role |
|---|---|
| `.em-tilt-wrapper` | Sets `perspective` — the vanishing point container |
| `.em-tilt-card` | Outer shell; `transform-style: preserve-3d` |
| `.em-tilt-quadrant--{tl,tr,bl,br}` | Invisible hover triggers, each covers 50 × 50% of card |
| `.em-tilt-transform` | Receives the `rotateX/Y` transforms via the `~` selector |
| `.em-tilt-shimmer` | Shimmer overlay — changes gradient origin per quadrant |
| `.em-tilt-card-inner` | Visual border/radius container |

---

## How the CSS Trick Works

The core mechanism relies on the CSS **general sibling combinator** (`~`):

```css
/* When the top-left quadrant is hovered, rotate the sibling transform wrapper */
.em-tilt-quadrant--tl:hover ~ .em-tilt-transform {
  transform: rotateX(10deg) rotateY(-10deg) translateZ(8px);
}
```

Because the quadrants sit *before* `.em-tilt-transform` in the DOM and are both children of `.em-tilt-card`, the combinator reaches `.em-tilt-transform` reliably. The quadrants are `position: absolute` with `z-index: 10` so they sit above the content and capture hover events even when the user's cursor is over text or images inside the card.

The `perspective` is set on `.em-tilt-wrapper` (the *parent*), not on the card itself. This keeps the vanishing point stable as the card rotates — if perspective were set on the rotating element, the horizon would shift with the rotation, making the effect look wrong.

---

## Customization

All design tokens live in `:root` at the top of `style.css`:

```css
:root {
  /* Tilt angle — increase for more drama */
  /* Modify the rotateX / rotateY values in the quadrant rules */

  /* Perspective depth — lower = more extreme foreshortening */
  /* Change the value on .em-tilt-wrapper { perspective: 900px; } */

  /* Easing and duration */
  --ease-tilt:     cubic-bezier(0.22, 1, 0.36, 1);
  --duration-tilt: 0.5s;

  /* Accent color */
  --color-accent:       #c29a54;
  --color-accent-light: #e0bc7a;

  /* Surface colors */
  --color-bg:      #0d0f14;
  --color-surface: #13161e;
}
```

### Adjusting Tilt Intensity

Find the four quadrant rules and edit the rotation values:

```css
/* Default: 10deg — try 6deg (subtle) or 14deg (dramatic) */
.em-tilt-quadrant--tl:hover ~ .em-tilt-transform {
  transform: rotateX(10deg) rotateY(-10deg) translateZ(8px);
}
```

### Adjusting Perspective

```css
.em-tilt-wrapper {
  perspective: 900px;  /* 600px = dramatic, 1200px = gentle */
}
```

### Using on a Light Background

Override the surface and text tokens:

```css
:root {
  --color-bg:           #f5f4f0;
  --color-surface:      #ffffff;
  --color-surface-mid:  #f0eeea;
  --color-border:       rgba(0, 0, 0, 0.08);
  --color-text-primary: #1a1a1a;
  --color-text-muted:   #666;
}
```

---

## Browser Support

| Browser | Version | Notes |
|---|---|---|
| Chrome / Edge | 80+ | Full support |
| Firefox | 72+ | Full support |
| Safari | 14+ | Full support (`preserve-3d` requires no `overflow: hidden` on parent — handled) |
| iOS Safari | 14+ | Tilt disabled on touch (by design) |
| Samsung Internet | 12+ | Full support |

> **Note on Safari:** `transform-style: preserve-3d` does not work through elements with `overflow: hidden`. The structure here wraps overflow on `.em-tilt-card-inner` (a *child* of the transform element, not a parent), so the 3D context is preserved correctly.

---

## Why This Effect Is Useful

Flat interfaces have a depth problem: every element competes equally for attention. A tilt interaction solves this without animation loops, scroll triggers, or JavaScript overhead — it activates *on demand* at the cost of a hover.

**Portfolio sites** benefit because a tilt signals interactivity and premium craft without requiring a full-page animation. The card feels weighty, physical, designed.

**Product showcases and feature cards** benefit because the Z-lift draws the eye precisely when the user is deciding whether to click. It converts passive scanning into active consideration.

**Design systems** benefit because the effect is self-contained: drop the four classes in, tune two CSS variables, done. No runtime dependencies to audit, no bundle size impact, no accessibility concerns from motion (the effect can be suppressed with a single `prefers-reduced-motion` media query addition if needed).

---

## Preview Description

Two portfolio project cards sit centered on a dark editorial background with a faint grid texture. Each card contains a decorative image band, a category badge, a project title in a serif display face, a description, a row of monospaced tech tags, a stat cluster, an avatar group, and a "View Project" link.

Moving the cursor to the top-left corner of a card tilts it upward and to the left — as if the card is turning to face you. The top-right corner produces the opposite rotation. The card border picks up a warm amber glow and a soft directional shimmer confirms the light-source direction. Releasing the hover eases the card back to flat with a gentle overshoot, courtesy of the spring cubic-bezier curve.

On viewport widths below 480px the effect is removed and the card displays as a standard flat element, ensuring the layout remains usable on touch devices.

---

## License

Submitted under the same license as the EaseMotion CSS repository.