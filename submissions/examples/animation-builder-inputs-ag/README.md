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

## Why is it useful?

EaseMotion CSS is centered around creating premium, fluid, and visually stunning motion experiences. Standard native inputs feel rigid and break the visual design language. Styling these input fields with modern focus rings, transitions, and dark-theme variables ensures that the framework's interactive documentation tools (like the Animation Builder) match the library's polished, professional aesthetic.

## Tech Stack

- HTML
- CSS (no frameworks)
- JavaScript (used in demo.html for interactivity/preview logic only)

## Preview

Open `demo.html` directly in your browser to test the search query filters, animation duration/delay updates, and light/dark theme toggle.

