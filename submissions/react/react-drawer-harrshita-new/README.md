
# React Drawer New Component

This component provides a React wrapper for the `ease-drawer` CSS utility.

## Usage

```jsx
import { EaseDrawerNew } from './EaseDrawerNew';

function Demo() {
  return (
    <EaseDrawerNew className="custom-utility">Hello EaseMotion!</EaseDrawerNew>
  );
}
```

The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-drawer` class.
