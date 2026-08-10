# Deep-Brain Stimulation Neural Tuning Suite — Phase #737

**EaseMotion CSS Showcase** · `submissions/examples/deep-brain-stimulation-neural-tuning-suite-phase-737/`

A dark-mode, clinical neurotech UI showcase simulating an interface for deep-brain stimulation. Features CSS-simulated EEG waveforms, interactive sliders, and animated brain-map nodes.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/deep-brain-stimulation-neural-tuning-suite-phase-737/demo.html
```

---

## Design Theme

Neurotech, clinical dark mode, bright neon status colors, data-heavy dashboard.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#020617` | Deep slate background |
| `--clr-accent-1`| `#0ea5e9` | Neon Blue / Primary tuning |
| `--clr-accent-2`| `#f472b6` | Cortical Pink / Active states |
| `--clr-accent-3`| `#fde047` | Synaptic Yellow / Diagnostics |

---

## Component Breakdown

### 1. EEG Oscilloscope Simulation
- The bottom panel contains `.eeg-wave` elements that simulate brainwaves entirely via CSS. It uses repeating `radial-gradient` backgrounds on an element that is 200% the width of its container.
- An `eeg-scroll` keyframe animation continuously translates the element leftwards (`translateX(-50%)`), creating a seamless rolling wave effect without SVG or JS.
- A vertical scanning bar (`eeg-sweep`) runs across the container to mimic a CRT oscilloscope refresh rate.

### 2. Brain Map Visualizer
- A stylized overhead view using an elliptical `border-radius` and `radial-gradient` shading.
- **Electrodes**: `.electrode` nodes use hover states and active classes. The active node triggers a `ripple-node` keyframe utilizing the `::after` pseudo-element to simulate a continuous electrical pulse.
- **Scanner**: A horizontal laser line sweeps top-to-bottom over the map using the `scan-brain` keyframe.

### 3. Custom Tuning Sliders
- CSS-styled tracks and thumbs to represent hardware tuning dials. Uses absolute positioning and box-shadow glows.

### 4. Grid Background & Glass Panels
- The `body` features a faint grid made with overlapping `linear-gradient` backgrounds.
- UI panels utilize `backdrop-filter: blur(5px)` over the grid to create depth.

---

## File Structure

```
deep-brain-stimulation-neural-tuning-suite-phase-737/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
