# Dropdown Text Visibility Fix

**1. What does this do?**
This fixes the invisible text issue inside the native select dropdown menu by ensuring `<option>` elements inherit the correct background and text colors in both dark and light themes, and applies `color-scheme` to trigger the browser's native dark UI.

**2. How is it used?**
The CSS automatically targets `<option>` tags inside elements with the `.ease-input` class. No changes to the HTML structure are required:
```html
<select class="ease-input">
  <option value="all">All Categories</option>
</select>