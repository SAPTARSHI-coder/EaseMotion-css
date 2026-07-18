# Typewriter Effect (with proper cleanup)

A drop-in React typewriter-effect component that correctly cleans up its
`setInterval` / `setTimeout` on unmount and on every effect re-run.

This is added as a new, standalone example and does not modify or
replace the existing typewriter submission, per the repo's contribution
rules (no edits/deletions to existing files — new examples only).

## Fix used here

```js
useEffect(() => {
  const timer = setInterval(() => {
    // advance the typed text
  }, speed);

  return () => clearInterval(timer); // cleanup
}, [index, text, speed, loop, pauseMs]);
```

## Usage

```jsx
import TypewriterCleanupFix from "./Typewriter";

<TypewriterCleanupFix text="Cleans up after itself." speed={80} loop pauseMs={1500} />
```

## Props

| Prop      | Type    | Default            | Description                     |
|-----------|---------|---------------------|----------------------------------|
| text      | string  | "Hello, world!"     | Text to type out.                |
| speed     | number  | 100                 | Ms between characters.           |
| loop      | boolean | false               | Restart after finishing.         |
| pauseMs   | number  | 1200                | Pause before restart, if looping.|