# Ease Horizontal Scroll Animate

A scroll-driven animation where vertical scrolling powers a horizontal movement sequence and elements animate continuously based on scroll progress.

## Files

```text
demo.html
style.css
README.md
```

## Features

- Vertical scroll controls horizontal movement
- Sticky horizontal section
- Progress-based animations
- Scale, opacity, and translate effects
- Responsive design
- Pure HTML, CSS, JavaScript
- No libraries required

## Animation Behavior

### Horizontal Movement

The horizontal track moves according to scroll progress:

```javascript
track.style.transform = `translateX(-${progress * moveDistance}px)`;
```

### Card Animation

Cards animate continuously while scrolling:

```javascript
opacity;
scale;
translateY;
```

The card closest to the viewport center receives:

- Highest opacity
- Largest scale
- Lowest vertical offset

## Customization

### Scroll Length

```css
.scroll-section {
  height: 500vh;
}
```

Increase for slower horizontal movement.

### Card Gap

```css
gap: 40px;
```

### Scale Range

```javascript
scale(0.85 + intensity * 0.15);
```

### Vertical Motion

```javascript
translateY(20 - intensity * 20);
```

### Opacity Range

```javascript
0.4 + intensity * 0.6;
```

## Use Cases

- Product showcases
- Storytelling websites
- Timelines
- Portfolio projects
- Interactive presentations
- Feature walkthroughs

## Browser Support

- Chrome
- Firefox
- Safari
- Edge

## Run

Open:

```text
demo.html
```

and scroll vertically to drive the horizontal animation.
