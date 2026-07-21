# ease-dark-mode-toggle-ij

Dark mode toggle with sun/moon morphing animation.

## CSS Custom Properties

| Property           | Default  | Description              |
|-------------------|----------|--------------------------|
| `--toggle-size`    | 60px     | Size of the toggle track |
| `--sun-color`      | #fbbf24  | Sun / light mode color   |
| `--moon-color`     | #e2e8f0  | Moon / dark mode color   |
| `--morph-duration` | 0.5s     | Morph transition speed   |

## Usage

```html
<link rel="stylesheet" href="path/to/style.css">

<label class="toggle-track" id="toggleTrack">
  <input type="checkbox" class="toggle-input">
  <div class="toggle-thumb"></div>
</label>
```

Toggle the `.active` class on `.toggle-track` to switch between sun and moon states.
