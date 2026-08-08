
# React Alert Component

This component provides a thin React wrapper around the `ease-alert` utility class.

## Usage

```jsx
import { EaseAlert } from './EaseAlert';

function Example() {
  return (
    <EaseAlert className="custom-utility">Hello EaseMotion!</EaseAlert>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-alert` class.
