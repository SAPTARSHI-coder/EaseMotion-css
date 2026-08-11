# Neural Synaptic Resonance Matrix (`ease-neural-synaptic-resonance-matrix`)

An animated bio-electric feedback visualizer designed for futuristic telemetry interfaces, diagnostic command consoles, and advanced cyberpunk dashboard interfaces. This component models neural action potential propagation using high-performance CSS animation loops, non-linear synaptic timing functions, and multi-layered hardware-accelerated transforms.

---

## Technical Architecture

The Synaptic Resonance Matrix leverages modern browser layout and compositing pipelines to render an interactive mathematical map of neural signal transmissions. 

### 1. Biophysical and Mechanical Model
The interface visually emulates the following bio-electric components:
*   **The Soma Core (Bio-electric Nucleus):** Placed at the center coordinates of the coordinate map. It serves as the primary voltage potential transmitter. Built using dynamic radial gradients and CSS box-shadow expansion keyframes.
*   **axonal impulse rays (Axon Pathways):** Vector lines dynamically projected from the Soma center to local dendritic synapse endpoints. Computed in real-time using trigonometry inside a custom coordinate projection function.
*   **Synaptic Nodes:** Outer sensory nodes modeling specific regional neural centers (Alpha through Zeta). The nodes utilize custom CSS scaling transitions and transform translation loops.
*   **Action Potential Impulses:** High-intensity bio-electric bursts moving from the nucleus to the nodes. Handled via keyframe animation offsets along the pre-computed axon lines.

---

## Key Features & CSS Techniques

*   **Vibrant Glassmorphism panels:** Employs backdrop-filter blur parameters with semi-transparent emerald border overlays.
*   **Hardware-Accelerated Rotations:** Outer and inner boundary rings are animated using the compositing layer (`transform: rotate()`) to ensure consistent 60 FPS performance.
*   **Non-Linear Timing curves:** Utilizes tailored cubic-bezier functions (`cubic-bezier(0.25, 1, 0.5, 1)`) to recreate natural biological acceleration and relaxation in neural impulses.
*   **Radial Gradient Shadows:** Outer neon glow layers are achieved by layering multiple drop-shadow and box-shadow variables scoped to custom variables.

---

## File Structure

The component is entirely self-contained within three files:
1.  **`demo.html`**: Contains the semantic markup tree, layout grids, control panels, interactive sliders, and JavaScript trigonometric line rendering.
2.  **`style.css`**: Defines CSS variables, emerald neon rules, rotation loops, custom scrollbars, keyframe vectors, and responsive grid layouts.
3.  **`README.md`**: Complete system documentation, API parameters, and integration guidelines.

---

## Customization Guide

### CSS Variables
You can override these properties in the `:root` scope or on specific wrapper elements to change the behavior and colors of the matrix:

```css
:root {
  --neon-emerald: #10b981;          /* Core theme color */
  --neon-glow-primary: rgba(16, 185, 129, 0.4);  /* Primary glow opacity */
  --matrix-dark-bg: #030712;        /* Dark background color */
  --panel-glass: rgba(15, 23, 42, 0.75); /* Panel transparency */
  --pulse-duration: 4s;             /* Axonal impulse frequency */
  --rotation-speed: 25s;            /* Boundary ring rotation speed */
}
```

---

## References & Credits
*   Hodgkin-Huxley model (Quantitative description of membrane currents).
*   GSSoC-26 Approved Component Guidelines.
