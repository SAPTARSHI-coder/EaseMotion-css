# Pivot Chip Component

Resolves #54683

A React chip component that tilts/pivots around its bottom-left corner with a smooth hinge effect when clicked or activated.

## Usage

```jsx
import React from 'react';
import PivotChip from './PivotChip';

function App() {
  const handleDismiss = () => {
    console.log('Chip dismissed!');
  };

  return (
    <PivotChip label="Tag" onDismiss={handleDismiss}>
      Interactive Chip
    </PivotChip>
  );
}
```

## Features
- **Pivot Hinge Effect:** Runs a rotational animation anchored to the bottom-left corner (`transform-origin: bottom left`) on activation.
- **Dismissible:** Supports an optional dismiss function (`onDismiss`) rendering a close button.
- **Accessibility:** Fully clickable via keyboard focus and respects user reduced-motion config.
