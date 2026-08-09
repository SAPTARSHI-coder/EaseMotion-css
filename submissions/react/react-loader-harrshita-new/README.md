
# React Loader New Component

This component provides a React wrapper for the `ease-loader` CSS utility.

## Usage

```jsx
import { EaseLoaderNew } from './EaseLoaderNew';

function Demo() {
  return (
    <EaseLoaderNew className="custom-utility">Hello EaseMotion!</EaseLoaderNew>
  );
}
```

The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-loader` class.
