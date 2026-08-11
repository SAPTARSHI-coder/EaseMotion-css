# Perspective Hover Grid (Hardware Accelerated)

A grid of photos where hovering an image causes it to physically lift towards the user, while simultaneously causing the surrounding non-hovered images to physically tilt away into the background.

Historically, orchestrating complex 3D grid interactions where sibling elements react to one another required attaching heavy JavaScript `mouseenter` and `mouseleave` event listeners to every single node. This submission demonstrates how to utilize the powerful modern CSS `:has()` pseudo-class combinator to achieve flawless, hardware-accelerated sibling state detection with absolute zero JavaScript!

---

## 🏛️ The Architecture

### 1. Establish the 3D Space
We start by defining our `.perspective-grid` container as a standard CSS Grid.
**The Secret:** We apply `perspective: 1000px;` and `transform-style: preserve-3d;` to the parent grid! This means every single child card inside the grid now shares the *exact same 3D vanishing point* in the center of the screen, creating a cohesive, unified 3D physical space!

### 2. The Hovered Item (State 1)
When a user hovers directly over a grid card (`.grid-item:hover`), we simply apply `transform: translateZ(60px);`. Because of the parent's perspective, this physically lifts the card OUT of the screen towards the camera! We also increase the drop shadow to simulate distance from the floor.

### 3. The Modern `:has()` Sibling Combinator (State 2)
How do we tell the *other* cards to react when one card is hovered? Enter the `:has()` selector!
```css
.perspective-grid:has(.grid-item:hover) .grid-item:not(:hover) {
    transform: translateZ(-100px) rotateX(10deg);
    filter: blur(4px) brightness(0.5);
}
```
**How this math works:**
1. First, we ask the parent grid: "Do you *have* a child that is currently being hovered?" -> `.perspective-grid:has(.grid-item:hover)`
2. If the answer is yes, we then target all children inside that grid that are *NOT* the one being hovered! -> `.grid-item:not(:hover)`
3. We push those non-hovered siblings AWAY from the camera into the void (`translateZ(-100px)`), tilt them backwards slightly (`rotateX(10deg)`), and blur them out!

---

## 💻 Usage

Copy the HTML grid structure and the CSS styles.

```html
<div class="perspective-grid">
    <div class="grid-item">...</div>
    <div class="grid-item">...</div>
    <div class="grid-item">...</div>
</div>
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB`. We completely bypass the need for React state arrays tracking `hoveredIndex`, or vanilla JS `document.querySelectorAll()` loops attaching event listeners.
- **GPU Compositor:** Both the `transform` (Z-translations and X-rotations) and the `filter` (blur) properties are highly optimized by modern browsers to run on the GPU compositor thread. By triggering these via CSS pseudo-classes instead of JS loops, we guarantee a buttery-smooth 60fps render!
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that strips the 3D `perspective` and complex Z-axis pushes. The grid elegantly falls back to a gentle 2D scale and dimming effect, ensuring a safe, sensory-friendly experience.
