# Animation Play State Utilities

**Issue:** [#10561](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/10561)  
**Author:** (https://github.com/ida-jemi)

## What this adds

Three utility classes that control the CSS `animation-play-state` property,
giving developers simple, composable control over looping animations.

| Class | Effect |
|---|---|
| `.pause-animation` | Immediately freezes any running animation |
| `.resume-animation` | Explicitly forces an animation to run |
| `.pause-on-hover` | Pauses the animation while the user hovers |

## Usage

```html
<!-- Starts paused — useful for user-triggered animations -->
<div class="ease-bounce pause-animation">...</div>

<!-- Explicitly running — overrides any inherited paused state -->
<div class="ease-pulse resume-animation">...</div>

<!-- Pause on hover — great for carousels, loaders, rotating icons -->
<div class="ease-rotate pause-on-hover">Hover me</div>
```

## Why it fits EaseMotion CSS

- **Human-readable** — class names describe exactly what they do
- **Composable** — stacks naturally with existing `ease-*` animation classes
- **Lightweight** — three rules, zero new keyframes
- **Accessible** — allows users to pause distracting looping animations
- **Zero dependencies** — pure CSS, no JS required