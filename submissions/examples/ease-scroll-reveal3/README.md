# Ease Scroll Reveal Fade

A scroll-triggered animation where elements smoothly fade into view when they enter the viewport.

## Features

- Fade-in effect
- Smooth upward motion
- Scroll-triggered animation
- Uses Intersection Observer API
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

Elements start hidden:

```css
opacity: 0;
transform: translateY(50px);
```

When the element becomes visible:

```css
opacity: 1;
transform: translateY(0);
```

The transition creates a smooth fade and slide effect.

## JavaScript Logic

The Intersection Observer watches each element:

```javascript
const observer = new IntersectionObserver(...)
```

When an element enters the viewport:

```javascript
entry.target.classList.add("active");
```

The CSS animation is triggered automatically.

## Customization

### Animation Speed

```css
transition:
    opacity 0.8s ease,
    transform 0.8s ease;
```

Examples:

```css
0.5s
```

Faster reveal

```css
1.2s
```

Slower reveal

### Starting Position

```css
transform: translateY(50px);
```

Increase for a stronger movement effect.

### Reveal Threshold

```javascript
threshold: 0.2
```

Lower values trigger earlier.

Higher values require more visibility.

## Use Cases

- Landing pages
- Portfolio websites
- Feature sections
- Product showcases
- Blog content
- Marketing pages

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

in any modern browser and scroll down to see the fade reveal effect.