# Audio Equalizer Bars

A CSS-only audio equalizer visualizer with animated height levels, built as a submission for **EaseMotion CSS**.

## Demo

Open `index.html` in any modern browser to see the equalizer bars in action. A Start/Stop button toggles the animation.

## Features

- Vertical bars animating with different height patterns (music visualizer style)
- Staggered animation via `animation-delay` using CSS custom properties
- Four distinct keyframe animations distributed across bars for organic variation
- Start/Stop button toggles `animation-play-state`
- Each bar has its own color via inline `--c` custom property
- Fully responsive flexbox layout

## Customization

Edit `style.css` `:root` variables to adjust the look:

| Variable           | Default   | Description              |
|--------------------|-----------|--------------------------|
| `--eq-duration`    | `1.2s`    | Animation cycle duration |
| `--eq-bar-width`   | `24px`    | Width of each bar        |
| `--eq-bar-color`   | `#4dabf7` | Default bar color        |
| `--eq-bg`          | `#0f0f1a` | Background color         |
| `--eq-bar-gap`     | `6px`     | Space between bars       |

## License

MIT
