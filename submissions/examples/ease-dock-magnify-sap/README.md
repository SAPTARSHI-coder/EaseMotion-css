# ease-dock-magnify-sap

A macOS-style dock where the hovered icon scales up and lifts, with neighboring icons growing slightly too, using pure CSS sibling selectors — no JS.

## Usage
1. Include `style.css`.
2. Add markup: `.dock-icon` elements inside `.dock-magnify-sap`, each with its own background/emoji.

## Customization
- `scale(1.6)` on the hovered icon vs `scale(1.25)` on neighbors: magnification intensity.
- `backdrop-filter: blur(20px)` on the dock background for the glass effect.
- Icon size/border-radius.

## Notes
- Neighbor magnification uses the `:has()` relational pseudo-class (`.dock-icon:has(+ .dock-icon:hover)`) to affect the icon *before* the hovered one, combined with the adjacent sibling combinator (`:hover + .dock-icon`) for the one *after* — both directions handled in pure CSS.
- `:has()` has broad modern browser support (Chrome/Edge/Safari) but should be verified for the target browser matrix if older browser support is required — it degrades gracefully by simply not applying the "before" neighbor's magnification.
- Respects `prefers-reduced-motion`: all scale/lift/margin transforms are removed, dock remains static regardless of hover.