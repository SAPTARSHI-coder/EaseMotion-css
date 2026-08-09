# React Masonry Grid

A highly performant, staggered entrance Pinterest-style masonry layout component for React.

## Installation

Ensure you have EaseMotion CSS installed and imported into your project. Copy `MasonryGrid.jsx` and `style.css` into your components directory.

## Features
- **Zero JS Layout Calculations:** Completely circumvents heavy JavaScript layout calculations by leveraging modern CSS `column-count` and `break-inside: avoid`.
- **Staggered Entrance:** Uses the React array `index` combined with inline CSS `animation-delay` to create a beautiful, staggered waterfall entrance effect.
- **Native EaseMotion Integration:** Items smoothly slide up and fade in using the globally accessible `.ease-slide-up` and `.ease-fade-in` utilities.

## API / Props Table

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| `items` | `Array` | Required | Array of objects to render. Must contain `id`, and optionally `image`, `title`, `description`. |
| `columns` | `number` | `3` | The number of vertical columns to distribute the items across. |
| `gap` | `number` | `16` | The pixel gap (horizontal and vertical) between masonry items. |

## Usage

```jsx
import React from 'react';
import MasonryGrid from './MasonryGrid';

const MOCK_DATA = [
  { id: 1, image: 'tall-img.jpg', title: 'Mountain', description: 'A tall image.' },
  { id: 2, image: 'short-img.jpg', title: 'Ocean', description: 'A short image.' },
  // ... more items
];

export default function App() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>My Gallery</h1>
      <MasonryGrid items={MOCK_DATA} columns={4} gap={24} />
    </div>
  );
}
```

## Why it fits EaseMotion CSS
Most React masonry implementations rely on massive dependencies like `react-masonry-css` or `masonic`, which calculate absolutely positioned coordinates for every DOM node on every render cycle. This component achieves the exact same visual effect with exponentially better performance by passing the packing workload directly to the browser's CSS rendering engine, while layering our lightweight EaseMotion utilities over top for the entrance polish.
