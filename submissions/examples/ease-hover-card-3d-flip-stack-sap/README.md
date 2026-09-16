# ease-hover-card-3d-flip-stack-sap

A stack of 3 layered cards that flip on the X-axis in a staggered sequence on hover.

## Usage
1. Include `style.css`.
2. Add markup: 3 `.stack-layer` divs inside `.flip-stack-sap`.

## Customization
- Number of layers/stagger delay per layer.
- Layer colors and offset depth (`translateZ`/`translateY`).

## Notes
- Each layer's flip has an incremental `transition-delay`, so the flip cascades through the stack rather than all layers flipping simultaneously.
- Respects `prefers-reduced-motion`: all flip transitions are disabled.