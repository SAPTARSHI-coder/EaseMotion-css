# Floating Action Button (FAB) Speed Dial Menu

A dynamic React component that renders a Floating Action Button (FAB) which expands into a vertical "speed dial" menu. It is perfect for providing quick access to primary actions in a clean, unobtrusive UI. 

Powered by EaseMotion CSS, the menu items animate with a staggered, physics-based entrance.

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `actions` | `Array<Object>` | `[]` | **Required.** Array of action objects to display (see structure below) |
| `position` | `string` | `'bottom-right'` | Placement on screen (`'bottom-right'` or `'bottom-left'`) |
| `mainIcon` | `ReactNode` | `null` | Custom SVG for the closed state |
| `activeIcon` | `ReactNode` | `null` | Custom SVG for the open state (e.g. an "X") |

### Action Object Structure
```typescript
{
  name: string,       // Accessible label for the button
  tooltip?: string,   // Optional text to display on hover
  icon: ReactNode,    // SVG icon for the action
  onClick: () => void // Click handler
}
```

## Installation

1. Copy `SpeedDial.jsx` and `style.css` into your project components directory.
2. Ensure you have React installed.

## Usage Example

```jsx
import React from 'react';
import SpeedDial from './SpeedDial';

function App() {
  const actions = [
    {
      name: 'Copy link',
      tooltip: 'Copy link',
      icon: <svg>...</svg>,
      onClick: () => console.log('Copied')
    },
    {
      name: 'Share',
      tooltip: 'Share post',
      icon: <svg>...</svg>,
      onClick: () => console.log('Shared')
    }
  ];

  return (
    <div>
      <SpeedDial actions={actions} position="bottom-right" />
    </div>
  );
}

export default App;
```

## Why it fits EaseMotion CSS

- **Staggered Animations**: The inner actions use a calculated `transition-delay` based on their index. When the FAB is opened, they sequentially scale up (`0.8` to `1`) and translate (`20px` to `0`) using the `cubic-bezier(0.34, 1.56, 0.64, 1)` curve, creating a highly satisfying, cascading pop effect.
- **Icon Crossfade**: The main FAB utilizes an elegant rotation and opacity crossfade between its default and active icons, making the state transition feel fluid rather than abrupt.
- **Responsive Interactions**: The sub-action tooltips utilize subtle horizontal translations on hover to reinforce interaction without distracting from the main motion.
