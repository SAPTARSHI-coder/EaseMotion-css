
# React Alert New Component

This component provides a React wrapper for the `ease-alert` CSS utility.

## Usage

```jsx
import { EaseAlertNew } from './EaseAlertNew';

function Demo() {
  return (
    <EaseAlertNew className="custom-utility">Hello EaseMotion!</EaseAlertNew>
  );
}
```

The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-alert` class.
