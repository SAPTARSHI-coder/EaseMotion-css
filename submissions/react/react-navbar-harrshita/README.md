
# React Navbar Component

This component provides a thin React wrapper around the `ease-navbar` utility class.

## Usage

```jsx
import { EaseNavbar } from './EaseNavbar';

function Example() {
  return (
    <EaseNavbar className="custom-utility">Hello EaseMotion!</EaseNavbar>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-navbar` class.
