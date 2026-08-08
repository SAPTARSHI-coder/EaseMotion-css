
# React Card Component

This component provides a thin React wrapper around the `ease-card` utility class.

## Usage

```jsx
import { EaseCard } from './EaseCard';

function Example() {
  return (
    <EaseCard className="custom-utility">Hello EaseMotion!</EaseCard>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-card` class.
