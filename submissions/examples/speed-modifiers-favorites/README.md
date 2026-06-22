# speed-modifiers-favorites

## What it does
Adds animation speed modifier utility classes (`.ease-fast`, `.ease-normal`,
`.ease-slow`, `.ease-slower`) that let developers control animation duration
independently of the animation type. Also includes a demo "Favorite Presets"
panel showing how an animation + speed combination can be saved and replayed
for quick reuse — built with localStorage, no backend required.

## Proposed ease-* class names
- `.ease-fast` — 0.4s duration
- `.ease-normal` — 0.8s duration (default-like pacing)
- `.ease-slow` — 1.5s duration
- `.ease-slower` — 2.5s duration

## Usage
```html
<!-- Combine any animation with a speed modifier -->
<div class="ease-fade-in ease-fast">Fast fade in</div>
<div class="ease-slide-up ease-slow">Slow slide up</div>
```

## Why this fits EaseMotion CSS
Developers frequently want to test the same animation at different speeds
before settling on one. Currently this requires writing custom
`animation-duration` overrides. These four utilities make speed a
first-class, composable modifier — consistent with EaseMotion's
human-readable, zero-JS-required philosophy for the core animation classes.

The "Favorite Presets" demo panel (JS, demo-only — not a proposed core
class) shows how this composability could power a future Animation
Builder feature: pick an animation, pick a speed, save the combo, replay
it anytime.

## Closes
Issue #16206