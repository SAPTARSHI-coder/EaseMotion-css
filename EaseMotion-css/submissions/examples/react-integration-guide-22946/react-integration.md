# React Integration Guide for EaseMotion CSS

EaseMotion CSS is a utility-first micro-animation library. Integrating it with React is seamless because EaseMotion relies purely on CSS classes and requires zero external JavaScript dependencies. This guide covers the best practices for using EaseMotion within React applications, utilizing the official React wrapper components.

## Table of Contents
1. [Installation & Setup](#1-installation--setup)
2. [The `<Animate>` Wrapper Component](#2-the-animate-wrapper-component)
3. [Programmatic Control with `useAnimation`](#3-programmatic-control-with-useanimation)
4. [Scroll-Triggered Animations with `useScrollReveal`](#4-scroll-triggered-animations-with-usescrollreveal)
5. [Staggered Lists & Dynamic Delays](#5-staggered-lists--dynamic-delays)
6. [Best Practices](#6-best-practices)

---

## 1. Installation & Setup

EaseMotion CSS should be imported globally in your React application (usually in `index.js`, `main.jsx`, or `App.js`).

```jsx
// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Import EaseMotion global CSS
import 'easemotion-css/dist/easemotion.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
```

## 2. The `<Animate>` Wrapper Component

While you can append `.ease-animate-*` classes directly to native DOM elements, the official `<Animate>` wrapper provides a much cleaner, type-safe API for React developers.

### Basic Usage

```jsx
import { Animate } from 'easemotion-react';

function Greeting() {
  return (
    <Animate type="fade-in" duration="medium">
      <h1>Welcome to EaseMotion</h1>
    </Animate>
  );
}
```

### Props API
- `type` (string): The animation effect (e.g., `'fade-in'`, `'slide-up'`, `'zoom-in'`).
- `duration` (string | number): Uses preset timings (`'fast'`, `'medium'`) or accepts raw milliseconds (`500`) to dynamically inject an inline `animation-duration` style.
- `delay` (number): Raw milliseconds injected as `animation-delay` inline style.
- `hover` (string): Adds micro-interaction hover classes (e.g., `'scale'`, `'glow'`).
- `tag` (elementType): The HTML element to render (defaults to `'div'`).

## 3. Programmatic Control with `useAnimation`

If you need to trigger animations imperatively (e.g., on button clicks, form submissions, or specific application state changes), use the `useAnimation` hook.

```jsx
import { useAnimation } from 'easemotion-react';

function FormSubmit() {
  // Configures the hook to use the bounce animation
  const { ref, play, className } = useAnimation({
    animation: 'ease-bounce',
    duration: 'ease-duration-fast'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    play(); // Triggers the animation
  };

  return (
    <form onSubmit={handleSubmit}>
      <button ref={ref} className={`btn ${className}`} type="submit">
        Submit Form
      </button>
    </form>
  );
}
```

**Note:** The `useAnimation` hook automatically binds an `animationend` listener to the `ref`, resetting the state safely so the animation can be triggered repeatedly.

## 4. Scroll-Triggered Animations with `useScrollReveal`

To animate elements as they scroll into the viewport, utilize the `useScrollReveal` hook, which wraps `IntersectionObserver`.

```jsx
import { useScrollReveal } from 'easemotion-react';

function FeatureCard() {
  const { ref, className } = useScrollReveal({
    animation: 'ease-slide-up',
    threshold: 0.2, // Triggers when 20% of the element is visible
    triggerOnce: true // (Default) Animation plays only once
  });

  return (
    <div ref={ref} className={`card ${className}`}>
      <h2>Feature Title</h2>
      <p>This content gracefully slides up into view.</p>
    </div>
  );
}
```

## 5. Staggered Lists & Dynamic Delays

A very common pattern in React is mapping over arrays to render lists. You can easily create cascading "staggered" animations by calculating the `delay` prop based on the array `index`.

```jsx
import { Animate } from 'easemotion-react';

function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <Animate 
          key={item.id}
          tag="li"
          type="slide-up"
          delay={index * 150} // 150ms stagger per item
        >
          {item.name}
        </Animate>
      ))}
    </ul>
  );
}
```

## 6. Best Practices

- **Avoid Re-renders During Animations:** When using `useAnimation`, avoid triggering heavy component state re-renders simultaneously, as React rendering blocks the main thread and can cause CSS animation jank.
- **Micro-Interactions vs. Keyframes:** Use the `hover` prop for immediate feedback (buttons, cards) and reserve `type` (keyframes) for mounting/unmounting lifecycles.
- **Accessibility (a11y):** EaseMotion CSS respects the `prefers-reduced-motion` media query by default. If you use the React wrappers with inline styles (e.g., custom numeric durations), ensure you aren't forcing animations on users who have disabled them at the OS level.
