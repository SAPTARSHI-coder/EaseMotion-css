
# React Form Component

This component provides a thin React wrapper around the `ease-form` utility class.

## Usage

```jsx
import { EaseForm } from './EaseForm';

function Example() {
  return (
    <EaseForm className="custom-utility">Hello EaseMotion!</EaseForm>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-form` class.
