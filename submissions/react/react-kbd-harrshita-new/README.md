
# React Kbd New Component

This component provides a React wrapper for the `ease-kbd` CSS utility.

## Usage

```jsx
import { EaseKbdNew } from './EaseKbdNew';

function Demo() {
  return (
    <EaseKbdNew className="custom-utility">Hello EaseMotion!</EaseKbdNew>
  );
}
```

The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-kbd` class.
