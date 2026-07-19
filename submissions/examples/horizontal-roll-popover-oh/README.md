# Component: Horizontal Roll Popover

This submission implements the Horizontal Roll Popover for issue **#46649**.

## Description

CSS popover with horizontal roll entrance animation effect.

## Features

- **Roll Animation**: Content rolls in from side
- **Animation Variants**: Left, right, curtain styles
- **CSS Transitions**: Smooth cubic-bezier easing
- **Hover Trigger**: Shows on button hover
- **Clip Path**: Curtain reveal effect

## Usage

```html
<div class="popover-container">
  <button class="trigger-btn">Hover Me</button>
  <div class="roll-popover">
    <h4>Title</h4>
    <p>Content</p>
  </div>
</div>
```

## Animation Variants

| Variant | Class | Effect |
|---------|-------|--------|
| Default | none | Rolls from left |
| Left | `.from-left` | Rolls from left |
| Right | `.from-right` | Rolls from right |
| Curtain | `.curtain` | Clip path reveal |

## Animation

```css
.roll-popover {
  transform: translateX(-50%) translateX(-100%);
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.popover-container:hover .roll-popover {
  transform: translateX(-50%) translateX(0);
}
```

## Acceptance Criteria

- ✅ Horizontal roll animation
- ✅ Animation variants
- ✅ Hover trigger
- ✅ Clip path curtain effect
- ✅ README.md included
