# React Filter Chip Group with Smooth Select Transitions

A modular, copy-paste ready React component that provides a group of selectable filter chips. It features fluid EaseMotion CSS transitions, a zero-width to full-width SVG checkmark reveal animation, and support for both single and multi-select modes. Built with React hooks and standard CSS, containing zero external dependencies.

## 📦 Files Included
- `FilterChipGroup.jsx`: The isolated React component containing the `FilterChip` and `FilterChipGroup` logic.
- `style.css`: The stylesheet defining the hover lifts, active states, dynamic checkmark reveals, and staggered load animations.
- `demo.html`: A self-contained preview using Babel standalone.

## 🚀 Features

- **Staggered Entrance**: The chips load in sequentially using CSS variables (`--stagger-delay`) combined with a `rotateX` 3D spring entrance.
- **Dynamic Checkmark Reveal**: When a chip is selected, an embedded SVG checkmark smoothly scales up and rotates into view (`cubic-bezier(0.34, 1.56, 0.64, 1)`) without disrupting the text layout.
- **Single or Multi-Select**: Easily toggle behavior via the `multiSelect={true/false}` prop.
- **Micro-Interactions**: Buttons sink slightly when pressed (`scale(0.95)`) and lift with a soft shadow on hover.

## 💻 Usage Example

```jsx
import React, { useState } from 'react';
import FilterChipGroup from './FilterChipGroup';
import './style.css';

export default function App() {
  const [activeFilters, setActiveFilters] = useState([]);
  
  const options = [
    { id: 'design', label: 'UI/UX Design' },
    { id: 'frontend', label: 'Frontend Dev' },
    { id: 'backend', label: 'Backend Dev' }
  ];

  return (
    <div>
      <FilterChipGroup 
        options={options}
        multiSelect={true}
        initialSelected={['frontend']}
        onChange={(selected) => setActiveFilters(selected)}
      />
    </div>
  );
}
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about bridging the gap between raw CSS performance and interactive JavaScript logic.

By relying on React state strictly for toggling the `ease-chip-selected` class, we keep the animations hardware-accelerated. The component uses EaseMotion's signature spring curve `cubic-bezier(0.34, 1.56, 0.64, 1)` for the hover lifts and checkmark scaling, ensuring interactions feel physically bouncy and responsive rather than rigid and linear. The lack of external dependencies (like framer-motion) respects the project's goal of lightweight, copy-paste components.
