# ease-video-scrub-sap

A custom video player scrubber — click-to-seek track with a live-filling progress bar, a thumb that reveals on hover, and a play/pause toggle.

## Usage
1. Include `style.css`.
2. Add markup: `<video>` + play button + scrub track (`.scrub-fill` + `.scrub-thumb`) + time label.
3. Attach the `timeupdate`/`click` listeners from `demo.html`.

## Customization
- Track/fill colors for theming.
- `.scrub-thumb` size and reveal behavior (currently hidden until track hover).
- Swap play/pause SVG icons.

## Notes
- Progress fill width and thumb position are both driven by the video's native `timeupdate` event, so they always reflect true playback position (including if the user drags the native controls elsewhere).
- Clicking anywhere on the track computes a percentage from click X position and sets `video.currentTime` directly — no native `<input type="range">` needed.
- Respects `prefers-reduced-motion`: play button hover scale and thumb reveal transition are disabled; scrub fill width itself remains a fast linear update tied to real playback, not a decorative animation.