# Visibility Utilities

1. What does this do?
Provides utility classes to control whether elements are visible or hidden in the document layout, preserving or collapsing their occupied space accordingly.

2. How is it used?
Apply classes like `.visibility-hidden`, `.visibility-visible`, or `.visibility-collapse` directly to elements or table sections:
```html
<div class="visibility-hidden">I am hidden, but my layout space is preserved.</div>
<table>
  <tr class="visibility-collapse">This row is collapsed.</tr>
</table>
```

3. Why is it useful?
It allows hiding elements dynamically (e.g., loading states, tooltips, toggle dropdowns) while avoiding layout shifting, keeping the structure of surrounding elements completely stable.
