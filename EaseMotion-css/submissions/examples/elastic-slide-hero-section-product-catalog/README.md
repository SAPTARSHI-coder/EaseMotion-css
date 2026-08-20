# CSS Elastic-Slide Hero Section for Product Catalog Layouts

## Overview

A modern CSS-only Elastic-Slide Hero Section created for product catalog layouts.

This component provides a smooth elastic entrance animation, floating feature cards, and a responsive product showcase using only HTML and CSS.

## Features

- 🎯 Pure HTML and CSS implementation
- 🪄 Elastic slide entrance animation
- ✨ Floating information badges
- 🎨 Modern gradient UI design
- 📱 Fully responsive layout
- ⚡ Smooth CSS keyframe animations
- ♿ Reduced motion accessibility support
- 🚫 No JavaScript dependencies

## Folder Structure
elastic-slide-hero-section-product-catalog/
│
├── demo.html
├── style.css
└── README.md


## Usage

Copy this folder into:


submissions/examples/


Open:


demo.html


in any modern browser.

No additional setup is required.

## Customization

### Change Theme Colors

Update CSS variables:

```css
:root {
    --primary:#8b5cf6;
    --secondary:#06b6d4;
}
Modify Animation Speed

Elastic animation can be customized:

.elastic-card {
    animation:
    elasticSlide 1.5s;
}

Change 1.5s according to your requirement.

Animation Details

The component uses:

CSS transforms
CSS keyframes
cubic-bezier timing functions
hover transitions

The elastic effect is created using:

cubic-bezier(.34,1.56,.64,1)

which produces a natural spring-like motion.

Accessibility

The component supports users who prefer reduced motion:

@media(prefers-reduced-motion:reduce){
    *{
        animation:none;
        transition:none;
    }
}
Technologies
HTML5
CSS3
CSS Variables
CSS Animations
CSS Transforms
License

This contribution follows the EaseMotion CSS project guidelines.