# React Tooltip Component with Elastic Slide

A lightweight, accessible React tooltip component featuring a spring-like elastic slide entry animation designed for corporate dashboard layouts and modern SaaS UI patterns.

## 🚀 Features

* **Elastic Motion**: Utilizes spring-bezier easing for a smooth slide-and-bounce visual feedback.
* **Accessible Semantics**: Built-in ARIA roles (`role="tooltip"`) and support for hover/keyboard focus triggers.
* **Directional Anchoring**: Supports `top`, `bottom`, `left`, and `right` positioning.

## 📦 Usage Example

```jsx
import React from 'react';
import { Tooltip } from './Tooltip';

export const Example = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Tooltip content="Elastic slide tooltip active!" position="top">
        <button className="ease-button">Hover or Focus Me</button>
      </Tooltip>
    </div>
  );
};
