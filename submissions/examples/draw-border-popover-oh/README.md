# Component: Draw-Border Line Popover

This submission implements the Draw-Border Line Popover for issue **#46762**.

## Description

CSS popover with animated border drawing effect on hover.

## Features

- **Border Animation**: Lines draw from corners
- **Color Variants**: Purple, green, orange options
- **Smooth Transitions**: CSS-based animations
- **Hover Trigger**: Shows on button hover
- **Scale Effect**: Pops in with scale animation

## Usage

```html
<div class="popover-container">
  <button class="trigger-btn">Hover Me</button>
  <div class="draw-border-popover">
    <div class="border-left"></div>
    <div class="border-right"></div>
    <h4>Title</h4>
    <p>Content</p>
  </div>
</div>
```

## Color Variants

| Variant | Class |
|---------|-------|
| Purple | `.purple` |
| Green | `.green` |
| Orange | `.orange` |

## Border Animation

```css
.draw-border-popover::before {
  top: 0; left: 0;
  width: 0; height: 2px;
  transition: width 0.4s ease;
}

.popover-container:hover .draw-border-popover::before {
  width: 100%;
}
```

## Acceptance Criteria

- ✅ Border draw animation
- ✅ Color variants
- ✅ Hover trigger
- ✅ Scale pop-in effect
- ✅ README.md included
