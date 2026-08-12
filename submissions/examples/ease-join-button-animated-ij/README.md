# Join Button Animated

An animated "Join" / "Subscribe" button that transitions through idle, hover, loading, and success states with smooth morphing and a checkmark draw animation.

## Overview

The button morphs from a pill shape into a circle during loading and success states. Loading shows bouncing dots, and success reveals an SVG checkmark with a stroke-dashoffset draw animation. After the success display, the button resets to idle.

## Features

| Feature | Description |
|---|---|
| Hover state | Background shift and subtle shadow lift |
| Loading state | Button collapses to a circle with three bouncing dots |
| Success state | Button turns green with a drawn checkmark |
| Reset cycle | Automatically returns to idle after success |
| Accessible | ARIA label and focus-visible outline |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--jb-duration` | `0.3s` | Base animation duration |
| `--jb-btn-bg` | `#6366f1` | Default button background |
| `--jb-btn-color` | `#ffffff` | Button text and icon color |
| `--jb-hover-bg` | `#4f46e5` | Hover background color |
| `--jb-success-bg` | `#22c55e` | Success state background |
| `--jb-radius` | `0.5rem` | Button border radius |

## Usage

```html
<link rel="stylesheet" href="style.css">

<button class="join-btn" id="joinBtn" type="button">
  <span class="btn-text">Join</span>
  <span class="btn-loading">
    <span class="dot dot-1"></span>
    <span class="dot dot-2"></span>
    <span class="dot dot-3"></span>
  </span>
  <span class="btn-success">
    <svg class="checkmark" viewBox="0 0 52 52">
      <path class="checkmark-path" d="M14 27l7 7 16-16"/>
    </svg>
  </span>
</button>

<script>
  // Attach click handler that drives the state machine:
  // idle -> loading (2s) -> success (2s) -> idle
</script>
```

The JavaScript controls the state cycle. Adjust timing by changing the `setTimeout` values in the script.
