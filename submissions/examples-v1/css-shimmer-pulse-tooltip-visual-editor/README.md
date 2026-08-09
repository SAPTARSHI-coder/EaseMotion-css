# CSS Shimmer Pulse Tooltip for Visual Editor Layouts

## Overview

A pure CSS Shimmer Pulse Tooltip designed for Visual Editor interfaces. It combines a shimmering highlight with a soft pulse animation to provide attractive and accessible contextual information without JavaScript.

## Features

- Pure HTML and CSS
- Smooth shimmer animation
- Soft pulse glow effect
- Responsive layout
- Keyboard accessible using `:focus-within`
- CSS custom properties for easy customization
- No JavaScript required

## Folder Structure

```
submissions/
└── examples/
    └── css-shimmer-pulse-tooltip-visual-editor/
        ├── demo.html
        ├── style.css
        └── README.md
```

## Usage

```html
<div class="tooltip-wrapper">
    <button class="editor-btn">Save</button>
    <span class="tooltip">
        Save your current project
    </span>
</div>
```

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

## Customization

Modify the CSS variables:

```css
:root{
    --accent:#38bdf8;
    --tooltip:#111827;
    --duration:.45s;
    --radius:12px;
}
```

## Browser Support

- Chrome ✅
- Firefox ✅
- Edge ✅
- Safari ✅

## Why it fits EaseMotion CSS

- Animation-first design
- Lightweight and reusable
- Zero JavaScript
- Responsive and accessible
- Easy to customize using CSS variables