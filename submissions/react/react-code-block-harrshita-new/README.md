
# React CodeBlock New Component

This component provides a React wrapper for the `ease-code-block` CSS utility.

## Usage

```jsx
import { EaseCodeBlockNew } from './EaseCodeBlockNew';

function Demo() {
  return (
    <EaseCodeBlockNew className="custom-utility">Hello EaseMotion!</EaseCodeBlockNew>
  );
}
```

The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-code-block` class.
