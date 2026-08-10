# React Slide-Up Alert

A simple, dismissible React alert component that elegantly slides into view using EaseMotion's `ease-slide-up` animation class.

## Usage

Ensure you have EaseMotion CSS imported in your project.

```jsx
import React from 'react';
import AlertSlide from './AlertSlide';

function App() {
  return (
    <div>
      <AlertSlide type="info" message="Your settings have been saved successfully." />
      <AlertSlide type="error" message="Failed to load user data." />
    </div>
  );
}
```

## Properties

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `string` | `'info'` | The visual variant of the alert. Accepts `'info'` or `'error'`. |
| `message` | `string` | required | The text content to display inside the alert box. |
| `onClose` | `function` | `undefined` | Optional callback triggered when the user clicks the close (x) button. |

## Why is it useful?
Alerts are a foundational UI element. By hooking into EaseMotion's `ease-slide-up` class, developers can effortlessly add polished entrance animations to feedback banners without writing custom keyframes or transition wrappers in React.
