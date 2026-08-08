
# React Button Component

This component provides a thin React wrapper around the `ease-button` utility class.

## Usage

```jsx
import { EaseButton } from './EaseButton';

function Example() {
  return (
    <EaseButton className="custom-utility">Hello EaseMotion!</EaseButton>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-button` class.
