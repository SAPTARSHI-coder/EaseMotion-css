# Typewriter Cleanup Fix (#40254)

Fixes the memory leak in the Typewriter Effect component by adding proper `useEffect` cleanup.

## What does this do?

A React Typewriter component that types out text character by character. This version fixes the memory leak from issue #40254 by ensuring all `setTimeout` calls are properly cleaned up when the component unmounts or the `text` prop changes.

## How is it used?

```jsx
import Typewriter from './Typewriter';

function App() {
  return <Typewriter text="Hello, World!" speed={50} />;
}
```

## Why is it useful?

Without proper cleanup, pending `setTimeout` callbacks can fire after a component unmounts, causing memory leaks and stale `setState` calls. This fix uses `useRef` to store the timer reference and always returns a cleanup function from `useEffect`, following React best practices.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | required | The text to type out |
| `speed` | number | 50 | Milliseconds between each character |

## Changes from original

1. **`useRef` for timer storage** — prevents stale closure issues
2. **Always returns cleanup** — `useEffect` now unconditionally clears the timer
3. **Reset on `text` change** — separate `useEffect` resets state when `text` prop updates

## Files

- `Typewriter.jsx` — Fixed React component with proper cleanup
- `demo.html` — Self-contained demo with Babel + React CDN
- `style.css` — Demo styles
- `README.md` — This file