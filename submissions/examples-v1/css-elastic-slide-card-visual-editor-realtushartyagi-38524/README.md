# CSS Elastic Slide Card (Visual Editor Layout)

A professional properties panel layout that uses a dynamic, elastic sliding animation to reveal complex editing controls. Ideal for no-code builders, visual editors, and SaaS interfaces.

## Features
- **Zero JavaScript**: Pure CSS implementation utilizing advanced transitions and hover/focus states.
- **Elastic Animation**: Uses a custom `cubic-bezier(0.34, 1.56, 0.64, 1)` for a smooth, spring-like slide effect.
- **Visual Editor Theme**: Designed with a "dark mode" properties panel hidden beneath a "light mode" preview card.
- **Accessible**: Fully supports keyboard navigation via `:focus-within`.
- **Responsive & Adaptive**: Adjusts automatically based on user system preferences (`prefers-color-scheme: dark`) and respects `prefers-reduced-motion`.

## Files Included
- `demo.html` - The structural markup for the element preview and properties panel.
- `style.css` - The styles and CSS transitions powering the elastic reveal effect.

## Usage
1. Copy the HTML structure from `demo.html`.
2. Import the styles from `style.css`.
3. The component relies on a wrapper (`.ease-editor-slide-card`) and two absolute positioned panels (`.ease-editor-front` and `.ease-editor-back`). Hovering or focusing the wrapper slides the front panel up and the back panel down, revealing the editor.

## Customization
You can easily adjust the "bounciness" by tweaking the `cubic-bezier` values in the `.ease-editor-front` and `.ease-editor-back` transition rules. 

```css
/* Change colors using CSS Variables in :root */
:root {
  --ease-editor-bg: #f1f5f9;
  --ease-editor-surface: #ffffff;
  --ease-editor-panel: #1e293b;
  --ease-editor-accent: #3b82f6;
}
```
