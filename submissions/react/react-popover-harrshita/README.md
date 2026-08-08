
# React Popover Component

This component provides a thin React wrapper around the `ease-popover` utility class.

## Usage

```jsx
import { EasePopover } from './EasePopover';

function Example() {
  return (
    <EasePopover className="custom-utility">Hello EaseMotion!</EasePopover>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-popover` class.
