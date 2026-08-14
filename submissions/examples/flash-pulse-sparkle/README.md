# Flash Pulse Sparkle Animation

A pure CSS/SCSS animation designed to add high-energy visual emphasis to badges, counters, indicators, and callouts through a 5-step spatial pulse and brightness burst sequence.

## 🌟 Highlights

- **Hardware Accelerated:** Uses 3D composite vectors (`scale3d`) and GPU-promoted `will-change` properties to ensure smooth 60 FPS playback.
- **Dynamic Luminance Burst:** Combines spatial scale transforms with filter brightness shifts to simulate physical shimmering light.
- **Configurable Tokens:** Customize speed and timing dynamically via `--ease-duration` and `--ease-timing`.
- **Accessibility Included:** Automatically halts motion and restores static elements when `prefers-reduced-motion: reduce` is enabled.

## 📁 File Structure

```text
submissions/examples/flash-pulse-sparkle/
├── style.css       # Complete CSS keyframes, tokens, and demo layout styles
├── demo.html       # Standalone interactive demonstration file
└── README.md       # Documentation & integration instructions
