# ease-loading-dots-typing-sap

A "someone is typing..." indicator bubble with 3 bouncing dots, common in chat interfaces.

## Usage
Include `style.css`, add 3 `.td-dot` spans inside `.typing-dots-sap`.

## Notes
- Staggered `animation-delay` per dot creates the classic rolling wave pattern.
- Respects `prefers-reduced-motion`: bounce is disabled, dots render as static semi-opaque circles.