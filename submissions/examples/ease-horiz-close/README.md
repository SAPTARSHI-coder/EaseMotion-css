# Ease Horizontal Scroll Animate

A scroll-driven animation where vertical scrolling controls a horizontal movement sequence and elements animate based on scroll progress.

## Features

- Horizontal scroll illusion
- Sticky scrolling section
- Progress-driven animations
- Scale and opacity effects
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

### 1. Vertical Scroll

The section is intentionally taller than the viewport:

```css
.horizontal-wrapper {
    height: 500vh;
}
```

### 2. Sticky Container

```css
position: sticky;
top: 0;
```

keeps the horizontal section fixed while scrolling.

### 3. Scroll Progress

```javascript
progress =
    -rect.top / totalScroll;
```

produces a value between:

```text
0 → 1
```

### 4. Horizontal Translation

```javascript
translateX(
    progress * maxMove
)
```

moves the track horizontally.

### 5. Card Animation

Cards react to progress using:

```javascript
opacity
scale
```

creating a smooth focus effect as they pass through the viewport.

## Customization

### Section Length

```css
height: 500vh;
```

Longer value = slower horizontal movement.

### Gap Between Panels

```css
gap: 40px;
```

### Card Animation

```javascript
card.style.opacity
card.style.transform
```

Replace with:

- Rotation
- Blur
- Parallax
- Color shifts
- 3D transforms

### Panel Width

```css
width: 80vw;
```

Controls how much of the screen each slide occupies.

## Use Cases

- Product showcases
- Portfolio projects
- Timelines
- Storytelling experiences
- Feature presentations
- Landing pages

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

in a browser and scroll vertically to drive the horizontal animation sequence.