# CSS Parallax Tilt Hover Animation

A groundbreaking demonstration of hardware-accelerated 3D parallax interactions built completely without JavaScript. By leveraging CSS Grid matrices and advanced sibling selectors, this component perfectly simulates the native 3D magnetic hover effects typically found in Apple tvOS or modern game UI engines.

## 📋 Mandatory Questions

### 1. What does this do?

This component renders an interactive 3D card. As the user moves their cursor across the surface of the card, the entire card smoothly tilts magnetically toward the cursor. Furthermore, the internal elements of the card (the icon, the title, and the description) physically pop out of the screen at varying depths, creating a stunning true 3D parallax effect based solely on the mouse's exact coordinates.

### 2. How is it used?

Historically, this effect mandates binding JavaScript `mousemove` listeners to calculate `client.X` and `client.Y` offsets on every frame, which severely tanks performance and mobile battery life. 

Instead, this component utilizes a **Zero-JS Tracking Matrix**. 
We overlay a 3x3 CSS Grid of invisible `.tracker` divs over the entire container. We then use the CSS `~` adjacent sibling selector to watch which tracker is currently being hovered, and manually apply the correct `rotateX()` and `rotateY()` values to the underlying `.tilt-card`.

```css
/* If the mouse is hovering the top-left tracker... */
.tr-1:hover ~ .tilt-card { 
  /* ...tilt the card magnetically towards the top left! */
  transform: rotateX(-12deg) rotateY(12deg); 
}
```

Because the `.tilt-card` has a `transition: transform 0.4s cubic-bezier(...)` property, dragging the mouse rapidly across multiple trackers causes the browser to automatically and flawlessly interpolate the angles, resulting in a buttery-smooth analogue rotation effect. 

The internal layers use `transform: translateZ()` to physically push out from the surface:
```css
.icon-layer { transform: translateZ(80px); }
.title-layer { transform: translateZ(50px); }
```

### 3. Why is it useful?

Offloading `mousemove` calculations from JavaScript's main thread to the browser's CSS Compositor thread guarantees absolutely flawless 60fps animations. It prevents UI jank, saves battery, and ensures the animation runs flawlessly even on lower-end mobile devices. The component respects strict accessibility standards by using `@media (prefers-reduced-motion: reduce)` to completely disable the tracker matrix for users with motion sensitivities, falling back to a static flat card instantly.
