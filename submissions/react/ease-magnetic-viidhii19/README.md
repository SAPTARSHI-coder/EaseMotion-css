# Magnetic Hover Button (ease-magnetic-viidhii19)

A zero-dependency React component that creates a tactile, physics-based "magnetic" hover effect. The button physically pulls toward the user's cursor when hovered and elastically snaps back when the mouse leaves.

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `strength` | `number` | `30` | Controls how strongly the element is pulled toward the cursor. |
| `children` | `node` | (required) | The element(s) to apply the magnetic effect to. |
| `className` | `string` | `''` | Optional extra CSS classes applied to the wrapper. |

## Usage Example

```jsx
import React from 'react';
import MagneticButton from './MagneticButton';
import './style.css'; // Make sure to import the styles

const App = () => {
  return (
    <MagneticButton strength={40} className="my-custom-wrapper">
      <button className="ease-btn ease-btn-primary ease-btn-lg ease-btn-pill">
        Hover Me
      </button>
    </MagneticButton>
  );
};

export default App;
```

## Implementation Details

This component relies entirely on native DOM mathematics and React state, ensuring high performance without requiring external physics libraries.

When the mouse moves over the component (`onMouseMove`), it triggers the following calculation:
1. It retrieves the element's bounding box using `getBoundingClientRect()`.
2. It calculates the component's exact center coordinates on the page.
3. It finds the delta between the center of the component and the `clientX` / `clientY` cursor coordinates.
4. It normalizes this distance by dividing it by the element's width/height, then multiplies it by the `strength` prop.
5. The result updates the React state `{x, y}` which is injected as an inline `transform: translate(x, y)` onto the child wrapper.

Combined with the `ease-magnetic-content` CSS transition, this provides a highly elastic, 60fps physics pull.
