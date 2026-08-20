# Media Player Skin

A custom media player UI with animated controls. Play/pause morphs the icon, the progress bar fills smoothly, track info slides in, and the volume slider is fully interactive.

## Usage

Include `style.css` and `demo.html` in your project. Customise animations via CSS custom properties:

| Property | Default | Description |
|---|---|---|
| `--mps-duration` | `0.3s` | Base transition duration |
| `--mps-primary` | `#6c5ce7` | Primary accent colour |
| `--mps-secondary` | `#a29bfe` | Secondary accent colour |
| `--mps-progress-color` | `#fd79a8` | Progress bar colour |
| `--mps-radius` | `12px` | Player border radius |
| `--mps-bg` | `#1e1e2e` | Player background |

## Behaviour

- Click **Play/Pause** to toggle playback; the icon morphs and the art disc spins.
- The **progress bar** fills in real time; hover to reveal the thumb.
- Click the **volume slider** to adjust the volume level.
- **Track info** slides in when playback starts.
