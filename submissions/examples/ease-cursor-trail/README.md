# Ease Cursor Trail

A smooth cursor-following animation where colorful dots trail behind the mouse pointer with easing motion.

## Features

- Smooth eased movement
- Rainbow-colored trail
- Scaled tail effect
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

1. Mouse position is tracked continuously.
2. Multiple trail dots are created.
3. Each dot smoothly interpolates toward the previous dot.
4. The first dot follows the cursor.
5. Remaining dots create a fluid trailing chain.

## Customization

### Change Number of Dots

In `demo.html`:

```javascript
const trailCount = 20;
```

### Change Colors

Edit:

```javascript
const colors = [
  "#ff4d4d",
  "#ff914d",
  "#ffd24d",
  "#4dff88",
  "#4dc3ff",
  "#7a5cff",
  "#ff4df2"
];
```

### Adjust Smoothness

Increase or decrease:

```javascript
dot.x += (x - dot.x) * 0.35;
dot.y += (y - dot.y) * 0.35;
```

Lower value = smoother/slower trail

Higher value = faster/snappier trail

## Run

Open:

```text
demo.html
```

in any modern browser.

## Browser Support

- Chrome
- Edge
- Firefox
- Safari