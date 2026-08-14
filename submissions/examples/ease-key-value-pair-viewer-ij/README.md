# Key-Value Pair Viewer

A key-value data display component with animated row entrance, staggered animations, and per-pair copy and remove controls.

## Features

- Add new key-value pairs via input fields
- Remove individual pairs with an animated exit
- Copy a pair as `key: value` to the clipboard
- Staggered slide-in animation for each new row
- CSS custom properties for full visual theming

## CSS Custom Properties

| Property          | Default   | Description              |
| ----------------- | --------- | ------------------------ |
| `--kv-duration`  | `0.35s`   | Row animation duration   |
| `--kv-stagger`   | `0.08s`   | Delay between rows       |
| `--kv-key-color` | `#4f46e5` | Key text color           |
| `--kv-value-color` | `#1f2937` | Value text color       |
| `--kv-row-bg`    | `#ffffff` | Row background color     |
| `--kv-radius`    | `8px`     | Row border-radius        |
