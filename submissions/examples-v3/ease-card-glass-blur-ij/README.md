# Glass Blur Cards

A glassmorphism card component with backdrop-filter blur effects and smooth hover interactions.

## Usage

Include `style.css` in your project and add the markup from `demo.html`. The component uses CSS custom properties for easy theming.

## CSS Custom Properties

| Property                | Default                    | Description                    |
| ----------------------- | -------------------------- | ------------------------------ |
| `--glass-duration`      | `0.3s`                     | Transition duration            |
| `--glass-blur-amount`   | `12px`                     | Backdrop blur radius           |
| `--glass-bg`            | `rgba(255,255,255,0.15)`   | Card background colour         |
| `--glass-border-color`  | `rgba(255,255,255,0.25)`   | Card border colour             |
| `--glass-shadow`        | `0 8px 32px rgba(0,0,0,0.25)` | Card box shadow             |

## Hover Interaction

On hover the card scales up (1.04×) and the blur intensity increases by 6px for a deeper glass effect.

## Browser Support

Works in all modern browsers that support `backdrop-filter`. Falls back to a solid semi-transparent background in older browsers.

## Credits

Submission for EaseMotion CSS by [Your Name].
