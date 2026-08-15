# EaseDrawerPanel React Component

A slide-out side drawer or bottom sheet panel with touch drag gestures, backdrop overlay, and snap points.

## Usage

```jsx
import React, { useState } from 'react';
import EaseDrawerPanel from './EaseDrawerPanel';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Drawer</button>
      
      <EaseDrawerPanel 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        direction="bottom"
      >
        <h2>Drawer Content</h2>
        <p>This is a swipeable drawer.</p>
      </EaseDrawerPanel>
    </div>
  );
};
```

## Why is it useful?

Mobile web apps lack native-feeling slide-out sheet drawers that support touch-swipe dismissal and smooth momentum sliding. This component solves that problem by integrating React touch events with EaseMotion's utilities.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `isOpen` | boolean | `false` | Whether the drawer is open. |
| `onClose` | function | `undefined` | Callback fired when the drawer should close. |
| `direction` | string | `'bottom'` | Slide direction: `'bottom'`, `'left'`, `'right'`. |
| `children` | node | `null` | Drawer content. |
