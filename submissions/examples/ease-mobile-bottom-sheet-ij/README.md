# ease-mobile-bottom-sheet

A bottom sheet component that slides up from the bottom of the viewport with a spring-like transition. Includes a backdrop overlay and a drag handle indicator.

## Usage

Open `demo.html` in a browser. Click "Show Options" to open the bottom sheet. Tap the backdrop or "Cancel" to dismiss.

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--sheet-radius` | `16px` | Top border radius of the sheet |
| `--sheet-max-height` | `60vh` | Maximum sheet height |
| `--transition-speed` | `0.35s` | Sheet slide animation speed |
| `--overlay-color` | `rgba(0,0,0,0.4)` | Backdrop overlay color |

## Notes

- Pure CSS animation with JavaScript for state toggling
- Spring-like cubic-bezier transition on the sheet slide
- Backdrop fades in with the sheet
