
# React Modal Component

This component provides a thin React wrapper around the `ease-modal` utility class.

## Usage

```jsx
import { EaseModal } from './EaseModal';

function Example() {
  return (
    <EaseModal className="custom-utility">Hello EaseMotion!</EaseModal>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-modal` class.
