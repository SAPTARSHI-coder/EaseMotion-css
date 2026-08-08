# Fluid Audio Equalizer Visualizer Component

A media player audio bar visualizer UI featuring keyframe-animated staggered equalizing bars and glowing neon spectrum gradients.

## 1. What does this do?
Displays an interactive music track card accompanied by animated equalizer bars that simulate real-time audio playback frequency motion using pure CSS keyframes.

## 2. How is it used?
1. Link `style.css` in your document `<head>`.
2. Nest equalizer bars `.bar` inside `.equalizer-bars` within your player markup.
3. Apply staggered `animation-delay` utility properties on each bar element.

## 3. Why is it useful?
- **Pure CSS Keyframe Physics**: Delivers realistic audio visualizer bar motion without requiring Web Audio API runtime scripting.
- **Visual Elegance**: Neon spectrum gradients (`linear-gradient`) and translucent card surfaces create modern dark mode appeal.
- **Accessibility Friendly**: Includes `aria-hidden="true"` on decorative visualizer elements to keep screen reader experience clean.
