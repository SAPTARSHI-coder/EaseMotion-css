
# React Form New Component

This component provides a React wrapper for the `ease-form` CSS utility.

## Usage

```jsx
import { EaseFormNew } from './EaseFormNew';

function Demo() {
  return (
    <EaseFormNew className="custom-utility">Hello EaseMotion!</EaseFormNew>
  );
}
```

The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-form` class.
