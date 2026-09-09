# [SCSS] SCSS Breakpoint Mixin for Responsive Animation Disable

## What does this do?
A reusable SCSS mixin that automatically disables CSS keyframe animations, transitions, and hover transforms on viewports below a specified width (default: `768px` / `'md'`).

## How is it used?
Import the mixin and include it inside class selectors that use intensive transitions or animations:

```scss
@use 'animation-disable' as *;

.my-complex-card {
  animation: ease-kf-pulse-fade 2s infinite;
  transition: transform 0.3s;
  
  // Disable transitions and animations on tablets and mobile screens
  @include disable-animations-at('md');
}
```

### Parameters
- `$breakpoint` (String): The breakpoint name key from the `$breakpoints` map (default: `'md'`, matching `768px`). Other options: `'sm'` (`640px`), `'lg'` (`1024px`), `'xl'` (`1280px`).

## Why is it useful?
Intensive animations and transforms can cause heavy rendering lag, battery drain, and poor scrolling performance on mobile devices. This mixin provides a clean, declarative way to optimize performance on mobile viewports.
