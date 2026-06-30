# Isolation Utilities

1. What does this do?
   Provides utility classes to define whether an element creates a new stacking context, restricting how elements inside it blend with elements behind it.

2. How is it used?
   Apply classes like `.isolation-isolate` or `.isolation-auto` to a wrapper container containing blending elements:

```html
<div class="background-pattern">
  <div class="card isolation-isolate">
    <!-- These elements will only blend inside this card -->
    <div class="blending-element" style="mix-blend-mode: difference;"></div>
  </div>
</div>
```

3. Why is it useful?
   It prevents text, buttons, and other widgets that use mix-blend-modes from bleeding into background elements outside their parent container, maintaining strict design boundaries and layout containment.
