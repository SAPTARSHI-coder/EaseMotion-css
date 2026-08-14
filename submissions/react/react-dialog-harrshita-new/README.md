
# React Dialog New Component

This component provides a React wrapper for the `ease-dialog` CSS utility.

## Usage

```jsx
import { EaseDialogNew } from './EaseDialogNew';

function Demo() {
  return (
    <EaseDialogNew className="custom-utility">Hello EaseMotion!</EaseDialogNew>
  );
}
```

The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-dialog` class.
