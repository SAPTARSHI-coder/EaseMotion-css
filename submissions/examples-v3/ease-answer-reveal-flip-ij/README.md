# Answer Reveal Flip

> A flashcard component that flips in 3D to reveal the answer on the back face. Built with CSS custom properties and JavaScript.

## Features

- 3D card flip via `perspective` + `rotateY`
- Front shows question, back shows answer
- Multiple cards in a responsive grid
- Score tracking (click-to-reveal)
- Reset all cards
- Backface-visibility hidden for clean transitions

## Usage

Include the stylesheet and HTML structure. Each `.arf-card` contains a `.arf-card-inner` with front and back faces.

```html
<link rel="stylesheet" href="style.css" />
```

```html
<div class="arf-card">
  <div class="arf-card-inner">
    <div class="arf-card-front">...</div>
    <div class="arf-card-back">...</div>
  </div>
</div>
```

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--arf-duration` | `0.6s` | Flip transition duration |
| `--arf-card-front` | `#ffffff` | Front face background |
| `--arf-card-back` | `#1a1a2e` | Back face background |
| `--arf-radius` | `16px` | Card border radius |
| `--arf-shadow` | `0 8px 30px rgba(0,0,0,0.12)` | Card box shadow |

## Browser Support

Chrome, Firefox, Safari, Edge — any browser supporting CSS 3D transforms and `backface-visibility`.

## License

MIT
