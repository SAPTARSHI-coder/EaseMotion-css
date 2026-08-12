# ease-modal-slide-in

A modal dialog that slides in from the top of the viewport with a spring-like transition. Includes a backdrop overlay and close mechanisms.

## Usage

Open `demo.html` in a browser. Click "Open Modal" to trigger the slide-in animation. Click the backdrop, close button, or Dismiss to close.

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--modal-radius` | `12px` | Border radius of the modal |
| `--transition-speed` | `0.35s` | Slide animation speed |
| `--overlay-color` | `rgba(0,0,0,0.4)` | Backdrop color |
| `--primary` | `#4f46e5` | Primary action color |

## Notes

- Spring-like cubic-bezier animation
- CSS handles all visual transitions
- Backdrop fades in behind the modal
