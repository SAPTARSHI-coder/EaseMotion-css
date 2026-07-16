# React Breadcrumb Trail with Animated Chevron Dividers

## Description
A modular, animated breadcrumb navigation component built with React. It features a staggered entrance animation, smooth hover effects, and continuous micro-animations on the chevron dividers indicating forward progression. The component leverages standard EaseMotion CSS utility classes for lightweight, 60fps animations.

## Component Props

| Prop | Type | Description |
|------|------|-------------|
| `items` | `array` | Array of breadcrumb items. Each object can contain: `{ label: string, icon?: ReactNode, path?: string }`. |
| `onNavigate` | `function` | Callback triggered when a breadcrumb item (other than the active one) is clicked. Receives the item object as an argument. |

## Usage Example

```jsx
import React from 'react';
import BreadcrumbTrail from './BreadcrumbTrail';
import 'easemotion.css'; // Make sure EaseMotion core CSS is imported globally

const App = () => {
  const breadcrumbPaths = [
    { label: "Home", icon: "🏠" },
    { label: "Dashboard" },
    { label: "Settings" },
    { label: "Security Profile" } // Last item is treated as active
  ];

  const handleNavigation = (item) => {
    console.log("Navigating to:", item.label);
    // Add routing logic here, e.g., history.push(item.path)
  };

  return (
    <div style={{ padding: '2rem' }}>
      <BreadcrumbTrail 
        items={breadcrumbPaths} 
        onNavigate={handleNavigation} 
      />
    </div>
  );
};

export default App;
```

## Features & EaseMotion Integration
- **`ease-fade-in` & `ease-slide-right`**: Used to orchestrate a staggered cascading entrance for the breadcrumb items and dividers dynamically generated via their index.
- **`ease-hover-lift`**: Applied to the interactive buttons for a tactile micro-interaction on hover.
- **`ease-pulse`**: Applied to the active (current) page text to subtly indicate current location focus.
- **Animated Chevrons**: Features a custom continuous sliding animation on the SVG dividers (`slideChevron`) to emphasize forward navigation flow.
- **Zero External Dependencies**: Powered entirely by standard React hooks (`useState`, `useEffect`) and CSS keyframes.
- **Accessibility**: Includes `aria-label="Breadcrumb"` and `aria-current="page"` out of the box.
