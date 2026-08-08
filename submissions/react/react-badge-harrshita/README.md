
# React Badge Component

This component provides a thin React wrapper around the `ease-badge` utility class.

## Usage

```jsx
import { EaseBadge } from './EaseBadge';

function Example() {
  return (
    <EaseBadge className="custom-utility">Hello EaseMotion!</EaseBadge>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-badge` class.
