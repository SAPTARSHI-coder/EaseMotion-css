# React Component: Avatar Group with Hover Stack Spread Animation (#28034)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders an overlapping stack of user avatars that fluidly spreads apart like a deck of cards when hovered, making hidden profile pictures completely visible.

## 📦 What's included?

- `AvatarGroup.jsx`: The React component that manages the array mapping, `zIndex` stacking order, auto-initials fallback logic for users without avatars, and the overflow limit (`+X` logic).
- `style.css`: The CSS stylesheet powering the negative margin overlapping, the `cubic-bezier` spread animation on hover, and the individual tooltip reveals.
- `demo.html`: A self-contained browser demo running the React component to showcase three different size variants (`sm`, `md`, `lg`) and the fallback initial generation.

## 🛠 Features

- **Dynamic Stack Spread**: Instead of just scaling up the hovered avatar, the entire group reacts. By leveraging `.ease-avatar-group:hover .ease-avatar-item:not(:first-child)`, the CSS fluidly reduces the negative right-margin of the avatars, causing the entire stack to physically spread apart to reveal hidden faces.
- **Auto Initials & Colors**: If an image isn't provided for a user, the React component automatically extracts the first two letters of their name and assigns a consistent background color (based on a string length modulus so the color stays consistent for that user).
- **Compound Sibling Physics**: When a specific avatar is hovered, it pops out (`scale(1.15) translateY(-6px)`) and instantly comes to the front (`z-index: 999`). Simultaneously, all sibling avatars gently dim and scale down slightly, creating dramatic focal emphasis on the user being inspected.
- **Size Props**: Supports `size="sm"`, `size="md"`, and `size="lg"`, controlled entirely via CSS custom variables (`--avatar-size`, `--avatar-overlap`).

## 🚀 How to use

1. Copy `AvatarGroup.jsx` into your React project.
2. Copy `style.css` and import it.
3. Pass an array of user objects.

```jsx
import React from 'react';
import AvatarGroup from './AvatarGroup';
import './style.css'; 

const ProjectTeam = () => {
  const users = [
    { id: 1, name: 'Alice', avatar: '/alice.jpg' },
    { id: 2, name: 'Bob Smith' }, // Component auto-generates "BS" initials
    { id: 3, name: 'Charlie', avatar: '/charlie.jpg' },
    { id: 4, name: 'Diana' },
    { id: 5, name: 'Ethan' }
  ];

  return (
    <AvatarGroup 
      users={users} 
      max={4} // Will show 4 avatars and a "+1" bubble
      size="md" // 'sm', 'md', or 'lg'
    />
  );
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight. 

Overlapping avatars are great for saving space, but they obscure information (who is behind the first person?). When a user hovers over a tight stack of physical objects (like photos or cards), they spread them out to see them better. By animating the margins on hover, the digital UI mimics this exact physical behavior. The added touch of sibling dimming ensures that despite the complex movement of the entire stack, the user's specific focus is never lost.
