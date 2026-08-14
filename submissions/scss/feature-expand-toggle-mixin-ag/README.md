# Expand Toggle SCSS Mixin

## Description
An SCSS mixin providing a springy "Expand" entrance animation. When applied, the element scales from zero up to full size with a slight overshoot, creating a satisfying pop-in effect. Useful for toggles, modals, or any element entering the DOM.

## Usage
```scss
@use 'expand-toggle' as *;

.my-toggle-panel {
  @include ease-expand-toggle-mixin-ag(0.4s);
}
```

## Parameters
- `$duration`: Length of the expansion animation (default: `0.4s`).

## Accessibility
- Respects `prefers-reduced-motion: reduce` by replacing the scale with a simple opacity fade-in.
