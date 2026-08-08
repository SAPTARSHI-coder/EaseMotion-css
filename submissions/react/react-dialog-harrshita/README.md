
# React Dialog Component

This component provides a thin React wrapper around the `ease-dialog` utility class.

## Usage

```jsx
import { EaseDialog } from './EaseDialog';

function Example() {
  return (
    <EaseDialog className="custom-utility">Hello EaseMotion!</EaseDialog>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-dialog` class.
