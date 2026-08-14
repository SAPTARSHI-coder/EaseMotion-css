# Focus Input Highlight

Animated focus highlight for form inputs using CSS pseudo-elements and transitions.

## Features

- Expands underline from center on focus using `::after` pseudo-element
- Smooth `border-color` and `width` transitions
- Supports `text`, `email`, `password`, `tel`, and `textarea` types
- Custom properties for duration, colors, background, and radius

## Custom Properties

| Property             | Default   | Description               |
| -------------------- | --------- | ------------------------- |
| `--fi-duration`      | `0.3s`    | Transition duration       |
| `--fi-border-color`  | `#d1d5db` | Default border color      |
| `--fi-focus-color`   | `#6366f1` | Focus highlight color     |
| `--fi-bg`            | `#ffffff` | Input background          |
| `--fi-text-color`    | `#111827` | Input text color          |
| `--fi-radius`        | `8px`     | Input border-radius       |

## Usage

Include `style.css` and wrap inputs in `.fi-field` containers.
