## Container-Type Utility

**What does this do?**  
Provides utility classes for the `container-type` CSS property, which establishes an element as a query container for CSS container queries. Controls whether the element's size is tracked in the inline axis, both axes, or neither.

**How is it used?**  
Add `container-type-inline-size` to any element to make it a container query target:

```html
<div class="container-type-inline-size">
  <div class="child">
    This element can use @container queries based on parent width
  </div>
</div>
```

**Why is it useful?**  
Container queries require a containment context to work. Without `container-type`, `@container` queries have nothing to reference. These utilities provide a simple, declarative way to create containment contexts on any element, enabling responsive components that respond to their own container size rather than the viewport.
