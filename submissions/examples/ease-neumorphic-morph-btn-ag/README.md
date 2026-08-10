# CSS Neumorphic Morphing Button

A fully interactive, pure CSS button component utilizing neumorphism (soft UI) principles combined with a morphing play/pause state toggle. It requires absolutely no JavaScript and leverages the checkbox hack for state management.

## Features

- **Pure CSS**: Uses the `<input type="checkbox">` trick to handle state toggling without any JS.
- **Neumorphism Design**: Advanced box-shadow techniques to create a tactile convex/concave 3D surface.
- **Icon Morphing**: Smooth transitions combining scaling, rotation, and opacity to morph between 'play' and 'pause' states.
- **Accessible & Responsive**: Fully supports the `prefers-reduced-motion` and `prefers-color-scheme` media queries to automatically adapt to dark mode and motion preferences.

## Usage

Copy the HTML structure from `demo.html` and the CSS from `style.css` into your project. 

```html
<label class="morph-container">
    <input type="checkbox" class="morph-input">
    <div class="morph-btn">
        <!-- SVG Icons here -->
    </div>
</label>
```

## CSS Variables

The entire appearance is driven by CSS custom properties, allowing for easy theming by simply overriding the variables:

```css
:root {
    --ease-bg: #e0e5ec;
    --ease-text: #2d3748;
    --ease-accent: #4fd1c5;
    
    /* Neumorphic shadow tokens */
    --ease-shadow-light: #ffffff;
    --ease-shadow-dark: #a3b1c6;
}
```
