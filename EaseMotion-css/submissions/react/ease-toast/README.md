# React Toast Notification Component

A clean, highly reusable React component that solves one of the most frustrating issues in React UI development: animating the exit of a component *before* it unmounts from the DOM.

## Installation

Ensure you have EaseMotion CSS installed and imported into your project. Copy `ToastNotification.jsx` and `style.css` into your components directory.

## API / Props Table

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| `title` | `string` | `"Notification"` | The header text of the toast. |
| `message` | `string` | Required | The body text/message. |
| `type` | `string` | `"info"` | Status styling. Options: `"info"`, `"success"`, `"warning"`, `"error"`. |
| `duration` | `number` | `5000` | Auto-close timer in milliseconds. Set to `0` to disable auto-close. |
| `onClose` | `function` | Required | Callback fired *after* the exit animation completes to remove the toast from your parent state. |

## Usage

```jsx
import React, { useState } from 'react';
import ToastNotification from './ToastNotification';

export default function App() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="p-8">
      <button onClick={() => setShowToast(true)}>Show Toast</button>
      
      {showToast && (
        <ToastNotification 
          title="Data Saved"
          message="Your profile has been updated successfully."
          type="success"
          duration={3000}
          onClose={() => setShowToast(false)} 
        />
      )}
    </div>
  );
}
```

## Why it fits EaseMotion CSS
React's virtual DOM immediately destroys elements when state changes, meaning CSS exit animations (`ease-fade-out`) normally get skipped. Developers usually resort to heavy animation libraries like Framer Motion to fix this. This component gracefully intercepts the close action, swaps the standard EaseMotion `ease-slide-in-from-right` utility class for `ease-fade-out`, waits `300ms`, and *then* unmounts. It's a lightweight, dependency-free solution.
