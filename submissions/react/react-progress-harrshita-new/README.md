
# React Progress New Component

This component provides a React wrapper for the `ease-progress` CSS utility.

## Usage

```jsx
import { EaseProgressNew } from './EaseProgressNew';

function Demo() {
  return (
    <EaseProgressNew className="custom-utility">Hello EaseMotion!</EaseProgressNew>
  );
}
```

The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-progress` class.
