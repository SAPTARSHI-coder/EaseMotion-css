
# React Image New Component

This component provides a React wrapper for the `ease-image` CSS utility.

## Usage

```jsx
import { EaseImageNew } from './EaseImageNew';

function Demo() {
  return (
    <EaseImageNew className="custom-utility">Hello EaseMotion!</EaseImageNew>
  );
}
```

The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-image` class.
