# CSS Comparison Slider

An interactive comparison slider component allowing users to drag/slide to compare two images or states side by side, using pure HTML/CSS mechanics.

## Features

- Dynamic clipping container (`clip-path: polygon(...)`)
- Seamless range input connection updating CSS variable offsets (`--slider-pos`)
- Responsive aspect-ratio box styling
- Complete keyboard controls out of the box (Arrow keys, Home, End, Focus rings)
- Highly performant rendering on standard mobile devices
- Fallbacks for static content layout options
- Zero external Javascript library dependencies

## Files

- `demo.html` — demo presentation page displaying the side-by-side color vs monochrome image compare slider
- `style.css` — layouts, variables, handle graphics, clipping paths, and responsive parameters

## Usage

Place the following structure into your markup page:

```html
<div class="ease-comparison-slider" style="--slider-pos: 50%;">
  
  <!-- 'Before' State (Top layer, clipped) -->
  <div class="ease-comparison-image ease-comparison-image--before">
    <img src="image-before.jpg" alt="Before state description">
    <span class="comparison-label comparison-label--before">Before</span>
  </div>

  <!-- 'After' State (Bottom layer, full width) -->
  <div class="ease-comparison-image ease-comparison-image--after">
    <img src="image-after.jpg" alt="After state description">
    <span class="comparison-label comparison-label--after">After</span>
  </div>

  <!-- The Range Input Control -->
  <input type="range" class="ease-comparison-input" min="0" max="100" value="50" 
         aria-label="Image comparison slider percentage"
         oninput="this.parentElement.style.setProperty('--slider-pos', this.value + '%')">

  <!-- Custom handle bar -->
  <div class="ease-comparison-handle" aria-hidden="true"></div>

</div>
```

## CSS Custom Properties

```css
:root {
  --slider-color:   #3b82f6; /* Center handle border color */
}
```

## Issue

EaseMotion CSS issue #68647.
