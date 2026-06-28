# React Hooks Animation Pattern Guide

Welcome to the **React Hooks Animation Pattern Guide**! This comprehensive tutorial explains how to integrate, trigger, and manage EaseMotion CSS animation classes declaratively inside React applications.

---

## 📋 Table of Contents
1. [Declarative State vs. Imperative DOM](#1-declarative-state-vs-imperative-dom)
2. [useRef + className State Pattern](#2-useref--classname-state-pattern)
3. [Custom `useAnimation` Hook Pattern](#3-custom-useanimation-hook-pattern)
4. [Server-Side Rendering (SSR) Hydration Safety](#4-server-side-rendering-ssr-hydration-safety)
5. [Framer Motion vs. EaseMotion CSS](#5-framer-motion-vs-easemotion-css)

---

## 1. Declarative State vs. Imperative DOM

React operates on a declarative programming paradigm: you describe **what** the UI should look like based on the current state, and React manages updates.

When integrating CSS animations:
* **The Declarative Way (className Toggle)**: Tie the presence of an EaseMotion animation class (like `.anim-zoom-in`) directly to React state values.
* **The Imperative Hook Way (useRef Reflows)**: Bind a ref to an element and trigger reflows programmatically to repeat animations without re-rendering the component.

---

## 2. useRef + className State Pattern

This is the standard pattern for entrance animations. The animation class is added conditionally based on component state.

```jsx
import React, { useState } from 'react';
import 'easemotion-css'; // import styles

export default function CustomCard() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="card-container">
      <button onClick={() => setIsVisible(!isVisible)}>Toggle State</button>
      
      {/* Conditionally binds the anim-zoom-in class */}
      <div className={`react-card ${isVisible ? 'anim-zoom-in' : ''}`}>
        <h3>Responsive React Card</h3>
        <p>This element animates when isVisible is toggled.</p>
      </div>
    </div>
  );
}
```

---

## 3. Custom `useAnimation` Hook Pattern

To trigger animations on user actions (such as clicking a button or receiving a system notification), you may need to restart the animation by removing and re-adding the CSS class. 

Doing this inside standard state loops is difficult because React batches state updates. Instead, use a custom hook with a `useRef` hook:

### 1. Hook Definition (`hooks/useAnimation.js`)
```javascript
import { useRef } from 'react';

export default function useAnimation(className) {
  const elementRef = useRef(null);

  const trigger = () => {
    if (elementRef.current) {
      // Remove class, trigger reflow to reset, and re-add class
      elementRef.current.classList.remove(className);
      void elementRef.current.offsetWidth; // forces reflow
      elementRef.current.classList.add(className);
    }
  };

  return [elementRef, trigger];
}
```

### 2. Component Usage
```jsx
import React from 'react';
import useAnimation from './hooks/useAnimation';

export default function ActionCard() {
  const [elementRef, triggerAnimation] = useAnimation('anim-slide-in');

  return (
    <div ref={elementRef} className="react-card">
      <h3>Dynamic Hook Component</h3>
      <button onClick={triggerAnimation}>Trigger Hook Animation</button>
    </div>
  );
}
```

---

## 4. Server-Side Rendering (SSR) Hydration Safety

In SSR frameworks (like Next.js or Remix), components are pre-rendered into HTML on the server. If your animation classes rely on client-side state (like `window.innerWidth` or local storage), the server-rendered HTML may mismatch the client-rendered output, triggering **hydration errors**.

### The Solution: useEffect Gates
Ensure client-only animations are applied inside a `useEffect` hook, which runs only after the component mounts on the client:

```jsx
import React, { useState, useEffect } from 'react';

export default function ClientSafeCard() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Safely runs only on the client
    setIsMounted(true);
  }, []);

  return (
    <div className={`react-card ${isMounted ? 'anim-zoom-in' : ''}`}>
      <h3>Hydration-Safe Component</h3>
    </div>
  );
}
```

---

## 5. Framer Motion vs. EaseMotion CSS

| Feature Metric | Framer Motion (JS-Driven) | EaseMotion CSS (CSS-Driven) |
| :--- | :--- | :--- |
| **Bundle Size Overhead** | ~30kb gzipped | **0kb JS overhead** |
| **Execution Thread** | Main Thread (CPU bound) | **Compositor Thread (GPU accelerated)** |
| **Bypass Thread Lag** | ❌ No (Lag can occur under heavy JS loads) | **🟢 Yes** (Runs smoothly even if main thread is blocked) |
| **Configuration Style** | Custom JSX wrapper tags (`<motion.div>`) | Standard className selectors |
