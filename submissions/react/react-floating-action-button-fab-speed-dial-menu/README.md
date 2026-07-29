# React Component: Floating Action Button (FAB) Speed Dial Menu (#28016)

A modular, copy-paste ready React component for the EaseMotion CSS framework that renders a Material Design-inspired Speed Dial menu. It features highly tactile spring animations, staggered item reveals, and smooth icon morphing.

## 📦 What's included?

- `FabSpeedDial.jsx`: The core React component that handles the `isOpen` state, click-outside listeners, and orchestrates the staggered CSS transition delays based on array indexes.
- `style.css`: The raw CSS file powering the layout orientations, the main FAB cross morph animation, the staggered spring entrances of the action buttons, and hover tooltips.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone (no build step required for preview).

## 🛠 Features

- **Staggered Spring Entrance**: When the FAB is clicked, the sub-actions don't just appear simultaneously. React calculates a `transitionDelay` based on their index, and CSS uses a `cubic-bezier(0.34, 1.56, 0.64, 1)` curve so they pop out sequentially like a deck of cards.
- **Icon Morphing**: The main FAB plus (`+`) icon elegantly spins 135 degrees into an `X` when opened, utilizing CSS transforms.
- **Multi-Directional Layouts**: By simply changing the `direction` prop to `up`, `down`, `left`, or `right`, the CSS Flexbox orientation and the animation origin points intelligently adapt.
- **Accessible Tooltips**: Each sub-action features a styled tooltip that reveals smoothly on hover.
- **Zero External Dependencies**: Built entirely with standard React and CSS. No heavy Material UI libraries required.

## 🚀 How to use

1. Copy `FabSpeedDial.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Import and use the component:

```jsx
import React from 'react';
import FabSpeedDial from './FabSpeedDial';
import './style.css'; 

const App = () => {
  // Define your actions
  const actions = [
    { 
      id: 'copy', 
      label: 'Copy link', 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> 
    },
    { 
      id: 'share', 
      label: 'Share', 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg> 
    }
  ];

  const handleAction = (actionId) => {
    console.log(`User clicked: ${actionId}`);
  };

  return (
    <div style={{ position: 'fixed', bottom: 32, right: 32 }}>
      <FabSpeedDial 
        actions={actions}
        direction="up" // 'up', 'down', 'left', 'right'
        onActionClick={handleAction}
      />
    </div>
  );
};

export default App;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making interfaces feel playful, tactile, and highly responsive. 

A speed dial menu relies heavily on timing. If all items appear instantly, it feels overwhelming. By combining React's ability to inject inline `transitionDelay` styles dynamically with EaseMotion's heavily tuned `cubic-bezier` CSS spring curves, we achieve a staggering effect that guides the user's eye naturally from the main button to the newly revealed actions. It feels incredibly premium, yet is implemented with remarkably lightweight code.
