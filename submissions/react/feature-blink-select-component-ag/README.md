# Blink Select React Component

## What does this do?
This submission implements a premium React dropdown/select component (`BlinkSelect`) under the `submissions/react/` track. The select trigger element exhibits a smooth breathing/blinking border glow when idle, drawing subtle user attention without distraction.

## How is it used?
```jsx
import React, { useState } from 'react';
import { BlinkSelect } from './BlinkSelect';

function App() {
  const [selectedValue, setSelectedValue] = useState('');
  
  const options = [
    { value: 'theme-dark', label: 'Dark Mode' },
    { value: 'theme-light', label: 'Light Mode' },
    { value: 'theme-system', label: 'System Theme' }
  ];

  return (
    <BlinkSelect
      options={options}
      value={selectedValue}
      onChange={setSelectedValue}
      placeholder="Choose visual style"
    />
  );
}
```

## Properties
| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `options` | `Array` | Yes | `[]` | Array of objects representing each dropdown option: `{ value, label }` |
| `value` | `string` | No | `undefined` | The currently selected option's value |
| `onChange` | `function` | Yes | `undefined` | Callback fired when an option is selected: `(newValue) => {}` |
| `placeholder` | `string` | No | `'Select an option'` | Placeholder text shown when no value is selected |
