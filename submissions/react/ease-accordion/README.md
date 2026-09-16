# React Accordion Component

A lightweight, reusable React Accordion component designed to smoothly animate its height using React refs and EaseMotion CSS utility classes. 

## Installation

Ensure you have EaseMotion CSS installed and imported into your project. Copy `Accordion.jsx` and `style.css` into your React components directory.

## API / Props Table

### `<Accordion />`
| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| `items` | `Array<{title: string, content: ReactNode}>` | `[]` | An array of objects representing the accordion sections. |
| `allowMultiple` | `boolean` | `false` | If true, multiple accordion panels can be open simultaneously. |

### `<AccordionItem />` (Internal/Custom)
| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| `title` | `string` | Required | The header text of the accordion. |
| `isOpen` | `boolean` | `false` | Controls the expanded/collapsed state. |
| `onClick` | `function` | Required | Callback to toggle the open state. |

## Usage

```jsx
import React from 'react';
import Accordion from './Accordion';

const faqItems = [
  {
    title: "How does EaseMotion work?",
    content: <p>It uses utility classes that attach to standard CSS keyframes.</p>
  },
  {
    title: "Is it compatible with Tailwind?",
    content: <p>Yes! It perfectly complements existing utility frameworks.</p>
  }
];

export default function App() {
  return (
    <div className="p-8">
      <h2>Frequently Asked Questions</h2>
      <Accordion items={faqItems} allowMultiple={true} />
    </div>
  );
}
```

## Why it fits EaseMotion CSS
Animating height in CSS is tricky because `height: auto` cannot be transitioned. This component beautifully bridges React's dynamic DOM measurement (`scrollHeight`) with EaseMotion's standard `ease-slide-down` and `ease-fade-in` utilities, providing a perfectly smooth toggle experience without bulky third-party animation libraries like Framer Motion.
