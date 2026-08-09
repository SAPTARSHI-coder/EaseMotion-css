# React Search Autocomplete Dropdown with Highlight Motion

A clean, reusable React component that provides an autocomplete search dropdown. It features a smooth slide-down animation and dynamically highlights matching text as the user types.

## Features
- **Highlight Text Matching**: Visually emphasizes matched string parts with a background highlight and soft pulse animation.
- **Staggered Entrance**: Dropdown items fade in smoothly.
- **Zero Dependencies**: Relies solely on React hooks.
- **Accessible**: Includes reduced-motion fallbacks and outside-click detection.

## Installation
Copy `SearchAutocomplete.jsx` and `style.css` into your React project.

## Usage

```jsx
import React from 'react';
import SearchAutocomplete from './SearchAutocomplete';

export default function App() {
  const fruits = [
    'Apple', 'Banana', 'Blueberry', 'Cherry', 
    'Grape', 'Mango', 'Orange', 'Strawberry'
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Search Fruits</h2>
      <SearchAutocomplete 
        items={fruits} 
        placeholder="Type a fruit..." 
        onSelect={(item) => console.log('Selected:', item)}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `items` | Array | Array of strings to filter and display in the dropdown. |
| `placeholder` | String | Placeholder text for the input field. |
| `onSelect` | Function | Callback triggered when a dropdown item is clicked. |
