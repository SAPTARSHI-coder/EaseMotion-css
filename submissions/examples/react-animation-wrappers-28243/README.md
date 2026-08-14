# React Animation Wrappers for EaseMotion

This example implements a full suite of React wrapper components for EaseMotion CSS animations, resolving issue #28243.

## Included Components
- **`<Animate>`**: A declarative component that supports properties like `type`, `duration`, `delay`, `iteration`, `onStart`, and `onEnd`.
- **`<Hover>`**: Dedicated wrapper for hover interactions (`lift`, `scale`, `glow`, `shake`).
- **`<ScrollReveal>`**: Wraps an element and utilizes the IntersectionObserver API to trigger animations when scrolled into view.

## Usage
Simply import the components into your React project:
```jsx
import { Animate, Hover, ScrollReveal } from './components';

export default function App() {
  return (
    <ScrollReveal type="fade-in">
      <Hover effect="lift">
        <Animate type="zoom-in" duration={500}>
          Hello EaseMotion
        </Animate>
      </Hover>
    </ScrollReveal>
  );
}
```

Tests have been provided using `@testing-library/react`.
