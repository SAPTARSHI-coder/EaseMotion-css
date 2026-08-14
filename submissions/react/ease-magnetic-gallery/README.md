# Magnetic Follow Image Gallery (Hardware Accelerated)

Image galleries often feel incredibly static. Adding a "magnetic tilt" where images physically tilt towards the user's cursor adds a massive premium feel, but typically requires loading heavy 3D math libraries (like WebGL, Three.js, or complex GSAP matrices).

This submission demonstrates how to achieve a buttery smooth 3D tilt effect by pairing a lightweight React event listener with native CSS Variables and 3D transforms.

---

## 🏛️ The Architecture

### 1. The Handoff (JS to CSS)
We attach an `onPointerMove` listener to the image wrapper in React. 
Inside a fast `requestAnimationFrame` trick (to prevent React state thrashing and skipped frames), we calculate the cursor's exact coordinates relative to the physical center of the image.

```javascript
// Returns a value from -1.0 to 1.0 (left to right)
const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);

// We multiply it by an intensity multiplier (e.g. 20deg)
const rotateY = x * intensity;
```

We immediately inject this calculated degree directly into the DOM node's CSS Variables:
```javascript
containerRef.current.style.setProperty('--rotate-y', `${rotateY}deg`);
```

### 2. The 3D CSS Context
Without a 3D perspective context, applying `rotateX` and `rotateY` just looks like the image is physically squishing/narrowing, rather than actually tilting into the screen.

We fix this by adding `perspective: 1000px;` to the parent wrapper in CSS. This establishes a deep 3D camera.
Then, we apply the rotations to the inner image:
```css
.magnetic-inner {
    transform: rotateX(var(--rotate-x)) rotateY(var(--rotate-y));
    will-change: transform;
}
```

### 3. The Details (Glare & Parallax)
To sell the illusion of depth, we add two physical enhancements:
1. **The Glare:** We map the cursor coordinates to the `center` of a radial gradient sitting on top of the image. This creates a moving "glare" that responds contrary to the cursor, simulating physical light bouncing off a curved glass surface.
2. **The 3D Floating Caption:** By pushing the text caption physically outward along the Z-axis (`transform: translateZ(50px)`), when the parent image tilts, the caption appears to float completely detached from the image underneath it, creating a flawless 3D parallax effect!

---

## 💻 Usage

Drop the component into your React app and pass an image URL and a caption.

```jsx
import { MagneticImage } from '@easemotion/react';

function App() {
  return (
    <MagneticImage 
      src="https://images.unsplash.com/..."
      caption="Fluid Dynamics"
      intensity={20} // Increase to make the tilt more dramatic!
    />
  );
}
```

---

## 🚀 Performance Benchmarks

- **WebGL / Canvas Payload:** `0 KB`. Completely bypasses Three.js and complex 3D math libraries.
- **Main Thread Blocking:** Extremely minimal. By using `requestAnimationFrame` and injecting CSS Variables directly via the DOM ref, we completely bypass the React Render Engine. The CSS GPU Compositor handles the heavy `transform` interpolations.
- **Graceful Degradation:** Users with `prefers-reduced-motion` enabled simply see a standard, flat image gallery without the tracking animations.
