# Neumorphic Audio Player Showcase

A soft-UI tactile audio player component featuring vinyl record spinning keyframes and animated equalizer equalizer height bounces.

## 1. What does this do?
This component presents a soft-shadow neumorphic music player interface complete with rotating album art vinyl, animated audio equalizer visualizers, inset shadow progress scrubbers, and tactile press controls.

## 2. How is it used?
Wrap audio elements in `.player-card` with `.ease-neu-card`:

```html
<div class="player-card ease-neu-card">
  <div class="album-art ease-disc-spin"></div>
  <div class="eq-bar ease-eq-bounce"></div>
</div>
```

## 3. Why is it useful?
- Demonstrates modern soft UI / Neumorphism styling purely in CSS (`box-shadow` inset pairing).
- Includes fluid 60fps animations for audio track playback feedback.
- Accessible focus outlines and touch-friendly control targets.
