
# React Loader Component

This component provides a thin React wrapper around the `ease-loader` utility class.

## Usage

```jsx
import { EaseLoader } from './EaseLoader';

function Example() {
  return (
    <EaseLoader className="custom-utility">Hello EaseMotion!</EaseLoader>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-loader` class.
