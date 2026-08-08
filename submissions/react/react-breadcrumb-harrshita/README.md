
# React Breadcrumb Component

This component provides a thin React wrapper around the `ease-breadcrumb` utility class.

## Usage

```jsx
import { EaseBreadcrumb } from './EaseBreadcrumb';

function Example() {
  return (
    <EaseBreadcrumb className="custom-utility">Hello EaseMotion!</EaseBreadcrumb>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-breadcrumb` class.
