
# React Modal New Component

This component provides a React wrapper for the `ease-modal` CSS utility.

## Usage

```jsx
import { EaseModalNew } from './EaseModalNew';

function Demo() {
  return (
    <EaseModalNew className="custom-utility">Hello EaseMotion!</EaseModalNew>
  );
}
```

The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-modal` class.
