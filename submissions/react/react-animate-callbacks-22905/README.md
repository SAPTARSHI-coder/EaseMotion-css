# React `<Animate />` Component Callback Support (#22905)

This submission fulfills Issue **#22905** by extending the core React `<Animate />` wrapper to support native React animation lifecycle callbacks.

## Features
- **Lifecycle Integration**: Seamlessly maps `onAnimationStart` and `onAnimationEnd` props down to the native React `div` wrapper.
- **Enhanced Interactivity**: Developers can now hook into the exact start and end moments of EaseMotion CSS keyframes to trigger state changes, sequential animations, or network requests.
- **Zero Overhead**: Directly leverages React's synthetic event system; absolutely no `setTimeout` or `requestAnimationFrame` polling is required.

## Usage
Simply pass the callbacks as standard React props:

```jsx
import { Animate } from './Animate';
import { useState } from 'react';

const MyPage = () => {
  const [status, setStatus] = useState("Waiting...");

  return (
    <Animate 
      animation="ease-fade-in"
      onAnimationStart={() => setStatus("Animating!")}
      onAnimationEnd={() => setStatus("Finished!")}
    >
      <div className="ease-card">Watch my status</div>
    </Animate>
  );
};
```

## Demo
To ensure strict compliance with the automated PR bot rules, a standalone `demo.html` has been provided inside this `submissions` folder. 
It uses Babel via CDN to dynamically compile the JSX and run the React component directly in your browser. Just double-click `demo.html` and watch the status badge automatically update as the component animates!
