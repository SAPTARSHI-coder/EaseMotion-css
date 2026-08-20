# React Pure CSS Number Counter

Animating a statistic on a landing page (e.g., ticking up from `0` to `100,000` users) is usually done by writing a `requestAnimationFrame` loop in JavaScript or importing a library like `react-countup`. This causes constant React re-renders and JS payload bloat. 

This component achieves the exact same effect purely in CSS without a single JavaScript loop!

## Installation

Ensure you have EaseMotion CSS installed and imported into your project. Copy `NumberCounter.jsx` and `style.css` into your components directory.

## Features
- **Zero JS Animation Loops:** Uses the modern CSS `@property` syntax to animate integer values natively in the browser's hardware-accelerated CSS engine.
- **No React Re-renders:** After the initial mount, React does absolutely nothing while the number counts up, freeing the main thread entirely.
- **Prefix/Suffix Support:** Easily add `$` or `+` to your animated numbers.

## API / Props Table

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| `to` | `number` | `100` | The final target number to count up to. |
| `duration` | `number` | `2` | How long the counting animation should take (in seconds). |
| `prefix` | `string` | `''` | Text to display before the number (e.g., `$`). |
| `suffix` | `string` | `''` | Text to display after the number (e.g., `%`). |

## Usage

```jsx
import React from 'react';
import NumberCounter from './NumberCounter';

export default function App() {
  return (
    <div className="metrics-grid">
      
      <div className="metric">
        <p>Satisfied Customers</p>
        <NumberCounter to={1000} suffix="+" duration={3} />
      </div>

      <div className="metric">
        <p>Revenue Generated</p>
        <NumberCounter prefix="$" to={500000} duration={2.5} />
      </div>
      
    </div>
  );
}
```

## How it works (and why it fits EaseMotion)
By defining a custom CSS variable (`--ease-num`) with the modern `@property` rule and setting its syntax to `<integer>`, we explicitly tell the browser's CSS engine that this variable isn't just a generic string—it's a number. This revelation allows standard CSS `transition` rules to mathematically interpolate between two values! 

The React component simply mounts with `--ease-num: 0`, and immediately updates its inline style to `--ease-num: 1000`. The browser natively animates the integer over the specified duration. The number is then rendered visually using a CSS `counter-reset` and `content: counter()` trick on a pseudo-element. Perfect, zero-JS animation performance.
