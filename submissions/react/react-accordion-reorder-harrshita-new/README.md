# EaseAccordionReorder

## Overview

`EaseAccordionReorder` is a **drag‑and‑drop reorderable accordion** built with React and `react-beautiful-dnd`. It lets users rearrange accordion sections while preserving open/close state and provides smooth transition animations.

## Props

- **items**: `Array<{ id: string, title: string, content: ReactNode }>` – initial list of accordion items.

## Usage Example

```jsx
import React from 'react';
import EaseAccordionReorder from './EaseAccordionReorder';

const data = [
  { id: '1', title: 'Section 1', content: <p>Content 1</p> },
  { id: '2', title: 'Section 2', content: <p>Content 2</p> },
  { id: '3', title: 'Section 3', content: <p>Content 3</p> },
];

export default function Demo() {
  return <EaseAccordionReorder items={data} />;
}
```

## Styling

The component uses `accordion-reorder.scss` for its styles. Feel free to customize the CSS variables defined in the file:

```scss
:root {
  --ease-border: #e0e0e0;
  --ease-bg: #fff;
  --ease-header-bg: #fafafa;
  --ease-drag-bg: #f5f5f5;
}
```

## Accessibility

- Each accordion header is a native `<button>` element for keyboard operability.
- Drag‑and‑drop interactions are announced by screen readers via `react-beautiful-dnd`'s built‑in ARIA support.

## License

MIT © harrshita123
