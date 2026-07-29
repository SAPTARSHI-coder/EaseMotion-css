# React Component: AI Agent Chat Interface (#32516)

A modular, copy-paste ready React component and custom state-orchestration hook showcasing how to synchronize dynamic array updates with **EaseMotion CSS** entrance, exit, and loop transition cycles.

## 📦 What's included?

- `useChatAnimation.js`: A custom React hook that manages the timing lifecycle of applying/removing EaseMotion transition classes.
- `AiChatInterface.jsx`: The core interactive chat UI component, complete with user input form, streaming AI message simulation, suggestion chips, and scroll locks.
- `style.css`: Specific custom styling for speech bubble triangles, background glowing blobs, custom scrollbars, and exit height collapse animations.
- `demo.html`: A self-contained browser demo running React 18 and Babel Standalone (no local build setup required for previewing).

## 🛠 Features & Orchestration Strategy

### 1. The React Animation Lifecycle Problem
Removing a message item from a list in React state instantly unmounts the DOM node, causing the items below to jump up abruptly, ruining transition physical properties. 

This folder demonstrates the **Orchestrated Hand-Off** pattern:
- **Entrance**: When a message is added, the hook labels it `animationState = 'entering'`. This applies EaseMotion's `.ease-slide-up` and `.ease-fade-in`. After 400ms (the keyframe duration), the status updates to `'idle'` to prevent animation reset on subsequent renders.
- **Exit**: When the user deletes a message, the hook labels it `animationState = 'leaving'`. This triggers a custom `.leaving` class in `style.css` which animates the message's `opacity`, `transform`, `max-height`, and vertical `margin` to zero. React waits 400ms before removing the message from state, allowing the rest of the conversation thread to slide smoothly upwards.

### 2. Auto-Scroll Lock (Scrolling Anchor)
To prevent the page from jumping when new messages fade-in, we use a scrolling anchor `div` at the bottom of the feed. The hook uses a callback wrapped in `requestAnimationFrame()` to ensure the scroll-to-bottom event fires *after* React has completed state updates and the browser has recalculated the parent dimensions, resulting in perfect scroll alignments.

### 3. Loop Animation Typing Indicator
The simulated Agent typing loader integrates EaseMotion's `.ease-loader-dots` (which uses `animation-delay` offsets to bounce three dots sequentially) alongside `.ease-pulse` to create a beautiful pulsing active status circle.

## 🚀 How to use in your React project

1. Copy [useChatAnimation.js](./useChatAnimation.js) and [AiChatInterface.jsx](./AiChatInterface.jsx) to your React components folder.
2. Copy the rules in [style.css](./style.css) and import it near your app root.
3. Import the main component:

```jsx
import React from 'react';
import AiChatInterface from './components/AiChatInterface';
import './components/style.css';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem', minHeight: '100vh', backgroundColor: '#0b1220' }}>
      <AiChatInterface />
    </div>
  );
}

export default App;
```
