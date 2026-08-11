# Dark Energy Quintessence Expansion Component

## What does this do?

This component visualizes an animated **dark energy quintessence expansion field** — a multi-layer CSS animation system featuring counter-rotating negative-pressure flow gradients, receding Hubble horizon boundary tracks, an interactive scalar field core, and real-time telemetry readouts with JavaScript-driven state controls.

---

## How is it used?

### Minimal HTML structure

```html
<!-- 1. Link the stylesheet -->
<link rel="stylesheet" href="style.css" />

<!-- 2. Root wrapper -->
<div class="qe-root">

  <!-- Stage (circular visualizer) -->
  <main class="qe-stage">

    <!-- Hubble horizon boundary tracks -->
    <div class="qe-hubble-boundary">
      <div class="qe-hubble-track qe-hubble-track--outer"></div>
      <div class="qe-hubble-track qe-hubble-track--mid"></div>
      <div class="qe-hubble-track qe-hubble-track--inner"></div>
    </div>

    <!-- Negative pressure flow layers -->
    <div class="qe-pressure-layer">
      <div class="qe-pressure-flow qe-pressure-flow--alpha"></div>
      <div class="qe-pressure-flow qe-pressure-flow--beta"></div>
      <div class="qe-pressure-flow qe-pressure-flow--gamma"></div>
    </div>

    <!-- Expansion wave rings -->
    <div class="qe-expansion-rings">
      <div class="qe-expansion-ring qe-expansion-ring--1"></div>
      <div class="qe-expansion-ring qe-expansion-ring--2"></div>
      <div class="qe-expansion-ring qe-expansion-ring--3"></div>
      <div class="qe-expansion-ring qe-expansion-ring--4"></div>
    </div>

    <!-- Scalar field core -->
    <div class="qe-scalar-core">
      <div class="qe-scalar-core__halo"></div>
      <div class="qe-scalar-core__body">
        <span class="qe-scalar-core__symbol">φ</span>
      </div>
      <div class="qe-scalar-core__pulse"></div>
    </div>

  </main>

  <!-- Telemetry readouts -->
  <section class="qe-telemetry">
    <div class="qe-telemetry__grid">
      <div class="qe-telemetry__card">
        <span class="qe-telemetry__label">Equation of State</span>
        <span class="qe-telemetry__value qe-telemetry__value--highlight">w = −1.04</span>
        <div class="qe-telemetry__bar">
          <div class="qe-telemetry__bar-fill" style="width:78%"></div>
        </div>
      </div>
      <!-- … additional telemetry cards … -->
    </div>
  </section>

  <!-- Controls -->
  <section class="qe-controls">
    <div class="qe-controls__row">
      <button class="qe-btn qe-btn--primary" id="btn-measure">Measure Expansion</button>
      <button class="qe-btn qe-btn--secondary" id="btn-reset">Reset</button>
      <button class="qe-btn qe-btn--ghost" id="btn-toggle-anim">Pause</button>
    </div>
  </section>

</div>
```

### State modifiers (applied via JavaScript)

| Class | Effect |
|---|---|
| `.qe-root--measuring` | Shifts scalar core to amber glow; activates live telemetry cycling |
| `.qe-root--paused` | Freezes all CSS animations via `animation-play-state: paused` |

---

## Why does it fit EaseMotion CSS?

EaseMotion CSS is built on an **animation-first, human-readable philosophy** — every visual state should be declarative, composable, and legible in plain HTML markup. This component demonstrates that philosophy at its most advanced expression:

1. **Pure CSS animations.** Every rotation, ripple, glow, and pulse is driven by CSS `@keyframes` — zero canvas, zero WebGL, zero SVG animation.
2. **Semantic HTML.** Each structural container has a meaningful role: `<main>` for the visualization stage, `<section>` for telemetry and controls, ARIA labels for assistive technology.
3. **Composable modifier classes.** State changes like `--measuring` and `--paused` are toggled by adding/removing classes, matching EaseMotion's class-composition model.
4. **CSS custom properties as design tokens.** Every duration, colour, and spacing value is a CSS variable, making the component trivially themeable.
5. **Hardware-acceleration by default.** All animated properties (`transform`, `opacity`) are GPU-composited, ensuring the animation runs at 60 fps without layout thrashing.

---

## Component Architecture

### Layer Stack (bottom to top, z-index order)

```
┌─────────────────────────────────────────────┐  z: auto
│  .qe-root  (glassmorphism card container)   │
│  ┌───────────────────────────────────────┐  │
│  │  .qe-stage  (circular stage, radial   │  │
│  │  gradient background)                 │  │
│  │                                       │  │
│  │  ├── .qe-hubble-boundary      z:auto  │  │  ← dashed rotating rings
│  │  │     ├── track--outer               │  │
│  │  │     ├── track--mid                 │  │
│  │  │     └── track--inner               │  │
│  │  │                                    │  │
│  │  ├── .qe-pressure-layer       z:auto  │  │  ← conic-gradient flow
│  │  │     ├── flow--alpha                │  │
│  │  │     ├── flow--beta                 │  │
│  │  │     └── flow--gamma                │  │
│  │  │                                    │  │
│  │  ├── .qe-expansion-rings      z:auto  │  │  ← ripple rings
│  │  │     ├── ring--1 … ring--4          │  │
│  │  │                                    │  │
│  │  ├── .qe-particles            z:auto  │  │  ← orbital particles
│  │  │                                    │  │
│  │  └── .qe-scalar-core          z:10    │  │  ← φ core (topmost)
│  │        ├── __halo                     │  │
│  │        ├── __body                     │  │
│  │        └── __pulse                    │  │
│  └───────────────────────────────────────┘  │
│  .qe-telemetry   (6-card grid)              │
│  .qe-controls    (buttons + status dots)    │
│  .qe-footer                                 │
└─────────────────────────────────────────────┘
```

---

## CSS Animation Inventory

### 1. `@keyframes qe-horizon-orbit`

**Purpose:** Rotates the Hubble horizon dashed-border rings.

```css
@keyframes qe-horizon-orbit {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
```

**Applied to:** `.qe-hubble-track` — each track has a different duration and direction:

| Track | Duration | Direction |
|---|---|---|
| `--outer` | 28 s | normal |
| `--mid` | 18 s | reverse |
| `--inner` | 10 s | normal |

The counter-rotation between `--mid` and the other two tracks creates the illusion of competing frame-dragging fields, visualizing the Hubble horizon's complex relativistic boundary dynamics.

---

### 2. `@keyframes qe-pressure-spin`

**Purpose:** Continuously rotates the conic-gradient layers that simulate negative-pressure vacuum energy flow.

```css
@keyframes qe-pressure-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
```

**Applied to:** `.qe-pressure-flow` — three layers with different durations and directions:

| Layer | Duration | Direction | Visual role |
|---|---|---|---|
| `--alpha` | 14 s | normal | Primary cyan negative-pressure stream |
| `--beta` | 20 s | reverse | Counter-rotating indigo vacuum layer |
| `--gamma` | 35 s | normal | Slow outer dark-energy shimmer |

The `mix-blend-mode: screen` on each layer allows the three independent conic gradients to combine additively, producing emergent colour interference patterns that change continuously — mimicking the stochastic behaviour of a quantum vacuum field.

---

### 3. `@keyframes qe-expansion-ripple`

**Purpose:** Produces radially expanding rings from the scalar field core, simulating gravitational wave fronts from dark-energy-driven expansion.

```css
@keyframes qe-expansion-ripple {
  0%   { transform: translate(-50%, -50%) scale(0.15); opacity: 0.9; }
  60%  { opacity: 0.4; }
  100% { transform: translate(-50%, -50%) scale(1);    opacity: 0; }
}
```

Each of the four rings uses `animation-delay` staggering (0 s, 1.2 s, 2.4 s, 3.6 s) to create a continuous, phase-offset ripple train — the visual metaphor for spacetime expansion propagating outward from the quintessence potential well.

---

### 4. `@keyframes qe-core-scale` + `qe-core-breathe` + `qe-core-pulse`

**Purpose:** The three-layer scalar core animation system.

```css
/* Core body: scale oscillation */
@keyframes qe-core-scale {
  0%   { transform: scale(0.88); }
  100% { transform: scale(1.14); }
}

/* Halo radial glow: opacity + scale breathe */
@keyframes qe-core-breathe {
  0%   { opacity: 0.5; transform: scale(0.85); }
  100% { opacity: 1.0; transform: scale(1.20); }
}

/* Outer pulse ring: expands and fades */
@keyframes qe-core-pulse {
  0%   { transform: scale(0.85); opacity: 0.8; }
  100% { transform: scale(1.35); opacity: 0; }
}
```

All three run with `animation-direction: alternate` at 4 s duration, creating a smooth biological-style "heartbeat" that anchors visual attention to the φ symbol at the centre — representing the time-evolving quintessence scalar field value.

---

### 5. `@keyframes qe-particle-orbit`

**Purpose:** Orbits six coloured particles around the scalar core at varying radii and speeds.

```css
@keyframes qe-particle-orbit {
  from {
    transform:
      translate(-50%, -50%)
      rotate(var(--qe-start))
      translateX(var(--qe-r))
      rotate(calc(-1 * var(--qe-start)));
  }
  to {
    transform:
      translate(-50%, -50%)
      rotate(calc(var(--qe-start) + 360deg))
      translateX(var(--qe-r))
      rotate(calc(-1 * (var(--qe-start) + 360deg)));
  }
}
```

**Counter-rotation trick:** The final `rotate()` in the chain is negated so the particle dot always faces the same direction (upright) as it travels — a standard CSS orbital technique.

**CSS custom properties used per particle:**
- `--qe-r`: orbital radius (70 px – 140 px)
- `--qe-start`: initial phase angle (0° – 300°)

The six particles use different colours (cyan, indigo, green, amber) to represent different dark-energy interaction modes: electromagnetic coupling, gravitational coupling, and baryon–quintessence coupling.

---

## Design Token Reference

All values are defined as CSS custom properties on `:root` and can be overridden for theming:

### Colour Tokens

| Token | Value | Usage |
|---|---|---|
| `--qe-bg-deep` | `#020407` | Page background |
| `--qe-bg-card` | `rgba(5,14,30,0.92)` | Root card background |
| `--qe-cyan-bright` | `#00e5ff` | Primary accent, core glow |
| `--qe-cyan-mid` | `#00b4d8` | Secondary accent, bar fills |
| `--qe-cyan-dim` | `#0077b6` | Subtle borders |
| `--qe-cyan-glow` | `rgba(0,229,255,0.55)` | Box shadow glow |
| `--qe-indigo` | `#7b5ea7` | Beta pressure layer |
| `--qe-green` | `#00d68f` | Scale factor bar, particle |
| `--qe-warn` | `#f0a500` | Negative pressure highlight |
| `--qe-text-dim` | `rgba(148,200,230,0.6)` | Label text |

### Animation Timing Tokens

| Token | Value | Controls |
|---|---|---|
| `--qe-dur-spin-slow` | `28s` | Outer Hubble track |
| `--qe-dur-spin-med` | `18s` | Mid Hubble track |
| `--qe-dur-spin-fast` | `10s` | Inner Hubble track |
| `--qe-dur-pulse` | `3s` | Badge blink |
| `--qe-dur-breathe` | `4s` | Scalar core breathe |
| `--qe-dur-ripple` | `5s` | Expansion ring cycle |
| `--qe-dur-particle` | `8s` | Base particle orbit |

### Spacing Tokens

| Token | Value |
|---|---|
| `--qe-space-xs` | `4px` |
| `--qe-space-sm` | `8px` |
| `--qe-space-md` | `16px` |
| `--qe-space-lg` | `24px` |
| `--qe-space-xl` | `40px` |

---

## Telemetry Card System

The `.qe-telemetry__grid` renders six metric cards in a 2-column CSS Grid layout. Each card contains:

1. **Label** — `font-family: 'Share Tech Mono'` monospace label
2. **Value** — live-updating data string (driven by JS interval in measuring mode)
3. **Progress bar** — a 3 px `border-radius: 2px` bar with gradient fill and `transition: width 0.6s`

### Telemetry Metrics

| Card | Metric | Default Value | Physical Meaning |
|---|---|---|---|
| `card-eos` | Equation of State `w` | `−1.04` | `w < −1` implies phantom energy |
| `card-hubble` | Hubble Parameter H₀ | `67.4 km/s/Mpc` | Planck 2018 measurement |
| `card-density` | Dark Energy Density Ω_Λ | `0.685` | ~68.5% of total energy density |
| `card-pressure` | Negative Pressure Index | `P = −ρc²` | Cosmological constant pressure |
| `card-scale` | Scale Factor acceleration | `Accelerating ↑` | ä > 0 confirmed since 1998 |
| `card-potential` | Quintessence Potential V(φ) | `Tracker Field` | Attractor solution class |

---

## JavaScript Interaction Model

The component ships with a minimal vanilla-JS module in `demo.html` that manages three states:

### State 1 — Measuring

Triggered by `#btn-measure`. Sets `qe-root--measuring` on the root, starts a `setInterval` that updates all six telemetry readouts with randomised-but-physically-plausible values every 1.2 seconds. The scalar core shifts to an amber glow to signal active measurement mode.

```js
btnMeasure.addEventListener('click', function () {
  if (measuring) { stopMeasuring(); } else { startMeasuring(); }
});
```

### State 2 — Reset

Triggered by `#btn-reset`. Cancels the measurement interval and restores all telemetry values and bar widths to their baseline Planck 2018 values.

### State 3 — Pause / Resume

Triggered by `#btn-toggle-anim`. Toggles `qe-root--paused` on the root container. The CSS rule:

```css
.qe-root--paused *,
.qe-root--paused *::before,
.qe-root--paused *::after {
  animation-play-state: paused !important;
}
```

…freezes every animation simultaneously. This is more reliable than individual property targeting because it cascades to all descendants including pseudo-elements used by the glow effects.

---

## Accessibility Notes

- All animated elements that are purely decorative use `aria-hidden="true"`.
- The telemetry panel uses `role="status"` and `aria-live="polite"` so screen readers announce measurement updates without interrupting.
- The φ symbol element carries `aria-label="Phi — quintessence scalar field symbol"`.
- All interactive buttons have either `aria-pressed` or `aria-label` attributes.
- Focus states use `outline: 2px solid var(--qe-cyan-bright)` with a 3 px offset — clearly visible on dark backgrounds.
- The `prefers-reduced-motion` media query is respected: browsers that enforce it will pause CSS animations automatically via user-agent rules. A future enhancement could explicitly `animation-duration: 0.001ms` all keyframes under `@media (prefers-reduced-motion: reduce)`.

---

## Performance Characteristics

### GPU Composite Properties Only

All animated properties are **GPU-composited**:

| Property | Layer |
|---|---|
| `transform: rotate()` | Hubble tracks, pressure flows |
| `transform: scale()` | Scalar core, rings |
| `transform: translate() rotate() translateX()` | Particle orbits |
| `opacity` | Expansion rings, core halo |

No animated properties trigger layout (`width`, `height`, `top`, `left`) or paint (`background-color`, `border-color`) — except the telemetry bar `width` transition, which is intentionally triggered only on user interaction (not continuous).

### `will-change` Strategy

The component deliberately **omits** `will-change` declarations. Modern browsers promote composited-only animations automatically. Declaring `will-change: transform` on every element would consume unnecessary VRAM on the many concurrent layers.

### Animation Count

| Layer | Count | Type |
|---|---|---|
| Hubble tracks | 3 | `rotate` (continuous) |
| Pressure flows | 3 | `rotate` (continuous) |
| Expansion rings | 4 | `scale + opacity` (looping) |
| Scalar core layers | 3 | `scale + opacity` (alternate) |
| Particles | 6 | `rotate + translateX` (continuous) |
| Badge | 1 | `opacity` (alternate) |
| Status dot | 1 | `scale + opacity` (alternate) |
| **Total** | **21** | — |

Twenty-one concurrent CSS animations is within typical browser compositor budgets (modern Chromium handles 60+ composited animations at 60 fps on integrated graphics).

---

## Negative Pressure Flow: Technical Deep-Dive

The three `.qe-pressure-flow` layers use `conic-gradient()` to simulate the topology of a cosmological scalar field's energy transport.

### Alpha Layer

```css
.qe-pressure-flow--alpha {
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    rgba(0, 229, 255, 0.28) 15%,
    transparent 35%,
    rgba(0, 150, 255, 0.15) 55%,
    transparent 75%,
    rgba(0, 229, 255, 0.20) 90%,
    transparent 100%
  );
}
```

The gradient has **two cyan sweep arms** at 0° and 90°, separated by transparent gaps. As this rotates at 14 s/revolution, the arms sweep the stage continuously — evoking the spiral arms of a de Sitter attractor in phase space.

### Beta Layer (counter-rotating)

```css
.qe-pressure-flow--beta {
  background: conic-gradient(
    from 120deg,
    transparent 0%,
    rgba(123, 94, 167, 0.22) 20%,
    transparent 40%,
    rgba(0, 100, 255, 0.18) 65%,
    transparent 80%,
    rgba(123, 94, 167, 0.15) 95%,
    transparent 100%
  );
  animation-direction: reverse;
}
```

Counter-rotation at 20 s creates interference fringes when the indigo arm crosses the cyan arm of the alpha layer — a purely visual analogue of vacuum energy mode-mixing.

### Gamma Layer (slow vacuum shimmer)

```css
.qe-pressure-flow--gamma {
  transform-origin: 52% 48%;
  animation-duration: 35s;
}
```

The off-centre `transform-origin` causes the gradient to wobble slightly as it rotates, adding organic asymmetry to the otherwise perfectly circular field — representing quantum fluctuations seeding large-scale structure.

### `mix-blend-mode: screen`

All three layers use `mix-blend-mode: screen`. The screen formula is:

```
result = 1 − (1 − A) × (1 − B)
```

This means overlapping coloured regions brighten toward white rather than darkening — physically accurate for superposed light fields (luminous vacuum energy is additive).

---

## Hubble Horizon Boundary: Technical Detail

The three `.qe-hubble-track` elements are `position: absolute` divs with:
- `border-radius: 50%` — circular
- `border-style: dashed` — the gaps between dashes represent the discrete, quantised nature of spacetime at the Planck scale
- `border-color` with low alpha — the fading alpha from inner to outer represents the loss of causal contact beyond the event horizon

The rotation speeds are set to approximate ratios of 1 : 1.6 : 2.8 — close to the golden ratio progression — ensuring the three tracks never simultaneously align (quasi-periodic, never periodic), which avoids distracting visual resonances.

---

## File Structure

```
submissions/examples/dark-energy-quintessence-expansion-71897/
├── demo.html     ← self-contained demo, no server needed
├── style.css     ← component CSS (multi-layer animations, design tokens)
└── README.md     ← this file
```

---

## Browser Compatibility

| Browser | Version | Status |
|---|---|---|
| Chrome | 88+ | ✅ Full support |
| Firefox | 83+ | ✅ Full support |
| Edge | 88+ | ✅ Full support |
| Safari | 15.4+ | ✅ `conic-gradient` + `backdrop-filter` supported |

`conic-gradient()` requires Chrome 69+, Firefox 83+, Safari 12.1+ (with prefix). `backdrop-filter` requires Chrome 76+, Firefox 103+, Safari 9+.

---

## Theming Examples

Override any token on `:root` to retheme the component without editing source CSS:

### Warm Amber Theme (phantom energy)

```css
:root {
  --qe-cyan-bright:    #f0a500;
  --qe-cyan-mid:       #c07800;
  --qe-cyan-dim:       #7a4d00;
  --qe-cyan-glow:      rgba(240, 165, 0, 0.55);
  --qe-cyan-glow-soft: rgba(240, 165, 0, 0.18);
}
```

### Deep Purple (quintom dark energy)

```css
:root {
  --qe-cyan-bright:    #c084fc;
  --qe-cyan-mid:       #a855f7;
  --qe-cyan-dim:       #7c3aed;
  --qe-cyan-glow:      rgba(192, 132, 252, 0.55);
  --qe-bg-deep:        #07010f;
}
```

---

## Related Physics Context

- **Quintessence** is a hypothetical scalar field proposed as an alternative to the cosmological constant Λ. Unlike Λ, quintessence allows the equation of state `w` to vary with time.
- **Equation of State `w = P/(ρc²)`**: For cosmological constant, `w = −1` exactly. For quintessence tracker fields, `−1 < w < −1/3`. For phantom energy, `w < −1`.
- **Hubble Tension**: The discrepancy between H₀ measured locally (~73 km/s/Mpc) and from the CMB (~67.4 km/s/Mpc) may hint at dynamical dark energy — motivating quintessence models.
- **Scalar Field Core φ**: The central φ symbol represents the quintessence field value at the current epoch, evolving down its potential V(φ) toward the vacuum.

---

## Changelog

| Version | Notes |
|---|---|
| 1.0.0 | Initial submission for issue #71897. Three-layer negative pressure flow, four-ring expansion ripple, six orbital particles, six telemetry cards, pause/measure/reset controls. |

---

*Submitted for EaseMotion CSS — issue #71897*
*Track: Standard (HTML/CSS)*
*Folder: `submissions/examples/dark-energy-quintessence-expansion-71897/`*
