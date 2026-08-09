# Fade-In Badge Component

A lightweight, pure CSS badge module executing a smooth opacity fade and vertical slide-in transition on load.

## Features
- **Pure CSS/HTML**: Animated using keyframes with zero external JavaScript dependencies.
- **Accessible**: Fully compliant with `prefers-reduced-motion` media queries for user accessibility.
- **Customizable**: Exposes `:root` CSS custom properties to adjust entry duration, offset translation, and animation delay.

## Customization Parameters
The following CSS custom properties are available in `style.css`:
- `--fade-duration`: Controls the overall duration of the fade-in animation.
- `--fade-delay`: Sets the initial delay before the fade animation triggers.
- `--fade-translation-y`: Distance offset along the Y-axis for the entry slide.