# Accordion Native CSS Nesting

## Description
This PR modernizes the `accordion` component's stylesheet by utilizing the **Native CSS Nesting** specification. This allows developers to write cleaner, more hierarchical, and highly readable CSS without relying on preprocessors like Sass, Less, or Stylus.

## Key CSS Nesting Features Used
- `&`: The nesting selector (e.g. `&:hover` for pseudo-classes).
- **Child nesting**: `h3 { ... }` directly inside the component block automatically scopes to the component.
- **Reverse nesting**: `.theme-light & { ... }` allows defining context-specific styles (like dark/light mode overrides) directly within the component block, keeping all component logic in one place.

## Changes
- `style.css`: A completely refactored 80+ line stylesheet containing all component logic, states, child elements, and theme overrides inside a **single** `.ease-accordion-nesting-harrshita` block.
- `demo.html`: Demonstrates both the default rendering and the reverse-nested light theme rendering.
- `README.md`: Explains native CSS nesting capabilities.
\nFixes #56807\n