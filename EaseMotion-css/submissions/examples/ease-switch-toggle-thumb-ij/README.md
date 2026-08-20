# Switch Toggle Thumb

A custom switch toggle component with a sliding circular thumb. Built with CSS custom properties for easy theming.

## Features

- Smooth thumb sliding animation using CSS `translateX`
- Customizable via `:root` CSS variables
- Multiple color themes (default, blue, green, purple, orange)
- Accessible — uses hidden `<input type="checkbox">`
- ON/OFF status label updates on toggle

## Usage

```html
<label class="switch" data-theme="blue">
  <input type="checkbox">
  <span class="switch-track">
    <span class="switch-thumb"></span>
  </span>
  <span class="switch-label">OFF</span>
</label>
```

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--toggle-duration` | `0.3s` | Transition duration |
| `--toggle-width` | `52px` | Track width |
| `--toggle-height` | `26px` | Track / thumb height |
| `--toggle-off-bg` | `#ccc` | Track background (off) |
| `--toggle-on-bg` | `#4caf50` | Track background (on) |
| `--toggle-thumb-color` | `#fff` | Thumb color |
| `--toggle-thumb-shadow` | `0 1px 3px rgba(0,0,0,0.3)` | Thumb shadow |

## Themes

Set the `data-theme` attribute on `.switch`:
- `default` — green
- `blue` — blue
- `green` — green
- `purple` — purple
- `orange` — orange
