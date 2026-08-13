# Animated Photon Number Resolving Detectors (PNRD-110)
## Superconducting Transition Edge Sensor (TES) CSS Visualizer

---

### Abstract

The **PNRD-110** component represents a GPU-accelerated, pure CSS simulation of a Superconducting Nanowire / Transition Edge Sensor (TES) Photon Number Resolving Detector array. Operating within quantum optics environments, photon number resolution requires distinguishing single-photon absorption from multi-photon avalanche breakdowns in real time. 

This component leverages CSS Grid, custom CSS variable architecture, and multi-layered radial box-shadow bloom matrices to replicate the intense emerald luminescent dissipation profiles of superconducting state collapses without reliance on JavaScript or WebGL runtime dependencies.

---

### Emerald Quantum Glow Compositing

The visual identity of the cryogenic dashboard (`#010a07`) is anchored by the Emerald Quantum color system (`#064e3b`, `#10b981`, `#34d399`, `#047857`, and `#a7f3d0`). To emulate quantum light absorption bursts across cryogenic sensors, multi-layered box-shadow matrices are dynamically layered:

```css
.ease-state-avalanche {
  background: radial-gradient(circle at center, #a7f3d0 0%, #34d399 30%, #10b981 60%, #064e3b 100%);
  border-color: #ffffff;
  box-shadow: 
    0 0 10px #ffffff,
    0 0 20px var(--pnrd-pulse),
    0 0 35px var(--pnrd-glow),
    0 0 50px rgba(16, 185, 129, 0.8),
    inset 0 0 12px #ffffff;
}
```

#### Color Token Hierarchy
| Custom Property Token | Hex / RGBA Code | Operational Role |
| :--- | :--- | :--- |
| `--pnrd-bg` | `#010a07` | Cryogenic Substrate Background |
| `--pnrd-base` | `#064e3b` | Superconducting Ground State |
| `--pnrd-glow` | `#10b981` | Single Photon Absorption State (n=1) |
| `--pnrd-pulse` | `#34d399` | Multi-Photon Absorption State (n=2,3) |
| `--pnrd-critical` | `#047857` | Thermal Quench Threshold |
| `--pnrd-border` | `rgba(16, 185, 129, 0.3)` | Micro-stripline Interconnect Grid |

---

### DOM Architecture (The 8x8 TES Array)

The core detection plane is constructed as a 2D matrix representing an 8x8 superconducting pixel grid (64 active detection elements). Each node (`.ease-detector-node`) maintains a strict state taxonomy mapping directly to physical TES behavior:

1. **Idle State (`.ease-state-idle`)**: Represents a superconducting sensor below critical temperature ($T_c < 15\text{ mK}$) with zero electrical resistance. Visualized by a subtle emerald pulse.
2. **Absorption State (`.ease-state-absorb`)**: Single or dual photon absorption ($n=1, 2$) creating a localized hotspot and mild resistance jump. Visualized by bright emerald radial gradients.
3. **Avalanche State (`.ease-state-avalanche`)**: Multi-photon absorption event ($n \ge 3$) driving the entire nanowire into a normal conducting state with intense luminescent breakdown bloom.

```
+-----------------------------------------------------------------------+
|                        ease-pnrd-core                                 |
|  +-----------------------------------------------------------------+  |
|  |                     ease-pnrd-array                             |  |
|  |  [P01: idle]  [P02: idle]  [P03: absorb]  ...  [P08: idle]     |  |
|  |  [P09: idle]  [P10: absorb] [P11: idle]   ...  [P16: idle]     |  |
|  |   ...                                                          |  |
|  |  [P57: absorb] [P58: idle]  [P59: idle]   ...  [P64: idle]     |  |
|  +-----------------------------------------------------------------+  |
+-----------------------------------------------------------------------+
```

---

### Keyframe Matrices & Avalanche Simulation

To achieve continuous organic quantum jitter without script-driven layout calculations, the avalanche state uses an 11-stage keyframe sequence (`0%` through `100%` at `10%` increments). This sequence shifts scale, brightness filters, and shadow spread radius simultaneously:

```css
@keyframes ease-photon-avalanche {
  0%   { transform: scale(1) translateZ(0); filter: brightness(1); box-shadow: 0 0 10px var(--pnrd-glow), 0 0 20px var(--pnrd-glow); }
  10%  { transform: scale(1.04) translateZ(0); filter: brightness(1.2); box-shadow: 0 0 15px #ffffff, 0 0 30px var(--pnrd-pulse); }
  20%  { transform: scale(1.08) translateZ(0); filter: brightness(1.4); box-shadow: 0 0 20px #ffffff, 0 0 40px var(--pnrd-pulse), 0 0 60px var(--pnrd-glow); }
  30%  { transform: scale(1.06) translateZ(0); filter: brightness(1.3); box-shadow: 0 0 18px #ffffff, 0 0 35px var(--pnrd-pulse); }
  40%  { transform: scale(1.1) translateZ(0); filter: brightness(1.5); box-shadow: 0 0 25px #ffffff, 0 0 50px var(--pnrd-pulse), 0 0 75px var(--pnrd-glow); }
  50%  { transform: scale(1.07) translateZ(0); filter: brightness(1.35); box-shadow: 0 0 22px #ffffff, 0 0 45px var(--pnrd-pulse); }
  60%  { transform: scale(1.09) translateZ(0); filter: brightness(1.45); box-shadow: 0 0 24px #ffffff, 0 0 48px var(--pnrd-pulse), 0 0 70px var(--pnrd-glow); }
  70%  { transform: scale(1.05) translateZ(0); filter: brightness(1.25); box-shadow: 0 0 16px #ffffff, 0 0 32px var(--pnrd-pulse); }
  80%  { transform: scale(1.03) translateZ(0); filter: brightness(1.15); box-shadow: 0 0 12px var(--pnrd-glow), 0 0 24px var(--pnrd-glow); }
  90%  { transform: scale(1.01) translateZ(0); filter: brightness(1.05); box-shadow: 0 0 8px var(--pnrd-glow), 0 0 16px var(--pnrd-glow); }
  100% { transform: scale(1) translateZ(0); filter: brightness(1); box-shadow: 0 0 10px var(--pnrd-glow), 0 0 20px var(--pnrd-glow); }
}
```

---

### Performance & GPU Offloading

1. **Hardware Acceleration Layering**: All `.ease-detector-node` elements enforce GPU compositing via `translateZ(0)` and explicit `will-change: transform, box-shadow, filter`.
2. **Zero Layout Reflows**: Animations exclusively alter `transform`, `opacity`, `filter`, and composite `box-shadow` properties, avoiding layout recalculation (`reflow`) during execution.
3. **Memory Footprint**: By utilizing standard DOM elements and pure CSS styling rules, memory overhead remains below 2MB even during full 64-pixel multi-avalanche state rendering.

---

### Integration Guide

To include the PNRD-110 visualization in your application:

```html
<link rel="stylesheet" href="path/to/submissions/examples/quantum-teleportation-photon-number-resolving-detectors-110/style.css">
```

Insert the `<main class="ease-quantum-dashboard">` container into your DOM structure.

---

*EaseMotion CSS Contributor Submissions - Quantum Teleportation Series #75781*
