
# React List Component

This component provides a thin React wrapper around the `ease-list` utility class.

## Usage

```jsx
import { EaseList } from './EaseList';

function Example() {
  return (
    <EaseList className="custom-utility">Hello EaseMotion!</EaseList>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-list` class.
