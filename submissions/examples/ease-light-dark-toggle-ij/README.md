# Light / Dark Toggle

A toggle switch component that transitions between light and dark color themes. The toggle saves the user's preference to `localStorage` and respects the system `prefers-color-scheme` setting.

## Usage

Include `style.css` in your project and copy the HTML structure. The `.dark` class on `body` triggers the dark theme.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ldt-duration` | 0.3s | Transition duration |
| `--ldt-toggle-bg` | #e2e8f0 | Toggle track background (light) |
| `--ldt-toggle-active-bg` | #0f172a | Page background (dark) |
| `--ldt-handle-color` | #fff | Toggle handle / knob color |
| `--ldt-icon-sun` | #f59e0b | Sun icon color |
| `--ldt-icon-moon` | #94a3b8 | Moon icon color |

## Browser Support

Chrome, Firefox, Safari, Edge

## License

MIT
