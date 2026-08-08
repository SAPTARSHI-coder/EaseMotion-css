
# React Link Component

This component provides a thin React wrapper around the `ease-link` utility class.

## Usage

```jsx
import { EaseLink } from './EaseLink';

function Example() {
  return (
    <EaseLink className="custom-utility">Hello EaseMotion!</EaseLink>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-link` class.
