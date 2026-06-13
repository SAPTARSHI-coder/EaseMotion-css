# Magnetic Button

## 1. What does this do?
A button that slightly follows the mouse cursor position on hover, creating a magnetic/attraction effect using vanilla JavaScript.

## 2. How is it used?
Add the `.magnetic-btn` class to a `<button>` element. The inline JS tracks mouse position and updates `--mx`/`--my` CSS custom properties.
```html
<button class="magnetic-btn">Hover Me</button>
```

## 3. Why is it useful?
Adds an interactive, playful feel to buttons with minimal JavaScript. Uses CSS custom properties for smooth, performant transforms. Respects `prefers-reduced-motion` and degrades to a static button.
