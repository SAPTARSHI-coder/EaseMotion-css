# Tailwind CSS + EaseMotion Coexistence Guide

EaseMotion CSS is specifically designed to work perfectly alongside utility-first frameworks like Tailwind CSS.

## How it works

Tailwind focuses on **layout, typography, and colors**. 
EaseMotion focuses on **animations and micro-interactions**.

Because EaseMotion explicitly scopes all of its classes under the `.ease-*` prefix, there is absolutely zero risk of class name collisions with Tailwind CSS.

## The React Wrapper Approach

When using the React wrapper, simply pass your Tailwind utility classes into the `className` prop. The wrapper intelligently merges them with the dynamically generated EaseMotion classes.

```jsx
import { Animate } from 'easemotion-react';

export default function Card() {
  return (
    <Animate 
      type="fade-in" 
      hover="lift"
      // Tailwind classes passed here:
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
    >
      <h2 className="text-xl font-bold text-gray-900">
        Tailwind + EaseMotion
      </h2>
      <p className="text-gray-500 mt-2">
        A perfect match.
      </p>
    </Animate>
  );
}
```

## JIT Compiler Notice

If you are importing EaseMotion via a `<link rel="stylesheet">` tag, Tailwind's JIT compiler will ignore the `.ease-*` classes. This is exactly what you want. Do not add EaseMotion classes to your `tailwind.config.js` safelist.
