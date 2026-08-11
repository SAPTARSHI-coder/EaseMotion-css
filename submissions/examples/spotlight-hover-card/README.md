```md
# Spotlight Hover Card

A modern CSS-only card component featuring a glowing spotlight effect on hover.

## Features

- Pure HTML and CSS
- Smooth hover animation
- Glowing spotlight effect
- Responsive layout
- No JavaScript required
- Beginner-friendly implementation

## Folder Structure
```

spotlight-hover-card/
├── demo.html
├── style.css
└── README.md

```

## Usage

1. Open `demo.html` in your browser.
2. Hover over any card.
3. Observe the spotlight glow, lift animation, and enhanced shadow effect.

## Customization

You can customize:

- Card background color
- Spotlight intensity
- Border glow
- Hover elevation
- Shadow strength
- Border radius

## Technologies Used

- HTML5
- CSS3
  - Grid Layout
  - Radial Gradients
  - Transforms
  - Transitions
  - `@property` Custom Properties
  - `mix-blend-mode`

## Browser Support and Limitations

This component uses the modern CSS `@property` rule to animate custom properties (`--x` and `--y`). 
- **Supported Browsers**: Chrome 85+, Edge 85+, Safari 16.4+, Firefox 128+, and Opera 71+.
- **Limitations without JS**: 
  - Without JavaScript `mousemove` events, the spotlight cannot track the exact position of the user's cursor. We approximate this by using a continuous sweeping CSS animation (`ease-spotlight-sweep`) that loops around the card's edges.
  - In older browsers that do not support `@property`, the spotlight animation will not work smoothly, as custom properties cannot be interpolated during animations natively without this rule. The cards will gracefully fallback to their default state without the spotlight effect.

## Preview

The component displays multiple feature cards that animate upward and reveal a glowing spotlight overlay when hovered.

## License

This example is provided for educational and demonstration purposes.
```
