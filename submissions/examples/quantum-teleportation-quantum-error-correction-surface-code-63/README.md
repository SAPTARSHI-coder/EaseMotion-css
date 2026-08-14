# Animated Quantum Error Correction Surface Code (`#74877`)

> **EaseMotion CSS Component Specification**  
> *Component Architecture:* 7x7 Planar Surface Code Lattice ($d=7$ Rotated Surface Code Array)  
> *Implementation Paradigm:* Pure CSS Engine (Zero JavaScript, GPU Accelerated Keyframes, CSS Custom Property Design System)

---

## Abstract

Quantum Error Correction (QEC) is the cornerstone of fault-tolerant quantum computing. Physical qubits are inherently susceptible to environmental decoherence, thermal noise, and control crosstalk. To preserve quantum information over arbitrary computation depth, topological surface codes group multiple physical qubits into a single protected **Logical Qubit** ($|0_L\rangle$).

This component provides a high-fidelity, interactive, space-grade visual telemetry dashboard of a **7×7 Rotated Planar Surface Code Array** with a code distance of $d=7$. Built exclusively using vanilla CSS and semantic HTML5, it demonstrates advanced web rendering capabilities including multi-layered chromatic box-shadow glow matrices, keyframe-driven flux rotation timelines, and responsive layout architectures without requiring external WebGL, SVG, or JavaScript engines.

---

## CSS Compositing & Quantum Glow Theory

### 1. Chromatic Design System Tokens

The visual language models cryogenic quantum hardware operating in dilution refrigerators ($14.8\text{ mK}$). To evoke high-tech precision, the color space relies on deep space slate backgrounds overlaid with high-contrast quantum luminescence tokens:

```css
:root {
  /* Space-Grade Background Matrix */
  --q-bg-dark: #020617;
  --q-bg-card: rgba(15, 23, 42, 0.75);
  --q-bg-panel: rgba(30, 41, 59, 0.55);
  
  /* Quantum Photonic Glow Palette */
  --q-blue: #38bdf8;
  --q-core: #0ea5e9;
  --q-cyan-glow: #22d3ee;

  /* Stabilizer Eigenvalue Classes */
  --q-z-stabilizer: rgba(16, 185, 129, 0.2);  /* Emerald Green: Phase-Flip (Z) */
  --q-x-stabilizer: rgba(56, 189, 248, 0.2);  /* Sky Blue: Bit-Flip (X) */
  --q-syndrome-error: #f43f5e;                 /* Rose Red: Excitation Alert */
}
```

### 2. Multi-Layered Glow Box-Shadow Matrices

Rather than relying on resource-intensive canvas blurs or heavy SVG filter chains, photon scattering around qubits is simulated via composite, multi-layered `box-shadow` definitions. Each qubit type generates three distinct radial field layers: an inner core glow, an ambient halo, and an inset emission highlight.

```css
--q-glow-matrix-data: 
  0 0 8px #38bdf8, 
  0 0 16px rgba(14, 165, 233, 0.5), 
  inset 0 0 6px rgba(224, 242, 254, 0.8);

--q-glow-matrix-error: 
  0 0 12px #f43f5e, 
  0 0 24px rgba(244, 63, 94, 0.5), 
  inset 0 0 10px rgba(244, 63, 94, 0.4);
```

When an error syndrome is detected (e.g. `.ease-syndrome-active`), the box-shadow transitions dynamically to an inverted high-frequency excitation glow, alerting operators to Pauli-X or Pauli-Z errors on specific lattice coordinates.

---

## DOM Architecture (The 7x7 Planar Lattice)

The 7×7 grid contains 49 physical qubit elements arranged in an alternating dual lattice configuration:

| Qubit Classification | Quantity | Geometry | Function |
| :--- | :---: | :--- | :--- |
| **Physical Data Qubits ($D_n$)** | 25 | Glowing Circular Nodes (`border-radius: 50%`) | Store superposition state $\alpha|0\rangle + \beta|1\rangle$ |
| **Z-Stabilizers ($Z_n$)** | 12 | Green Square Plaquettes (`#10b981`) | Measure $\prod Z_i$ operators for Phase-flip detection |
| **X-Stabilizers ($X_n$)** | 12 | Sky-Blue Square Plaquettes (`#38bdf8`) | Measure $\prod X_i$ operators for Bit-flip detection |

### Lattice Layout Engine

The lattice container utilizes CSS Grid with a strict 7-column square aspect-ratio bounding box:

```css
.ease-quantum-lattice {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 560px;
  aspect-ratio: 1 / 1;
}
```

### Zero-JS Hover Tooltips

Each qubit contains a zero-JavaScript state readout tooltip element (`.ease-qubit-tooltip`). Interactivity is handled via CSS transform and opacity cascades:

```css
.ease-qubit-tooltip {
  position: absolute;
  bottom: 115%;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
}

.ease-qubit:hover .ease-qubit-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}
```

---

## Keyframe Matrices & Flux Rotations

Five non-blocking animation keyframe sequences drive the visual dynamics of the dashboard:

### 1. Rotational Magnetic Flux (`ease-flux-rotation`)
Animates the exterior energy aura ring (`.ease-qubit-halo`) through 360 degrees of rotation while performing continuous hue shifting to simulate SQUID flux quantization:

```css
@keyframes ease-flux-rotation {
  0% {
    transform: rotate(0deg) scale(1);
    filter: hue-rotate(0deg);
  }
  50% {
    transform: rotate(180deg) scale(1.05);
    filter: hue-rotate(90deg);
  }
  100% {
    transform: rotate(360deg) scale(1);
    filter: hue-rotate(0deg);
  }
}
```

### 2. Core Quantum Pulsing (`ease-qubit-pulse`)
Provides breathing feedback for physical data qubits, scaling the core geometry between 1.0× and 1.2× while oscillating box-shadow density.

### 3. Syndrome Excitation Alert (`ease-syndrome-flash`)
Flashes active syndrome error qubits at $1\text{ Hz}$ between low and high energy emission states.

### 4. Telemetry Stream Marquee (`ease-data-stream`)
Translates the log stream vertically for a continuous live telemetry feed. When hovered, CSS `animation-play-state: paused` allows developers to inspect individual log items.

---

## Performance & GPU Acceleration

To guarantee 60 FPS performance even on low-power displays or mobile viewports:

1. **Hardware Layering**: All transform animations utilize `translate3d()` or `scale()` properties, promoting elements to dedicated GPU compositing layers.
2. **Layout Thrashing Prevention**: Geometric properties like `width`, `height`, and `margin` are never mutated inside keyframes.
3. **Sub-pixel Anti-Aliasing**: Smooth rounded nodes are rendered using `backface-visibility: hidden` and `transform: translateZ(0)` to prevent sub-pixel blur during hover scaling.

---

## Usage & Integration

To integrate the Quantum Surface Code component into your project:

1. Include `style.css` in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="submissions/examples/quantum-teleportation-quantum-error-correction-surface-code-63/style.css">
   ```
2. Copy the `.ease-quantum-container` structure from `demo.html`.
3. Customize lattice size or qubit state classes (`.ease-syndrome-active`) directly in HTML.

---

*Part of EaseMotion CSS Repository - Issue #74877*
