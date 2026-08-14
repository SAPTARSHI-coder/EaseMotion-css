# React Sticky Magnetic Cursor (Hardware Accelerated)

A custom cursor that smoothly follows the mouse with a slight spring delay. When you hover over a specific button, the cursor physically "snaps" to the button's center, stretching and morphing to wrap its exact dimensions perfectly.

Historically, this effect required importing heavy physics engines like GSAP and running massive JavaScript interpolation math loops. This submission demonstrates how to achieve a flawless, hardware-accelerated magnetic cursor by merging a lightweight `requestAnimationFrame` tracker with native DOM geometry reading!

---

## 🏛️ The Architecture

### 1. The DOM Injection Engine
To ensure a buttery smooth 60fps cursor without crushing the React rendering engine, we **cannot** store the cursor position in a React `useState` (which would trigger a full component re-render 60 times a second).
Instead, we use a `requestAnimationFrame` loop that calculates the interpolated cursor physics and injects them directly into the DOM node via inline CSS Custom Properties!
```javascript
// Bypasses React entirely!
cursorRef.current.style.setProperty('--cursor-x', `${cursor.current.x}px`);
cursorRef.current.style.setProperty('--cursor-y', `${cursor.current.y}px`);
```

### 2. Reading Native Geometry
Instead of manually hardcoding how big the cursor should get when it hovers over different buttons, we read the DOM natively!
When the mouse enters an element with the `data-magnetic="true"` attribute, we call `.getBoundingClientRect()` on that specific DOM node.
This gives us the exact `x`, `y`, `width`, and `height` of the button on the screen! We even use `window.getComputedStyle()` to steal the button's exact `border-radius`!

### 3. The Snap Physics
Once we have the exact geometry of the hovered button, we pause the standard cursor interpolation physics.
We instantly lock the cursor's `x` and `y` position to the exact center of the button!
Simultaneously, we update a React state with the target dimensions. The CSS file intercepts this state change and applies a custom `cubic-bezier` transition to the `width`, `height`, and `border-radius` properties, causing the cursor to physically stretch and snap around the button flawlessly!

---

## 💻 Usage

1. Mount the `<StickyCursor />` component once at the top level of your application (usually in `App.jsx` or your root layout).
2. To make *any* element magnetic, simply add the `data-magnetic="true"` attribute to it! The global cursor will detect it automatically and snap to it!

```jsx
import { StickyCursor } from '@easemotion/react';

function App() {
  return (
    <>
      <StickyCursor />
      
      {/* This button will attract the cursor! */}
      <button data-magnetic="true">
        Submit Form
      </button>
    </>
  );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB` of external physics libraries (No GSAP required).
- **React Rendering:** `0` re-renders during standard mouse movement. The physics loop writes directly to the DOM to ensure maximum performance.
- **GPU Compositor:** By mapping the `x` and `y` coordinates to `transform: translate()` in CSS, the browser hands the cursor movement entirely over to the GPU compositor thread!
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that safely applies `display: none` to the custom cursor, returning them to the native OS cursor to prevent motion sickness.
