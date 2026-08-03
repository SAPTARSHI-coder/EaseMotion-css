# Cursor Glow Maintenance Page (Retro Theme)

A pure CSS maintenance page template featuring a retro terminal aesthetic, scanlines, and an automated "cursor glow" effect sweeping across the background.

## Features

- **Pure CSS "Cursor Glow"**: Achieved without JavaScript by applying a multi-stop keyframe animation (`easeSweepingGlow`) to a large, offset radial-gradient background element, simulating a searchlight or cursor movement.
- **Retro Terminal Design**: Uses neon green text (`#39ff14`) on a deep dark background (`#0d0d12`), monospace typography, and a subtle glowing text shadow.
- **Scanlines Overlay**: A CSS linear-gradient repeating pattern provides an authentic CRT monitor feel without using images.
- **Micro-Animations**: Features a blinking "UPGRADING" status indicator and a smoothly pulsing wrench icon.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML identically to `demo.html`, keeping the `.ease-glow-bg` and `.ease-scanlines` empty divs as siblings to your main `.ease-content-container` inside the relative wrapper.

## Usage Example

```html
<div class="ease-maintenance-wrapper">
  
  <!-- Sweeping background glow -->
  <div class="ease-glow-bg"></div>
  
  <!-- CRT Monitor effect -->
  <div class="ease-scanlines"></div>

  <!-- Foreground Content -->
  <div class="ease-content-container">
    <h1 class="ease-title">SYSTEM OFFLINE</h1>
    <!-- ... -->
  </div>

</div>
```

## Why it fits EaseMotion CSS

- **Simulated Interaction**: Demonstrates how to create a highly dynamic, almost interactive-feeling "glow" effect entirely through CSS `translate` animations on an oversized background element, avoiding costly JS `mousemove` listeners.
- **Thematic Motion**: The animations (`easePulseGlow`, `easeBlink`, and `easeSweepingGlow`) work together to establish a specific mood (retro tech), which is a key goal of UI animation.
- **Performant**: By animating the `transform` property on the background glow instead of `background-position`, the browser can utilize hardware acceleration for smooth, jank-free sweeps.
