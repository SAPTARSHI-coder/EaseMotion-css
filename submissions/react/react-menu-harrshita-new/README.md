
# React Menu New Component

This component provides a React wrapper for the `ease-menu` CSS utility.

## Usage

```jsx
import { EaseMenuNew } from './EaseMenuNew';

function Demo() {
  return (
    <EaseMenuNew className="custom-utility">Hello EaseMotion!</EaseMenuNew>
  );
}
```

The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-menu` class.
