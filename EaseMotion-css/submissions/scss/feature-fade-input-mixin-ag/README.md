# Fade Input Mixin (SCSS)

## Description
The `ease-fade-input-ag` SCSS mixin provides a smooth fade transition effect for interactive input elements. When the input receives focus, it gracefully transitions its background color, border color, box shadow, and opacity. This provides a soft, polished visual cue to the user without jarring, instant state changes.

## Usage
Include the mixin in your SCSS file and apply it to an input field (or a container if using `:focus-within`).

```scss
@use 'path/to/submissions/scss/feature-fade-input-mixin-ag/fade-input' as *;

.my-custom-input {
  // Use default values
  @include ease-fade-input-ag();
  
  // Or override with custom values
  @include ease-fade-input-ag(
    $duration: 0.4s, 
    $timing: cubic-bezier(0.4, 0, 0.2, 1),
    $focus-bg: #f0fdf4,
    $focus-border: #16a34a,
    $focus-shadow: 0 0 0 4px rgba(22, 163, 74, 0.2)
  );
}
```

## Parameters
- `$duration`: The transition duration (default: `0.3s`).
- `$timing`: The transition timing function (default: `ease-in-out`).
- `$focus-bg`: The background color on focus (default: subtle indigo tint).
- `$focus-border`: The border color on focus (default: indigo).
- `$focus-shadow`: The focus ring shadow (default: semi-transparent indigo).

## Accessibility
The mixin ensures the default browser outline is safely removed only because a visible focus ring (`box-shadow`) and border change are provided instead. It includes a `@media (prefers-reduced-motion: reduce)` query to remove the transition duration for users who prefer instant state changes over animated fading.
