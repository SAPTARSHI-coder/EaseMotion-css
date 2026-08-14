# Contract Toggle Component

Resolves #54672

A React toggle switch button component that squishes and contracts horizontally in a springy compression motion before snapping to its updated checked/unchecked position.

## Usage

```jsx
import React, { useState } from 'react';
import ContractToggle from './ContractToggle';

function App() {
  const [enabled, setEnabled] = useState(false);
  return (
    <ContractToggle 
      checked={enabled} 
      onChange={setEnabled} 
      label="Dark Mode Setting" 
    />
  );
}
```

## Features
- **Contract Scale Effect:** Simulates physical resistance by compressing the container shape on state toggles.
- **Accessibility:** Built as a native semantic switch button (`role="switch"`, `aria-checked`), fully keyboard accessible, and respects `prefers-reduced-motion`.
