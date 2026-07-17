# Component: Shimmer Sweep Popover

This submission implements the Shimmer Sweep Popover for issue **#46766**.

## Description

CSS popover with shimmer sweep animation effect on hover.

## Features

- **Shimmer Effect**: Light sweep across on hover
- **Scale Animation**: Smooth scale in/out
- **Multiple Positions**: Top, bottom, left, right
- **Arrow Indicator**: Visual pointer
- **Gradient Button**: Beautiful trigger button

## Usage

```html
<div class="popover-container">
  <button class="trigger-btn">Hover Me</button>
  <div class="shimmer-popover">
    <h4>Title</h4>
    <p>Content goes here</p>
  </div>
</div>
```

## Position Variants

```html
<div class="shimmer-popover top"></div>
<div class="shimmer-popover bottom"></div>
<div class="shimmer-popover left"></div>
<div class="shimmer-popover right"></div>
```

## Shimmer Animation

```css
.shimmer-popover::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.6s ease;
}

.popover-container:hover .shimmer-popover::before {
  left: 100%;
}
```

## Acceptance Criteria

- ✅ Shimmer sweep animation
- ✅ Scale in/out effect
- ✅ Position variants
- ✅ Arrow indicator
- ✅ README.md included
