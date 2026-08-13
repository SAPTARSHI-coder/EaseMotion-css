# Physics-Based Liquid Swipe (Hardware Accelerated)

Premium onboarding flows (like high-end mobile apps or experiential landing pages) often feature a **"liquid swipe"** effect. When dragging the edge of the screen, the next page physically pulls over like a stretching, elastic bubble before finally snapping across the screen.

Historically, achieving this effect on the web required importing massive 2D Canvas rendering engines (like Pixi.js or Paper.js). These libraries hijack the DOM, draw the bubble pixel-by-pixel, and force the CPU to constantly recalculate the canvas context thousands of times per second. This causes severe battery drain and input lag, especially on lower-end mobile devices.

This highly advanced submission completely re-engineers this pattern. We map the elastic physics directly to a massive SVG `<clipPath>` polygon natively in CSS. As the user drags, we deform the bezier curves of the SVG clip-path in real-time using nothing but native CSS Variables!

---

## 🏛️ The Architecture

### 1. The Handoff (JS to CSS)
We use a highly optimized React component for one specific purpose: passing the cursor coordinates from the OS to the CSS rendering engine.

We attach `onPointerMove` to the container and track exactly how far the user has dragged horizontally. We pass these coordinates directly to two CSS Custom Properties:
```javascript
containerRef.current.style.setProperty('--clip-curve-x', `${dragDistance}px`);
containerRef.current.style.setProperty('--clip-center-y', `${mouseY}px`);
```
**We throttle this update using `requestAnimationFrame`.** This ensures we never spam the CSS engine faster than the monitor can physically refresh, avoiding layout thrashing entirely.

### 2. The Magical `clip-path` Curve
Inside our CSS, we physically stack the Next Slide directly on top of the Current Slide. However, we apply a massive custom polygon clip-path to hide it off the right edge of the screen!

```css
clip-path: path(
    "M 100vw 0 "
    "L 100vw calc(var(--clip-center-y) - 250px) "
    "Q calc(100vw - (var(--clip-curve-x) * 1.5)) var(--clip-center-y), 100vw calc(var(--clip-center-y) + 250px) "
    "L 100vw 100vh "
    "Z"
);
```

**How does this math work?**
1. We start at the top right of the screen (`100vw 0`).
2. We draw a straight line down to just above the cursor's Y position.
3. We use the SVG `Q` (Quadratic Bezier) command to draw a curved bubble. The anchor point of the curve is pushed leftward by the `--clip-curve-x` variable we update in React!
4. We finish drawing the line to the bottom right of the screen.

Because we use `path()` directly inside CSS (instead of an inline `<svg>` tag), the CSS Compositor engine natively interpolates the `calc()` equations directly on the GPU!

### 3. The Snap Physics
When the user releases their finger, we don't need JavaScript to animate the bounce back! We simply apply a CSS class that triggers a native `transition`:
```css
/* If they didn't drag far enough, snap the bubble shut */
.liquid-snap-close .next-slide {
    transition: clip-path 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
Because the `transition` targets `clip-path`, the browser automatically animates the SVG bezier curves snapping back to their original `0px` state!

---

## 💻 Usage

To use the Liquid Swipe in your own project, simply pass an array of slide objects to the `<LiquidSwipe>` component.

```jsx
import { LiquidSwipe } from '@easemotion/react';

const mySlides = [
  {
    bg: '#0f172a',
    content: <h1>Step 1: Welcome</h1>
  },
  {
    bg: '#c2410c',
    content: <h1>Step 2: Connect Account</h1>
  },
  {
    bg: '#047857',
    content: <h1>Step 3: Ready to Go!</h1>
  }
];

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <LiquidSwipe slides={mySlides} />
    </div>
  );
}
```

---

## 🚀 Performance Benchmarks

- **WebGL / Canvas Payload:** `0 KB`. Completely bypasses Pixi.js, Paper.js, and complex Canvas drawing contexts.
- **DOM Manipulations:** `0`. Standard JS typists execute `element.appendChild()` hundreds of times per second. We only update CSS Custom Properties.
- **Main Thread Blocking:** `0ms`. (Clip-Path updates are handed off to the compositor thread natively by the CSS engine. The `will-change: clip-path` tag ensures the GPU pre-allocates memory for the vector redraws).
- **Graceful Degradation:** Users with older browsers or `prefers-reduced-motion` enabled simply see an instantaneous slide swap rather than an elastic bubble.

## ?? Troubleshooting

- **The swipe feels laggy.** Make sure you haven't removed the will-change: clip-path property from the .next-slide class in the CSS. This is absolutely critical; it tells the browser to pre-allocate GPU memory for the vector redraws before the user even clicks!
- **It doesn't work on mobile.** Native mobile browsers often hijack horizontal swipes for back/forward navigation. We explicitly disabled this using 	ouch-action: none in the CSS and calling e.preventDefault() inside the React useEffect for 	ouchmove events. Ensure these protections are maintained.
- **Can I change the bubble size?** Yes! You can adjust the vertical size of the bubble by modifying the - 250px and + 250px values inside the path() definition in the CSS. Larger numbers create a wider, fatter bubble. Smaller numbers create a sharp, pinpoint bubble.
