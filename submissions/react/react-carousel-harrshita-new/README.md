
# React Carousel New Component

This component provides a React wrapper for the `ease-carousel` CSS utility.

## Usage

```jsx
import { EaseCarouselNew } from './EaseCarouselNew';

function Demo() {
  return (
    <EaseCarouselNew className="custom-utility">Hello EaseMotion!</EaseCarouselNew>
  );
}
```

The component forwards refs, spreads extra props, and merges any custom `className` you provide with the core `ease-carousel` class.
