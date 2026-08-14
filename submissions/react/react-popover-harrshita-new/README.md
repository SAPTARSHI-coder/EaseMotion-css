
# React Popover New Component

This component provides a React wrapper for the `ease-popover` CSS utility.

## Usage

```jsx
import { EasePopoverNew } from './EasePopoverNew';

function Demo() {
  return (
    <EasePopoverNew className="custom-utility">Hello EaseMotion!</EasePopoverNew>
  );
}
```

The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-popover` class.
