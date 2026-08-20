# Image Crossfade (#87555)

An infinite dual-image crossfade showcase component featuring continuous opacity dissolving transitions with pause-on-hover capability and playback toggles.

## Features
- **Continuous CSS Crossfade:** Pure CSS keyframe animations looping opacity transitions seamlessly between layers.
- **Hardware-Accelerated:** Transitions utilize `opacity` and `will-change` properties to avoid repaint overhead.
- **Interactive Controls:** Includes play/pause toggles and automatic pause-on-hover behavior.
- **Accessibility:** Supports `@media (prefers-reduced-motion: reduce)` by disabling loop animations.

## Usage
Include `style.css` in your project and wrap the crossfade image layers inside `.crossfade-frame`.