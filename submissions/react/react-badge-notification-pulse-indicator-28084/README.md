# React Component: Badge Notification Pulse Indicator (#28084)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders an attention-grabbing notification badge with a smooth, continuous CSS ripple/pulse effect to guide the user's eye to important unread items.

## 📦 What's included?

- `BadgeNotification.jsx`: The React component wrapper that accepts any children (like icons or buttons) and correctly attaches the badge to a corner.
- `style.css`: The CSS stylesheet powering the `easeBadgePulse` infinite keyframes, the `easeBadgePopIn` entrance spring animation, and the solid cutout border.
- `demo.html`: A self-contained browser demo running the React component to showcase various configurations (custom colors, different corners, text vs numbers).

## 🛠 Features

- **Architectural Separation**: The pulsing ripple is a *sibling* to the text badge, not a parent. This is a critical CSS technique that prevents the text number itself from distorting, blurring, or scaling during the pulse animation.
- **Spring Entrance**: When the count goes from `0` to `>0`, the badge doesn't just instantly appear; it uses a `cubic-bezier(0.34, 1.56, 0.64, 1)` to pop in and slightly overshoot its final scale.
- **99+ Formatting**: Automatically truncates numerical values over 99 to prevent the badge pill from stretching too wide and breaking UI layouts.
- **Parametric**: Supports custom hex/rgb colors, 4 corner positions, and a toggle to turn the pulse off once the user has acknowledged the area.

## 🚀 How to use

1. Copy `BadgeNotification.jsx` into your React project.
2. Copy `style.css` and import it.
3. Wrap any element (like an SVG icon or a user avatar) with the component.

```jsx
import React from 'react';
import BadgeNotification from './BadgeNotification';
import './style.css'; 

const NavbarIcon = ({ unreadMessages }) => {
  return (
    <BadgeNotification 
      count={unreadMessages} 
      pulsing={unreadMessages > 0}
      color="#3b82f6" // Custom blue
      position="top-right"
    >
      <button className="icon-btn">
        <svg viewBox="0 0 24 24" /* ... */ />
      </button>
    </BadgeNotification>
  );
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** emphasizes directing user attention naturally. 

A static red dot is often ignored. By adding a smooth, rhythmic pulse (scale up and fade out over 2 seconds), the badge mimics a subtle, physical heartbeat. This leverages peripheral vision movement detection to draw the user's attention without being aggressive or jarring. The use of a 2px solid white border (simulating a cutout) ensures the badge maintains sharp contrast against the underlying icon.
