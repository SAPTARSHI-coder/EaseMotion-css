# React `useAnimation` Hook (#22909)

This submission fulfills Issue **#22909** by providing a highly robust custom React hook for programmatic EaseMotion animation control.

While wrapper components like `<Animate>` are great for declarative mount/unmount animations, UI interactions (like button clicks, form submissions, or error states) often require imperative programmatic triggers. The `useAnimation` hook bridges this gap elegantly.

## Features
- **Imperative Control**: Exposes simple `play()` and `reset()` functions.
- **Auto-Reset Architecture**: Internally binds an `animationend` event listener via `useEffect`. This ensures the `isPlaying` state is automatically toggled off exactly when the CSS keyframes finish, meaning you can replay the animation over and over again without manual timers!
- **State Driven**: Returns a `className` string that dynamically toggles the EaseMotion utility classes when playing.

## Usage
Simply call the hook and attach the returned `ref` and `className` to your element:

```jsx
import { useAnimation } from './useAnimation';

const MyForm = () => {
  const errorAnim = useAnimation({ animation: "ease-shake" });

  const handleSubmit = () => {
    // Oh no, form validation failed! Trigger the shake!
    errorAnim.play();
  };

  return (
    <div>
      <input 
        ref={errorAnim.ref} 
        className={`ease-input ${errorAnim.className}`} 
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
```

## Demo
To ensure strict compliance with the automated PR bot rules, a standalone `demo.html` has been provided inside this `submissions` folder. 
It uses Babel via CDN to dynamically compile the JSX and run the React code directly in your browser. Just double-click `demo.html` to test out the interactive programmatic buttons!
