# CSS Auto Spotlight Reveal

Mysterious typography that remains hidden in shadow, only to be revealed by an automated, animated spotlight sweeping across the text.

## Features
- Simulated torchlight utilizing an animating `radial-gradient` mapped onto the `background-image`.
- Masking applied via `-webkit-background-clip: text` to constrain the light exclusively to the font geometry.
- Infinite automated sweeping via `background-position` keyframe animation.

## Files
- `demo.html`
- `style.css`
