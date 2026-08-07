# Bento Box Grid Layout (`bento-box-grid-db`)

> Contribution Track: **React Integration** (`submissions/react/bento-box-grid-db/`)

## 1. What does this do?
Provides a highly responsive, modern asymmetrical Bento Box grid component for React applications utilizing Tailwind CSS utility classes and clean custom CSS rules.

## 2. How is it used?

### Basic Import & Usage

```jsx
import React from 'react';
import { BentoBoxGrid } from './BentoBoxGrid';

export default function App() {
  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      {/* Render Default Asymmetrical Minimalist Layout */}
      <BentoBoxGrid variant="asymmetrical" />

      {/* Render Vibrant High-Contrast Bento Layout */}
      <BentoBoxGrid variant="colorful" />
    </div>
  );
}
```

### Component Properties

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'asymmetrical' \| 'colorful'` | `'asymmetrical'` | Chooses between the clean structural layout and the vibrant multi-colored layout. |

## 3. Why is it useful?
Bento Box grids are an industry-standard layout pattern for marketing pages, dashboard summaries, and visual feature highlights. This component provides an organic asymmetrical structure that naturally adapts across mobile, tablet, and desktop screens without breaking visual harmony.