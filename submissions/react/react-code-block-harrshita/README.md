
# React CodeBlock Component

This component provides a thin React wrapper around the `ease-code-block` utility class.

## Usage

```jsx
import { EaseCodeBlock } from './EaseCodeBlock';

function Example() {
  return (
    <EaseCodeBlock className="custom-utility">Hello EaseMotion!</EaseCodeBlock>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-code-block` class.
