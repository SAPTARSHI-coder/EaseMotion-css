# Quantum Encrypted Satellite Telecommunications — Phase #725

**EaseMotion CSS Showcase** · `submissions/examples/quantum-encrypted-satellite-telecommunications-phase-725/`

A space tech UI showcase representing an orbital quantum cryptography network. Features CSS-rendered rotating globes, orbiting satellites on inclined rings, pulsing quantum laser links, and deep space starfields.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/quantum-encrypted-satellite-telecommunications-phase-725/demo.html
```

---

## Design Theme

Space tech, orbital mechanics, quantum cryptography, and satellite communications.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#030712` | Deep Space background |
| `--clr-qcyan`| `#06b6d4` | Quantum Cyan / Primary Link |
| `--clr-qmagenta`| `#d946ef`| Encryption Magenta / Secondary Link |
| `--clr-secure`| `#10b981` | Secure Green / Encryption Status |

---

## Component Breakdown

### 1. Orbital Map View (Center View)
- The `.globe` uses a `radial-gradient` and inner box shadows to look spherical. Its `::before` pseudo-element contains a grid pattern that animates horizontally (`globe-spin` keyframe) to simulate the Earth rotating.
- The `.orbit-ring` elements are rotated via `transform: rotate()`. 
- Inside them, the `.sat-container` rotates 360 degrees (`orbit-path`), carrying the `.satellite` with it. To keep the satellite upright relative to the screen while it orbits, the `.satellite` itself uses `sat-counter-rot` to rotate in the exact opposite direction.
- The `.q-link` simulates a quantum laser firing between orbits, scaling on the X-axis (`link-scan`).

### 2. Deep Space Background
- `body::before` creates subtle cyan and magenta nebulae gradients.
- `body::after` generates a starfield using multiple layered `radial-gradient` dot patterns. The `star-drift` keyframe slightly rotates and scales this layer over a very long duration (60s) to give a subtle sense of drifting through space.

### 3. Telemetry (Right Sidebar)
- The `.data-bar` shows data transmission rates.
- The `.db-fill` uses the `data-stream` keyframe to rapidly scale on the X-axis, creating a jittery, high-speed data transfer effect.

---

## File Structure

```
quantum-encrypted-satellite-telecommunications-phase-725/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
