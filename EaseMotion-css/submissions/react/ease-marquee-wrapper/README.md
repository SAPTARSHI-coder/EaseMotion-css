# React Infinite Marquee Wrapper

A highly performant React wrapper for infinite seamless CSS scrolling marquees (commonly used for client logo walls on SaaS landing pages).

## Installation

Ensure you have EaseMotion CSS installed and imported into your project. Copy `InfiniteMarquee.jsx` and `style.css` into your components directory.

## Features
- **Dynamic Duplication:** Automatically duplicates your provided child nodes the exact number of times required to fill massive ultrawide monitors, ensuring the loop never breaks or "snaps".
- **Zero-JS Animation:** While React handles the DOM node generation, the actual scrolling animation is offloaded entirely to a hardware-accelerated CSS `transform: translateX()` keyframe.
- **Directional & Hover Controls:** Easily reverse the flow or pause the animation on hover.

## API / Props Table

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| `children` | `ReactNode` | Required | The elements (e.g., logos, text) you want to scroll. |
| `speed` | `number` | `30` | The duration in seconds it takes to complete one full loop. |
| `direction` | `string` | `'left'` | The scroll direction (`'left'` or `'right'`). |
| `pauseOnHover` | `boolean`| `true` | Whether the marquee pauses when the user hovers over it. |
| `gap` | `number` | `32` | The pixel gap between each child element in the marquee. |

## Usage

```jsx
import React from 'react';
import InfiniteMarquee from './InfiniteMarquee';

export default function App() {
  return (
    <section style={{ padding: '80px 0' }}>
      <h2 style={{ textAlign: 'center' }}>Trusted by Industry Leaders</h2>
      
      <InfiniteMarquee speed={40} direction="left" pauseOnHover={true} gap={48}>
        {/* Pass your logos just once! The wrapper handles duplication. */}
        <img src="/logo-apple.svg" alt="Apple" />
        <img src="/logo-stripe.svg" alt="Stripe" />
        <img src="/logo-vercel.svg" alt="Vercel" />
        <img src="/logo-linear.svg" alt="Linear" />
        <img src="/logo-github.svg" alt="GitHub" />
      </InfiniteMarquee>
    </section>
  );
}
```

## Why it fits EaseMotion CSS
While we provide a raw CSS-only marquee in our standard examples, using it in a component-driven framework like React is annoying because developers have to manually write duplicated nodes in their JSX to prevent the animation from snapping when it resets. 

This wrapper component acts as the perfect bridge: it uses minimal React `useEffect` logic to calculate container widths and duplicate the DOM nodes automatically, but crucially, it steps out of the way and lets native CSS handle the heavy 60fps scrolling animation.
