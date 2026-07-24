# Fluid Audio Equalizer Visualizer

A responsive audio waveform equalizer component for EaseMotion CSS featuring staggered keyframe frequency bars, play/pause controls, and glassmorphic player UI styling.

## 1. What does this do?
This component renders an animated audio visualizer featuring 10 frequency bars that bounce with fluid CSS timing delays. Toggling play/pause toggles the CSS `animation-play-state` property seamlessly.

## 2. How is it used?
1. Link `style.css` in your HTML page.
2. Embed the `.equalizer-wrapper` containing `.eq-bar` elements.
3. Toggle `.equalizer-wrapper.paused` using JavaScript to freeze/resume equalizer frequency bars dynamically.

## 3. Why is it useful?
- **Audio & Media Interfaces**: Perfect for music streaming web apps, podcast players, and voice recorder UIs.
- **Hardware-Accelerated**: Height transformations run with pure CSS keyframes on discrete composited layers.
- **Responsive & Accessible**: High contrast colors and clean state toggle APIs.
