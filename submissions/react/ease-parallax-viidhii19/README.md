# React Hardware-Accelerated Parallax Hook (ease-parallax-viidhii19)

A highly optimized `useEaseParallax` hook and `ParallaxLayer` component for React that delivers smooth 60fps parallax animations without triggering React re-renders.

## Description
Scroll-based parallax effects in React usually require setting state synchronously on scroll (e.g., using heavyweight libraries like `react-scroll-parallax`). This triggers a full Virtual DOM diffing process and re-render on every frame, causing massive layout thrashing, jank, and dropped frames—especially on mobile devices.

This implementation completely bypasses the React render cycle by using `useRef` to target the DOM node, `requestAnimationFrame` to batch DOM writes, and CSS variables (`--parallax-y`) with hardware acceleration (`transform: translate3d`) to push the animation to the GPU.

## Properties Reference

### `useEaseParallax(speed)` Hook
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `speed` | `number` | `0.5` | The multiplier for the scroll offset. Positive values move the element slower than the scroll, negative values move it faster (foreground effect). |
| Returns | `React.RefObject` | `null` | A React ref to be attached to the target DOM element you wish to animate. |

### `<ParallaxLayer />` Component
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `speed` | `number` | `0.5` | The multiplier for the parallax effect. |
| `className` | `string` | `""` | Additional CSS classes (uses `ease-fade-in` and `ease-parallax-element-viidhii19` by default). |
| `children` | `ReactNode` | `null` | Elements to render inside the parallax layer. |

## Usage Example

```jsx
import React from 'react';
import { useEaseParallax, ParallaxLayer } from './useParallax';
import './style.css';

export default function ParallaxHero() {
  // Option 1: Using the hook directly
  const textRef = useEaseParallax(-0.5);

  return (
    <div className="hero-section">
      {/* Option 2: Using the pre-built component with EaseMotion CSS utilities */}
      <ParallaxLayer speed={0.2} className="background-layer">
        <img src="bg.jpg" alt="Background" />
      </ParallaxLayer>
      
      <h1 ref={textRef} className="ease-parallax-element-viidhii19 ease-hover-lift">
        Parallax
      </h1>
    </div>
  );
}
```
