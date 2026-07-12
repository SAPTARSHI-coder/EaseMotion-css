# Audio Player Minimal

A minimal audio player with play/pause, progress tracking, volume control, animated equalizer, and playlist.

## Features

- Play/pause with equalizer animation
- Progress bar with time display
- Volume slider with gradient fill
- Next/previous track navigation
- Collapsible playlist

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--apm-duration` | `0.3s` | Animation duration |
| `--apm-player-bg` | `#1e293b` | Player background |
| `--apm-btn-color` | `#f1f5f9` | Button color |
| `--apm-progress-color` | `#f59e0b` | Progress bar color |
| `--apm-eq-color` | `#f59e0b` | Equalizer bar color |
| `--apm-radius` | `12px` | Border radius |

## Usage

```html
<div class="apm-player">
  <div class="apm-equalizer">...</div>
  <div class="apm-progress">...</div>
  <div class="apm-controls">...</div>
</div>
```

Toggle `.playing` on `.apm-equalizer` to animate bars.
