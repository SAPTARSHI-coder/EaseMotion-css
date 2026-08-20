# SCSS Flowing Gradient Text Mixin

Web3 and modern AI SaaS sites frequently use text where a vibrant gradient continuously flows across the letters (popularized by Apple and Stripe). Writing the keyframes, `background-size` math, and vendor prefixes for this is highly repetitive. This SCSS mixin generates a flawless loop based on an arbitrary list of colors.

## Features
- Accepts any number of `$colors` using SCSS `Arglist` spread syntax.
- Dynamically appends the first color to the end of the gradient to ensure a perfectly seamless infinite loop.
- Automatically handles `-webkit-background-clip: text` and transparency fallbacks.
- Exposes a global `@keyframes` animation that scales and pans the background smoothly.

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$animation-speed` | `Time` | `3s` | How fast the gradient pans across the text. |
| `$colors...` | `Arglist` | `(#3b82f6, #8b5cf6, #ec4899)` | A comma-separated list of colors. |

## Usage

Import the mixin and use it on any text element.

```scss
@import 'ease-gradient-text';

// Using the default speed (3s) and colors (blue, purple, pink)
h1 {
  @include ease-gradient-text();
}

// Custom speed and custom colors (Sunset theme)
h2 {
  @include ease-gradient-text(4s, #fbbf24, #f97316, #e11d48);
}

// Slow Cyberpunk theme
.tagline {
  @include ease-gradient-text(6s, #00ffcc, #ff00ff, #ffff00, #00ffcc);
}
```

## Why it fits EaseMotion CSS
Achieving this aesthetic requires a very specific combination of CSS properties (`color: transparent`, `background-clip: text`, `background-size: 200%`, and a precisely mapped `background-position` keyframe). By abstracting these mechanics into a single, highly configurable mixin, we eliminate boilerplate and ensure developers can focus purely on the visual design rather than the underlying CSS mechanics.
