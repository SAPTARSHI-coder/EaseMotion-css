# Animation Iteration Configuration Test

This example verifies the `--ease-animation-iterations` configuration
used by EaseMotion looping animations.

## What is tested?

- Default iteration behavior
- Custom numeric iteration values
- Multiple looping animation utilities
- Consistent use of `--ease-animation-iterations`

## Tested animations

- `ease-bounce`
- `ease-pulse`
- `ease-rotate`
- `ease-ping`

## Custom iteration count

The iteration count can be changed using the CSS custom property:

```css
.my-animation {
  --ease-animation-iterations: 3;
}