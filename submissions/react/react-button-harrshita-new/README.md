
# React Button New Component

This component provides a React wrapper for the `ease-button` CSS utility.

## Usage

```jsx
import { EaseButtonNew } from './EaseButtonNew';

function Demo() {
  return (
    <EaseButtonNew className="custom-utility">Hello EaseMotion!</EaseButtonNew>
  );
}
```

The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-button` class.
