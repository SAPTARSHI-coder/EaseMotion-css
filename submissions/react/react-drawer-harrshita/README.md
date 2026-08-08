
# React Drawer Component

This component provides a thin React wrapper around the `ease-drawer` utility class.

## Usage

```jsx
import { EaseDrawer } from './EaseDrawer';

function Example() {
  return (
    <EaseDrawer className="custom-utility">Hello EaseMotion!</EaseDrawer>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-drawer` class.
