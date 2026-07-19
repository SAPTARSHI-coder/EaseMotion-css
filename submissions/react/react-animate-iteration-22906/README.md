# React `<Animate />` Component Iteration Support (#22906)

This submission fulfills Issue **#22906** by extending the core React `<Animate />` wrapper to support dynamic animation iterations.

## Features
- **Dynamic Iterations**: Developers can now pass a number (e.g. `iteration={5}`) or a string (e.g. `iteration="infinite"`) to control exactly how many times an animation loops.
- **Inline Styling Mapping**: Internally, the component dynamically maps this prop to the `animationIterationCount` inline style, gracefully circumventing the need for an exhaustive list of numbered utility classes inside the core framework.
- **Fully Backwards Compatible**: It defaults to `1`, preserving existing behavior perfectly.

## Usage
Simply pass the `iteration` prop:

```jsx
import { Animate } from './Animate';

const MyPage = () => (
  <div className="grid">
    {/* Infinite Bounce */}
    <Animate animation="ease-bounce" iteration="infinite">
      <div className="ease-card">I bounce forever!</div>
    </Animate>

    {/* Exact Number of Pulses */}
    <Animate animation="ease-pulse" iteration={3}>
      <div className="ease-card">I pulse exactly 3 times!</div>
    </Animate>
  </div>
);
```

## Demo
To ensure strict compliance with the automated PR bot rules, a standalone `demo.html` has been provided inside this `submissions` folder. 
It uses Babel via CDN to dynamically compile the JSX and run the React component directly in your browser. Just double-click `demo.html` to see the infinite loop and the numbered loop in action!
