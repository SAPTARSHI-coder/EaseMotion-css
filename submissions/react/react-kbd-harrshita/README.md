
# React Kbd Component

This component provides a thin React wrapper around the `ease-kbd` utility class.

## Usage

```jsx
import { EaseKbd } from './EaseKbd';

function Example() {
  return (
    <EaseKbd className="custom-utility">Hello EaseMotion!</EaseKbd>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-kbd` class.
