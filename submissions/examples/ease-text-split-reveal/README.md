# ease-text-split-reveal

A dramatic text split reveal animation for EaseMotion CSS.

## Usage

```html
<div class="ease-text-split-reveal">
  <div class="ease-split-top">Your Text</div>
  <div class="ease-split-bottom">Your Text</div>
  <div class="ease-split-content">
    Revealed content here
  </div>
</div>
```

## Trigger

Add `ease-split-active` class to trigger the animation:

```javascript
element.classList.add('ease-split-active');
```

Or toggle on click:
```html
<div class="ease-text-split-reveal"
  onclick="this.classList.toggle('ease-split-active')">
```

## How it works
- Two halves (top/bottom) cover the content using clip-path
- On trigger, top half slides up, bottom half slides down
- Hidden content fades in beneath with a slight delay

## Features
- Dramatic hero section reveal effect
- Click or JS triggered
- Smooth cubic-bezier transitions
- Customizable via --ease-color-primary
- Respects prefers-reduced-motion
- Uses EaseMotion CSS design tokens