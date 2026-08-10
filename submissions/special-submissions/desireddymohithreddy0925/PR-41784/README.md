# Staggered Child Animations (`ease-stagger`)

This submission provides a set of SCSS mixins and utility classes that utilize `:nth-child()` selectors to automatically apply incremental `animation-delay` values to nested child elements. 

This allows for seamless sequential reveals of lists, grids, or cards without needing to manually apply a delay class (like `.delay-1`, `.delay-2`) to every single item.

## Included Utility Classes

- `.ease-stagger-fast`: 0.05s step delay per child
- `.ease-stagger-normal`: 0.1s step delay per child
- `.ease-stagger-slow`: 0.2s step delay per child

## Usage Example

Simply apply the stagger class to the **parent container**, and ensure the child elements have an animation applied (e.g., `.ease-fade-in` or `.ease-slide-up`).

### HTML Example

```html
<ul class="ease-stagger-normal">
  <li class="ease-slide-up">Item 1</li>
  <li class="ease-slide-up">Item 2</li>
  <li class="ease-slide-up">Item 3</li>
  <li class="ease-slide-up">Item 4</li>
</ul>
```

### SCSS Mixin Usage

If you prefer to use the mixin in your own custom classes:

```scss
@import 'staggered-child-animations';

.my-custom-grid {
  // Applies a 0.15s stagger to up to 10 children, starting at a 0.5s initial delay
  @include ease-stagger-children($count: 10, $step: 0.15s, $start: 0.5s);
}
```

## Why this is useful

Currently, developers using EaseMotion CSS have to write inline styles or apply 10 different utility classes to 10 different elements to create a waterfall/staggered reveal effect. This submission significantly cleans up HTML and improves developer experience by offloading the stagger math to CSS pseudo-classes.
