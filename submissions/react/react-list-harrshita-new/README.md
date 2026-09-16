
# React List New Component

This component provides a React wrapper for the `ease-list` CSS utility.

## Usage

```jsx
import { EaseListNew } from './EaseListNew';

function Demo() {
  return (
    <EaseListNew className="custom-utility">Hello EaseMotion!</EaseListNew>
  );
}
```

The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-list` class.
