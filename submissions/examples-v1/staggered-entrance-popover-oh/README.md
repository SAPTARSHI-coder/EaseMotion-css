# Component: Staggered Entrance Popover

This submission implements the Staggered Entrance Popover for issue **#46663**.

## Description

CSS popover with staggered element entrance animation effect.

## Features

- **Stagger Animation**: Elements enter with delay
- **CSS Variables**: Uses --i for stagger index
- **Animation Variants**: Fade, slide, scale styles
- **Hover Trigger**: Shows on button hover
- **Smooth Transitions**: CSS-based animations

## Usage

```html
<div class="stagger-popover">
  <div class="stagger-item" style="--i: 0">Item 1</div>
  <div class="stagger-item" style="--i: 1">Item 2</div>
  <div class="stagger-item" style="--i: 2">Item 3</div>
</div>
```

## Animation Variants

| Variant | Class | Effect |
|---------|-------|--------|
| Default | none | Vertical slide up |
| Fade | `.fade` | Fade in only |
| Slide | `.slide` | Horizontal slide |
| Scale | `.scale` | Scale up |

## Stagger Animation

```css
.stagger-item {
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  transition-delay: calc(var(--i) * 0.1s);
}

.popover-container:hover .stagger-item {
  opacity: 1;
  transform: translateY(0);
}
```

## Acceptance Criteria

- ✅ Stagger animation with delay
- ✅ CSS variable for index
- ✅ Animation variants
- ✅ Hover trigger
- ✅ README.md included
