# Morph-Glow Badge Component

A lightweight, pure CSS badge module executing fluid `border-radius` morphing transitions combined with a dynamic backdrop glow aura.

## Features
- **Pure CSS/HTML**: Animated using keyframe loops with zero external JavaScript dependencies.
- **Accessible**: Fully compliant with `prefers-reduced-motion` media queries for user accessibility.
- **Customizable**: Exposes `:root` CSS custom properties to adjust morph speed, glow blur, and aura opacity.

## Customization Parameters
The following CSS custom properties are available in `style.css`:
- `--morph-speed`: Controls the timing cycle of organic border-radius morphing.
- `--glow-blur-radius`: Adjusts the gaussian blur intensity of the background aura layer.
- `--glow-opacity`: Sets the default ambient aura transparency level.