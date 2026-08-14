# Keyframe Animation Generator — SCSS helper mixin

Keyframe animation generator mixin emitting a configurable keyframes rule and utility class, with a reduced-motion override.

## What it does
Keyframe animation generator mixin emitting a configurable keyframes rule and utility class, with a reduced-motion override.

## Files
- `_keyframe-animation-generator.scss` — the mixin partial

## Usage
```scss
@use "./keyframe-animation-generator" as *;

@include keyframe-gen(bounce, (0%: (transform: translateY(0)), 50%: (transform: translateY(-10px)), 100%: (transform: translateY(0))), 1s, ease, infinite);
```

## Notes
- Clean SCSS compilation without warnings.
- Browser fallbacks and CSS variable integration included where relevant.
- Compatible with core EaseMotion CSS tokens (e.g. `--ease-*` custom properties).
- Accessibility guards (`prefers-reduced-motion`, `forced-colors`) included where relevant.

Closes #81286
