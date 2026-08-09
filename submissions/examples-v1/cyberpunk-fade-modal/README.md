# Cyberpunk Neon Fade-Out Modal (Pure CSS)

A thematic styling module matching high-contrast sci-fi dashboard terminal overlays. 

## Features
* ⚡ **Zero JS Interaction Execution:** Uses `:target` states exclusively to process modern transitions.
* 🏮 **Cyberpunk Visual Enhancements:** Includes high-contrast neon drop shadows, custom viewport-clipping masks (`clip-path`), and micro-animations.
* 🎛️ **Exposed CSS Properties:** Fine-tune structural transformations using the parameters below.

## Configuration Details
| Custom Property | Description | Default Value |
| :--- | :--- | :--- |
| `--modal-duration` | Speeds up/slows down exit scale and fade state. | `0.3s` |
| `--modal-easing` | Fluid structural speed transition vector. | `cubic-bezier(0.25, 1, 0.5, 1)` |
| `--modal-scale-start` | The inner card scale base initialization factor. | `0.92` |