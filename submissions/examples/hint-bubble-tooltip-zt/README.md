# Hint Bubble Tooltip

A CSS-only hint tooltip system with rounded pill bubbles, soft transitions, and placement variants.

## Description

This component creates floating hint bubbles around trigger elements using only HTML and CSS. Tooltips can appear at the top, bottom, left, or right of the trigger with smooth fade and translate animation.

## Features

- Pure HTML + CSS implementation
- No JavaScript or dependencies
- Rounded pill-shaped tooltip bubbles
- Smooth fade and translate animation
- Multiple placements: top, bottom, left, right
- Small arrow pointer for each placement
- Dark theme with soft glow styling
- Responsive layout for mobile
- Accessible hover / focus interactions

## Usage

1. Copy `demo.html` and `style.css` into your submission folder.
2. Open `demo.html` in a browser.
3. Customize tooltip text and placement classes.

```html
<link rel="stylesheet" href="style.css" />
<div class="tooltip-page">
  <section class="tooltip-card ease-fade-in">
    <!-- tooltip demo content -->
  </section>
</div>
```

## Customization notes

- Update tooltip colors by changing the bubble background and text color.
- Adjust the shadow or glow by modifying `box-shadow` values on `.tooltip-bubble`.
- Fine-tune animation timing in the `.tooltip-bubble` transition.

## Why it fits EaseMotion CSS

This submission fits EaseMotion CSS because it delivers a motion-forward, self-contained UI pattern with premium dashboard styling. The tooltip uses refined transitions and clean markup, matching the framework's emphasis on accessible, animation-friendly components.
