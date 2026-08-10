# ease-rotating-word-cycle-sap

A heading with a rotating word slot — the current word slides up and out while the next word slides in from below, cycling continuously.

## Usage
1. Include `style.css`.
2. Add markup: static text + `.cycle-wrap` container.
3. Include the JS from `demo.html`, which cycles through a `words` array on an interval.

## Customization
- `words` array: the rotating word set.
- `setInterval(..., 2200)`: cycle speed.
- Slide distance (`top: 44px`/`-44px`) — should match the wrap's fixed `height`.

## Notes
- The wrap's `width` is set dynamically to match each incoming word's natural width via `offsetWidth`, so the surrounding sentence reflows smoothly rather than jumping abruptly for words of different lengths.
- Old and new word elements coexist briefly during the transition (old sliding out to `-44px`, new sliding in from `44px` to `0`), removed only once its own `transitionend` fires.
- Respects `prefers-reduced-motion`: vertical slide is removed, leaving a simple opacity cross-fade between words instead.