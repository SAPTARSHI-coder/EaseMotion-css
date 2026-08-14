# React Component: Interactive Code Block Snippet Copy Button (#28041)

A modular, copy-paste ready React component for the EaseMotion CSS framework that renders a sleek code block featuring a beautifully animated, physics-based "Copy to Clipboard" button interaction.

## 📦 What's included?

- `CodeBlock.jsx`: The core React component utilizing the modern `navigator.clipboard` API to copy text, managing success states via React hooks.
- `style.css`: The raw CSS file powering the dark-mode layout, hover reveals, and the crucial `cubic-bezier` icon swap animation.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone (no build step required for preview).

## 🛠 Features

- **Clipboard API**: Uses the modern, secure `navigator.clipboard.writeText()` API.
- **Physics-Based Icon Swap**: Instead of instantly swapping SVG icons, the copy icon spins and scales out while the success checkmark spins and scales in, utilizing a custom EaseMotion `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve.
- **Auto-Reset**: The success state automatically reverts back to the default "Copy" state after 2.5 seconds.
- **Hover Intent**: The copy button hides by default on desktop to keep the code clean, sliding in smoothly only when the user hovers over the code block.
- **Mobile Friendly**: The copy button is always visible on touch devices where hover isn't possible.
- **Zero External Dependencies**: Built entirely with standard React and CSS.

## 🚀 How to use

1. Copy `CodeBlock.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Import and use the component:

```jsx
import React from 'react';
import CodeBlock from './CodeBlock';
import './style.css'; // Adjust path as needed

const App = () => {
  const codeString = `console.log("EaseMotion is awesome!");`;

  return (
    <div className="container">
      <CodeBlock 
        code={codeString}
        language="javascript"
        filename="script.js"
      />
    </div>
  );
};

export default App;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about delighting users in the details. A standard "Copy" button works, but an interactive, animated button provides instant, satisfying visual feedback. 

By utilizing absolute positioning and scaling transforms, we overlay two inline SVGs (the copy icon and the checkmark). When the React state updates to `isCopied=true`, CSS transitions cross-fade and spin the icons on their center axis simultaneously. This creates a highly tactile micro-interaction that rewards the user for clicking, elevating the perceived quality of your documentation or blog.
