# React `<AnimateGroup />` Component (#22908)

This submission fulfills Issue **#22908** by introducing the `<AnimateGroup />` component for React.

It elegantly orchestrates staggered animations across a list of children without requiring any hardcoded CSS delay classes.

## Features
- **Dynamic Stagger Math**: Uses `React.cloneElement` under the hood to automatically inject computed `animationDelay` styles onto each direct child based on its index.
- **Parametric Delays**: Exposes `staggerDelay` (the ms delay between each child) and `initialDelay` (the ms delay before the first child animates).
- **Polymorphic Container**: Uses an `as` prop (e.g. `as="ul"`, `as="div"`) so you can render semantically correct list containers without breaking your layout.
- **Zero Framework Bloat**: Because it computes the delays dynamically in JS, there is absolutely no need to clutter `easemotion.css` with `.ease-delay-100` through `.ease-delay-1000` utility classes!

## Usage
Simply wrap a map of elements in the `<AnimateGroup>` component:

```jsx
import { AnimateGroup } from './AnimateGroup';

const MyList = ({ items }) => (
  <AnimateGroup 
    as="ul" 
    animation="ease-fade-in" 
    staggerDelay={150} 
    initialDelay={200}
  >
    {items.map(item => (
      <li key={item.id} className="ease-card">{item.title}</li>
    ))}
  </AnimateGroup>
);
```

## Demo
To ensure strict compliance with the automated PR bot rules, a standalone `demo.html` has been provided inside this `submissions` folder. 
It uses Babel via CDN to dynamically compile the JSX and run the React component directly in your browser. Just double-click `demo.html` to see the staggered list animation in action!
