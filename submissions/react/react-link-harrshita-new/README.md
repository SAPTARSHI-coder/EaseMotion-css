
# React Link New Component

This component provides a React wrapper for the `ease-link` CSS utility.

## Usage

```jsx
import { EaseLinkNew } from './EaseLinkNew';

function Demo() {
  return (
    <EaseLinkNew className="custom-utility">Hello EaseMotion!</EaseLinkNew>
  );
}
```

The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-link` class.
