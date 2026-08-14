# SCSS Glassmorphism Mixin

A highly customizable and reusable SCSS mixin for generating cross-browser glassmorphism effects. It encapsulates the complex syntax of `backdrop-filter`, `rgba` calculations, and vendor prefixes into a single, clean include.

## Features
- Generates cross-browser `backdrop-filter` rules.
- Automatically calculates `rgba` color with alpha transparency.
- Adds subtle 1px translucent border highlights.
- Accepts configurable parameters for blur intensity and color.

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$blur` | `String` | `10px` | The blur intensity for the backdrop filter. |
| `$opacity` | `Number` | `0.15` | The alpha opacity of the background color. |
| `$base-color` | `Color` | `#ffffff` | The base color of the glass. |
| `$with-border` | `Boolean` | `true` | Whether to include the subtle border highlight. |
| `$border-opacity` | `Number` | `0.2` | The alpha opacity of the border highlight. |

## Usage

Import the mixin and use it in your components:

```scss
@import 'ease-glass';

.my-glass-card {
  // Uses default values (10px blur, white base, 0.15 opacity)
  @include ease-glass();
  
  border-radius: 20px;
  padding: 30px;
}

.my-dark-glass-modal {
  // Custom dark mode glassmorphism
  @include ease-glass(
    $blur: 20px,
    $opacity: 0.25,
    $base-color: #000000,
    $border-opacity: 0.1
  );
  
  border-radius: 12px;
}
```

## Why it fits EaseMotion CSS
Glassmorphism is a prominent trend across our community submissions. This mixin reduces repetitive boilerplate, helping developers build complex layered UI designs faster while remaining perfectly aligned with the EaseMotion standard architecture.
