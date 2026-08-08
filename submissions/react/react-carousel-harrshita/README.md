
# React Carousel Component

This component provides a thin React wrapper around the `ease-carousel` utility class.

## Usage

```jsx
import { EaseCarousel } from './EaseCarousel';

function Example() {
  return (
    <EaseCarousel className="custom-utility">Hello EaseMotion!</EaseCarousel>
  );
}
```

The wrapper forwards refs, spreads remaining props onto the `<div>`, and merges any custom `className` you provide with the core `ease-carousel` class.
