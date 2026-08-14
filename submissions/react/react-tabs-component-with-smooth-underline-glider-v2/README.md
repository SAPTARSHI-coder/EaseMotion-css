# React Component: Tabs Component with Smooth Underline Glider (#27354)

A modular, copy-paste ready React component for the EaseMotion CSS framework. It renders a horizontal tab list where the active indicator physically slides and resizes to match whichever tab is selected — a "glider" — instead of jumping between fixed-width slots.

## 📦 What's included?

- `Tabs.jsx`: The React component. Manages the active tab in state and measures the active tab button's real position/width on every change (and on window resize) to animate the glider to the exact pixel.
- `style.css`: The stylesheet powering the glider's slide/resize transition, tab label states, and a horizontally scrollable nav for small viewports.
- `demo.html`: A self-contained browser demo running the component via Babel standalone, pre-loaded with sample tabs of varying label lengths.

## 🛠 Features

- **True Position Glider**: Rather than assuming equal-width tabs, the component reads each tab button's `offsetLeft` and `offsetWidth` directly from the DOM and applies them to the underline via `transform: translateX()` and `width`. This means labels of any length — "FAQ" next to "Features That Are Longer" — still get a pixel-accurate underline.
- **Keyboard Accessible**: Implements the WAI-ARIA Tabs pattern — `role="tablist"`/`role="tab"`/`role="tabpanel"`, a roving `tabIndex`, and Arrow Left/Right/Home/End navigation that moves both selection and focus.
- **Responsive by Default**: The nav scrolls horizontally instead of wrapping on narrow viewports, and a `resize` listener keeps the glider aligned if tab labels reflow.
- **Reduced Motion Aware**: The glide transition is disabled under `prefers-reduced-motion: reduce`.
- **Zero Dependencies**: Just React and the included stylesheet — no animation libraries.

## 🔧 Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `tabs` | `Array<{ id, label, content }>` | `[]` (required) | The tabs to render, in order. `content` is optional — omit it to use `Tabs` as a standalone segmented control with no panel. |
| `defaultActiveTab` | `string` | first tab's `id` | The `id` of the tab selected on mount. |
| `onTabChange` | `(id: string) => void` | `undefined` | Called with the new tab's `id` whenever the selection changes. |

## 🚀 How to use

1. Copy `Tabs.jsx` into your React project's `components` directory.
2. Copy `style.css` and import it alongside the component.
3. Pass a `tabs` array shaped like the one below.

```jsx
import React from 'react';
import Tabs from './Tabs';
import './style.css';

const ProductPage = () => {
  const tabs = [
    { id: 'overview', label: 'Overview', content: <p>A quick summary of the product.</p> },
    { id: 'features', label: 'Features', content: <p>Everything the product can do.</p> },
    { id: 'pricing', label: 'Pricing', content: <p>Plans and pricing details.</p> },
    { id: 'faq', label: 'FAQ', content: <p>Answers to common questions.</p> },
  ];

  return (
    <Tabs
      tabs={tabs}
      defaultActiveTab="overview"
      onTabChange={(id) => console.log('Active tab:', id)}
    />
  );
};

export default ProductPage;
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements feel physical and responsive to their context.

EaseMotion CSS's core `ease-tabs` component already establishes the sliding-underline idea, but its pure-CSS, radio-input implementation has to assume equal-width tabs to calculate the underline's position as a fixed percentage — real-world tab labels are rarely equal width. This component keeps that same physical, gliding feel but drives it from React state and real DOM measurements instead, so the underline always lands exactly under the active label regardless of how long its text is, while staying fully keyboard-accessible and motion-preference aware.