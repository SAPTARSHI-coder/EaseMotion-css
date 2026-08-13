# Scroll Video Autoplay Fade

A background video that fades into view and only plays while scrolled into
the viewport (pausing when scrolled away), muted by default with an
explicit unmute control.

**Level:** Advanced

## Usage

`IntersectionObserver` toggles `.is-visible` (fade-in) and calls
`video.play()`/`video.pause()` based on whether `.video-frame` is at least
40% visible. A separate toggle button controls mute state.

## Accessibility

- The video is `muted` by default (required for reliable autoplay in all
  major browsers, and also the respectful default for unexpected audio) and
  carries a descriptive `aria-label` summarizing its content, since it has
  no captions track in this demo.
- An explicit, labeled unmute/mute toggle button (`aria-pressed` kept in
  sync, `aria-label` reflecting the next action) is provided — audio is
  never turned on without explicit user action.
- The video pauses when scrolled out of view, so it doesn't keep playing
  (and, if unmuted, keep making sound) off-screen indefinitely.
- `.play()` is wrapped in a `.catch(() => {})` since browsers may still
  reject autoplay in some contexts even when muted; the code doesn't break
  if that happens.
- `prefers-reduced-motion` removes the fade-in transition; the video's
  play/pause-on-scroll behavior is left as-is since it's functionally tied
  to the video's role as content rather than being a decorative motion
  effect — content and its play state should remain scroll-synced whether
  or not the *entrance* is animated, though a stricter interpretation could
  also disable autoplay entirely under reduced motion. Noted here as a
  judgment call.
- This demo has no captions/transcript for the video since it's decorative
  background footage described via `aria-label`; a video conveying
  meaningful spoken/informational content would need real captions instead.

## Notes

- Uses a public domain sample video from MDN's example media for the demo;
  swap the `<source>` for real footage.
- Play/pause-on-visibility (not just fade-in) avoids wasting bandwidth/CPU
  on an off-screen autoplaying video.