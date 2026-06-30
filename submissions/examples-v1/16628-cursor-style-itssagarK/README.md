# Cursor Style Utilities

1. What does this do?
   Provides utility classes to customize the cursor appearance when hovering over elements.

2. How is it used?
   Apply classes like `.cursor-pointer`, `.cursor-not-allowed`, or `.cursor-grab` to any interactive HTML element:

```html
<button class="cursor-pointer">Click Me</button>
<div class="card cursor-grab">Drag and drop card</div>
<input
  type="text"
  disabled
  class="cursor-not-allowed"
  placeholder="Disabled Input"
/>
```

3. Why is it useful?
   It provides immediate visual affordances, letting users know exactly what actions they can perform (such as text input, zoom, drag, or restricted access) when interacting with elements.
