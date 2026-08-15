# React 3D Typography Ribbon (Hardware Accelerated)

A 3D twisting ribbon of kinetic typography that scrolls infinitely across the screen.

Historically, complex 3D typography strips like this required loading massive WebGL canvas engines like Three.js, mapping text to 3D cylinder meshes, and running expensive render loops. This submission demonstrates how to construct a flawless, hardware-accelerated 3D object natively in the DOM using pure CSS `transform-style: preserve-3d`!

---

## 🏛️ The Architecture

### 1. Constructing the 3D Space
We start by defining a container with a `perspective: 800px` property. This tells the browser's rendering engine how "close" the user's camera is to the 3D objects inside. We apply a slight `rotateY` and `rotateZ` to angle the camera down so we can see the top edge of the ribbon!

### 2. The 3D Axis (`preserve-3d`)
Inside the container, we place a `.ribbon-axis` element.
**The Secret:** We apply the CSS property `transform-style: preserve-3d;` to this axis!
Without this property, any 3D child elements are flattened onto a 2D plane by the browser. By enabling this, we tell the GPU to respect the physical Z-index depth and rotations of all child elements!

### 3. Placing the Faces (Building a Hollow Cylinder)
We place two massive text containers (the "Faces") inside the 3D axis.
* **The Front Face:** We push this element OUT towards the camera using `transform: translateZ(60px);`.
* **The Back Face:** We flip this element upside down using `rotateX(180deg)`, and then push it INWARD using `translateZ(60px);`!
Because they are placed on opposite sides of the 3D center axis, when we spin the parent `.ribbon-axis`, it creates the illusion of a hollow, rotating 3D ribbon!

### 4. The Infinite Marquee Physics
We duplicate our text string natively in React and wrap it in a `.marquee-track`.
We apply a simple CSS `transform: translateX(-50%)` keyframe animation to the tracks.
Because the text tracks are living *inside* the 3D faces, the GPU automatically calculates their X-translations along the angled 3D plane!
*(Note: Because the Back Face is physically flipped 180 degrees, we must animate its text scrolling in the OPPOSITE direction, otherwise it will appear to scroll backwards to the viewer!)*

---

## 💻 Usage

Drop the component into your React app.

```jsx
import { Ribbon3D } from '@easemotion/react';

function App() {
  return (
    <div style={{ padding: '100px 0', overflow: 'hidden' }}>
      <Ribbon3D text="EASEMOTION CSS" speed="12s" />
    </div>
  );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB` of Three.js or WebGL canvas libraries!
- **React Rendering:** Renders exactly once. There is no `requestAnimationFrame` loop updating the rotation state.
- **GPU Compositor:** Both the infinite X-scrolling of the text and the 3D X-axis rotation of the ribbon are handled natively by CSS `@keyframes` on the `transform` property. This offloads the entire 3D calculation to the GPU compositor thread, resulting in a flawless 60fps render without Paint layout thrashing!
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that kills the infinite spin and scroll loops, locking the ribbon to a readable, static 2D angle.
