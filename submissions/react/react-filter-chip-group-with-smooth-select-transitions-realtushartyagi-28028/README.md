# React Filter Chip Group with Smooth Select Transitions

A highly interactive, accessible React component that renders a group of multi-selectable filter chips (pill tags). When a user toggles a chip, it utilizes smooth CSS transitions to gracefully animate background colors and seamlessly expand a checkmark icon using a bouncy cubic-bezier curve.

## Files
- `FilterChipGroup.jsx` – The core React component that handles the multi-selection state array and renders the SVG checkmarks.
- `FilterChipGroup.css` – The stylesheet that powers the pill layout, hover states, and the 60fps width/opacity transitions.

## How it works
1. **State Management**: The component tracks an array of `selectedIds`. Clicking a chip toggles its ID in and out of the array.
2. **Dynamic Class Switching**: Selected chips receive the `.ease-chip-selected` class, which triggers the visual change.
3. **The Entrance Animation**: The checkmark icon is wrapped in `.ease-chip-icon-wrapper` which defaults to `width: 0` and `opacity: 0`. When `.ease-chip-selected` is applied to the parent, CSS immediately transitions the wrapper's `width` to `16px` and `opacity` to `1` using a spring-like `cubic-bezier` timing function. This creates the illusion that the text smoothly pushes aside to make room for the checkmark.

## Installation & Usage

1. Copy both `FilterChipGroup.jsx` and `FilterChipGroup.css` into your React project.
2. Import the component and pass it an array of filter options.

```jsx
import React, { useState } from 'react';
import FilterChipGroup from './components/FilterChipGroup';

const App = () => {
  const [activeFilters, setActiveFilters] = useState(['tag-react']);

  const blogTags = [
    { id: 'tag-react', label: 'React' },
    { id: 'tag-css', label: 'CSS Animations' },
    { id: 'tag-ui', label: 'UI Design' },
    { id: 'tag-a11y', label: 'Accessibility' }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <FilterChipGroup 
        filters={blogTags} 
        initialSelected={['tag-react']}
        onChange={(newSelection) => setActiveFilters(newSelection)} 
      />
      
      <p style={{ marginTop: '2rem', color: '#64748b' }}>
        Active Filters: {activeFilters.join(', ')}
      </p>
    </div>
  );
};

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `filters` | `Array<Object>` | *(Demo items)* | Array of options to render. Shape: `{ id: string, label: string }`. |
| `initialSelected` | `Array<string>` | `['f1']` | Array of `id` strings that should be active on initial mount. |
| `onChange` | `function` | `() => {}` | Callback fired whenever the selection changes. Receives the updated array of selected IDs. |

## Accessibility (prefers-reduced-motion)
The component uses native `<button type="button">` elements ensuring full keyboard tab-navigation support. It properly toggles the `aria-pressed={true/false}` attribute so screen readers announce the selection state correctly. It implements a strict `@media (prefers-reduced-motion: reduce)` block in the CSS that strips away the width-expanding animation and background transitions to ensure compatibility with vestibular sensitivity settings.

## Why it fits EaseMotion CSS
EaseMotion champions high-fidelity micro-interactions that don't rely on heavy JavaScript animation libraries. Checkmark entrance animations are frequently built using bloated JS tools (like Framer Motion) which negatively impact bundle size. By cleverly transitioning the `width` and `margin` properties of the icon wrapper via native CSS, this component delivers a premium, highly tactile "push-aside" interaction that performs perfectly with zero external dependencies.
