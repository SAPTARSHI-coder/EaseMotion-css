# React Component: Avatar Group with Hover Stack Spread Animation (#28234)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders an overlapping cluster of user avatars that fluidly spreads apart on hover, allowing users to interact with individual avatars without layout jank.

## 📦 What's included?

- `AvatarGroup.jsx`: The React component that maps over an array of user objects, limits the output based on a `max` prop, handles image fallback state on `onError`, and manages the `is-hovered` parent state.
- `style.css`: The CSS stylesheet powering the negative margin overlap, the `cubic-bezier` margin spread on hover, the individual avatar lift, and the tooltip springs.
- `demo.html`: A self-contained browser demo running the React component to showcase the three different sizes (`sm`, `md`, `lg`) and the spread interaction.

## 🛠 Features

- **Fluid Margin Spread**: By default, avatars overlap using negative `margin-left`. When the group is hovered, a CSS transition applies a positive margin to push them apart seamlessly using a `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve.
- **Z-Index Stacking**: The component uses an inline style to automatically invert the `z-index` based on the array length `zIndex: visibleAvatars.length - index`. This ensures the first avatar sits on top, creating a realistic deck-of-cards stack.
- **Individual Lift & Tooltip**: When the group is spread, hovering a *specific* avatar within the group lifts it up (`translateY(-6px)`), scales it (`scale(1.1)`), and springs open a contextual tooltip showing the user's name.
- **Automatic Fallbacks**: If an image URL fails to load, the `onError` event automatically hides the `<img>` tag and reveals a fallback `<div>` containing the user's first initial.

## 🚀 How to use

1. Copy `AvatarGroup.jsx` into your React project.
2. Copy `style.css` and import it.
3. Pass an array of user objects to the component.

```jsx
import React from 'react';
import AvatarGroup from './AvatarGroup';
import './style.css'; 

const TeamView = () => {
  const teamMembers = [
    { id: 1, name: 'Alex Johnson', imageUrl: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, name: 'Sarah Miller', imageUrl: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, name: 'Mike Chen', imageUrl: 'https://i.pravatar.cc/150?u=3' },
    { id: 4, name: 'Emma Davis', imageUrl: 'https://i.pravatar.cc/150?u=4' },
    { id: 5, name: 'Chris Wilson', imageUrl: 'https://i.pravatar.cc/150?u=5' }
  ];

  return (
    <div>
      <AvatarGroup 
        avatars={teamMembers} 
        max={4} 
        size="md" // 'sm' | 'md' | 'lg'
      />
    </div>
  );
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight. 

Standard avatar groups are static overlaps. When you want to see who is behind the first image, you can't. By implementing a parent hover trigger that animates the `margin` properties of all children, the deck of avatars physically spreads like a fan of cards. This solves the usability issue of overlapping elements while providing a highly tactile, satisfying micro-interaction.
