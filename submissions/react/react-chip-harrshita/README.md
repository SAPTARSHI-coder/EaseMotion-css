
# React Chip Component

This component provides a thin React wrapper around the `ease-chip` utility class.

## Usage

```jsx
import { EaseChip } from './EaseChip';

function Example() {
  return (
    <EaseChip className="custom-utility">Hello EaseMotion!</EaseChip>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-chip` class.
