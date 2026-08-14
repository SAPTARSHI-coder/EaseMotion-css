# ease-spring-variables-bh

Native Spring Physics Easing Variables for EaseMotion CSS.

## What does this do?
Provides CSS custom properties for spring physics easing functions using cubic-bezier curves with overshoot.

## How is it used?
```css
.element {
  transition-timing-function: var(--ease-spring-bouncy);
}
```

## Why is it useful?
- Creates natural, springy animations
- Adds overshoot for bounce effect
- Works with standard CSS transitions

## Features
- `--ease-spring-bouncy` - Heavy bounce/overshoot
- `--ease-spring-stiff` - Lighter spring effect
