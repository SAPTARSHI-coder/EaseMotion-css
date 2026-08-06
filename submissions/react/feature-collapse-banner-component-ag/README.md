# Collapse Banner Component (React)

## Description
The `CollapseBanner` is a React component that displays a dismissible informational banner (e.g., for system alerts or notifications). When dismissed, it smoothly collapses its height and fades out before unmounting from the DOM, avoiding jarring layout shifts.

## Installation & Usage
Copy `CollapseBanner.jsx` and `style.css` into your React project.

```jsx
import React, { useState } from 'react';
import CollapseBanner from './CollapseBanner';

function App() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div style={{ padding: '2rem' }}>
      {showBanner && (
        <CollapseBanner 
          type="info" 
          onDismiss={() => setShowBanner(false)}
        >
          <strong>Update Available:</strong> A new version of the dashboard is ready.
        </CollapseBanner>
      )}
    </div>
  );
}

export default App;
```

## Props
- `children` (ReactNode): The text or elements to display inside the banner.
- `defaultVisible` (boolean, optional): Whether the banner starts visible (default: `true`).
- `onDismiss` (function, optional): A callback executed after the collapse animation finishes and the banner is about to be unmounted.
- `type` (string, optional): Sets the visual theme. Valid values: `'info'`, `'success'`, `'warning'`, `'error'`. Default is `'info'`.

## How It Works
- The component manages an internal `isCollapsing` state.
- When the close button is clicked, `isCollapsing` is set to `true`, which applies the `.collapsing-ag` CSS class.
- The `.collapsing-ag` class triggers CSS transitions on `max-height`, `opacity`, and `margin-bottom` bringing them to 0.
- The React `onTransitionEnd` event listener waits specifically for the `max-height` transition to finish. Once it does, it updates the `isVisible` state to `false`, safely unmounting the element from the DOM without cutting the animation short.

## Accessibility Considerations
- **ARIA:** The banner wrapper uses `role="alert"` so screen readers will announce its presence immediately.
- **Buttons:** The dismiss button uses a clear `aria-label="Dismiss banner"`.
- **Reduced Motion:** The `prefers-reduced-motion: reduce` media query in `style.css` prevents the `max-height` collapse effect, ensuring the layout doesn't shift dynamically for users who prefer no motion. A near-instant opacity transition (`0.01s`) is kept intact so the React `onTransitionEnd` logic still executes properly to unmount the component.
