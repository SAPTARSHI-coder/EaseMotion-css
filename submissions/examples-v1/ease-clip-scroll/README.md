# Ease Clip Scroll

A scroll-driven animation that reveals an element using a dynamic CSS `clip-path`.

## Features

- Scroll-based reveal
- Smooth clip-path animation
- No external libraries
- Responsive layout
- Pure HTML, CSS, and JavaScript

## Files

```text
demo.html
style.css
README.md
```

## How It Works

1. The element starts fully clipped.

```css
clip-path: inset(0 100% 0 0);
```

2. As the user scrolls, JavaScript calculates visibility progress.

3. The clip-path is updated continuously:

```javascript
element.style.clipPath = `inset(0 ${100 - revealPercent}% 0 0)`;
```

4. The element gradually reveals from left to right.

## Customization

### Reveal Direction

Left → Right:

```css
clip-path: inset(0 100% 0 0);
```

Right → Left:

```css
clip-path: inset(0 0 0 100%);
```

Top → Bottom:

```css
clip-path: inset(100% 0 0 0);
```

Bottom → Top:

```css
clip-path: inset(0 0 100% 0);
```

### Container Height

```css
.clip-reveal {
  height: 500px;
}
```

### Border Radius

```css
border-radius: 24px;
```

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Run

Simply open:

```text
demo.html
```

in your browser.
