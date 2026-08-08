
# React Avatar Component

This component provides a thin React wrapper around the `ease-avatar` utility class.

## Usage

```jsx
import { EaseAvatar } from './EaseAvatar';

function Example() {
  return (
    <EaseAvatar className="custom-utility">Hello EaseMotion!</EaseAvatar>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-avatar` class.
