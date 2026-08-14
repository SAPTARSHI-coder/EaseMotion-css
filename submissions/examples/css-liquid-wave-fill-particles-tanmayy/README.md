# CSS Liquid Wave Fill Particles

A pure-CSS fluid dynamics simulation combining a sloshing liquid wave engine with organic, rising bubble particles. This component leverages advanced CSS masking and geometry to fake complex liquid physics without WebGL or Canvas rendering.

## 📋 Mandatory Questions

### 1. What does this do?

This component renders a sleek, glassmorphism dashboard widget containing a circular liquid tank. Inside the tank, a blue liquid constantly sloshes back and forth, simulating wave physics. Simultaneously, translucent bubble particles rise from the bottom of the tank and organically "pop" (scale up and fade out) the exact moment they hit the surface tension line of the liquid. The component natively supports both Light and Dark OS modes.

### 2. How is it used?

The fluid physics are achieved entirely without JavaScript, using a classic CSS geometry trick known as the "Squircle Spin".

**The Liquid Wave Trick:**
Rather than mathematically attempting to bend a line into a wave, the liquid is actually constructed using two massive squares with slightly rounded edges (`border-radius: 43%`). When these "squircles" are spun infinitely using CSS `@keyframes`, their non-uniform edges constantly rise and fall, creating a flawless optical illusion of a sloshing wave across the top surface.

```css
.wave {
  position: absolute;
  top: 35%; 
  left: -50%;
  width: 200%;
  height: 200%;
  /* The magical squircle ratio */
  border-radius: 43%; 
  animation: wave-spin 5s linear infinite;
}

@keyframes wave-spin {
  100% { transform: rotate(360deg); }
}
```

**The Popping Particles:**
The rising bubbles (`.bubble`) are timed perfectly via their `@keyframes`. They translate exactly the height of the liquid layer (`translateY(-150px)`). At the 85% mark of their animation (which corresponds to the surface level of the liquid), they scale up rapidly by `1.6x` while fading opacity to `0`, perfectly mimicking a bubble popping as it hits the air.

### 3. Why is it useful?

Simulating fluids on the web is traditionally one of the most computationally expensive tasks possible, typically requiring HTML5 `<canvas>`, Perlin noise algorithms, and continuous JavaScript `requestAnimationFrame` loops that obliterate mobile battery life. 

By offloading the "fluid" to a rotating CSS geometric shape, the browser treats it as a simple 2D transform, pushing the calculation entirely to the highly-optimized GPU compositor thread. This ensures buttery smooth 60fps performance on any device. The component also enforces accessibility by respecting `@media (prefers-reduced-motion: reduce)`, instantly halting the dizzying wave rotation and flattening the liquid level for users with motion sensitivities.
