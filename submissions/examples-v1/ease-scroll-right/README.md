# Ease Scroll Reveal Right

A scroll-triggered animation where elements slide in from the left and fade into view when they enter the viewport.

## Features

- Slide-in from left
- Smooth easing animation
- Fade-in effect
- Intersection Observer API
- Responsive design
- Pure HTML, CSS, and JavaScript
- No external libraries

## Files

```text
demo.html
style.css
README.md
```

## How It Works

Elements begin hidden off-screen:

```css
opacity: 0;
transform: translateX(-100px);
```

When the element enters the viewport:

```css
opacity: 1;
transform: translateX(0);
```

The transition creates a smooth left-to-right reveal effect.

## JavaScript Logic

An Intersection Observer watches each reveal element:

```javascript
const observer = new IntersectionObserver(...)
```

When an element becomes visible:

```javascript
entry.target.classList.add("active");
```

The animation starts automatically.

## Customization

### Animation Speed

```css
transition:
    transform 0.8s ease,
    opacity 0.8s ease;
```

### Starting Offset

```css
transform: translateX(-100px);
```

Examples:

```css
translateX(-50px);
```

Subtle effect

```css
translateX(-200px);
```

Strong effect

### Trigger Point

```javascript
threshold: 0.2
```

Lower values reveal earlier.

Higher values reveal later.

### Card Styling

```css
background: #1e293b;
border-radius: 20px;
```

Customize to match your design system.

## Use Cases

- Landing pages
- Feature showcases
- Product sections
- Portfolio websites
- Marketing pages
- Content blocks

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

in any modern browser and scroll down to see the reveal animation.