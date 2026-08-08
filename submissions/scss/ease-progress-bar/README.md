# SCSS Animated Striped Progress Bar Mixin

Creating striped, continuously animating progress bars (often used for file uploads, loading bars, or processing states) involves complex `linear-gradient` math and background-position keyframes. This reusable SCSS mixin generates a flawless loop with one line of code.

## Features
- Generates precise diagonal stripes using `linear-gradient`.
- Automatically calculates and applies `background-size` to ensure a perfect animation loop.
- Injects a `background-position` keyframe that translates the background seamlessly.
- Configurable colors, stripe width, and animation speed.

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$primary-color` | `Color` | `#3b82f6` | The main background color of the progress bar. |
| `$secondary-color`| `Color` | `rgba(255, 255, 255, 0.2)` | The color of the diagonal stripes overlay. |
| `$stripe-width` | `Number` | `1rem` | The width of the stripes (controls the `background-size`). |
| `$animation-speed`| `Time` | `1s` | The duration of the `background-position` loop keyframe. |

## Usage

Import the mixin and use it on the inner "fill" element of your progress bar container.

```scss
@import 'ease-progress-bar';

.progress-container {
  width: 100%;
  height: 20px;
  background-color: #e2e8f0;
  border-radius: 99px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 50%; // Represents the current progress
  border-radius: 99px;
  
  // Applies the animated stripes
  @include ease-progress-bar(
    $primary-color: #10b981, 
    $stripe-width: 1.5rem, 
    $animation-speed: 1.5s
  );
}
```

## Why it fits EaseMotion CSS
Manually writing out the 8-stop `linear-gradient` required to create crisp diagonal stripes is extremely error-prone. Coupling that with the specific `background-position` translations required to make it seamlessly loop is frustrating for developers. This mixin perfectly embodies the EaseMotion philosophy of abstracting complex motion math into simple, reusable utilities.
