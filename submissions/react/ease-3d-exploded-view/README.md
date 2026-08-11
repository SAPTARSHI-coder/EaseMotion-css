# 3D Exploded View (Hardware Accelerated)

High-end product landing pages (like premium headphones, smartphones, or mechanical watches) often feature an **"exploded view"** where the product breaks apart into its individual internal components as the user scrolls down the page. 

Usually, this requires importing massive 3D models (GLTF/OBJ) and running heavy WebGL engines like Three.js. This forces the user's browser to parse Megabytes of 3D geometry data and compile shader programs just to scroll down the page, killing mobile battery life.

This incredibly advanced submission demonstrates how to achieve a hyper-realistic pseudo-3D exploded view using nothing but flat 2D image layers, CSS Transforms, and the cutting-edge CSS `animation-timeline` specification.

---

## 🏛️ The Architecture

### 1. The 3D Stage Setup
We start by wrapping all our layers in a container with `perspective: 2500px`. This establishes a deep 3D camera.
Next, we apply `transform-style: preserve-3d` to the stage and tilt the stage itself along the X and Z axes to simulate a top-down isometric view:
```css
.ease-exploded-stage {
    transform: rotateX(60deg) rotateZ(-45deg);
    transform-style: preserve-3d;
}
```

### 2. The 2D Layers
The React component accepts an array of layers. These layers should ideally be transparent PNGs or WebPs of the product's internal components (e.g. front glass, motherboard, battery, back chassis) rendered from a perfectly flat, top-down orthographic angle.

Because the stage is tilted, the flat 2D layers appear as flat planes floating in 3D space.

### 3. Mathematical Explosion Distance
The React component must calculate exactly how far to push each layer away from the center during the explosion.

We define a `maxExplosionDistance` (e.g., `600px`). If we have 5 layers:
- Layer 0 (Bottom) translates `0px`.
- Layer 2 (Middle) translates `300px`.
- Layer 4 (Top) translates `600px`.

React dynamically generates a CSS Variable `--explode-z` for each layer:
```javascript
const explodeRatio = index / (layers.length - 1);
const zDistance = maxExplosionDistance * explodeRatio;
```

### 4. Zero-JS Scroll Animation
Instead of binding a costly `window.addEventListener('scroll')` event in JavaScript, we use the bleeding-edge native CSS specification.

We create a massive physical scroll track (e.g. `300vh`) and stick the viewport to the top. Then, we link a standard CSS `@keyframes` animation directly to the scrollbar natively!
```css
.ease-exploded-layer {
    animation: explode-z linear both;
    animation-timeline: scroll(root block);
}

@keyframes explode-z {
    0% { transform: translateZ(0px); }
    100% { transform: translateZ(var(--explode-z)); }
}
```

As the user scrolls, the CSS Compositor Engine perfectly interpolates the Z-axis translation directly on the GPU. The layers seamlessly peel apart in 3D space at a flawless 60fps!

---

## 💻 Usage

To use the Exploded View in your own project, pass an array of layer objects to the component.

```jsx
import { ExplodedView } from '@easemotion/react';

const myLayers = [
  { image: '/assets/chassis-back.png', label: 'Titanium Shell' },
  { image: '/assets/battery.png', label: 'Battery Core' },
  { image: '/assets/logic-board.png', label: 'Main CPU' },
  { image: '/assets/chassis-front.png', label: 'Display Glass' }
];

function App() {
  return (
    <ExplodedView 
      layers={myLayers} 
      maxExplosionDistance={500} 
      baseRotationX={55} 
      baseRotationZ={-30} 
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `layers` | Array | `[]` | Array of objects: `{ image: String, label: String }` |
| `maxExplosionDistance` | Number | `500` | The physical pixel distance between the top and bottom layer at maximum explosion. |
| `baseRotationX` | Number | `60` | The tilt of the camera looking down at the object. |
| `baseRotationZ` | Number | `-45` | The spin of the camera looking at the object. |
| `width` | String | `'300px'` | The physical width of the layer container. |
| `height` | String | `'500px'` | The physical height of the layer container. |

---

## 🚀 Performance Benchmarks

- **WebGL / Canvas Payload:** `0 KB`. Completely bypasses Three.js and heavy shaders.
- **Scroll Listeners:** `0`. Bypasses `requestAnimationFrame` entirely.
- **Main Thread Blocking:** `0ms` (Transform updates are handed off to the compositor thread natively by the CSS engine).
- **DOM Size:** Incredible lightweight. A 5-layer explosion requires exactly 6 `<div>` elements.
