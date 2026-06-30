# Mouse Parallax Background

## Overview

This submission demonstrates a smooth mouse parallax background effect using HTML, CSS, and JavaScript. Multiple background layers move at different speeds opposite to the cursor, creating a subtle depth effect.

## Features

- Three independent parallax layers.
- Adjustable parallax strength using a slider.
- Reset button to restore the default position.
- Smooth CSS transitions.
- Responsive layout for desktop and mobile.
- Uses CSS custom properties:
  - `--ease-mouse-x`
  - `--ease-mouse-y`

## File Structure

```
demo.html
style.css
README.md
```

## How It Works

1. JavaScript listens for mouse movement.
2. Cursor coordinates are converted into X and Y offsets.
3. The offsets are stored in CSS variables.
4. Each background layer uses a different translation multiplier to create a depth effect.
5. The slider allows the user to adjust the movement intensity.
6. The reset button returns all layers to their default position.

## Browser Support

- Chrome
- Edge
- Firefox
- Safari (modern versions)

## Customization

You can:

- Change the gradient colors.
- Add more parallax layers.
- Modify the slider range.
- Adjust transition timing.
- Change the movement multipliers for stronger or subtler effects.

## Why it fits EaseMotion CSS

This example demonstrates a lightweight, animation-first interaction using modern CSS and minimal JavaScript while remaining easy to understand and customize.
