# CSS Metallic Sheen 3D

A hardware-accelerated 3D object simulation built entirely in CSS. This component demonstrates how to create a highly realistic, rotating metallic credit card featuring dynamic specular light reflections (sheen) that accurately sync with the 3D rotation of the object.

## 📋 Mandatory Questions

### 1. What does this do?

This component renders a premium, Titanium/Platinum credit card that infinitely rotates in 3D space, showing both its front and back faces. As the card rotates, a brilliant beam of light (metallic sheen) sweeps across its surface. The sweeping light is mathematically synchronized with the 3D rotation, creating a flawless optical illusion that the card is reflecting a stationary light source in the room. The component natively and instantly adapts to the user's OS Light or Dark mode.

### 2. How is it used?

The 3D space is established using a parent `.viewport-3d` with `perspective: 1200px`. The `.metal-card` then acts as the 3D container using `transform-style: preserve-3d`.

**The 3D Faces:**
The front and back of the card are separate `div` elements positioned absolutely over each other. The back face is flipped `180deg`, and both faces use `backface-visibility: hidden`. When the parent `.metal-card` rotates on the Y-axis, the browser automatically handles showing/hiding the correct face.

**The Dynamic Light Sheen:**
The specular reflection is faked without JavaScript by using a massive CSS `linear-gradient` layered over the card surface with `mix-blend-mode: overlay`. 
By animating the `transform: translateX()` of this gradient, we simulate a sweeping light.
```css
/* The Sheen Animation */
.sheen {
  animation: sweep-sheen 6s ease-in-out infinite alternate;
}
@keyframes sweep-sheen {
  0% { transform: translateX(30%); }
  100% { transform: translateX(-30%); }
}
```
*Crucially, the front sheen and the back sheen (`.back-sheen`) have their animation delays offset (`animation-delay: -3s;`) so that the light only reflects when that specific face is angled toward the user.*

### 3. Why is it useful?

Tracking mouse movements to calculate specular light reflections requires constant JavaScript Event Listeners (`mousemove`), which trigger excessive DOM repaints and rapidly drain mobile battery life. 

By replacing complex mouse tracking with a synchronized, infinite CSS `@keyframes` animation, we push the entire 3D rotation and light reflection logic strictly to the GPU compositor thread. This results in butter-smooth 60fps physics with absolute zero JavaScript execution overhead. Furthermore, the component respects `@media (prefers-reduced-motion: reduce)` by halting the 3D flipping and light sweeping entirely, presenting a static, accessible view of the card for motion-sensitive users.
