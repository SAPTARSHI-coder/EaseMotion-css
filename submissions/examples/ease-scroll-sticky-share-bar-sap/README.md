# ease-scroll-sticky-share-bar-sap

A vertical share button bar that slides in from the left edge once the user scrolls past the article intro, with each button nudging further right on hover.

## Usage
1. Include `style.css`.
2. Add markup: `.share-btn` icons inside `.share-bar-sap`.
3. Attach the scroll listener from `demo.html`.

## Notes
- Off-screen state combines `transform: translateX()` and `opacity: 0`, so the reveal is both a slide and a fade rather than either alone.
- Individual button hover adds a small extra `translateX(4px)` nudge on top of the bar's own reveal position, giving a layered depth cue.
- Respects `prefers-reduced-motion`: slide transform is removed on both the bar and button hover, leaving opacity fade and color change as the only feedback.