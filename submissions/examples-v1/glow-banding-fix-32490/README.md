# Glow Colour-Banding Fix (Issue #32490)

## 1. What does this do?

Eliminates visible colour-banding artifacts in animated glow effects on
16-bit (and other low colour-depth) displays by replacing a single wide-alpha
`box-shadow` with **five stacked narrow-alpha shadow layers** and adding an
**SVG Perlin noise dithering overlay** via a `::before` pseudo-element.

## 2. How is it used?

```html
<div class="glow-smooth">
  Smooth glow without colour banding
</div>
```

```css
.glow-smooth {
  position: relative;        /* required — contains the ::before noise layer */
  border-radius: inherit;
  will-change: box-shadow, filter;
  animation: glow-smooth 2.5s ease-in-out infinite;
}

/* SVG noise dithering — no extra HTML needed */
.glow-smooth::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='64' height='64' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 64px 64px;
  mix-blend-mode: overlay;
}

@keyframes glow-smooth {
  0%, 100% {
    box-shadow:
      0 0  6px rgba(99, 102, 241, 0.22),   /* layer 1: tight inner */
      0 0 14px rgba(99, 102, 241, 0.14),   /* layer 2: mid ring    */
      0 0 26px rgba(99, 102, 241, 0.08),   /* layer 3: outer halo  */
      0 0 42px rgba(99, 102, 241, 0.04),   /* layer 4: ambient     */
      0 0 64px rgba(99, 102, 241, 0.02);   /* layer 5: atmosphere  */
    filter: brightness(1);
  }
  50% {
    box-shadow:
      0 0  8px rgba(99, 102, 241, 0.55),
      0 0 18px rgba(99, 102, 241, 0.38),
      0 0 34px rgba(99, 102, 241, 0.20),
      0 0 56px rgba(99, 102, 241, 0.09),
      0 0 80px rgba(99, 102, 241, 0.03);
    filter: brightness(1.08);
  }
}

@media (prefers-reduced-motion: reduce) {
  .glow-smooth {
    animation: none !important;
    /* Preserve a static glow so the element still looks designed */
    box-shadow:
      0 0  8px rgba(99, 102, 241, 0.38),
      0 0 20px rgba(99, 102, 241, 0.18),
      0 0 38px rgba(99, 102, 241, 0.08);
  }
}
```

## 3. Why is it useful?

### Root cause: colour quantisation on 16-bit displays

A 16-bit (RGB 5-6-5) display has:
- **Red**: 32 discrete steps (5 bits)
- **Green**: 64 discrete steps (6 bits)
- **Blue**: 32 discrete steps (5 bits)

When a single `box-shadow` transitions from a low-alpha value (e.g.
`rgba(99,102,241, 0.1)`) to a high-alpha value (e.g.
`rgba(99,102,241, 0.6)`), the browser must blend the glow colour against
the dark background across a wide range. With only 32–64 values available
per channel, this blending is forced into ~8–12 visible "steps" — the
banding artifact.

The same issue exists on any display when the OS colour space is reduced
(e.g. Remote Desktop, screen-sharing software, energy-saving modes).

### Fix 1 — Multi-layer shadow stacking

Instead of one shadow spanning the full alpha range, five concentric layers
each cover only a narrow slice (≈ 0.06–0.12 alpha units). Within each slice
there are only 1–3 quantisation steps — too small to see individually. The
human eye integrates all five layers simultaneously, perceiving a smooth
radial gradient.

This is the CSS equivalent of **multi-pass dithering** used in colour-palette
image encoders: split a large transition into many small ones.

### Fix 2 — SVG noise dithering overlay (`::before`)

A 64 × 64 `feTurbulence` Perlin noise texture is applied at 4% opacity with
`mix-blend-mode: overlay`. At this opacity level the noise is completely
invisible to the eye on 24-bit displays, but on 16-bit displays it
randomly offsets individual pixel colour values by ±1–2 palette entries.
This scatters the colour values across the hard quantisation boundaries,
making the step edges visually imperceptible — identical to the **ordered
dithering** technique used by GIF and early PNG encoders.

### Fix 3 — Complementary properties

| Property | Contribution |
|---|---|
| `filter: brightness()` animation | Adds a second interpolated dimension; more intermediate compositor values → finer perceived steps |
| `ease-in-out` timing | Spends more time near endpoints where colour values are darkest and quantisation is most visible |
| `will-change: box-shadow, filter` | Pre-allocates compositor resources; avoids mid-animation colour snapping on property recalculation |

### Zero cost on 24-bit displays

All five techniques are perceptually invisible on standard 24-bit hardware:
the layered shadows produce the same visual result as a single layer, the
noise overlay at 4% is below the human contrast threshold, and the other
properties are standard optimisation hints. There is no visual or performance
regression on high-colour-depth screens.

This submission follows EaseMotion CSS's philosophy of
**pure-CSS, zero-dependency fixes** — no JavaScript is required for the
banding fix itself. The `screen.colorDepth` detection in the demo is
informational only.
