# Glass Morphism Card Stack

A layered stack of glass morphism cards with 3D depth effect using pure CSS.

## Features

- Pure HTML & CSS
- Glass morphism with backdrop-filter blur
- 3D perspective stack with hover lift
- Staggered layering with CSS custom properties
- Responsive design
- Accessible - respects prefers-reduced-motion
- No JavaScript required

## Folder

```
submissions/examples/glass-morphism-card-stack/
```

## Files

- demo.html
- style.css
- README.md

## Usage

```html
<link rel="stylesheet" href="style.css">
```

Use the stack structure:

```html
<div class="card-stack">
    <div class="card" style="--i:0">
        <div class="card-content">
            <h3>Card Title</h3>
            <p>Description</p>
        </div>
    </div>
    <!-- Add more cards with incrementing --i -->
</div>
```

## Custom Properties

```css
:root {
    --card-bg: rgba(20, 30, 48, 0.7);
    --border: rgba(100, 140, 180, 0.2);
    --text: #e8f0f8;
    --muted: #8b9cb3;
    --accent: #4fc3f7;
    --blur: 20px;
    --gap: 12px;
    --card-h: 140px;
    --card-w: 280px;
}
```

## Accessibility

Supports `prefers-reduced-motion` - transitions are disabled for users who prefer minimal motion.