# Ease Color Change Scroll

A scroll-triggered animation where the page background color changes smoothly as different sections enter the viewport.

## Features

- Scroll-based color transitions
- Smooth easing effect
- Section-specific theme colors
- Responsive design
- Uses Intersection Observer API
- Pure HTML, CSS, and JavaScript
- No external libraries

## Files

```text
demo.html
style.css
README.md
```

## How It Works

Each section defines a background color:

```html
<section data-color="#4f46e5">
```

When the section becomes visible:

```javascript
document.body.style.backgroundColor =
    section.dataset.color;
```

The CSS transition creates a smooth color change:

```css
body {
    transition:
        background-color 0.8s ease;
}
```

## Customization

### Change Section Colors

```html
data-color="#4f46e5"
```

Examples:

```html
data-color="#ef4444"
```

Red

```html
data-color="#22c55e"
```

Green

```html
data-color="#f59e0b"
```

Amber

### Animation Speed

```css
transition:
    background-color 0.8s ease;
```

Examples:

```css
0.4s
```

Fast

```css
1.5s
```

Slow

### Trigger Point

```javascript
threshold: 0.5
```

- `0.2` → color changes earlier
- `0.5` → balanced transition
- `0.8` → changes later

## Use Cases

- Storytelling websites
- Product launches
- Portfolio pages
- Landing pages
- Interactive presentations
- Marketing campaigns

## Browser Support

- Chrome
- Firefox
- Safari
- Edge
- Opera

## Run

Open:

```text
demo.html
```

in any modern browser and scroll through the sections to see the background color transition effect.