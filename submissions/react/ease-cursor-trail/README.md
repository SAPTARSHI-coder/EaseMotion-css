# React Magnetic Cursor Trail (Hardware Accelerated)

A sleek custom cursor consisting of a small dot followed by a larger, slower trailing circle that magnetically "snaps" and morphs its shape around interactive elements like links and buttons.

Historically, building an agency-style custom cursor with smooth trailing physics and element magnetism required installing heavy JavaScript animation libraries (GSAP, Framer Motion), bridging complex React Contexts to track global hover states, and running intense 60fps `requestAnimationFrame` loops. This submission demonstrates how to completely bypass JS physics engines by tracking raw coordinates and piping them into native CSS variables, CSS transitions, and the modern `:has()` selector!

---

## 🏛️ The Architecture

### 1. Global Coordinate Tracking
We build a React component that sets up a *single*, highly optimized global `mousemove` event listener.
Instead of updating React State (which would trigger an expensive VDOM diff and re-render on every single pixel of mouse movement!), we pipe the raw coordinates directly into CSS variables on the `document.body`!
```javascript
document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
```

### 2. The Leading Dot (Instant)
The small dot represents the actual physical mouse. We apply the CSS variables to a `transform: translate()` property. Because it has absolutely no `transition` applied to it, it snaps instantly 1:1 with the user's hand!

### 3. The Trailing Circle (CSS Physics)
The larger outline circle *also* tracks the exact same CSS variables!
**The Trick:** We apply a CSS `transition: transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)` to the outline. Because CSS is trying to constantly catch up to the instantly updating variables, it naturally lags behind, creating a buttery-smooth trailing spring physics effect without any JavaScript math!

### 4. The Magnetic Snap (The Magic!)
How do we make the cursor magically morph its shape when it hovers over a button, without setting up massive React Context providers to track hover states globally?
We use the modern CSS `:has()` pseudo-selector!
```css
/* If the BODY contains an <a> tag that is currently being hovered... */
body:has(a:hover) .ease-cursor-trail {
    width: 60px;
    height: 60px;
    background-color: rgba(56, 189, 248, 0.2);
}
```
CSS can now look *down* the DOM tree, see that an anchor tag is being hovered, and instantly reach back *up* to style the trailing cursor node! Zero React state required!

---

## 💻 Usage

Render the `<CursorTrail />` component *once* at the very top of your React app tree (e.g., in `App.jsx` or `layout.jsx`). It will automatically handle everything globally!

```jsx
import { CursorTrail } from '@easemotion/react';

function App() {
  return (
    <>
      <CursorTrail />
      <MyWebsiteContent />
    </>
  );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB` of GSAP or Framer Motion!
- **React Renders:** `1`. The component never triggers a React re-render when the mouse moves!
- **GPU Compositor:** By writing raw strings directly to CSS variables and animating the `transform` property natively in CSS, the browser completely bypasses the Main Thread JS queue and offloads the cursor physics strictly to the GPU Compositor.
- **Accessibility:** Users with `prefers-reduced-motion` enabled, or users on touch devices (`pointer: coarse`), are protected by a built-in media query that strips the custom nodes entirely and restores the native OS cursor.
