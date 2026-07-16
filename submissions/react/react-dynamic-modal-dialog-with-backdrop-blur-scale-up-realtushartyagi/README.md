# React Dynamic Modal Dialog with Backdrop Blur & Scale-Up

A modular, copy-paste ready React component that provides a beautiful modal dialog with a frosted glass backdrop effect and smooth scale-up entrance animation using **EaseMotion CSS**.

## Files
- `DynamicModalDialog.jsx` – The core React component handling state, event propagation, and body scroll locking.
- `style.css` – Custom EaseMotion CSS styles defining the keyframe animations (`easeFadeIn`, `easeScaleUp`) and backdrop blur filter.
- `demo.html` – A standalone HTML file demonstrating the modal using Babel and React CDNs.

## Installation
1. Copy the `react-dynamic-modal-dialog-with-backdrop-blur-scale-up-realtushartyagi` folder into your project's `submissions/react/` directory (or wherever your components live).
2. Import the component:
   ```jsx
   import DynamicModalDialog from "./DynamicModalDialog.jsx";
   ```
3. Include the stylesheet in your HTML or import it in your bundler:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
```jsx
import React, { useState } from 'react';
import DynamicModalDialog from './DynamicModalDialog';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      <DynamicModalDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Hello EaseMotion!</h2>
        <p>This modal scales up smoothly while the background blurs.</p>
      </DynamicModalDialog>
    </div>
  );
}
```

## Props
| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | `boolean` | Determines if the modal is currently visible. |
| `onClose` | `() => void` | Callback fired when clicking the backdrop or close button. |
| `children` | `ReactNode` | The content rendered inside the modal dialog box. |

## Why it fits EaseMotion CSS
This component adheres to the EaseMotion philosophy by delegating all animation logic to CSS. The React component purely handles mounting/unmounting logic and accessibility (scroll locking), while the CSS handles the `backdrop-filter: blur(8px)` and fluid cubic-bezier scale transitions.

## Demo
Open `demo.html` directly in a web browser—no server needed.

---

> **Note:** The PR should only modify files inside `submissions/react/react-dynamic-modal-dialog-with-backdrop-blur-scale-up-realtushartyagi/`. No changes to `core/` or `components/`.
