# Native CSS Nesting Demo

A hardware-accelerated, JavaScript-free article card component that acts as a practical demonstration of modern, native CSS Nesting capabilities.

## Features
- Pure CSS and HTML implementation. No CSS preprocessors (SASS, LESS, Stylus) are required to compile the nesting rules.
- **Component Architecture & Nesting Techniques**: 
  - **Component Scoping**: The entire `.article-card` block in `style.css` acts as a root scope. All child elements (`.card-body`, `.card-footer`, etc.) are cleanly nested inside it, preventing style leakage and drastically improving readability.
  - **Parent Selector (`&`)**: Demonstrates how to handle state changes cleanly by using the `&` selector. For example, `&:hover` is used to scale the card up, and `&:hover .card-image` is nested inside that to trigger the image zoom simultaneously.
  - **Deep Selector Chains**: Shows how deeply nested elements, like `.article-card .card-footer .bookmark-btn svg`, can be styled cleanly without writing long, repetitive selector chains.
  - **Nested Media Queries**: Demonstrates how `@media` queries can be nested *directly inside* the component block (e.g., inside `.article-card`), keeping responsive adjustments localized to the component rather than pushing them to the bottom of the stylesheet.
- **Theming**: Configured via CSS Custom Properties at the `:root` level. Fully supports automatic OS-level Dark Mode via `@media (prefers-color-scheme: dark)`. Notice how the dark mode overrides are also cleanly scoped to the `.article-card` block.
- Fully accessible semantic structure. The card uses semantic tags like `<article>`, `<header>`, and `<footer>`. Honors the `prefers-reduced-motion` accessibility standard. 

## Usage
Open `demo.html` in your browser to see the rendered card. However, the real value is in opening `style.css`. Study the stylesheet to see how native CSS now supports SASS-like nesting out of the box, allowing for highly modular, component-driven CSS architecture without build tools.

## Files
- `demo.html`: The HTML structure defining the semantic article card, the nested author block, and the interactive footer.
- `style.css`: The styling, entirely written using native CSS nesting syntax (`&`, nested pseudo-classes, and nested media queries).
