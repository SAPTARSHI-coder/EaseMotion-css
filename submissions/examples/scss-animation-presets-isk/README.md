# [SCSS] SCSS-Based Configurable Animation Presets API

## What does this do?
A reusable animation presets API (`@mixin animate-preset()`) in Sass that reads from a central config map to apply standard entrances (`fade-in`, `slide-up`, `zoom-in`) and allows overriding durations and delays.

## How is it used?
Import the presets API and declare the preset:

```scss
@use 'presets' as *;

// Apply default configuration
.title {
  @include animate-preset('fade-in');
}

// Override duration and delay parameters
.card {
  @include animate-preset('slide-up', 600ms, 100ms);
}
```

### Parameters
- `$preset` (String): Key name from `$animation-presets` map (options: `fade-in`, `slide-up`, `zoom-in`).
- `$custom-duration` (Duration): Optional override duration value (default: `null`).
- `$custom-delay` (Duration): Optional delay setting (default: `null`).
- `$fill-mode` (String): Animation fill mode (default: `both`).

## Why is it useful?
Using presets separates animation behaviors from CSS classes. This helps build consistent UI modules, centralizes easing and timings, and reduces boilerplate animations definitions.
