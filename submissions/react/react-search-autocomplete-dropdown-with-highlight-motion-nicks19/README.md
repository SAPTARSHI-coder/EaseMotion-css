# Search Autocomplete Dropdown with Highlight Motion

A fully accessible React component that provides a search input with autocomplete suggestions. It features smooth dropdown animations, keyboard navigation support, and a distinct highlight motion effect when hovering over options.

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `options` | `Array<{label: string, value?: string}>` | `[]` | Array of suggestion options |
| `placeholder` | `string` | `'Search...'` | Input placeholder text |
| `onSelect` | `(option: object) => void` | `undefined` | Callback fired when an option is selected |
| `maxResults` | `number` | `5` | Maximum number of suggestions to display at once |

## Installation

1. Copy `SearchAutocomplete.jsx` and `style.css` into your project components directory.
2. No external dependencies required aside from React (`useState`, `useRef`, `useEffect`, `useMemo`).

## Usage Example

```jsx
import React from 'react';
import SearchAutocomplete from './SearchAutocomplete';

function SearchDemo() {
  const data = [
    { label: 'React Hooks' },
    { label: 'React Router' },
    { label: 'Redux Toolkit' },
    { label: 'EaseMotion CSS' },
    { label: 'Tailwind CSS' },
    { label: 'Framer Motion' }
  ];

  return (
    <div style={{ padding: '40px', maxWidth: '500px' }}>
      <SearchAutocomplete 
        options={data} 
        placeholder="Search documentation..."
        onSelect={(selected) => console.log('Selected:', selected)}
      />
    </div>
  );
}

export default SearchDemo;
```

## Why it fits EaseMotion CSS

- **Highlight Motion**: Option selection utilizes a smooth padding/background transition (`cubic-bezier(0.34, 1.56, 0.64, 1)`) adding a springy indent effect that perfectly matches EaseMotion's interactive style.
- **Dropdown Animation**: Uses `.ease-slide-down` and `.ease-fade-in` logic to gracefully reveal the autocomplete suggestions without jarring layout shifts.
- **Zero Dependencies**: Keeps the bundle light by handling fuzzy matching, keyboard navigation, and click-outside logic natively in React.
