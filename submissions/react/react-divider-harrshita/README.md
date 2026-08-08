
# React Divider Component

This component provides a thin React wrapper around the `ease-divider` utility class.

## Usage

```jsx
import { EaseDivider } from './EaseDivider';

function Example() {
  return (
    <EaseDivider className="custom-utility">Hello EaseMotion!</EaseDivider>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-divider` class.
