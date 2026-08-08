
# React Checkbox Component

This component provides a thin React wrapper around the `ease-checkbox` utility class.

## Usage

```jsx
import { EaseCheckbox } from './EaseCheckbox';

function Example() {
  return (
    <EaseCheckbox className="custom-utility">Hello EaseMotion!</EaseCheckbox>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-checkbox` class.
