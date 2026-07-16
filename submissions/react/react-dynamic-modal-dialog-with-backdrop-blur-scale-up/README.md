# React Component: Dynamic Modal Dialog with Backdrop Blur & Scale-Up (#28012)

A modular, copy-paste ready React component for the EaseMotion CSS framework that renders a highly polished modal dialog using React Portals. It features a two-step mount/unmount animation, a blurred backdrop, and a tactile spring-scale entrance for the dialog box.

## 📦 What's included?

- `Modal.jsx`: The React component that orchestrates React Portals, `Escape` key listeners, body scroll locking, and a double-render sequence to ensure CSS exit animations play out before unmounting.
- `style.css`: The CSS stylesheet powering the frosted-glass backdrop filter, the spring `cubic-bezier` transform animations, and layout flexbox rules.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone.

## 🛠 Features

- **React Portals**: The modal is cleanly rendered at the root of the `document.body` using `ReactDOM.createPortal()`, preventing any z-index or overflow clipping issues from parent containers.
- **Two-Step Animation Lifecycle**: Normally in React, setting `isOpen=false` instantly destroys the DOM node, making exit animations impossible. This component uses an internal `isRendered` and `isAnimating` state system. When closing, it triggers the CSS exit transition first, waits 400ms, and *then* removes the node from the DOM.
- **Accessibility & UX**: 
  - Automatically locks the `body` scroll when opened.
  - Listens for the `Escape` key to close.
  - Supports clicking the blurred backdrop to dismiss.
- **EaseMotion Physics**: The dialog utilizes a `transform: scale(0.85)` to `scale(1)` transition coupled with a `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve to make the modal feel like it's physically popping up toward the user.

## 🚀 How to use

1. Copy `Modal.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Import and use the component, managing the `isOpen` state in the parent.

```jsx
import React, { useState } from 'react';
import Modal from './Modal';
import './style.css'; 

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const footerButtons = (
    <>
      <button onClick={() => setIsOpen(false)}>Cancel</button>
      <button onClick={() => alert('Saved!')}>Save Changes</button>
    </>
  );

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        title="Edit Profile"
        footer={footerButtons}
      >
        <p>This is the main body content of the modal.</p>
        <input type="text" placeholder="Username" />
      </Modal>
    </div>
  );
};

export default App;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements feel physical and responsive to their context.

A modal that instantly pops into existence feels jarring and cheap. By utilizing CSS `backdrop-filter: blur(8px)` combined with an opacity fade, the background smoothly transitions out of focus, drawing the user's eye to the center. Then, the modal dialog physically springs up toward the screen using a highly tuned overshoot curve. It transforms a standard alert box into a premium, tactile layer.
