# CSS Mask Reveal Transition Utilities

Resolves Issue #59857.

This submission introduces modern CSS mask-image utilities that allow elements (like images or cards) to be smoothly revealed using animated masking geometry.

## Implementation Details
- **`style.css`**: Defines `.ease-mask-circle-reveal` (reveals the element by expanding a radial-gradient mask from the center out via `mask-size`) and `.ease-mask-wipe` (reveals the element by sliding a linear-gradient mask across the element via `mask-position`). Both utilities properly include the `-webkit-` vendor prefix for cross-browser compatibility (e.g., Safari/Chrome).
- **`demo.html`**: A clean gallery demonstration showcasing both the circle expansion and linear wipe transitions revealing high-quality images on hover.

## Integration
Once the core directory contribution freeze is lifted, these utilities can be securely integrated into `utilities/mask-transition.css`.
