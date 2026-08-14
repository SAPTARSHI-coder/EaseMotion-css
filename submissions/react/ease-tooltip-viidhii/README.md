# Animated Tooltip (ease-tooltip-viidhii)

A reusable React tooltip component that leverages EaseMotion utility classes for smooth entrance animations.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `content` | `string` | required | The text to display inside the tooltip bubble. |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | The placement of the tooltip relative to its child. |
| `children` | `ReactNode` | required | The wrapped element that triggers the tooltip on hover. |

## Usage

```jsx
import React from 'react';
import Tooltip from './Tooltip';
import './style.css';

function App() {
  return (
    <Tooltip content="This is a top tooltip!" position="top">
      <button className="ease-btn ease-btn-primary">Hover Me</button>
    </Tooltip>
  );
}

export default App;
```
