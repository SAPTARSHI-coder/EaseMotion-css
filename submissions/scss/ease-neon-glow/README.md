# SCSS Realistic Neon Glow

A highly realistic, volumetric "neon tube" text glow generator.

## Features
- Generates a mathematically precise 7-layer `text-shadow` stack.
- Simulates real-world light falloff by mixing tight, high-opacity cores with massive, low-opacity ambient blurs.
- Allows scaling the overall size of the glow using the `$intensity` multiplier.
- Keeps the core text pure white (or a custom color) to simulate the hot center of a neon gas tube.

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$base-color` | `Color` | Required | The core color of the neon light. |
| `$intensity` | `Number` | `1` | A multiplier for the blur spread (e.g. `1.5` for a wider glow). |
| `$text-color` | `Color` | `#ffffff` | The color of the physical text itself. |

## Usage

Import the mixin and apply it to any text element (works best on dark backgrounds).

```scss
@import 'ease-neon-glow';

body {
  background-color: #000000;
}

// Standard Pink Neon
.neon-pink {
  @include ease-neon-glow(#ec4899);
}

// Massive Cyberpunk Blue Neon
.neon-blue-massive {
  @include ease-neon-glow(#0ea5e9, 2.5);
}

// Custom core text color
.neon-custom {
  @include ease-neon-glow(#10b981, 1, #d1fae5);
}
```

## Why it fits EaseMotion CSS
Creating a realistic, glowing "neon tube" text effect manually requires stacking up to 7 different `text-shadow` layers with expanding blur radii and decreasing opacities. Typing this out manually every time you need a new glowing color is extremely tedious and error-prone. This mixin perfectly encapsulates the EaseMotion philosophy of abstracting complex, repetitive CSS math into a single, intuitive utility function.
