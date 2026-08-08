
# React Progress Component

This component provides a thin React wrapper around the `ease-progress` utility class.

## Usage

```jsx
import { EaseProgress } from './EaseProgress';

function Example() {
  return (
    <EaseProgress className="custom-utility">Hello EaseMotion!</EaseProgress>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-progress` class.
