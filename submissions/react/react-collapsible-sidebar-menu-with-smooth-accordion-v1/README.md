# React Component: Collapsible Sidebar Menu with Smooth Accordion (#28005)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This sidebar provides an app-shell navigation structure featuring a physics-based collapsible width toggle and perfectly smooth CSS Grid-driven accordion menus.

## 📦 What's included?

- `Sidebar.jsx`: The React component that manages the open/collapsed state of the entire sidebar as well as the dictionary of open accordion sub-menus. It includes "smart-open" logic: if a user clicks an accordion trigger while the sidebar is collapsed, it orchestrates expanding the sidebar *first*, then opening the accordion, preventing visual jank.
- `style.css`: The CSS stylesheet utilizing `grid-template-rows: 0fr -> 1fr` for hardware-accelerated accordion height animations without needing Javascript measurements. It also uses CSS variables (`--sidebar-width-open`) for the width transitions.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone, including sample navigation data arrays and SVG icons.

## 🛠 Features

- **CSS Grid Accordions**: Historically, animating `height: auto` in CSS is impossible. This component uses the modern CSS Grid technique (`grid-template-rows: 0fr` to `1fr`) on the `.ease-accordion-content` wrapper to achieve buttery smooth height transitions.
- **Physics-Based Width Toggle**: The entire sidebar collapses from `280px` to `80px` using a `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve. The internal text elements (labels, logos) fade out cleanly using `white-space: nowrap` to prevent layout breakage during the transition.
- **Smart State Management**: When the sidebar collapses, the `useEffect` hook automatically closes all open accordions to reset the internal state.

## 🚀 How to use

1. Copy `Sidebar.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it.
3. Pass a configuration array to the `navItems` prop. Items with `children` will automatically render as an accordion.

```jsx
import React from 'react';
import Sidebar from './Sidebar';
import './style.css'; 

const AppLayout = ({ children }) => {
  const navData = [
    { id: 'dash', label: 'Dashboard', icon: <svg>...</svg>, href: '/dash' },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: <svg>...</svg>,
      children: [
        { id: 's1', label: 'Profile', href: '/profile' },
        { id: 's2', label: 'Billing', href: '/billing' }
      ]
    }
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar navItems={navData} />
      <main style={{ flex: 1 }}>
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** believes micro-interactions define the perceived quality of software.

A sidebar is often the most interacted-with component in a dashboard. Snapping between states or relying on expensive javascript height calculations (`Element.scrollHeight`) makes the app feel sluggish. By pairing React's rapid state updates with modern CSS Grid transitions and standard EaseMotion `cubic-bezier` curves, the navigation feels instantly responsive, lightweight, and physically connected to the user's cursor.
