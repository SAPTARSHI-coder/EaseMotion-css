# Animation Builder Custom Styled Inputs

## What does this do?

This contribution provides modern, polished, and responsive custom CSS styling for input fields (Search, Duration, Delay) to replace native browser unstyled inputs with interactive glow states.

## How is it used?

Add the `.ease-input` class to any `<input>` element:

```html
<input type="text" class="ease-input" placeholder="Search animations..." />
```

For grouping labels and inputs within the control panel:

```html
<div class="input-group">
  <label for="search-anim">Search</label>
  <input
    type="text"
    id="search-anim"
    class="ease-input"
    placeholder="Search animations..."
  />
</div>
```
