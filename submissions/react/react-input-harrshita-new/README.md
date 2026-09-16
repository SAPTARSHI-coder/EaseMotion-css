
# React Input New Component

This component provides a React wrapper for the `ease-input` CSS utility.

## Usage

```jsx
import { EaseInputNew } from './EaseInputNew';

function Demo() {
  return (
    <EaseInputNew className="custom-utility">Hello EaseMotion!</EaseInputNew>
  );
}
```

The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-input` class.
