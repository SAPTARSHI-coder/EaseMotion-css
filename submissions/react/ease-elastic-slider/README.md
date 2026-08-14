# React Elastic Liquid Slider (Hardware Accelerated)

A range slider component where the "thumb" (the draggable circle) stretches and pulls organically like a drop of liquid when dragged, before snapping back into a perfect circle when released.

Historically, adding elastic drag physics to UI components required importing heavy animation engines like GSAP or Framer Motion to manage the complex spring math and DOM updates on every single frame. This submission demonstrates how to bypass JS physics engines entirely! We calculate the raw drag velocity in React and pipe the mathematical result directly into a native CSS `transform` variable, offloading the physical stretch entirely to the GPU!

---

## 🏛️ The Architecture

### 1. The Invisible Native Input
We never want to rebuild native accessibility and touch event handling from scratch!
Instead, we render a standard HTML `<input type="range">`, but we set its `opacity` to `0` and place it at `z-index: 10`. 
The user *thinks* they are dragging our custom UI, but their finger/mouse is actually interacting with the invisible native input, guaranteeing perfect mobile touch support!

### 2. Velocity Tracking (The Math)
When the `onInput` event fires, React captures the new slider value.
To find the velocity, we subtract the new value from the previous value (stored in a `useRef`). 
```javascript
const delta = newValue - previousValueRef.current;
const rawVelocity = Math.abs(delta) * 0.15;
```
We clamp this velocity to a maximum of `1.5` so the thumb doesn't stretch infinitely across the screen! We then pipe this final velocity directly into an inline CSS variable on the parent container: `--drag-velocity`.

### 3. The CSS GPU Physics Engine (The Magic)
Our custom Slider Thumb is a perfect CSS circle.
When React detects dragging, we apply a `.is-dragging` class. This tells CSS to apply the real-time velocity stretch!
```css
.ease-elastic-slider-container.is-dragging .slider-thumb {
    /* Stretch horizontally based on the React math! */
    transform: scaleX(calc(1 + var(--drag-velocity, 0)));
    transition: none; /* Instant update, no CSS delay! */
}
```

### 4. The Snap-Back Spring
What happens when the user stops dragging? React detects the pause, resets the velocity to `0`, and drops the `.is-dragging` class.
This triggers our CSS "Snap-Back" physics!
```css
.ease-elastic-slider-container:not(.is-dragging) .slider-thumb {
    transform: scaleX(1); /* Snap back to a perfect circle */
    /* Use a highly elastic cubic-bezier to create the "Jello" wobble! */
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 💻 Usage

Drop the component into your React app.

```jsx
import { ElasticSlider } from '@easemotion/react';

function App() {
  return (
    <div style={{ padding: '40px' }}>
      <ElasticSlider min={0} max={100} defaultValue={50} />
    </div>
  );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB` of GSAP, Framer Motion, or React-Spring!
- **DOM Manipulations:** We only update an inline `--drag-velocity` variable.
- **GPU Compositor:** By hinting the browser with `will-change: transform`, we force the browser engine to offload the `scaleX()` warp entirely to the GPU compositor thread. This allows the browser to physically stretch the pre-rendered thumb pixel data without triggering heavy layout recalculations or Paint thrashing!
- **Accessibility:** Because the core engine is a native `<input type="range">`, keyboard navigation, screen readers, and mobile touch events work flawlessly out-of-the-box. Users with `prefers-reduced-motion` enabled are protected by a built-in media query that kills the CSS stretch physics entirely.
