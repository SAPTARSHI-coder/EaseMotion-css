
# React Pagination Component

This component provides a thin React wrapper around the `ease-pagination` utility class.

## Usage

```jsx
import { EasePagination } from './EasePagination';

function Example() {
  return (
    <EasePagination className="custom-utility">Hello EaseMotion!</EasePagination>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-pagination` class.
