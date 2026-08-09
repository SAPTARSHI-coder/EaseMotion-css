<<<<<<< HEAD
# Component Name

A pure CSS implementation of the component.

## Usage

Include the `style.css` in your project and copy the HTML structure from `demo.html`.
=======
# Pure CSS Masonry Image Gallery Grid

## Overview
A Pinterest-style masonry grid layout that seamlessly packs uneven images or cards together without huge vertical gaps, built entirely using native CSS. This implementation avoids the need for heavy JavaScript libraries (like Masonry.js) by utilizing CSS Multi-column layout (`column-count`).

## Features
- **Zero JavaScript**: Pure CSS implementation for maximum performance.
- **Responsive Layout**: Adjusts seamlessly from 1 column on mobile to 4 columns on large desktop screens.
- **Avoids Awkward Breaks**: Uses `break-inside: avoid;` to ensure cards aren't split across columns.
- **Premium Styling**: Includes beautiful glassmorphism dark mode aesthetic, soft box-shadows, and smooth hover scales that align perfectly with the EaseMotion philosophy.
- **Proportional Scaling**: Images maintain their native aspect ratios without distortion.

## How to use

```html
<div class="ease-masonry-grid">
    <!-- Item 1 -->
    <div class="ease-masonry-item">
        <div class="ease-masonry-image-wrapper">
            <img src="path/to/your/image.jpg" alt="Description">
        </div>
        <div class="ease-masonry-item-content">
            <h3 class="ease-masonry-item-title">Card Title</h3>
            <p class="ease-masonry-item-desc">Card description goes here.</p>
        </div>
    </div>
    
    <!-- Add more .ease-masonry-item elements as needed -->
</div>
```

## Why it fits EaseMotion CSS
Masonry layouts are notoriously difficult to achieve with standard Flexbox or CSS Grid since they tend to force uniform row heights, leaving ugly gaps under shorter items. This solution is lightweight, highly performant, and combined with premium interactive hover effects, it perfectly aligns with EaseMotion's goal of beautiful, animation-first, easy-to-use CSS solutions without JavaScript overhead.
>>>>>>> 9df97513ce (chore: Rename to demo.html and add README.md for PR checklist)
