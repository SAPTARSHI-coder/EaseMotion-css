
# React Card New Component

This component provides a React wrapper for the `ease-card` CSS utility.

## Usage

```jsx
import { EaseCardNew } from './EaseCardNew';

function Demo() {
  return (
    <EaseCardNew className="custom-utility">Hello EaseMotion!</EaseCardNew>
  );
}
```

The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-card` class.
