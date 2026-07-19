# Border Draw Map Embed

A pure CSS animated map embed component inspired by modern portfolio design patterns. It features a continuous gradient tracing border that creates a premium, dynamic feel around embedded elements like Google Maps.

## Features
- **Pure CSS**: No JavaScript required.
- **Animated**: Uses a spinning `conic-gradient` to create a tracing/drawing border effect.
- **Responsive**: Maintains a 16:9 aspect ratio by default, scaling gracefully on smaller screens.
- **Accessible**: Respects `prefers-reduced-motion` by falling back to a static colored border.
- **EaseMotion Integrated**: Utilizes standard `--ease-color-*`, `--ease-radius-*`, and `--ease-shadow-*` variables, along with standard fade animations.

## Usage

1. Include the base `easemotion.css` framework in your project.
2. Include the `style.css` provided in this example.
3. Use the `.ease-border-draw-map-embed` class as a wrapper around your `<iframe>`.

```html
<div class="ease-border-draw-map-embed">
  <iframe 
    src="https://www.google.com/maps/embed?..." 
    width="600" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"
    title="Map">
  </iframe>
</div>
```

## Dependencies
- Uses EaseMotion standard CSS variables (`--ease-color-surface`, `--ease-color-primary`, `--ease-radius-md`, etc.)
- Triggers the `ease-kf-fade-in` animation on initial load.
