# React Fluid SVG Gooey Menu (Hardware Accelerated)

A floating action button (FAB) that, when clicked, shoots out smaller menu icons. The premium detail is that the icons physically "pull" and stretch away from the main button like gooey liquid before separating. 

Historically, this "liquid melting" effect required importing heavy physics simulation libraries like Matter.js or running massive HTML5 Canvas WebGL contexts to calculate blob intersections. This submission demonstrates how to achieve a flawless, hardware-accelerated liquid physics simulation natively using an invisible injected SVG `<filter>` and CSS!

---

## 🏛️ The Architecture

### 1. The Mathematical Engine (SVG feColorMatrix)
To create the gooey liquid effect without JS physics, we inject a hidden, 0x0 pixel `<svg>` element into the DOM. Inside it, we define a highly specific filter:
```html
<filter id="ease-gooey-filter">
  <!-- Step 1: Aggressively blur the intersecting elements -->
  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
  
  <!-- Step 2: Drastically increase the alpha contrast! -->
  <feColorMatrix 
    in="blur" mode="matrix" result="gooey"
    values="1 0 0 0 0  
            0 1 0 0 0  
            0 0 1 0 0  
            0 0 0 18 -7" />
  
  <feBlend in="SourceGraphic" in2="gooey" />
</filter>
```
**How does this create liquid?**
First, `feGaussianBlur` blurs the two circles. When two blurred circles get close, their blurred edges begin to overlap and combine their opacity.
Second, `feColorMatrix` intercepts this blur! The values `18 -7` mathematically strip out all the semi-transparent pixels (the soft blur), and dramatically boost the overlapping opaque pixels!
This forces the blurred edges to instantly snap back into a solid shape, but because the overlapping blurs merged, the new solid shape is physically joined together, creating the gooey liquid "bridge" between the two buttons!

### 2. Applying the Engine to React
In our React component, we wrap our main toggle button and our smaller action buttons inside a `.ease-gooey-container`.
We apply the SVG filter we created directly to this container via CSS!
```css
.ease-gooey-container {
    filter: url('#ease-gooey-filter');
}
```
Now, the CSS rendering engine applies the mathematical melting physics to the child buttons!

### 3. The Spring Animations
Because the SVG filter handles the complex physics, the React component only needs to manage a simple boolean `isOpen` state.
When `isOpen` is true, we apply a CSS `transform: translate()` to the smaller buttons, shooting them outward using a bouncy `cubic-bezier` timing function. As they translate away from the center button, the CSS filter automatically melts them until they physically separate!

---

## 💻 Usage

Drop the component into your React app. The hidden SVG will inject itself automatically and power the container.

```jsx
import { GooeyMenu } from '@easemotion/react';

function App() {
  return (
    <div style={{ position: 'fixed', bottom: 40, right: 40 }}>
      <GooeyMenu />
    </div>
  );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB` of physics simulation libraries!
- **React Rendering:** A single boolean toggle render. No 60fps state thrashing.
- **GPU Compositor:** By animating the buttons exclusively via `transform: translate()`, the browser handles the animation and the SVG Matrix math entirely on the GPU compositor thread, resulting in butter-smooth liquid simulation without draining mobile batteries!
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that kills both the bouncy transitions and the SVG `filter`, causing the menu to pop open instantly as a clean, static overlay.
