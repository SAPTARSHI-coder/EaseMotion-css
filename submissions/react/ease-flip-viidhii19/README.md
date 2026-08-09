## Zero-Dependency React useFLIP Hook (ease-flip-viidhii19)

### What does this do?
This is a lightweight, zero-dependency custom React hook (`useFLIP`) that seamlessly animates list reordering and DOM node swaps using the physics-based FLIP technique.

### How does the FLIP technique work?
FLIP stands for **First, Last, Invert, Play**:
- **First**: Before the state changes, we record the exact `getBoundingClientRect()` of all children in the list.
- **Last**: React applies the new state and updates the DOM. We measure the new positions.
- **Invert**: If an element moved, we calculate the delta and instantly apply a `transform: translate()` with `transition: none` to snap it back to its original visual position before the browser paints.
- **Play**: We use double `requestAnimationFrame` to remove the inline transform and restore a smooth CSS transition, allowing the element to glide gracefully to its new position.

### How is it used?
Provide a `ref` to your list container and pass your array state as the dependency. Make sure your child elements have a `data-key` attribute that matches their React `key`.

```jsx
import { useState, useRef } from 'react';
import { useFLIP } from './useFLIP';

function SortableList() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const listRef = useRef(null);

  // Attach the hook
  useFLIP(listRef, [items]);

  return (
    <div ref={listRef}>
      {items.map(item => (
        <div key={item} data-key={item} className="ease-card">
          {item}
        </div>
      ))}
    </div>
  );
}
```

### Why is it useful?
It aligns perfectly with EaseMotion's philosophy of avoiding massive, heavy libraries like Framer Motion for simple tasks. It uses native React hooks and DOM APIs to achieve a 60fps smooth physics-based layout recalculation without any external dependencies, ensuring high performance.
