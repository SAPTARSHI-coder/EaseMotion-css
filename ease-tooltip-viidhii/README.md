# Animated Tooltip Wrapper Component

A reusable React wrapper component that adds smooth, animated tooltips to elements using EaseMotion utility classes.

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `content` | `ReactNode` / `String` | *Required* | The text or element inside the tooltip bubble |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | The orientation direction of the tooltip bubble |
| `children` | `ReactNode` | *Required* | The trigger target element |

## Usage

```jsx
import Tooltip from './Tooltip';

function App() {
  return (
    <Tooltip content="Success! Message sent." position="top">
      <button>Hover Me</button>
    </Tooltip>
  );
}
```
