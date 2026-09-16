# <EaseAccordionGroup> Accordion React Component

## Description
A React accordion component with smooth content height interpolation via CSS grid-template-rows and rotating trigger icons.

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | Array<{title, content}> | `[]` | List of accordion items to render |

## Usage
```jsx
import EaseAccordionGroup from './EaseAccordionGroup';

export default function App() {
  const items = [
    { title: 'Section 1', content: 'Details for section 1' },
    { title: 'Section 2', content: 'Details for section 2' }
  ];
  return <EaseAccordionGroup items={items} />;
}
```
