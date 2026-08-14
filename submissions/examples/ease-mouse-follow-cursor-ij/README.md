# Mouse Follow Cursor

Smooth spring-like cursor trail effects with multiple visual modes. The cursor follower uses spring physics (velocity + friction + force) for a natural, delayed follow motion.

## Features

- 3 visual effects:
  - **Glow Ring** – a soft radial glow that follows the cursor with spring physics
  - **Particles** – emits small colored particles that fall with gravity
  - **Trail Dots** – a chain of dots that traces the cursor path
- Spring-based motion (velocity, friction, force) for organic delayed follow
- Touch support (touchmove)
- Toggle visibility with keyboard (`H` key)
- Button-based effect switching without reload

## Usage

Open `demo.html` and move your mouse. Click the effect buttons to switch modes. Press `H` to toggle cursor follower visibility.

### Controls

| Key / Button      | Description                     |
| ----------------- | ------------------------------- |
| Glow Ring button  | Switch to glow ring effect      |
| Particles button  | Switch to particle burst effect |
| Trail Dots button | Switch to trail dot effect      |
| `H` key           | Hide/show cursor follower       |

## CSS Custom Properties

| Property           | Default    | Description                        |
| ------------------ | ---------- | ---------------------------------- |
| `--mfc-duration`   | `0.6s`     | Transition duration for size changes |
| `--mfc-glow-color` | `#8b5cf6`  | Color for glow ring & particles    |
| `--mfc-trail-color`| `#f472b6`  | Color for trail dots               |
| `--mfc-size`       | `40px`     | Base size of the cursor element    |
| `--mfc-opacity`    | `0.9`      | Opacity of the cursor element      |

## JavaScript API

Key variables (accessible via dev console):

| Variable          | Description                          |
| ----------------- | ------------------------------------ |
| `state.effect`    | Current effect name: `glow`, `particles`, `trail` |
| `state.visible`   | Whether the cursor follower is shown |
| `state.x / state.y` | Current follower position (pixels) |

## Browser Support

- Chrome 50+
- Firefox 55+
- Safari 11+
- Edge 79+

Relies on `requestAnimationFrame`, CSS custom properties, and modern CSS transforms.

## Credits

Built with vanilla JavaScript, spring physics simulation, and CSS custom properties.
