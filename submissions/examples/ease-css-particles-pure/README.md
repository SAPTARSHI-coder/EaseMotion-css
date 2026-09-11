# Generative SCSS Particle Network

**What does this do?**
It generates a connected particle web background entirely with CSS using hundreds of tiny animated divs and a hidden SVG Alpha Threshold matrix to simulate connections between particles.

**How is it used?**
```html
<div class="ease-particle-network">
  <!-- Hidden SVG filter -->
  <svg width="0" height="0">
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
      <feBlend in="SourceGraphic" in2="goo" />
    </filter>
  </svg>
  
  <div class="ease-particles-container">
    <!-- Generate 100+ particles -->
    <div class="ease-particle"></div>
    <div class="ease-particle"></div>
    <!-- ... -->
  </div>
</div>
```

**Why is it useful?**
This component proves that complex, organic-looking particle networks can be rendered entirely by the GPU's CSS compositor, eliminating the heavy battery drain and main-thread blocking typically caused by JavaScript `<canvas>` engines like particles.js.
