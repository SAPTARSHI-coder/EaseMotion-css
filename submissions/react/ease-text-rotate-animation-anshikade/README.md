# Text Rotate Animation (ease-text-rotate-animation-anshikadev)

A lightweight React component that smoothly rotates through a list of text phrases using a vertical slide animation. It is ideal for hero sections, landing pages, and dynamic headings.

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `phrases` | `string[]` | `['Faster', 'Smoother', 'Easier', 'Smarter']` | Array of text phrases displayed one after another. |
| `interval` | `number` | `2500` | Time between phrase transitions in milliseconds. |
| `prefix` | `string` | `'Build things'` | Static text displayed before the rotating phrases. |

## Usage Example

```jsx
import React from "react";
import { TextRotateAnimation } from "./TextRotateAnimation";
import "./style.css";

const App = () => {
  return (
    <TextRotateAnimation
      prefix="Deploy applications"
      phrases={["Instantly", "Globally", "Securely"]}
      interval={3000}
    />
  );
};

export default App;
```

## Implementation Details

This component uses React state and CSS transforms to create a smooth text rotation effect without relying on external animation libraries.

During each interval:

1. The current phrase index is updated using React state.
2. CSS transforms (`translateY` and `rotateX`) animate the transition between phrases.
3. The animation runs smoothly using hardware-accelerated CSS transforms.
4. The rotation continues automatically until the component is unmounted.

This approach keeps the component lightweight, performant, and easy to customize for different UI designs.