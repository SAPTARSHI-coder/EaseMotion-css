# Gradient Text Flow & Animation Utility Classes

Reusable SCSS utility for creating animated flowing gradient text.

## Features

- Reusable SCSS mixin
- Configurable gradient colors
- Adjustable animation duration
- Ready-to-use utility classes
- Lightweight and customizable

## Usage

```scss
.title {
  @include gradient-text-flow();
}

.hero-title {
  @include gradient-text-flow(
    linear-gradient(90deg, #ff4d4d, #ffcc00, #00c6ff),
    6s
  );
}
```

## Included Utility Classes

- `.gradient-text-flow`
- `.gradient-text-flow-slow`
- `.gradient-text-flow-fast`

## Output

Creates animated gradient text using CSS background clipping and keyframe animation with configurable speed and colors.