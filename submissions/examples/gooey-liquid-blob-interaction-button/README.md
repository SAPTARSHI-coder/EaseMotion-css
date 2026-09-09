# Gooey Liquid-Blob Interaction Button

A premium, organic menu filling component showcasing high-fidelity liquid dynamics using pure CSS transformations and an inline SVG contrast matrix filter map.

## 🧪 Physics Architecture

- **SVG Alpha Channel Matrix Selection:** Leverages a composite `feGaussianBlur` and `feColorMatrix` calculation block. By introducing a massive contrast multiplier inside the color matrix (`19 -9`), the alpha edge boundaries are clamped tight, turning blurry gradients into organic liquid textures that fuse upon touching.
- **Hardware-Accelerated Staggering:** Individual child `.blob` nodes use unique 2D positional values (`translateY`) combined with staggered `transition-delay` configurations to replicate fluid fluid-wave momentum.
- **Composition Ready:** Designed with complete structural modularity—the background matrix container (`.blob-wrapper`) operates contextually within any relative button frame, tag container, or navigation system.