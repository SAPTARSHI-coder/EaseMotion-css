# MagneticButton — `ease-magnetic-viidhii19`

A zero-dependency React functional component that creates a smooth, physics-inspired **magnetic hover effect**. When the user's cursor enters the button, it physically pulls toward the cursor; when the cursor leaves, it elastically snaps back to its original position.

---

## Features

- **No external dependencies** — pure React + DOM APIs
- **Accessible** — renders a native `<button>` element; supports all standard button props
- **Configurable strength** — tune how strongly the button follows the cursor
- **Smooth transitions** — uses `cubic-bezier` easing for a natural elastic return
- **60fps performance** — direct `style.transform` mutation (no React re-renders on mouse move)

---

## How It Works

1. `useRef` attaches directly to the `<button>` DOM node.
2. On `onMouseMove`, `getBoundingClientRect()` retrieves the button's current position and size.
3. The offset between the cursor and the button's **center** is calculated:
   ```js
   const x = e.clientX - rect.left - rect.width  / 2;
   const y = e.clientY - rect.top  - rect.height / 2;
   ```
4. Only a **fraction** of that distance is applied as a transform:
   ```js
   btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
   ```
5. On `onMouseLeave`, the transform is reset to `translate(0px, 0px)`. The CSS `transition` on `.ease-magnetic-btn` animates the return smoothly.

---

## Props

| Prop        | Type              | Default  | Description                                                  |
| :---------- | :---------------- | :------- | :----------------------------------------------------------- |
| `children`  | `React.ReactNode` | required | Content rendered inside the button.                          |
| `className` | `string`          | `''`     | Extra CSS class(es) appended to the button element.          |
| `strength`  | `number`          | `0.25`   | Fraction of cursor offset applied as translation (0–1 range recommended). |
| `...props`  | `any`             | —        | All other props (e.g. `onClick`, `aria-label`) forwarded to `<button>`. |

---

## Usage Example

```jsx
import React from 'react';
import MagneticButton from './MagneticButton';

const App = () => (
  <MagneticButton strength={0.3} onClick={() => alert('Clicked!')} aria-label="Submit">
    Hover Me
  </MagneticButton>
);

export default App;
```

---

## Expected Behavior

| Interaction       | Result                                                       |
| :---------------- | :----------------------------------------------------------- |
| Cursor enters     | Button glides toward cursor proportionally to `strength`     |
| Cursor moves      | Button tracks cursor continuously in real-time               |
| Cursor leaves     | Button snaps back to `translate(0px, 0px)` with easing      |
| Tab / focus       | Native `:focus-visible` outline is preserved                 |

---

## Required CSS

Add the following to your stylesheet (or `style.css` in this folder):

```css
.ease-magnetic-btn {
  transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
  will-change: transform;
}
```

---

## Folder Structure

```
ease-magnetic-viidhii19/
├── MagneticButton.jsx   # Reusable React component
├── demo.html            # Standalone browser demo (React via CDN)
├── style.css            # Transition & base styles for .ease-magnetic-btn
└── README.md            # This file
```
