# CSS Variable Reference Table

## What does this do?
Documents every `--ease-*` CSS custom property from `core/variables.css` in a clean, searchable reference table.

## How is it used?
Open `demo.html` directly in your browser to browse all variables. Use the search bar to filter by name, category, or value.

To override any variable in your own project, add this to your CSS:

```css
:root {
  --ease-color-primary: #6366f1;
  --ease-speed-medium: 400ms;
  --ease-radius-md: 8px;
}
```

## Why is it useful?
Without a reference table, contributors have to open `variables.css` and guess what each token does. This makes all design tokens self-documenting — showing the variable name, default value, what it affects, and a practical example override, all in one place.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
