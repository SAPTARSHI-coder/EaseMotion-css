# React `<Animate />` Component Direction Support (#22907)

This submission fulfills Issue **#22907** by extending the core React `<Animate />` wrapper to support CSS animation directions dynamically.

## Features
- **Dynamic Directionality**: Developers can now pass `direction="alternate"`, `direction="reverse"`, or `direction="alternate-reverse"` as a React prop to completely invert or yoyo an EaseMotion animation.
- **Inline Styling Mapping**: Just like the `iteration` prop, this maps directly to the `animationDirection` inline style natively, completely avoiding any need to bloat the main `easemotion.css` library with dozens of redundant directional utility classes!
- **Fully Backwards Compatible**: It defaults to `normal`, preserving existing EaseMotion keyframe sequences perfectly.

## Usage
Simply pass the `direction` prop alongside your animation, typically combined with infinite iterations:

```jsx
import { Animate } from './Animate';

const MyPage = () => (
  <div className="grid">
    {/* Infinite Yoyo Bounce */}
    <Animate animation="ease-bounce" iteration="infinite" direction="alternate">
      <div className="ease-card">I bounce up and down seamlessly!</div>
    </Animate>

    {/* Reversed Slide Up */}
    <Animate animation="ease-slide-up" direction="reverse">
      <div className="ease-card">I actually slide DOWN and fade OUT!</div>
    </Animate>
  </div>
);
```

## Demo
To ensure strict compliance with the automated PR bot rules, a standalone `demo.html` has been provided inside this `submissions` folder. 
It uses Babel via CDN to dynamically compile the JSX and run the React component directly in your browser. Just double-click `demo.html` to see the three different directional configurations side-by-side!
