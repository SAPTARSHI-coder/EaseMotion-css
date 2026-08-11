# Interactive Dark-Mode Music Player UI

This submission showcases a sleek, modern **Music Player Interface** built with a dark-mode aesthetic. It demonstrates how to use **EaseMotion CSS** to create fluid micro-interactions, combining entrance animations with state-driven CSS effects for a premium media playback experience.

## ✨ Features
- **Dynamic Album Art**: Spins continuously when the track is playing, utilizing a smooth CSS keyframe animation.
- **Live Equalizer**: A custom CSS equalizer indicator appears and animates when audio is playing.
- **Interactive Progress Bar**: Click-to-seek functionality with a smooth gradient fill and hover-reveal thumb.
- **EaseMotion Integration**: 
  - `ease-fade-in`, `ease-scale-up`, `ease-slide-up`: Beautifully staggered entrance animations for the player card, track info, and controls.
  - `ease-hover-lift`: Tactile, premium hover feedback on the previous/next buttons.
  - `ease-scale-up`: Applied to the main play/pause button for a satisfying press/hover effect.
  - `ease-duration-slow`: Used on the main wrapper for a graceful, cinematic page load.

## 🚀 How to Use
1. Open `demo.html` in any modern web browser.
2. Observe the staggered entrance animations as the player loads.
3. Click the **Play/Pause** button in the center.
4. Watch the album art start spinning, the equalizer bars animate, and the progress bar fill up in real-time.
5. Click anywhere on the progress bar to seek to a different part of the track.
6. Hover over the control buttons to see the `ease-hover-lift` micro-interactions.

## 📂 Files
- `demo.html`: Standalone demo with vanilla JS for playback state and progress tracking.
- `style.css`: Custom dark-mode styling, keyframe animations, and layout.