# SCSS Utility: Animated Border Draw & Glow Keyframe Mixins

## What does this do?
Provides clean, reusable SCSS mixins for:
1. **Border Draw**: Animated border drawing effect on hover using absolute-positioned pseudo-elements.
2. **Border Glow**: A pulsating box-shadow glow animation.

## Mixin Signatures
```scss
// Border Draw
@mixin border-draw(
  $border-color: #3b82f6,
  $border-width: 2px,
  $duration: 1.5s
);

// Border Glow Pulse
@mixin border-glow(
  $glow-color: rgba(59, 130, 246, 0.5),
  $glow-radius: 15px,
  $duration: 2s
);
```

### Parameters
- `$border-color` / `$glow-color`: Color of the drawn border or the glow shadow.
- `$border-width` / `$glow-radius`: Border thickness or maximum shadow spread.
- `$duration`: Animation cycle duration.

## Usage Example
```scss
@import "scss-animated-border-draw-glow-keyframe-mixins";

.card-draw-glow {
  background: white;
  border-radius: 8px;
  @include border-draw(#10b981, 3px, 1.2s);
  @include border-glow(rgba(16, 185, 129, 0.4), 12px, 1.8s);
}
```

## Compiled CSS Output
```css
.card-draw-glow {
  background: white;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.28);
  animation: ease-border-glow-pulse 1.8s infinite;
}
.card-draw-glow::before, .card-draw-glow::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 3px solid transparent;
  box-sizing: border-box;
}
.card-draw-glow::before {
  top: 0;
  left: 0;
}
.card-draw-glow::after {
  bottom: 0;
  right: 0;
}
.card-draw-glow:hover::before {
  width: 100%;
  height: 100%;
  border-top-color: #10b981;
  border-right-color: #10b981;
  transition: width 0.6s ease-out, height 0.6s 0.6s ease-out;
}
.card-draw-glow:hover::after {
  width: 100%;
  height: 100%;
  border-bottom-color: #10b981;
  border-left-color: #10b981;
  transition: border-color 0s 1.2s, width 0.6s 1.2s ease-out, height 0.6s 1.8s ease-out;
}
@keyframes ease-border-glow-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.28);
  }
  70% {
    box-shadow: 0 0 0 12px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}
```
