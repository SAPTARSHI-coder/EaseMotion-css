## Native React View Transitions Hook (ease-view-transition-viidhii19)

Smoothly transitioning between different views or routes in React typically requires heavy routing animation libraries. The modern web platform recently introduced the native `document.startViewTransition()` API, which allows the browser to take a screenshot of the old DOM and smoothly morph it into the new DOM.

This submission implements a lightweight, zero-dependency React hook (`useViewTransition`) that wraps state updates in the native View Transitions API. It maps the morph duration to EaseMotion's CSS timing variables for a cohesive design language.

### Implementation Details

The `useViewTransition` hook leverages `document.startViewTransition()` in tandem with React's `flushSync`. Using `flushSync` is critical because it forces React to synchronously apply state updates to the DOM. This guarantees that the View Transitions API captures the accurate "new" DOM snapshot immediately after the state change, preventing asynchronous rendering race conditions.

If the browser does not support `document.startViewTransition`, the hook gracefully degrades and executes the callback immediately, ensuring backward compatibility.

### Usage Example

```jsx
import { useState } from 'react';
import { useViewTransition } from './useViewTransition';

function App() {
  const [view, setView] = useState('list');
  const morph = useViewTransition();

  const toggleView = () => {
    morph(() => {
      setView(view === 'list' ? 'detail' : 'list');
    });
  };

  return (
    <div>
      <button onClick={toggleView}>Toggle View</button>
      {view === 'list' ? <ListView /> : <DetailView />}
    </div>
  );
}
```

### Morphing Specific Elements

To seamlessly morph individual elements across views, you must assign a unique `view-transition-name` to the element in both states.

```jsx
// In the List component
<div style={{ viewTransitionName: 'active-card-viidhii19' }}>
  Card Content
</div>

// In the Detail component
<div style={{ viewTransitionName: 'active-card-viidhii19' }}>
  Detailed Card Content
</div>
```
