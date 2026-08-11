
# React Navbar New Component

This component provides a React wrapper for the `ease-navbar` CSS utility.

## Usage

```jsx
import { EaseNavbarNew } from './EaseNavbarNew';

function Demo() {
  return (
    <EaseNavbarNew className="custom-utility">Hello EaseMotion!</EaseNavbarNew>
  );
}
```

The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-navbar` class.
