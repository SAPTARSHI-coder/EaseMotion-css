
# React Menu Component

This component provides a thin React wrapper around the `ease-menu` utility class.

## Usage

```jsx
import { EaseMenu } from './EaseMenu';

function Example() {
  return (
    <EaseMenu className="custom-utility">Hello EaseMotion!</EaseMenu>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-menu` class.
