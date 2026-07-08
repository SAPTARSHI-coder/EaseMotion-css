# EaseMotion-css React Wrapper

A lightweight React wrapper for EaseMotion CSS. This component simplifies applying EaseMotion animations dynamically based on component state, hover events, and scroll intersections.

## Installation

Ensure you have `easemotion-css` included in your project (via CDN or npm).

Copy the `Ease.jsx` file into your React project components directory.

## Usage

```jsx
import React, { useState } from 'react';
import Ease from './Ease';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Animation</button>
      
      {/* Basic animation on mount */}
      <Ease animation="fade-in">
        <h1>Welcome!</h1>
      </Ease>
      
      {/* State triggered animation */}
      <Ease animation="bounce" trigger={show}>
        <div className="card">I bounce when you click!</div>
      </Ease>

      {/* Hover animation with delay */}
      <Ease animation="pulse" hover={true} delay={100}>
        <button>Hover Me</button>
      </Ease>
    </div>
  );
}

export default App;
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `animation` | `string` | `'fade-in'` | The EaseMotion animation name (e.g. `'slide-up'`, `'bounce'`). |
| `trigger` | `boolean` | `undefined` | Triggers the animation based on state. If omitted, animates on mount. |
| `loop` | `boolean` | `false` | Adds the loop modifier if applicable. |
| `delay` | `number` | `0` | Animation delay in milliseconds. |
| `speed` | `'fast' \| 'normal' \| 'slow'` | `'normal'` | Animation speed modifier. |
| `hover` | `boolean` | `false` | If true, animation only plays on mouse hover. |
| `as` | `React.ElementType` | `'div'` | The HTML tag or React component to render. |
| `className` | `string` | `''` | Additional CSS classes. |
