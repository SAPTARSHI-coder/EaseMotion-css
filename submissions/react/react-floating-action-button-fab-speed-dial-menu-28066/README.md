# React Component: Floating Action Button (FAB) Speed Dial Menu (#28066)

A modular, copy-paste ready React component for the EaseMotion CSS framework. This component renders a fixed Floating Action Button that, when clicked, spins its icon and triggers a staggered spring animation to reveal a list of secondary actions.

## 📦 What's included?

- `SpeedDial.jsx`: The React component that manages the `isOpen` state, handles "click outside" and "escape key" dismiss logic, and maps the action items.
- `style.css`: The CSS stylesheet powering the icon morphing, the staggered `transition-delay` logic for the list items, and the tooltip hovers.
- `demo.html`: A self-contained browser demo running the React component to showcase the fixed positioning and interactions.

## 🛠 Features

- **Icon Morphing**: When the main FAB is clicked, it transitions its background color (from blue to dark slate) and cross-fades two SVG icons while rotating them `-90deg` and `90deg` using a `cubic-bezier` spring, creating a seamless '+' to 'x' morph.
- **Staggered Spring Reveal**: The secondary action items slide up and scale into view. The React component automatically calculates an inline `transitionDelay` based on the array index (e.g., `(length - 1 - index) * 0.05s`), ensuring the items pop up sequentially from bottom to top.
- **Contextual Tooltips**: Hovering the revealed action buttons slides a CSS tooltip horizontally into view to label the action.
- **Robust Dismissal**: Includes standard accessible dismissal patterns: clicking anywhere outside the menu (`mousedown` listener) or pressing the `Escape` key closes the dial.

## 🚀 How to use

1. Copy `SpeedDial.jsx` into your React project.
2. Copy `style.css` and import it.
3. Pass an array of action objects.

```jsx
import React from 'react';
import SpeedDial from './SpeedDial';
import './style.css'; 

const AppLayout = () => {
  const actions = [
    { 
      icon: <FileIcon />, 
      name: 'New File', 
      onClick: () => console.log('File') 
    },
    { 
      icon: <FolderIcon />, 
      name: 'New Folder', 
      onClick: () => console.log('Folder') 
    }
  ];

  return (
    <div>
      <MainContent />
      
      {/* Renders fixed to the viewport */}
      <SpeedDial 
        actions={actions} 
        position="bottom-right" // or "bottom-left"
      />
    </div>
  );
};
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight. 

A speed dial menu inherently hides complexity. If the secondary actions appear instantly, the user loses spatial awareness of where they came from. By implementing a bottom-up staggered entrance using `cubic-bezier(0.34, 1.56, 0.64, 1)`, the UI clearly communicates that the actions are "popping out" of the main button. 

Furthermore, the rotational morphing of the main icon provides immediate physical feedback that the state of the application has changed.
