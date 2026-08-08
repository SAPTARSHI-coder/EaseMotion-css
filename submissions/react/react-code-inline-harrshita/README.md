
# React CodeInline Component

This component provides a thin React wrapper around the `ease-code-inline` utility class.

## Usage

```jsx
import { EaseCodeInline } from './EaseCodeInline';

function Example() {
  return (
    <EaseCodeInline className="custom-utility">Hello EaseMotion!</EaseCodeInline>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-code-inline` class.
