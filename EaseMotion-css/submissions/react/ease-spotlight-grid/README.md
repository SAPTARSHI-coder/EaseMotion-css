# React Interactive Spotlight Grid (Hardware Accelerated)

A grid of dark-mode cards where a soft, glowing "spotlight" perfectly follows your mouse across the grid, illuminating the borders and backgrounds of the cards it passes over. 

Historically, highly interactive dynamic lighting systems like this required importing massive WebGL physics engines like Three.js and writing complex fragment shaders. This submission demonstrates how to bypass WebGL entirely, utilizing React state to track localized mouse coordinates and native CSS `radial-gradient` masks to render the glow!

---

## 🏛️ The Architecture

### 1. Tracking Local Coordinates (React)
When the mouse moves over a card, we trigger an `onMouseMove` event handler. We don't want the global window coordinates; we want the coordinates *relative to that specific card*.
We achieve this by reading the card's native DOM geometry via `.getBoundingClientRect()`, and subtracting those bounds from the raw mouse event coordinates.
We then inject those exact local coordinates (`x`, `y`) directly into the card's `style` object as CSS Custom Properties (`--mouse-x`, `--mouse-y`)!

### 2. The Glowing Border Layer
To create the gorgeous glowing border, we build a specific layer configuration:
1. The Parent Card has `1px` of padding and a subtle base border color.
2. We inject a `.spotlight-border` `div` that sits completely behind the content, filling the entire parent card.
3. The Inner Content wrapper has its own background color and sits on top.

Because the parent card has `1px` of padding, the `.spotlight-border` underneath is slightly exposed at the edges! 
We apply a CSS `radial-gradient` to the border layer, centering it exactly on the React-injected `--mouse-x` and `--mouse-y` variables.
```css
background: radial-gradient(
    300px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.4),
    transparent 100%
);
```

### 3. The Glowing Background Layer
We want the interior of the card to glow softly as well. We add a second `.spotlight-background` layer, this time placing it *inside* the Inner Content wrapper. We apply a similar `radial-gradient` but with a much lower opacity.
*Crucial Detail:* We must apply `pointer-events: none` to this internal layer! If we don't, it will block the mouse events from bubbling up to the parent card's `onMouseMove` listener, completely breaking the tracking!

---

## 💻 Usage

Drop the component into your React app. You can wrap any content inside the `<SpotlightCard>` and it will automatically generate the localized glowing layers!

```jsx
import { SpotlightCard } from '@easemotion/react';

function App() {
  return (
    <div className="grid">
      <SpotlightCard>
        <h3>Card 1</h3>
        <p>Interactive lighting powered by native CSS.</p>
      </SpotlightCard>
    </div>
  );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB` of 3D/WebGL libraries!
- **React Rendering:** Because we inject the CSS Custom Properties directly via the `style` prop, React efficiently updates just the DOM node styles without deep re-rendering of the entire component tree.
- **GPU Compositor:** CSS `radial-gradient` interpolation is heavily optimized by modern 2D browser rendering engines, resulting in near-zero battery drain compared to a continuous WebGL `<canvas>` loop!
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that strips the dynamic spotlight layers completely, replacing them with a static, subtle hover state to prevent sensory overload.
