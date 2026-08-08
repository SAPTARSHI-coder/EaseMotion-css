
# React Icon Component

This component provides a thin React wrapper around the `ease-icon` utility class.

## Usage

```jsx
import { EaseIcon } from './EaseIcon';

function Example() {
  return (
    <EaseIcon className="custom-utility">Hello EaseMotion!</EaseIcon>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-icon` class.
