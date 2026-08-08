
# React Input Component

This component provides a thin React wrapper around the `ease-input` utility class.

## Usage

```jsx
import { EaseInput } from './EaseInput';

function Example() {
  return (
    <EaseInput className="custom-utility">Hello EaseMotion!</EaseInput>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-input` class.
