# CSS 3D-Flip Carousel

A pure-CSS animated carousel utilizing a 3D-Flip interaction aesthetic, designed specifically for Cyberpunk and Sci-Fi themed interfaces. It features hardware-accelerated 3D rotations, neon glowing borders, and monospace terminal-style typography, all achieved without a single line of JavaScript.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a fully functional image/content carousel. When a user selects a navigation option, the current active slide flips away into the background in 3D space (`rotateY(180deg) translateZ(100px)`), while the newly selected slide flips forward into view. It embraces a "Cyberpunk Neon" aesthetic with glowing cyan, magenta, and yellow accents.

### 2. How is it used?

The component is built using standard CSS radio buttons to manage the active state. A `.carousel-scene` wrapper establishes the 3D perspective. The individual `.carousel-slide` elements are positioned absolutely on top of each other and use `transform-style: preserve-3d` combined with CSS transitions to animate based on which radio button is `:checked`.

```html
<!-- Example: Cyberpunk Carousel Layout -->
<div class="carousel-container">
  
  <!-- Hidden Radio State Controllers -->
  <input type="radio" name="cyber_carousel" id="slide-1" checked>
  <input type="radio" name="cyber_carousel" id="slide-2">
  
  <!-- 3D Scene -->
  <div class="carousel-scene">
    <div class="carousel-slide slide-1">
      <div class="slide-content neon-border-cyan">...</div>
    </div>
    <div class="carousel-slide slide-2">
      <div class="slide-content neon-border-magenta">...</div>
    </div>
  </div>
  
  <!-- Navigation Controls -->
  <div class="carousel-nav">
    <label for="slide-1" class="nav-btn nav-cyan">01</label>
    <label for="slide-2" class="nav-btn nav-magenta">02</label>
  </div>
  
</div>
```

**Customization via CSS Properties:**
You can adjust the animation physics and neon colors via root variables:

```css
:root {
  --carousel-transition: 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Bouncy 3D flip */
  
  --neon-cyan: #0ff;
  --neon-magenta: #f0f;
  --neon-yellow: #ff0;
}
```

### 3. Why is it useful?

Carousels are notoriously heavy when implemented with JavaScript libraries (Swiper, Slick, etc.), often causing layout shifts and main-thread blocking during initial load. By utilizing the CSS radio-button hack combined with hardware-accelerated 3D transforms (`translateZ`, `rotateY`), you can deliver a visually stunning, highly interactive component that runs entirely on the GPU. This ensures buttery smooth 60fps animations even on lower-end devices. Furthermore, this component strictly respects accessibility standards, falling back to simple opacity fades if the user has `prefers-reduced-motion` enabled.
