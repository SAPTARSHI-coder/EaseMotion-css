# Floating Glassmorphic Audio Player

A modern floating audio player component built using HTML and CSS. The design showcases a glassmorphism interface with an animated equalizer, playback controls, progress and volume sliders, and subtle micro-interactions.

## Overview

This example demonstrates how to build a compact floating audio player using CSS glassmorphism and animations. It is designed as a reusable UI component for dashboards, music applications, portfolio websites, and modern web interfaces.

## Features

- Glassmorphism interface with `backdrop-filter: blur(12px)`
- Fallback background for browsers without `backdrop-filter` support
- Floating card layout with rounded corners and soft shadows
- Animated seven-bar equalizer using CSS keyframes
- CSS-only play/pause toggle using the checkbox technique
- Progress and volume sliders with custom styling
- Interactive playback controls with hover and active states
- Responsive and lightweight implementation
- Cross-browser slider thumb styling for WebKit and Firefox

## Project Structure

```
floating-audio-player-ag/
├── demo.html
├── style.css
└── README.md
```

## Implementation Details

### Glassmorphism

The player uses a translucent background combined with `backdrop-filter` to create a frosted glass appearance. A solid fallback background is provided for browsers that do not support backdrop blur.

### Equalizer Animation

The equalizer consists of seven animated bars driven by CSS keyframe animations. Each bar uses a different animation delay to produce a more natural waveform effect.

### CSS-only Play/Pause Toggle

The play button is implemented using a hidden checkbox and an associated label. The `:checked` state controls both the equalizer animation and the play/pause icon without requiring JavaScript.

### Micro-interactions

The component includes subtle hover and active effects on buttons and sliders to provide visual feedback while maintaining a clean interface.

## Notes

- This is a visual UI component intended for demonstration purposes.
- The progress values and playback duration are static.
- No audio playback functionality is implemented.
- The play/pause interaction is handled entirely with CSS.

## Files

| File | Description |
|------|-------------|
| `demo.html` | Component structure |
| `style.css` | Styling, layout, animations, and interactions |
| `README.md` | Project documentation |
