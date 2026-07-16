# Voice Recording Wave

An interactive microphone recording visualization with animated sound wave bars.

## Features

- Record/stop toggle button with pulse animation
- Timer with centisecond precision
- Animated waveform bars that react to simulated volume
- Recording indicator dot with pulse animation
- Fully customizable via CSS custom properties

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--vrw-duration` | `0.3s` | Animation duration |
| `--vrw-wave-color` | `#6366f1` | Waveform bar color |
| `--vrw-active-color` | `#ef4444` | Active recording color |
| `--vrw-bar-gap` | `4px` | Gap between waveform bars |
| `--vrw-radius` | `8px` | Border radius for container |

## Usage

Open `demo.html` in any modern browser. Click the Record button to start recording visualization. The waveform bars will animate with simulated volume changes. Click Stop to end.

## Browser Support

Chrome, Firefox, Safari, Edge — any modern browser supporting CSS custom properties and animations.

## Author

IJ
