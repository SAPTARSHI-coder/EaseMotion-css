# Ripple Wave Dark Mode Toggle (Medical Dashboard Theme)

A pure CSS dark mode toggle component that creates a massive ripple wave effect expanding across the screen to switch themes, styled with a clean medical dashboard aesthetic.

## Features

- **Pure CSS State Management**: Uses a visually hidden `<input type="checkbox">` combined with the CSS general sibling combinator (`~`) to toggle both the button's icon and the full-page theme.
- **Ripple Wave Transition**: Instead of a flat background color change, a hidden `.ease-ripple-bg` circle scales up (`transform: scale(100)`) from behind the toggle button to engulf the screen in the dark mode background color.
- **Icon Choreography**: The sun and moon icons elegantly rotate and scale out/in based on the checked state using `cubic-bezier` timing functions.
- **Accessible & Responsive**: Fully keyboard navigable (`:focus-visible`) and works across all screen sizes.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML identically to `demo.html`. Ensure the `.ease-theme-toggle` checkbox is placed high up in your DOM structure so it can easily target sibling elements (like your main content wrapper) using the `~` selector.

## Usage Example

```html
<!-- The state controller must be a sibling to the elements it affects -->
<input type="checkbox" id="theme-toggle" class="ease-theme-toggle">

<!-- The expanding background -->
<div class="ease-ripple-bg"></div>

<!-- The physical toggle button -->
<div class="ease-toggle-container">
  <label for="theme-toggle" class="ease-toggle-btn">
    <div class="ease-icon-wrapper">
      <!-- SVG icons inside -->
    </div>
  </label>
</div>

<!-- Main Content -->
<main class="ease-content">
  <!-- Content elements transition color based on the checkbox state -->
</main>
```

## Why it fits EaseMotion CSS

- **Spatial Mechanics**: Moving beyond flat 2D color flips, this component introduces a spatial transition (the ripple originating from the point of interaction).
- **Physics-based Interpolation**: Uses an EaseMotion `cubic-bezier(0.4, 0, 0.2, 1)` curve to ensure the massive scale transition feels smooth, starting quickly and decelerating gracefully.
- **Zero JS Dependency**: Proves that global application state (like dark mode) and complex, full-screen choreographies can be managed entirely via HTML semantics (`<label>` and `<input>`) and CSS.
