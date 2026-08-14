# Kinetic QR Code Display

A pure-CSS, animation-first QR code display block for **EaseMotion CSS**, built for issue [#42434](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/42434).

Submission folder: `submissions/examples/kinetic-qr-code-display-archana/`

---

## Preview

Open `demo.html` in any modern browser (no server, no build step needed).

The component shows:

- A **decorative QR module grid** with three QR-style finder squares (top-left, top-right, bottom-left), generated with a deterministic pattern — this is a stylized illustration, not a scannable code.
- Four **pulsing corner brackets** that glow in sequence, framing the code like an active scan target.
- A **kinetic scan line** that sweeps top to bottom on a continuous loop.
- A **status row** with a blinking indicator dot ("Waiting for scan…").
- An entrance animation (fade + staggered slide-up) using EaseMotion's existing `ease-fade-in` and `ease-slide-up ease-delay-*` utilities.

---

## Why this design

QR displays typically appear in checkout flows, login/pairing screens, and event check-ins. The goal here was to make the *waiting* state feel alive rather than static, while staying:

- **Pure CSS** — every animation is a `@keyframes` loop; no JavaScript is used anywhere in `demo.html` or `style.css`.
- **On-brand with EaseMotion CSS** — the component consumes existing design tokens (`--ease-color-primary`, `--ease-radius-md`, `--ease-radius-lg`, `--ease-speed-slow`, `--ease-space-*`) and composes existing utility classes (`ease-flex`, `ease-center`, `ease-card`, `ease-card-shadow`, `ease-btn`, `ease-btn-primary`, `ease-btn-sm`, `ease-fade-in`, `ease-slide-up`, `ease-delay-200`, `ease-delay-300`) instead of reinventing layout/spacing/entrance primitives.
- **Namespaced** — every custom class and keyframe uses a `kqr-` / `kqr-*` prefix so it can't collide with core EaseMotion classes or other submissions.

---

## Files

```
kinetic-qr-code-display-archana/
├── demo.html   ← live, standalone demo
├── style.css   ← component styles + keyframes
└── README.md   ← this file
```

---

## Usage

1. Load EaseMotion CSS core first (as required by the framework):

```html
<link rel="stylesheet" href="easemotion.css" />
<link rel="stylesheet" href="style.css" />
```

2. Drop in the markup structure from `demo.html`:

```html
<section class="kqr-card ease-card ease-card-shadow" aria-labelledby="kqr-title">
  <header class="kqr-header">
    <h1 id="kqr-title" class="kqr-title">Scan to Connect</h1>
  </header>

  <div class="kqr-frame" role="img" aria-label="Stylized animated QR code...">
    <span class="kqr-corner kqr-corner-tl" aria-hidden="true"></span>
    <span class="kqr-corner kqr-corner-tr" aria-hidden="true"></span>
    <span class="kqr-corner kqr-corner-bl" aria-hidden="true"></span>
    <span class="kqr-corner kqr-corner-br" aria-hidden="true"></span>

    <div class="kqr-grid" aria-hidden="true"><!-- .qm modules --></div>

    <span class="kqr-scanline" aria-hidden="true"></span>
  </div>

  <p class="kqr-status ease-slide-up ease-delay-200">
    <span class="kqr-dot" aria-hidden="true"></span>
    Waiting for scan…
  </p>
</section>
```

3. To display a **real, scannable** QR code instead of the decorative pattern, swap the `.kqr-grid` block for an `<img>` (generated server-side or via any QR library) sized to fill `.kqr-frame` — the corner brackets and scan line will overlay it automatically since they're absolutely positioned within the same frame.

---

## Customization

Override tokens at the `.kqr-card` level or globally on `:root`:

```css
.kqr-card {
  --kqr-accent: #22c55e;        /* bracket / scanline color */
  --kqr-surface: #0f1115;       /* card background */
}
```

Or use EaseMotion's own global tokens for a site-wide theme change:

```css
:root {
  --ease-color-primary: #22c55e;
  --ease-speed-slow: 2000ms;    /* slows the corner-bracket pulse */
}
```

---

## Accessibility

- The QR frame uses `role="img"` with a descriptive `aria-label` on the container; the individual decorative modules, brackets, and scan line are marked `aria-hidden="true"` so screen readers announce one clear description instead of hundreds of grid cells.
- All animations are looping and ambient (no flashing above safe thresholds, no rapid strobing).
- `@media (prefers-reduced-motion: reduce)` disables the pulse, scan-line sweep, dot-blink, and entrance animations, falling back to a fully static, legible card.
- The refresh button has a visible `:focus-visible` outline and meets tap-target sizing via `ease-btn-sm`.
- Color contrast: white QR surface with near-black modules (`#14161c`) comfortably exceeds WCAG AA against the dark card background.

---

## Browser support

Uses only CSS Grid, CSS custom properties, `aspect-ratio`, and standard `@keyframes` — supported in all modern evergreen browsers, consistent with EaseMotion CSS's baseline.

---

## Difficulty

🟡 Intermediate — multi-layer, multi-step animation (staggered corner pulses + independent scan-line loop + entrance sequence) composed entirely from CSS, no JS state machine required.