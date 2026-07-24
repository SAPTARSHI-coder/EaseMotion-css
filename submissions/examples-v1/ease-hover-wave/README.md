# ease-hover-wave

## What does it do?
Wave ripple effect across element surface on hover using a pseudo-element with animated radial gradient — pure CSS, no JavaScript.

## Features
- `::before` pseudo-element with radial gradient
- Scales from center on hover creating a ripple feel
- Custom property `--ease-wave-color` for wave color
- Smooth 0.4s transition

## Usage
```css
.element::before {
  content: '';
  position: absolute;
  inset: -50%;
  background: radial-gradient(
    circle at center,
    var(--ease-wave-color, rgba(255,255,255,0.35)) 0%,
    transparent 60%
  );
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.element:hover::before {
  opacity: 1;
  transform: scale(1);
}
```

## Customisation
| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-wave-color` | `rgba(255,255,255,0.35)` | Color of the wave ripple |

## Browser Support
- `::before` + `transition` — Chrome 26+, Firefox 16+, Safari 6.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
