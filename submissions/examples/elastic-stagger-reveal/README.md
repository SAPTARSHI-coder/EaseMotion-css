# Elastic Stagger Reveal

A responsive grid of items that reveal with an elastic stagger animation using pure CSS.

## Features

- Pure HTML & CSS
- Elastic spring animation with stagger delay
- Responsive grid layout
- CSS Custom Properties for theming
- Accessible - respects prefers-reduced-motion
- No JavaScript required

## Folder

```
submissions/examples/elastic-stagger-reveal/
```

## Files

- demo.html
- style.css
- README.md

## Usage

```html
<link rel="stylesheet" href="style.css">
```

Use the grid structure:

```html
<div class="reveal-container">
    <div class="reveal-item" style="--i:0">Item 1</div>
    <div class="reveal-item" style="--i:1">Item 2</div>
    <div class="reveal-item" style="--i:2">Item 3</div>
    <!-- Add more items with incrementing --i -->
</div>
```

## Custom Properties

```css
:root {
    --item-bg: #161b22;
    --border: #30363d;
    --text: #e6edf3;
    --accent: #58a6ff;
    --duration: 0.6s;
    --stagger: 0.08s;
}
```

## Accessibility

Supports `prefers-reduced-motion` - animations are disabled for users who prefer minimal motion.