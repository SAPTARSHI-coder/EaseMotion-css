# Ease Counter Scroll Trigger

A scroll-triggered counter animation that counts smoothly from 0 to a target value when the section enters the viewport.

## Features

- Scroll activated
- Smooth number counting
- Uses requestAnimationFrame
- Intersection Observer based trigger
- Responsive layout
- Pure HTML, CSS, and JavaScript
- No external libraries

## Files

```text
demo.html
style.css
README.md
```

## How It Works

### 1. Counters Start at Zero

```html
<h2 class="counter" data-target="1500">0</h2>
```

### 2. Section Enters Viewport

The Intersection Observer detects when the stats section becomes visible.

```javascript
if (entry.isIntersecting)
```

### 3. Counter Animation Starts

The value increases smoothly using:

```javascript
requestAnimationFrame()
```

### 4. Final Value Reached

```javascript
counter.textContent =
    target.toLocaleString();
```

## Customization

### Change Target Values

```html
data-target="25000"
```

Examples:

```html
data-target="500"
```

```html
data-target="100000"
```

### Change Animation Duration

```javascript
const duration = 2000;
```

Examples:

```javascript
1000
```

Fast

```javascript
4000
```

Slow

### Change Trigger Point

```javascript
threshold: 0.4
```

Lower values start earlier.

Higher values require more visibility.

### Counter Color

```css
color: #06b6d4;
```

Replace with any brand color.

## Use Cases

- Statistics sections
- Business metrics
- Landing pages
- Portfolio websites
- Product showcases
- Analytics dashboards

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

in your browser and scroll to the statistics section to see the counters animate.