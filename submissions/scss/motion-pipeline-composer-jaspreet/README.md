# Motion Pipeline Composer Utility

A reusable SCSS utility for composing multiple motion stages into a single animation pipeline at compile time. It enables developers to create complex, reusable animations while keeping the code modular and framework agnostic.

## Features

- Compile-time SCSS utility
- Reusable motion pipeline mixin
- Configurable stage ordering
- Optional stage-specific overrides
- Framework agnostic
- Generates reusable CSS keyframes
- Supports custom animation settings through helper mixins

## Included Files

- `_motion-pipeline-composer.scss`
- `README.md`

## Usage

```scss
@include ease-compose-pipeline(
  "hero-entrance",
  (
    "fade-in",
    "scale-up",
    "stabilize"
  ),
  (
    "scale-up": (
      transform: scale(0.85)
    )
  )
);

.hero-card {
  @include ease-motion(
    "hero-entrance",
    $duration: 0.8s,
    $timing: ease-in-out
  );
}
```

## Available Motion Stages

- `fade-in`
- `fade-out`
- `slide-up`
- `slide-down`
- `slide-left`
- `slide-right`
- `scale-up`
- `rotate`
- `zoom`
- `blur`
- `stabilize`

## Customization

The utility supports:

- Custom stage ordering
- Stage-specific property overrides
- Custom animation duration
- Custom timing functions
- Animation delay
- Animation fill mode

## Browser Compatibility

This utility uses standard SCSS features and compiles to regular CSS, making it compatible with all modern browsers supported by Sass.

## License

Part of the EaseMotion CSS submission library.