# Video Play Button Pulse (`ease-video-play-button-pulse`)

A beginner-friendly call-to-action utility component for video embed UIs — a circular play button centered over a thumbnail pulses gently and continuously via synchronized scale and box-shadow, inviting the viewer to click without feeling urgent or distracting.

## Technical Composition Breakdown

- **Combined Scale + Ring Pulse:** Animates `transform: scale()` from `1` → `1.12` → `1` while a ring `box-shadow` simultaneously expands from `0 0 0 0` to `0 0 0 18px` and fades to transparent, on the exact same keyframe percentages — producing the classic "expanding ripple ring" cue common to video embed play buttons (YouTube, Vimeo, and similar players all use a close variant of this pattern).
- **Continuous, Gentle Loop:** Runs as `infinite` over a slow `1.8s` cycle with `ease-in-out`, deliberately gentle rather than attention-grabbing — this is an invitation, not an alert.
- **Standard Video Thumbnail Markup:** Ships with the complete supporting pattern (`.video-thumb`, `.video-thumb-overlay`, `.video-thumb-duration`) so the play button isn't demonstrated in isolation but in the real-world context the issue specifies: centered over a thumbnail image with a duration badge, matching common video embed UI conventions.
- **True Centering via Absolute Positioning:** The button uses `position: absolute; top/left: 50%; transform: translate(-50%, -50%)` on a `position: relative` thumbnail container, guaranteeing the button stays centered regardless of the thumbnail's aspect ratio or size.
- **Optically-Centered Play Icon:** The inline SVG triangle gets a small `margin-left` nudge, since a play triangle's visual weight sits left of its true geometric center — a small but important detail for the icon to look balanced inside the circle.
- **Configurable Pulse Color:** `--ease-play-pulse-color` drives both the ring color and (combined with `color-mix()`) its fade-out transparency, demonstrated with default white, accent violet, and rose variants across the demo thumbnails.
- **Size Variants:** A `.play-btn-sm` modifier class demonstrates the same animation working correctly at a smaller 52px scale for compact thumbnail grids.
- **Reduced Motion Architecture:** Under `@media (prefers-reduced-motion: reduce)`, the animation is removed and replaced with a static glow ring, preserving the visual invitation cue without any pulsing motion.

## Workspace Tree Map

```
submissions/examples/ease-video-play-button-pulse/
├── demo.html     # Live demo: two full thumbnails plus a compact variant
├── style.css     # Modular pulse + video-thumbnail utility stylesheet
└── README.md     # This file
```

---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**