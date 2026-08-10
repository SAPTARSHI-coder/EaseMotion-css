# EaseMotion High-Fidelity CSS Micro-Interaction Engine Primitives

This example showcases premium layout tokens for high-fidelity CSS dynamic micro-interactions and organic elastic feedback primitives.

## 🧠 Dynamic Timing Curves

Modern design systems rely on non-linear transition profiles that mimic physical gravity, spring friction, and momentum:

1. **Elastic spring curve (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`)**: Emulates a mechanical coil spring. The curve overshoots the final boundary coordinates before snapping back, giving elements a "pop" effect.
2. **Magnetic glide curve (`cubic-bezier(0.25, 1, 0.5, 1)`)**: Emulates exponential deceleration. The animation starts quickly and smoothly dampens to an exact stop, ideal for micro-translation states.
3. **Fluid exit curve (`cubic-bezier(0.4, 0, 1, 1)`)**: Emulates uniform acceleration. The speed builds up smoothly and exits cleanly, preventing visual lag on state changes.

## 🚀 Micro-Interaction Tokens

- **`.ease-micro-elastic-pop`**: Spring bounce active feedback. Leverages the spring curve for scaling, featuring a scale reduction on active presses.
- **`.ease-micro-magnetic-glide`**: Magnetic glide shift. Uses absolute mask translations combined with vertical translations to create physical movement.
- **`.ease-micro-shimmer-pulse`**: Focus wave shimmer. Combines soft outlines with a custom loop keyframe shadow animation for input alignment focus states.

## 📁 Files Created

- [style.css](file:///C:/Users/Fujitsu/.gemini/antigravity/scratch/EaseMotion-css/submissions/examples/micro-interactions/style.css) — Custom stylesheet containing root variables, layout panels, and the micro-interaction timing tokens.
- [demo.html](file:///C:/Users/Fujitsu/.gemini/antigravity/scratch/EaseMotion-css/submissions/examples/micro-interactions/demo.html) — Dynamic lab workbench showing the interactive button primitives.
