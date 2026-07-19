# Mix Blend Screen Utility

Introduces the screen-mode compositing modifier utility token (`.ease-blend-screen`) under issue #15100.

## Functional Mechanics

- **The Problem:** Designing immersive graphical overlays for dark-mode UI shells, high-contrast hero sections, or multi-layered glass-morphism cards is difficult when using standard opacity settings. Standard transparency washes colors out, creating a "muddy" or desaturated visual texture. 
- **The Solution:** Light-addition compositing. The `.ease-blend-screen` utility applies `mix-blend-mode: screen`. This mode calculates the color values by multiplying the inverse of the two layer colors, ensuring the result is always lighter than the original source. It is the ideal choice for creating glowing effects, vibrant overlay intersections, and professional light-based blending in complex UIs.



## Usage Layout Structure
```html
<div class="hero-container">
  <div class="glow-layer ease-blend-screen"></div>
</div>
```

Closes #15100
