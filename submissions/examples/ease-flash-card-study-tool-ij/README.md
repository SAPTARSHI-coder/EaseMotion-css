# Flash Card Study Tool

Interactive flash cards with 3D flip animation. Click a card to reveal the answer, navigate with previous/next controls.

## Features

- 3D perspective flip via `rotateY(180deg)`
- Front shows question, back reveals answer
- Previous / next card navigation with counter
- Fully customizable via CSS custom properties

## Usage

Include `style.css` and the demo HTML. Flash cards are pre-populated with sample study data.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--flash-duration` | `0.6s` | Flip animation duration |
| `--flash-card-width` | `320px` | Card width |
| `--flash-card-height` | `220px` | Card height |
| `--flash-front-bg` | `#ffffff` | Front face background |
| `--flash-back-bg` | `#3b82f6` | Back face background |
| `--flash-text-color` | `#111827` | Front face text color |
| `--flash-radius` | `12px` | Card border radius |

## Browser Support

Chrome, Firefox, Safari, Edge — requires `transform-style: preserve-3d` and `backface-visibility` support (all modern browsers).
