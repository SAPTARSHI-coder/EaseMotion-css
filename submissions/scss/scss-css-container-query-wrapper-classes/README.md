# SCSS Utility: CSS Container Query Wrapper Classes

## What does this do?
Provides clean, reusable SCSS mixins and pre-generated wrapper classes to implement modern CSS Container Queries. This allows child components to adapt their layouts based on their parent container's size rather than the viewport size.

## Mixin Signatures
```scss
// Define a container context on the parent
@mixin container-parent(
  $type: inline-size,
  $name: null
);

// Query a container context on the child
@mixin container-query(
  $min-width,
  $name: null
) {
  @content;
}
```

### Parameters
- `$type`: The type of containment (`inline-size` or `size`).
- `$name`: Optional name to target a specific container.
- `$min-width`: The minimum width of the container at which to apply styles.

## Usage Example
```scss
@import "scss-css-container-query-wrapper-classes";

.card-grid {
  @include container-parent(inline-size, card-container);
}

.card-item {
  display: flex;
  flex-direction: column;

  @include container-query(400px, card-container) {
    flex-direction: row;
    gap: 1.5rem;
  }
}
```

## Compiled CSS Output
```css
.card-grid {
  container-type: inline-size;
  container-name: card-container;
}
.card-item {
  display: flex;
  flex-direction: column;
}
@container card-container (min-width: 400px) {
  .card-item {
    flex-direction: row;
    gap: 1.5rem;
  }
}
```
 We also provide helper classes:
- `.ease-container-parent`: Sets `container-type: inline-size;`
- `.ease-container-parent-size`: Sets `container-type: size;`
