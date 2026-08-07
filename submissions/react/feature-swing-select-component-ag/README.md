# Swing Select Component

Resolves #54704

A custom select dropdown component in React that triggers a playful swing animation on selection changes.

## Usage

```jsx
import React, { useState } from 'react';
import SwingSelect from './SwingSelect';

const options = [
  { value: 'option-1', label: 'First Choice' },
  { value: 'option-2', label: 'Second Choice' },
  { value: 'option-3', label: 'Third Choice' }
];

function App() {
  const [value, setValue] = useState('');
  return (
    <SwingSelect 
      options={options} 
      value={value} 
      onChange={setValue} 
    />
  );
}
```

## Features
- **Swing Animation:** Applies a realistic pendulum/swing rotational animation on the trigger element whenever the value changes.
- **Click Outside:** Automatically closes the dropdown option list when clicking outside.
- **Accessibility:** Uses semantic roles (`listbox`, `option`) and checks user preferences (`prefers-reduced-motion`).
