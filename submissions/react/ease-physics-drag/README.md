# React Physics-Based 3D Drag-and-Drop Wrapper

Standard drag-and-drop interfaces feel flat, stiff, and robotic. When a user drags an element across the screen, it simply translates along the X/Y axis in a perfectly rigid state.

Premium, state-of-the-art interfaces (seen on sites like Vercel, Linear, and high-end portfolios) apply **physics** to dragged elements. As you move the mouse rapidly to the right, the physical "weight" of the object causes it to tilt and sway dynamically based on your exact velocity. When you stop dragging, it doesn't just freeze—it swings back to a flat resting state like a pendulum.

This highly advanced `<PhysicsDraggable />` React wrapper implements full spatial velocity tracking and spring physics, mapping complex cursor math to native hardware-accelerated CSS Custom Properties.

---

## 🚀 The Architecture

This component is engineered to bypass the devastating performance issues commonly associated with complex React drag libraries (like `react-beautiful-dnd` or `framer-motion`). 

### 1. Pointer Events vs. HTML5 Drag and Drop
Native HTML5 Drag and Drop (`draggable="true"`) is extremely limited. It creates a ghost image of the element that the OS handles, preventing us from applying real-time 3D CSS transforms to the element itself during the drag.
To solve this, we utilize modern **Pointer Events** (`onPointerDown`, `onPointerMove`, `onPointerUp`). This allows us to smoothly capture mouse, touch, and stylus interactions universally, updating the element's position at a flawless 60fps.

### 2. Bypassing React State for High-Frequency Logic
The biggest mistake developers make is storing drag coordinates in React state (`const [pos, setPos] = useState({x, y})`). Calling `setPos` on every `mousemove` event forces React to reconcile the virtual DOM and re-render the component 60 times a second. This causes massive UI stutter on lower-end devices.
**Our Solution:** We store all positional and velocity data in mutable React `useRef` hooks. The data updates instantly without triggering a single React render cycle.

### 3. The `requestAnimationFrame` Physics Engine
Inside the `onPointerMove` event, we calculate the exact velocity vector of the cursor (Distance ÷ Time). 
```javascript
const vx = moveX / timeDelta;
const targetTiltY = vx * mass * 100;
```
We then initiate a `requestAnimationFrame` loop. This loop calculates the friction and spring physics, smoothly blending the element's current tilt toward the target velocity tilt. 

### 4. Native CSS Handoff
Finally, we apply the raw, calculated mathematics directly to the DOM node via inline CSS variables (`--drag-tilt-x`, `--drag-x`). The browser's native CSS engine uses `transform: translate3d(...) rotateX(...) rotateY(...)` and `will-change: transform` to render the physics entirely on the GPU.

---

## ⚙️ API / Props Configuration

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| `children` | `ReactNode` | Required | The UI element or card you want to make draggable. |
| `maxTilt` | `number` | `30` | The maximum angle (in degrees) the element can tilt, preventing it from flipping completely backwards if dragged violently. |
| `friction` | `number` | `0.85` | The friction coefficient (0 to 1). Lower numbers mean the element snaps back to flat instantly. Higher numbers mean it swings and sways like a pendulum. |
| `mass` | `number` | `0.15` | The physical "weight" of the object. Higher mass requires faster mouse velocity to achieve the same tilt angle. |
| `className` | `string` | `''` | Optional extra CSS classes applied to the outer wrapper container. |

---

## 💻 Usage Example

```jsx
import React from 'react';
import PhysicsDraggable from './PhysicsDraggable';

export default function Dashboard() {
  return (
    <div style={{ padding: '100px', display: 'flex', gap: '40px' }}>
      
      {/* A standard widget with default physics */}
      <PhysicsDraggable>
        <div className="dashboard-widget">
          <h3>Analytics</h3>
          <p>Drag me to feel the weight.</p>
        </div>
      </PhysicsDraggable>

      {/* A "heavy" widget that takes more force to tilt */}
      <PhysicsDraggable mass={0.05} friction={0.9}>
        <div className="dashboard-widget heavy-theme">
          <h3>Database Config</h3>
          <p>I feel sluggish and heavy.</p>
        </div>
      </PhysicsDraggable>
      
    </div>
  );
}
```

---

## ♿ Accessibility (a11y) Considerations

Physics-based UI motion can trigger severe discomfort for users with vestibular disorders. 
The accompanying `style.css` includes a robust `@media (prefers-reduced-motion: reduce)` block. When triggered, the CSS engine will:
1. Ignore the calculated `--drag-tilt` vectors entirely.
2. Disable the spring-bounce transition upon releasing the element.
3. Lock the element to a standard, flat 2D translation matrix, providing a safe and compliant fallback experience automatically.
