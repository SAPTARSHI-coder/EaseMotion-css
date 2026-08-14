# ease-day-night-switch-ij

Day/night switch with sky gradient transition.

## CSS Custom Properties

| Property               | Default                                      | Description                 |
|------------------------|----------------------------------------------|-----------------------------|
| `--switch-size`        | 60px                                         | Size of the switch track    |
| `--day-sky`            | `linear-gradient(135deg, #f59e0b, #fbbf24)`  | Day sky gradient            |
| `--night-sky`          | `linear-gradient(135deg, #1e1b4b, #312e81)`  | Night sky gradient          |
| `--transition-duration`| 0.6s                                         | Transition speed            |

## Usage

```html
<link rel="stylesheet" href="path/to/style.css">

<label class="switch-track" id="switchTrack">
  <input type="checkbox" class="switch-input">
  <div class="switch-thumb"></div>
  <div class="stars"><!-- optional stars --></div>
  <div class="cloud cloud-1"></div>
  <div class="cloud cloud-2"></div>
</label>
```

Toggle `.night` class on `.switch-track` to animate between day and night states.
