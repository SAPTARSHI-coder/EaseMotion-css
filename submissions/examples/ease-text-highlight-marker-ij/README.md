# Text Highlight Marker

Animated text highlight effect that sweeps in from the left using a pseudo-element scale transform.

## Features

- Click any paragraph to toggle its highlight
- Marker sweeps in from left with a bounce easing curve
- Four highlight colors (yellow, green, blue, pink)
- Customizable via CSS custom properties

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--thm-duration` | `0.5s` | Sweep animation duration |
| `--thm-highlight-color` | `#fde047` | Default marker color |
| `--thm-text-color` | `#e2e8f0` | Paragraph text color |
| `--thm-sweep-color` | `rgba(253,224,71,0.75)` | Marker overlay tint |

## Interactive JS

Paragraphs toggle a `.highlighted` class on click. The color palette updates `--thm-highlight-color` via `document.documentElement.style.setProperty`, instantly changing the marker color for all paragraphs.
