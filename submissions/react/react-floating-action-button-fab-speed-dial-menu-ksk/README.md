# React Floating Action Button (FAB) Speed Dial Menu

A copy-paste ready, modular React component for a Floating Action Button (FAB) that expands into a speed dial list of actions when clicked. Works with zero external dependencies outside React.

---
*Created for GSSoC-26 — Resolves #40231.*

## Installation

Simply copy `FABSpeedDial.jsx` and `style.css` into your React project components directory.

## Props Reference

| Prop Name | Type | Default Value | Description |
| :--- | :--- | :---: | :--- |
| `actions` | `Array` | `[]` | Array of objects representing the dial options: `[{ icon, label, onClick }]` |
| `position` | `String` | `'bottom-right'` | Placement of the FAB: `'bottom-right'`, `'bottom-left'`, `'top-right'`, `'top-left'` |
| `themeColor` | `String` | `'primary'` | Accent color theme of the trigger FAB: `'primary'`, `'success'`, `'danger'`, `'warning'` |
| `mainIcon` | `ReactNode` | `'+'` | Icon or text displayed inside the main FAB when closed |
| `openIcon` | `ReactNode` | `'+'` | Icon or text displayed inside the main FAB when open (cross rotates automatically) |

## Usage Example

```jsx
import React from 'react';
import FABSpeedDial from './FABSpeedDial';

export default function App() {
  const actions = [
    { icon: '🏠', label: 'Home', onClick: () => console.log('Home clicked') },
    { icon: '🔍', label: 'Search', onClick: () => console.log('Search clicked') },
    { icon: '⚙️', label: 'Settings', onClick: () => console.log('Settings clicked') }
  ];

  return (
    <div className="app">
      <FABSpeedDial 
        actions={actions} 
        position="bottom-right" 
        themeColor="primary" 
      />
    </div>
  );
}
```
