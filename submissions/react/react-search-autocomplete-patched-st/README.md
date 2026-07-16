# React Component: Search Autocomplete Dropdown with Highlight Motion (#28011)

A modular, copy-paste ready React component for the EaseMotion CSS framework that renders a highly interactive search autocomplete dropdown. It features a "floating highlight" background that physically springs between list items as you navigate via mouse or keyboard arrow keys.

## 📦 What's included?

- `SearchAutocomplete.jsx`: The React component handling input state, data filtering, keyboard accessibility (`ArrowUp`, `ArrowDown`, `Enter`, `Escape`), and the math required to calculate the Y-offset of the floating highlight block.
- `style.css`: The CSS stylesheet powering the input transitions, dropdown reveal, and the `cubic-bezier` physics curve for the floating highlight.
- `demo.html`: A self-contained browser demo running the React component via Babel standalone, pre-loaded with a dummy dataset of JS frameworks.

## 🛠 Features

- **Floating Highlight Background**: Instead of instantly turning an item blue on hover, a singular blue background block exists behind the list. As the `activeIndex` state changes via mouse or keyboard, this block translates on the Y-axis using a CSS spring curve, physically sliding up and down the list.
- **Match Highlighting**: Text that matches the user's typed query is bolded using `renderHighlightedText()`, improving scannability.
- **Keyboard Navigation**: Full support for arrow keys to traverse the list, `Enter` to select, and `Escape` to close the dropdown.
- **Dynamic Morphing Input**: When the dropdown opens, the bottom border radius of the input dynamically flattens to attach seamlessly to the menu below it.

## 🚀 How to use

1. Copy `SearchAutocomplete.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it into your global styles or alongside the component.
3. Pass a `data` array of objects (must contain `id` and `label` properties).

```jsx
import React from 'react';
import SearchAutocomplete from './SearchAutocomplete';
import './style.css'; 

const NavigationBar = () => {
  const users = [
    { id: 1, label: 'John Doe' },
    { id: 2, label: 'Jane Smith' },
    { id: 3, label: 'Johnny Appleseed' }
  ];

  const handleSelect = (user) => {
    console.log("Routing to user profile:", user.id);
  };

  return (
    <nav>
      <SearchAutocomplete 
        data={users} 
        placeholder="Find users..."
        onSelect={handleSelect}
      />
    </nav>
  );
};

export default NavigationBar;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** believes micro-interactions define the perceived quality of software.

Standard dropdowns use `li:hover { background: blue; }`, which feels rigid and binary. By decoupling the highlight background from the list items and making it an absolute positioned element bound to a `cubic-bezier(0.34, 1.56, 0.64, 1)` transition, the selection state gains physical momentum. Moving the mouse down the list causes the highlight to "chase" the cursor, creating a highly satisfying, premium interaction layer with zero JS animation library overhead.
