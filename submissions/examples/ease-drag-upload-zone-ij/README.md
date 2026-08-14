# Drag Upload Zone

A CSS animation component that provides a drag-and-drop upload zone with smooth hover and drag-over transitions.

## Features

- Dashed-border drop zone with animated border and background transitions
- Drag-over state toggled via JavaScript (`duz-dragover` class)
- Subtle scale effect on drag-over
- Google Fonts Inter integration
- Upload icon using inline SVG

## Usage

1. Include `style.css` in your HTML file.
2. Copy the HTML structure from `demo.html` — a container with the `duz-zone` class and an element with id `dropZone`.
3. Attach `dragenter`, `dragover`, `dragleave`, and `drop` event listeners to toggle the `.duz-dragover` class.

```js
const zone = document.getElementById('dropZone');
zone.addEventListener('dragenter', (e) => {
  e.preventDefault();
  zone.classList.add('duz-dragover');
});
zone.addEventListener('dragover', (e) => e.preventDefault());
zone.addEventListener('dragleave', (e) => {
  e.preventDefault();
  zone.classList.remove('duz-dragover');
});
zone.addEventListener('drop', (e) => {
  e.preventDefault();
  zone.classList.remove('duz-dragover');
});
```

## Customization

Override the CSS custom properties in `:root` to match your design:

```css
:root {
  --duz-border-color: #cbd5e1;
  --duz-border-dragover: #6366f1;
  --duz-bg: #f8fafc;
  --duz-bg-dragover: #eef2ff;
  --duz-text-color: #64748b;
  --duz-text-dragover: #4f46e5;
  --duz-radius: 12px;
  --duz-padding: 56px;
  --duz-scale: 1.02;
  --duz-transition: 0.25s ease;
}
```

## Browser Support

Works in all modern browsers that support CSS transitions and the Drag and Drop API.
