# Component Demo Playground

**Issue:** #36567

Component demo playground with interactive animation controls. Users can tweak duration, scale, rotation, looping, and play/pause/reset the demo animation in real time.

## CSS Custom Properties

| Variable             | Default    | Description                        |
|----------------------|------------|------------------------------------|
| `--playground-bg`    | `#1e1e2e`  | Main playground background         |
| `--control-bg`       | `#181825`  | Controls panel background          |
| `--demo-border`      | `#45475a`  | Border color of the demo area      |
| `--transition-speed` | `0.2s`     | Transition speed for control hover |

## Usage

Open `demo.html` and use the sliders and buttons to control the animation. The `.demo-box` element animates with a pulse effect that respects the adjustable CSS custom properties via the `applyAnimation()` JavaScript function.
