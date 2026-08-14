# CSS Reactive Audio Visualizer

A highly dynamic, multi-bar audio spectrum analyzer that pulses and changes color. Uses staggered delays on complex keyframe animations and `backdrop-filter: blur()` to simulate real-time audio reactivity.

## Features

- **Pure CSS**: No JavaScript or audio files needed.
- **Dynamic Keyframes**: Uses staggered `--i` variable delays and complex height transitions to simulate random audio spikes.
- **Hue Rotation**: The colors dynamically shift through the spectrum using `filter: hue-rotate()`.
- **Glow Effects**: Under-glow pulsing mapped to the audio peaks.

## Preview

Open `demo.html` in your browser to see the visualizer in action.
