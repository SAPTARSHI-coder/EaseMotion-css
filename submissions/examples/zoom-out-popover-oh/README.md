# Component: Zoom-Out Popover

This submission implements the Zoom-Out Popover for issue **#46635**.

## Description

CSS popover with zoom-out entrance animation effect.

## Features

- **Zoom Animation**: Scale from large to normal
- **Animation Variants**: In, out, fade styles
- **CSS Transitions**: Bouncy cubic-bezier easing
- **Hover Trigger**: Shows on button hover
- **Scale Effect**: Overshoot and settle

## Usage

```html
<div class="popover-container">
  <button class="trigger-btn">Hover Me</button>
  <div class="zoom-popover">
    <h4>Title</h4>
    <p>Content</p>
  </div>
</div>
```

## Animation Variants

| Variant | Class | Effect |
|---------|-------|--------|
| Default | none | Zoom out from 1.5x |
| In | `.zoom-in` | Zoom in from 0 |
| Out | `.zoom-out` | Zoom out from 2x |
| Fade | `.fade` | Subtle scale with fade |

## Animation

```css
.zoom-popover {
  transform: translateX(-50%) scale(1.5);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.popover-container:hover .zoom-popover {
  transform: translateX(-50%) scale(1);
}
```

## Acceptance Criteria

- ✅ Zoom animation
- ✅ Animation variants
- ✅ Hover trigger
- ✅ Bouncy easing
- ✅ README.md included
