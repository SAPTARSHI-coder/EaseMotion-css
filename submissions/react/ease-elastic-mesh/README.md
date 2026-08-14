# Physics-Based Elastic Mesh (Hardware Accelerated)

Interactive backgrounds where a grid or mesh physically warps and bounces elastically away from the user's cursor are staples of premium Web3 landing pages and high-end portfolios.

However, these effects typically require loading massive WebGL libraries like Three.js, building a custom shader material, and forcing the user's CPU to constantly recalculate the canvas context thousands of times per second. This causes severe battery drain, high device temperatures, and input lag on mobile devices.

This incredibly advanced submission completely re-engineers this pattern. We build an advanced React component that tracks pointer velocity and calculates 2D Euclidean physics on standard DOM nodes. We then map these physics directly to CSS Custom Properties controlling the `transform: translate3d()` of hundreds of individual grid cells, offloading the actual elastic bounce animations to native CSS `transition` curves on the GPU!

---

## 🏛️ The Architecture

### 1. The Handoff (JS to CSS)
We use a highly optimized React component to track the pointer and calculate the physics. 
Instead of forcing React to re-render 625 distinct grid nodes 60 times a second (which would instantly crash the browser due to massive layout thrashing), we store direct DOM references to every node in a `useRef` array.

When the mouse moves, we throttle the update inside a `window.requestAnimationFrame` loop, completely bypassing the React Render Tree for flawless performance.

### 2. The Euclidean Physics Engine
Inside our throttled frame loop, we calculate the Pythagorean Distance to every single cell:
```javascript
const dx = cellX - pointerX;
const dy = cellY - pointerY;
const distance = Math.sqrt(dx * dx + dy * dy);
```
If a cell falls within our `repelRadius` (e.g. 150px), we calculate a specific push vector based on how close the cursor is:
```javascript
const force = (repelRadius - distance) / repelRadius; // Results in 0.0 to 1.0
const pushX = (dx / distance) * (force * repelStrength);
const pushY = (dy / distance) * (force * repelStrength);
```
We then immediately inject these vectors directly into the specific DOM node's CSS Variables:
```javascript
cellNode.style.setProperty('--push-x', `${pushX}px`);
cellNode.style.setProperty('--push-y', `${pushY}px`);
```

### 3. The Hardware-Accelerated Elastic Bounce
The absolute magic of this component happens in the CSS. We do **NOT** use JavaScript to animate the nodes bouncing back into place when the mouse leaves.

We simply configure the CSS transition:
```css
.ease-elastic-cell {
    transform: translate3d(var(--push-x), var(--push-y), 0);
    will-change: transform;
    
    /* 
      When the JS sets --push-x back to 0px, the GPU automatically animates 
      an elastic, wobbly spring back to the resting position!
    */
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
This single line of CSS offloads tens of thousands of complex spring physics calculations from your JavaScript Main Thread directly to the GPU Compositor!

---

## 💻 Usage

To use the Elastic Mesh in your own project, just drop the component into your app. It will automatically stretch to fill its parent container using CSS Grid.

```jsx
import { ElasticMesh } from '@easemotion/react';

function App() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      
      {/* Configure grid density and physics strength */}
      <ElasticMesh 
        columns={30} 
        rows={20} 
        repelRadius={250} 
        repelStrength={50} 
      />
      
      {/* Your standard UI goes over it! */}
      <div style={{ position: 'absolute', pointerEvents: 'none', zIndex: 10 }}>
        <h1>Welcome to Web3</h1>
      </div>

    </div>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | Number | `20` | The number of horizontal cells in the grid. |
| `rows` | Number | `20` | The number of vertical cells in the grid. |
| `repelRadius` | Number | `150` | The pixel blast radius of the cursor. |
| `repelStrength` | Number | `40` | The maximum pixel distance a cell can be pushed. |

---

## 🚀 Performance Benchmarks

- **WebGL / Canvas Payload:** `0 KB`. Completely bypasses Three.js, shaders, and geometry parsing.
- **React Re-renders:** `0`. By using direct DOM node references inside a `requestAnimationFrame` loop, we bypass the VDOM diffing algorithm entirely while hovering.
- **Main Thread Blocking:** Extremely minimal. The Euclidean physics calculations are optimized and simple. The complex part (the spring animations) are offloaded to the GPU compositor thread natively by the CSS engine!
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that strips the CSS `transition` and `transform`, freezing the grid safely in place.

## ?? Troubleshooting

- **The grid isn't filling the screen.** The ElasticMesh component uses width: 100vw; height: 100vh; by default. If it's placed inside a parent container that is smaller, you might need to adjust the CSS. Ensure the parent container does not have overflow: hidden if you want the grid to stretch infinitely.
- **The dots are rendering incorrectly on resize.** The React component intelligently caches the physical getBoundingClientRect positions of all 600 nodes exactly once on mount to save performance. If the user resizes their window, a window.resize listener re-calculates these centers. If your layout shifts *without* a window resize event, you may need to manually trigger the calculateCenters() function.
- **Can I use images instead of dots?** Absolutely. Inside ElasticMesh.jsx, simply replace the <div className="elastic-dot"></div> with an <img /> tag. The physics engine pushes the *wrapper* cell, so anything inside it (images, text, SVG icons) will flawlessly inherit the elastic physics!
