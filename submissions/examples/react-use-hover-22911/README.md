# React `useHover` Hook (#22911)

This submission fulfills Issue **#22911** by providing a highly robust custom React hook for declaratively generating EaseMotion hover interactions.

While the `<Hover>` wrapper component is useful, this `useHover` hook decouples the interaction state completely. It allows developers to attach complex hover styling and keyframes to any specific `ref` directly inside their components, maintaining full semantic layout control without extra wrapper nodes.

## Features
- **Passive Listeners**: Safely utilizes `passive: true` on native `mouseenter` and `mouseleave` event listeners to guarantee peak UI responsiveness and avoid breaking scrolling threads.
- **Dynamic Style Generation**: You pass simple boolean props (`lift`, `scale`, `glow`, `shake`), and the hook automatically computes the exact `transform` and `box-shadow` CSS rules, perfectly synced to the EaseMotion transition variables.
- **Parametric Tuning**: Includes fallback props like `scaleAmount`, `liftAmount`, and `glowColor` for fine-tuning.
- **State Export**: Returns `isHovered` natively, so you can easily toggle internal component state, text, or SVG icons while hovering!

## Usage
Simply call the hook and attach the returned `ref`, `className`, and `style` to your element:

```jsx
import { useHover } from './useHover';

const MyButton = () => {
  const hoverState = useHover({ 
    scale: true, 
    glow: true,
    glowColor: "rgba(56, 189, 248, 0.6)" 
  });

  return (
    <button 
      ref={hoverState.ref} 
      className={`ease-btn ${hoverState.className}`}
      style={hoverState.style}
    >
      {hoverState.isHovered ? "I am glowing!" : "Hover me"}
    </button>
  );
};
```

## Demo
To ensure strict compliance with the automated PR bot rules, a standalone `demo.html` has been provided inside this `submissions` folder. 
It uses Babel via CDN to dynamically compile the JSX and run the React code directly in your browser. Just double-click `demo.html` to interact with three different combinations of the `useHover` hook!
