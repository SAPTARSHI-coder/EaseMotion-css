# Animation Pause on Hover — EaseMotion CSS

**Issue:** [#30314 — Add animation-pause-on-hover utility class for looping animations](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30314)

A simple utility class that pauses looping animations on hover and focus for improved usability and reduced motion distraction.

## Structure

```
submissions/docs/core_changes-issue-30314/
├── demo.html       # Demo showing running vs paused animations
├── style.css       # Utility styles
└── README.md       # This file
```

## Usage

Add `.ease-pause-on-hover` to any element with a looping animation:

```html
<div class="ease-spin ease-pause-on-hover">Content</div>
```

## How It Works

- Base state: `animation-play-state: running`
- `:hover` and `:focus-visible`: `animation-play-state: paused`

## Features

- Works with all EaseMotion looping animations (bounce, pulse, spin, rotate, ping, shake, float, glow, etc.)
- Keyboard accessible via `:focus-visible`
- No performance overhead — simple CSS property toggle
- Composable: add alongside any animation class
