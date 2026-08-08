
# React Dropdown Component

This component provides a thin React wrapper around the `ease-dropdown` utility class.

## Usage

```jsx
import { EaseDropdown } from './EaseDropdown';

function Example() {
  return (
    <EaseDropdown className="custom-utility">Hello EaseMotion!</EaseDropdown>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-dropdown` class.
