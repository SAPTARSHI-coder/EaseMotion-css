# React `useReducedMotion` Hook (#22912)

This submission fulfills Issue **#22912** by introducing the `useReducedMotion` custom React hook, a critical accessibility feature for the EaseMotion ecosystem.

Web accessibility (a11y) dictates that we must respect a user's operating system settings when they request reduced motion (to prevent vestibular motion sickness). This hook elegantly solves this natively in React.

## Features
- **SSR Safe**: Safely checks for `window` before attempting to access the `matchMedia` API, ensuring it won't crash your server-rendered Next.js or Remix apps.
- **Live Updating**: Uses a passive event listener attached to the `MediaQueryList` object. If a user toggles their OS "Reduce Motion" setting while the app is running, the hook state updates immediately and triggers a re-render!
- **Legacy Fallbacks**: Includes fallback support for older browsers that still use the deprecated `.addListener()` method instead of the modern `.addEventListener()`.

## Usage
Simply call the hook at the top of your component. It returns a boolean. Use this boolean to conditionally apply EaseMotion classes or halt complex interactions:

```jsx
import { useReducedMotion } from './useReducedMotion';

const LoadingSpinner = () => {
  const prefersReducedMotion = useReducedMotion();

  // If the user requires reduced motion, we completely remove the spinning class!
  const loaderClass = prefersReducedMotion ? "" : "ease-spin";

  return (
    <div className={`loader-ring ${loaderClass}`}></div>
  );
};
```

## Demo
To ensure strict compliance with the automated PR bot rules, a standalone `demo.html` has been provided inside this `submissions` folder. 
It uses Babel via CDN to dynamically compile the JSX and run the React code directly in your browser. Just double-click `demo.html` to see the live output. Try opening your OS Accessibility settings and toggling "Reduce Motion" on/off—you'll see the demo update in real-time!
