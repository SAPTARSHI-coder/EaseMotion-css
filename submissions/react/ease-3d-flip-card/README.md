# React 3D Flip Card

A reusable React component for implementing 3D flip card animations using EaseMotion CSS utility classes. It provides a simple API to render different content on the front and back of the card, triggering a smooth 3D flip on hover.

## Installation

Ensure you have EaseMotion CSS installed and imported into your project. Then, just copy `FlipCard.jsx` and `style.css` into your project components.

## API / Props Table

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| `frontContent` | `React.ReactNode` | Required | Content to display on the default facing side of the card. |
| `backContent` | `React.ReactNode` | Required | Content to display when the card is hovered and flipped. |
| `flipDirection` | `'horizontal' \| 'vertical'` | `'horizontal'` | The axis to flip the card on (X or Y axis). |

## Usage

```jsx
import React from 'react';
import FlipCard from './FlipCard';

export default function App() {
  return (
    <div style={{ width: '300px', height: '400px', margin: '50px' }}>
      <FlipCard
        flipDirection="horizontal"
        frontContent={
          <div className="p-4 text-center">
            <h3>Standard Package</h3>
            <p>$29 / month</p>
          </div>
        }
        backContent={
          <div className="p-4 text-center">
            <h3>Features</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>✅ 10 Projects</li>
              <li>✅ 5GB Storage</li>
            </ul>
            <button className="ease-hover-lift">Select Plan</button>
          </div>
        }
      />
    </div>
  );
}
```

## Why it fits EaseMotion CSS
This component wraps the pure CSS capabilities of EaseMotion into an easy-to-use declarative React API, bringing the "animation-first" philosophy natively into the modern React/Next.js ecosystem.
