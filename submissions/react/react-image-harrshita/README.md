
# React Image Component

This component provides a thin React wrapper around the `ease-image` utility class.

## Usage

```jsx
import { EaseImage } from './EaseImage';

function Example() {
  return (
    <EaseImage className="custom-utility">Hello EaseMotion!</EaseImage>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-image` class.
