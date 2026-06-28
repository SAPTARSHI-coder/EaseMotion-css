# Ease Word Stagger Scroll

A scroll-triggered text animation where each word in a paragraph appears sequentially with a smooth staggered entrance.

## Features

- Scroll activated
- Word-by-word reveal
- Smooth easing motion
- Blur + fade + upward movement
- Responsive design
- Pure HTML, CSS, and JavaScript

## Files

```text
demo.html
style.css
README.md
```

## How It Works

1. JavaScript splits the paragraph into individual words.
2. Each word is wrapped in a `<span>`.
3. Incremental transition delays create a stagger effect.
4. IntersectionObserver detects when the paragraph enters the viewport.
5. Words animate in sequentially.

## Customization

### Stagger Speed

Change:

```javascript
index * 60
```

Examples:

```javascript
index * 30
```

Fast stagger

```javascript
index * 100
```

Slow stagger

### Initial Offset

Modify:

```css
transform: translateY(40px);
```

### Blur Amount

Modify:

```css
filter: blur(6px);
```

### Animation Duration

Modify:

```css
transition: 0.8s ease;
```

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