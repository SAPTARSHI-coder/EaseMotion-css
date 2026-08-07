# Magnetic Hover Button

A button with a magnetic hover effect that follows the cursor using pure CSS.

## Features

- Pure HTML & CSS
- Magnetic attraction effect on hover
- Subtle glow animation
- CSS Custom Properties for theming
- Accessible - respects prefers-reduced-motion
- No JavaScript required

## Folder

```
submissions/examples/magnetic-hover-button/
```

## Files

- demo.html
- style.css
- README.md

## Usage

```html
<link rel="stylesheet" href="style.css">
```

Use the wrapper and button structure:

```html
<div class="magnetic-wrap">
    <button class="magnetic-btn">Hover Me</button>
</div>
```

## Custom Properties

```css
:root {
    --btn-bg: #1a1a1a;
    --btn-border: #333;
    --text: #fff;
    --glow: #00d4aa;
    --strength: 24px;
    --ease: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

## Accessibility

Supports `prefers-reduced-motion` - transitions are disabled for users who prefer minimal motion.