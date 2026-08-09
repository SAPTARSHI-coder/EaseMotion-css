# Component: 3D Perspective Tilt Popover

This submission implements the 3D Perspective Tilt Popover for issue **#46708**.

## Description

CSS popover with 3D perspective tilt animation effect on hover.

## Features

- **3D Tilt Animation**: rotateX perspective effect
- **Color Variants**: Blue, pink, green themes
- **Shadow Effects**: Color-matched shadows
- **Smooth Transition**: CSS perspective animation
- **Hover Trigger**: Shows on button hover

## Usage

```html
<div class="popover-container">
  <button class="trigger-btn">Hover Me</button>
  <div class="tilt-popover">
    <h4>Title</h4>
    <p>Content</p>
  </div>
</div>
```

## Color Variants

| Variant | Class | Color |
|---------|-------|-------|
| Blue | `.blue` | #60a5fa |
| Pink | `.pink` | #ec4899 |
| Green | `.green` | #22c55e |

## 3D Animation

```css
.tilt-popover {
  transform: translateX(-50%) perspective(600px) rotateX(20deg);
  transform-origin: bottom center;
}

.popover-container:hover .tilt-popover {
  transform: translateX(-50%) perspective(600px) rotateX(0deg);
}
```

## Acceptance Criteria

- ✅ 3D tilt animation
- ✅ Color variants
- ✅ Hover trigger
- ✅ Color-matched shadows
- ✅ README.md included
