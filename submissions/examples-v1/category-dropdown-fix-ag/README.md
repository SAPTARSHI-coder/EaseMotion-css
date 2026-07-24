# Category Dropdown Theme Fix

## What does this do?
Provides a premium, theme-adaptive category dropdown selector that styles option list elements explicitly, fixing visibility bugs (such as blank/white-on-white dropdowns) across various browsers in dark and light modes.

## How is it used?
Add the class `category-dropdown` to any HTML `<select>` element and customize the options inside:

```html
<select class="category-dropdown">
  <option value="all">All Categories</option>
  <option value="fades">Fades</option>
  <option value="slides">Slides</option>
  <option value="zooms">Zooms</option>
</select>
```

## Why is it useful?
In dark-themed web layouts, default HTML `<select>` and `<option>` tags can inherit a white text color from parent page containers. Under light or default operating system system modes, browsers often render the expanded options panel with a white background. This mismatch creates invisible white text on a white background, breaking dropdown filters. This fix provides a solid, theme-synchronized style mapping that guarantees high accessibility and legibility.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript required for core styling)

## Preview
Open `demo.html` directly in your browser to interact with the styled dropdown and filter content dynamically in light and dark modes.
