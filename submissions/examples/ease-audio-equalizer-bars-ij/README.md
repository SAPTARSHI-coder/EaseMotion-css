# Audio Equalizer Bars

A visual audio equalizer with animated bars whose heights are controlled by `--eq-h` CSS custom properties. JS randomizes the heights to simulate audio visualization.

## Features

- 10 bars with animated heights driven by `--eq-h` CSS variable
- Gradient fill from red to yellow
- Staggered visual effect via `--eq-d` delay
- Play/Pause toggle to start/stop animation
- Bounce cubic-bezier transition on bar heights

## Usage

Include `style.css` and structure bars as `.eq-bar` elements. Set `--eq-h` (0 to 1) for height and `--eq-d` for transition delay. JS can update `--eq-h` periodically.
