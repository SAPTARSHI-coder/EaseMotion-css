# Ease Split Reveal Scroll Animation

A smooth scroll-triggered animation where two overlay panels split apart to reveal content underneath.

## Features

- Scroll activated
- Smooth ease-out motion
- Responsive design
- Pure HTML + CSS + Vanilla JavaScript
- No external libraries

## Files

```
demo.html
style.css
README.md
```

## How It Works

1. User scrolls to the reveal section.
2. IntersectionObserver detects visibility.
3. `active` class is added.
4. Left panel slides left.
5. Right panel slides right.
6. Hidden content is revealed.

## Run

Simply open:

```
demo.html
```

in any modern browser.

## Customization

### Speed

Modify:

```css
transition: transform 1.8s cubic-bezier(0.22, 1, 0.36, 1);
```

### Panel Color

Modify:

```css
background: #0b0b0b;
```

### Reveal Content Background

Modify:

```css
background: linear-gradient(
    135deg,
    #00c6ff,
    #0072ff
);
```

## Browser Support

- Chrome
- Edge
- Firefox
- Safari