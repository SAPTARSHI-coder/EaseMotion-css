# Confetti Pagination (Music Player Theme)

A pure CSS pagination component featuring a delightful, gamified confetti burst animation whenever a new page is selected, styled with a sleek dark-mode music player aesthetic.

## Features

- **Pure CSS Confetti Burst**: Utilizes the CSS general sibling combinator (`~`) to trigger a keyframe animation on a cluster of particles the exact moment a pagination radio button becomes `:checked`.
- **Radial Geometry via Variables**: Leverages inline CSS custom properties (`--c-deg` and `--c-dist`) to calculate the trajectory of each confetti particle cleanly in the CSS, removing the need to write unique keyframes for every single piece of confetti.
- **State Management**: Uses hidden radio inputs and styled `<label>` tags for fully functional, accessible, and JavaScript-free state management.
- **Sleek Theming**: Employs a dark background (`#121212`) and vibrant active states (`#1db954`), mimicking modern premium audio and music player interfaces.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML identically to `demo.html`, ensuring that each `.ease-page-item` contains the radio input, the label, and the `.ease-confetti-container`.

## Usage Example

```html
<!-- Wrapper for horizontal layout -->
<div class="ease-pagination-wrapper">
  
  <!-- Single Pagination Item -->
  <div class="ease-page-item">
    <!-- State controller -->
    <input type="radio" name="pagination" id="page-1" class="ease-page-radio" checked>
    
    <!-- Clickable button -->
    <label for="page-1" class="ease-page-label">1</label>
    
    <!-- Confetti Explosion -->
    <div class="ease-confetti-container">
      <!-- Particles with dynamic vectors -->
      <i class="ease-confetti-particle" style="--c-color: #1db954; --c-deg: 15deg; --c-dist: 40px;"></i>
      <i class="ease-confetti-particle" style="--c-color: #ff4b4b; --c-deg: 45deg; --c-dist: 50px;"></i>
      <!-- Add as many particles as desired -->
    </div>
  </div>

</div>
```

## Why it fits EaseMotion CSS

- **Micro-Interactions**: Transforms a traditionally boring, functional UI element (pagination) into a rewarding micro-interaction.
- **Smart Architecture**: Demonstrates an advanced pure CSS architecture by using mathematical CSS custom properties (`transform: rotate(var(--c-deg)) translateY(calc(-1 * var(--c-dist)))`) to simulate trigonometry for radial explosions without JavaScript.
- **Performance**: The entire confetti sequence animates exclusively on `transform` and `opacity`, ensuring silky smooth 60fps performance on mobile devices.
