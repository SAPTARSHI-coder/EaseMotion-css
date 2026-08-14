# Ease Cursor Ripple

A click-based animation where a ripple expands outward from the user's cursor position.

## Features

- Click anywhere to trigger
- Smooth ease-out expansion
- Auto cleanup after animation
- Lightweight and performant
- Pure HTML, CSS, and JavaScript
- No external libraries

## Files

```text
demo.html
style.css
README.md
```

## How It Works

1. User clicks anywhere on the page.
2. JavaScript creates a ripple element.
3. Ripple is positioned at the click coordinates.
4. CSS animation expands and fades the ripple.
5. Element is removed automatically after completion.

## Animation

The ripple grows from:

```css
scale(0)
```

to:

```css
scale(18)
```

while fading out.

```css
animation: rippleExpand 900ms ease-out forwards;
```

## Customization

### Ripple Size

```css
width: 20px;
height: 20px;
```

### Ripple Color

```css
border: 3px solid rgba(255,255,255,0.8);
```

Examples:

```css
border: 3px solid #3b82f6;
```

```css
border: 3px solid #22c55e;
```

### Animation Speed

```css
animation: rippleExpand 900ms ease-out forwards;
```

Examples:

```css
600ms
```

Fast

```css
1500ms
```

Slow

### Expansion Strength

```css
scale(18)
```

Increase for larger ripples.

## Run

Open:

```text
demo.html
```

in any modern browser.

## Browser Support

- Chrome
- Firefox
- Edge
- Safari
- Mobile Browsers