
# React Accordion Component

This component provides a thin React wrapper around the `ease-accordion` utility class.

## Usage

```jsx
import { EaseAccordion } from './EaseAccordion';

function Example() {
  return (
    <EaseAccordion className="custom-utility">Hello EaseMotion!</EaseAccordion>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-accordion` class.
