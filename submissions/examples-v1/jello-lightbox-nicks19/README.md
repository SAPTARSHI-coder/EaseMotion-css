# Jello Lightbox (Retro Theme)

A pure CSS lightbox component featuring a bouncy, squishy "Jello" entrance animation. Designed with a fun, harsh-shadowed Retro/Arcade aesthetic, this component provides an engaging way to view enlarged images or content.

## Features

- **Pure CSS State Management**: Relies entirely on the "Checkbox Hack" (`<input type="checkbox">` and `<label>`) to handle the modal's open/close state without a single line of JavaScript.
- **Jello Keyframe Animation**: When triggered, the central modal executes a squishy `@keyframes easeJelloPop` animation using `transform: scale3d()` to simulate a wobbly jelly-like entrance.
- **Retro Arcade Styling**: Employs thick, hard-edged borders (`4px solid #222`), deep non-blurred drop shadows, and bright neon accents to mimic 8-bit or 16-bit gaming UI.
- **CRT Backdrop Filter**: The overlay background applies a `backdrop-filter: grayscale(100%)` to mute the background site colors, ensuring maximum focus on the vibrant lightbox.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML identically to `demo.html`.
3. (Optional) For the full retro effect, import an arcade font like "Press Start 2P" from Google Fonts.

## Usage Example

```html
<!-- The State Controller -->
<input type="checkbox" id="lightbox-1" class="ease-lightbox-toggle">

<!-- The Trigger (e.g., a thumbnail) -->
<label for="lightbox-1" class="ease-thumbnail">
  <img src="thumb.jpg" alt="Thumbnail">
</label>

<!-- The Modal / Lightbox -->
<div class="ease-lightbox">
  <!-- The clickable overlay that closes the modal -->
  <label for="lightbox-1" class="ease-lightbox-overlay"></label>
  
  <div class="ease-lightbox-content">
    
    <!-- The container that performs the Jello animation -->
    <div class="ease-jello-container">
      
      <label for="lightbox-1" class="ease-lightbox-close">X</label>
      <img src="fullsize.jpg" alt="Full Image">
      <div class="ease-lightbox-caption">High Score: 9999</div>
      
    </div>
    
  </div>
</div>
```

## Why it fits EaseMotion CSS

- **Playful Physics**: The `@keyframes easeJelloPop` sequence demonstrates how manipulating the X and Y scales inversely (`scale3d(1.25, 0.75, 1)` -> `scale3d(0.75, 1.25, 1)`) creates a convincing physics-based bounce effect using only CSS.
- **Robust Architecture**: The CSS structure correctly separates the fixed overlay from the animated content block, ensuring the jello animation doesn't mistakenly warp the background or break layout constraints.
