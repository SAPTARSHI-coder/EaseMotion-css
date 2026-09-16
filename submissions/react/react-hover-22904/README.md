# React `<Hover />` Component (#22904)

This submission introduces the highly versatile React `<Hover />` wrapper component for the EaseMotion framework, fulfilling Issue **#22904**. 

It empowers React developers to compose intricate hover micro-interactions effortlessly using declarative boolean props without managing manual CSS state or bloated utility class lists.

## Features
- **Declarative Props**: Apply effects using simple booleans (`lift`, `scale`, `glow`, `shake`).
- **Parametric Tuning**: Customize the specific values using `glowColor`, `scaleAmount`, and `liftAmount`.
- **Compound Behaviors**: Stack multiple props (e.g., `<Hover lift scale>`) to automatically aggregate compound CSS transforms.
- **State Management**: Built entirely on standard React `useState`, applying native smooth transitions bound precisely to EaseMotion easing curves.

## Usage
Simply wrap any React element with the `<Hover>` component:

```jsx
import { Hover } from './Hover';

const MyPage = () => (
  <div className="grid">
    {/* Simple Lift */}
    <Hover lift>
      <div className="ease-card">Lift Me</div>
    </Hover>

    {/* Compound Scale + Glow */}
    <Hover scale glow glowColor="rgba(56, 189, 248, 0.6)">
      <div className="ease-card">Scale & Glow Me</div>
    </Hover>
  </div>
);
```

## Demo
To ensure strict compliance with the automated PR bot rules, a standalone `demo.html` has been provided inside this `submissions` folder. 
It uses Babel via CDN to dynamically compile the JSX and run the React component directly in your browser. Just double-click `demo.html` to test it!
