# CSS light-dark() Function

A demonstration of the modern CSS `light-dark()` function, showcasing how to radically simplify component color theming without needing complex media queries or duplicate custom property definitions.

## Features
- Pure CSS and HTML implementation leveraging modern CSS features.
- **Component Architecture (Documented in Code)**: 
  - **The Requirement**: The `light-dark()` function *requires* that the browser knows which color schemes the document supports. This component sets `color-scheme: light dark;` on the `:root` element to fulfill this requirement.
  - **Simplified Variable Declaration**: Instead of writing a default set of CSS Custom Properties (variables) and then redefining them entirely within a `@media (prefers-color-scheme: dark)` block, this component defines each variable once using the `light-dark(<light-color>, <dark-color>)` syntax. 
  - **The Result**: The browser automatically evaluates the correct color based on the user's OS preference, drastically reducing CSS file size and improving maintainability.
- **Smooth Transitions**: The component includes `transition: background-color 0.3s ease, color 0.3s ease` properties so that if a user flips their OS theme while viewing the page, the UI crossfades smoothly rather than flashing instantly.
- Fully accessible semantic structure. The card uses standard semantic HTML (`<article>`, `<h2>`, `<button>`).

## Usage
Open `demo.html` in your browser. Then, toggle your operating system's Dark Mode setting (or emulate it via browser DevTools) to see the card adapt instantly.

*(Note: The `light-dark()` function is supported in modern browsers, but may require fallbacks for older browser versions in a full production environment.)*

## Files
- `demo.html`: The HTML structure demonstrating the themed card UI.
- `style.css`: The styling, highlighting the `color-scheme` property and the `light-dark()` inline variable definitions.
