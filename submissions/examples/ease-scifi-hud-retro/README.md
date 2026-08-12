# Sci-Fi HUD: Retro Arcade Pixel Variation (`ease-scifi-hud-retro`)

## 1. What does this do?
This component provides a pure CSS Sci-Fi Heads Up Display (HUD) styled with a chunky, neon retro-arcade pixel aesthetic. It features pixelated frame corners, scanline overlay effects, telemetry panels with segmented energy bars, and an 8-bit style rotating radar reticle with a pulsing core.

## 2. How is it used?
- **Segmented Energy Bars via Gradients**: The energy fill effect utilizes `repeating-linear-gradient` to natively generate discrete, blocky pixel segments inside a single `div`, avoiding unnecessary HTML markup or multiple nested elements.
- **8-Bit Low-Framerate Animation**: CSS animations use the `steps()` timing function (such as `steps(10)`, `steps(12)`, and `steps(2)`) across keyframes to simulate the discrete, stuttering low-framerate movement characteristic of 8-bit arcade hardware processors.
- **Pixelated Corners**: Frame corners are constructed using pixel-offset hard box-shadows on pseudo-elements (`::before` and `::after`), giving an authentic 8-bit retro arcade look without external images.

## 3. Why is it useful?
Creating pixel-art UI components natively in CSS eliminates the reliance on heavy, unscalable transparent PNG assets or complex canvas rendering. This approach ensures:
- **Crisp Rendering**: The HUD stays sharp on high-DPI (Retina) displays at any scale.
- **High Performance**: 100% CSS and hardware-accelerated animations ensure lightweight overhead and optimal rendering speeds.
- **Accessibility**: Includes built-in support for `prefers-reduced-motion` media queries to automatically stop animations for users who request reduced motion.
