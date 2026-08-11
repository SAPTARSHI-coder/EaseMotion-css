# React Magnetic Physics Button (Hardware Accelerated)

A premium button that physically "pulls" towards the user's cursor as they hover near it, creating a tactile magnetic effect. 

Historically, this interaction was achieved by importing heavy physics engines like GSAP and running a continuous `requestAnimationFrame` loop to interpolate the button's position. This submission demonstrates how to achieve a flawless, hardware-accelerated magnetic pull natively by combining simple React `onMouseMove` handlers with CSS Custom Properties and `cubic-bezier` spring transitions!

---

## 🏛️ The Architecture

### 1. Calculating Geometric Distance Natively
When the mouse moves over the button, we trigger an `onMouseMove` event handler. We need to figure out exactly how far the cursor is from the center of the button.
1. We read the button's native DOM geometry via `.getBoundingClientRect()`.
2. We calculate the exact center point (`centerX`, `centerY`) of that geometry.
3. We calculate the distance between the raw mouse coordinates and that center point!

### 2. The Physics Multiplier
If we translate the button by the *exact* distance to the mouse, it will fly wildly off the screen! We need to reduce the translation distance to create a subtle "pull".
We apply a mathematical `strength` divisor:
```javascript
const distanceX = (e.clientX - centerX) / (100 / strength);
```
By injecting this reduced distance into the button's inline `style` as CSS Variables (`--tx`, `--ty`), we bypass the need for a JS interpolation loop entirely!

### 3. The CSS Spring Math (The Magic)
The React component just gives CSS the raw distance coordinates. How do we make it feel elastic and bouncy without GSAP?
We apply a custom `cubic-bezier` transition to the `transform` property in our CSS!
```css
.ease-magnetic-button {
    transform: translate(var(--tx, 0), var(--ty, 0));
    transition: transform 0.4s cubic-bezier(0.25, 1.5, 0.5, 1);
}
```
This specific bezier curve (`1.5` at the end) physically overshoots the target slightly before settling, perfectly emulating a physical rubber band or magnetic spring!

### 4. 3D Parallax Text
To make the button feel even more premium, we wrap the text content in a `<span>`. We apply the *exact same* CSS transition to the text, but in React, we inject the translation variables at exactly `50%` of the parent's distance (`--tx: ${position.x * 0.5}px`). This causes the text to move slightly slower than the button border, creating stunning 3D volumetric depth!

---

## 💻 Usage

Drop the component into your React app.

```jsx
import { MagneticButton } from '@easemotion/react';

function App() {
  return (
    <MagneticButton strength={40}>
      Click Me
    </MagneticButton>
  );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB` of GSAP or physics simulation libraries!
- **React Rendering:** We only trigger a tiny coordinate state update during mouse movement, avoiding massive full-tree re-renders.
- **GPU Compositor:** By mapping the `x` and `y` coordinates to `transform: translate()` in CSS, the browser hands the interpolation entirely over to the GPU compositor thread, resulting in a flawless 60fps interaction that doesn't trigger Paint recalculations!
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that kills the movement completely, freezing the button in a standard, highly legible state.
