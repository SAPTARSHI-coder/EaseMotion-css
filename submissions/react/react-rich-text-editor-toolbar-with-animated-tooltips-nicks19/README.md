# Rich Text Editor Toolbar with Animated Tooltips

A plug-and-play React component that renders a sleek text formatting toolbar. It features animated tooltips that utilize the signature EaseMotion CSS spring effect for a delightful, responsive user experience.

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `activeFormats` | `Array<string>` | `[]` | An array of currently active format keys (e.g., `['bold', 'italic']`) |
| `onFormatToggle` | `(format: string) => void` | `undefined` | Callback fired when a toolbar button is clicked |
| `className` | `string` | `''` | Additional custom CSS classes for the root container |

### Supported Format Keys
Currently supported formats include:
- `'bold'`
- `'italic'`
- `'underline'`
- `'strikethrough'`
- `'link'`

## Installation

1. Copy `RichTextEditorToolbar.jsx` and `style.css` into your project components directory.
2. Ensure you have React installed. No other dependencies are required.

## Usage Example

```jsx
import React, { useState } from 'react';
import RichTextEditorToolbar from './RichTextEditorToolbar';

function App() {
  const [activeFormats, setActiveFormats] = useState(['bold']);

  const handleFormatToggle = (format) => {
    setActiveFormats(prev => {
      if (prev.includes(format)) {
        return prev.filter(f => f !== format); // Remove
      } else {
        return [...prev, format]; // Add
      }
    });
  };

  return (
    <div style={{ padding: '40px' }}>
      <RichTextEditorToolbar 
        activeFormats={activeFormats} 
        onFormatToggle={handleFormatToggle} 
      />
    </div>
  );
}

export default App;
```

## Why it fits EaseMotion CSS

- **Spring-Animated Tooltips**: Standard browser tooltips feel sluggish. These custom tooltips use a `cubic-bezier(0.34, 1.56, 0.64, 1)` transition to scale up (`0.95` to `1`) and slide in (`translateY(4px)` to `0`) simultaneously on hover, giving them a physical, snappy "pop" effect.
- **Button Micro-interactions**: Toolbar buttons use a subtle scale-down (`scale(0.92)`) on active click, simulating a physical button press, making the interface feel highly tactile.
