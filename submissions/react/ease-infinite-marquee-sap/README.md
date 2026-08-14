# <EaseInfiniteScrollMarquee> Virtualized React Component

## Description
A React marquee component for seamless infinite horizontal scrolling with pause-on-hover accessibility features.

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `speed` | string | `'20s'` | CSS animation duration loop time |
| `reverse` | boolean | `false` | Reverse scroll direction |

## Usage
```jsx
import EaseInfiniteScrollMarquee from './EaseInfiniteScrollMarquee';

export default function App() {
  return (
    <EaseInfiniteScrollMarquee speed="15s">
      <span>Item 1</span>
      <span>Item 2</span>
      <span>Item 3</span>
    </EaseInfiniteScrollMarquee>
  );
}
```
