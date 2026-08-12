# React Retro Split-Flap Clock (Hardware Accelerated)

A beautiful retro flip-clock countdown timer where the top half of the number physically folds down to reveal the next number.

Historically, this complex folding physics simulation required importing heavy HTML5 Canvas engines or running hundreds of lines of GSAP to calculate fake 3D perspectives on 2D planes. This submission demonstrates how to achieve a flawless, hardware-accelerated mechanical flap display natively in the DOM using pure CSS `transform-style: preserve-3d` and `rotateX`!

---

## 🏛️ The Architecture

### 1. The Anatomy of a Flip Unit
To simulate a physical split-flap display, we must break the UI into four separate cards layered on top of each other:
1. **Top Static Card:** Sits in the back, displaying the *current/new* number.
2. **Bottom Static Card:** Sits in the back, displaying the *previous/old* number.
3. **The Flap (Front):** Sits on top of the Top Static Card, displaying the *previous/old* number.
4. **The Flap (Back):** Physically attached to the back of the Flap Front, displaying the *current/new* number upside down!

### 2. Constructing the 3D Flap Assembly
We wrap the Front Flap and the Back Flap inside a `.flip-flap` container. 
**The Secret:** We apply the CSS property `transform-style: preserve-3d;` to this container!
We then position the Back Flap behind the Front Flap using `rotateX(180deg)` and apply `backface-visibility: hidden` to both. This fuses them together into a single, double-sided 3D object in the browser's DOM!

### 3. The Hinge Physics
To make the flap fold down realistically like a mechanical airport sign, we must change its anchor point. By default, CSS rotates elements from their exact center.
We apply `transform-origin: bottom;` to the `.flip-flap` container. This moves the rotation hinge exactly to the center line of the full number!

### 4. The Animation Trigger
In our React component, we track the `time` state. Whenever a digit changes (e.g., from 9 to 0), React triggers a `useEffect` that temporarily applies an `.is-flipping` class to that specific digit unit.
This class triggers a simple CSS `@keyframes` animation:
```css
@keyframes flip-fold {
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(-180deg); }
}
```
Because the GPU is handling the 3D planes, as the flap folds down past `90deg`, the Front Flap (showing the old number) becomes invisible, and the Back Flap (showing the new number) naturally reveals itself to the camera right-side up!

---

## 💻 Usage

Drop the component into your React app.

```jsx
import { FlipClock } from '@easemotion/react';

function App() {
  return (
    <div style={{ padding: '100px 0' }}>
      <FlipClock />
    </div>
  );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB` of Canvas or GSAP engines!
- **React Rendering:** We only trigger a simple boolean toggle (`isFlipping`) when a number changes. There is no `requestAnimationFrame` loop mathematically calculating the rotation angles.
- **GPU Compositor:** The entire 3D fold physics simulation is handled natively by CSS `@keyframes` on the `transform` property. This offloads the calculation to the GPU compositor thread, resulting in a flawless 60fps mechanical snap without Paint layout thrashing!
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that kills the 3D rotation animation, causing the numbers to simply snap instantly to their new values to prevent sensory overload.
