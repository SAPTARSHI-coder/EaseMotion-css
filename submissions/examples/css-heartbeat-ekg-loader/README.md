# CSS Heartbeat EKG Loader

A responsive CSS-only heartbeat EKG loader that continuously animates
an electrocardiogram-style line while content is loading.

## Features

- Pure CSS implementation
- No JavaScript
- Continuous EKG animation
- Responsive design
- Animated loading indicator
- Accessible loading status
- Reduced-motion support
- No external dependencies

## Files

- `demo.html` — Standalone demonstration
- `style.css` — Component styles

## How It Works

The loader uses a CSS element with a `clip-path` polygon to create the
shape of an EKG waveform.

The waveform is continuously translated across the loading area using
a CSS keyframe animation.

```css
@keyframes ekg-draw {
  from {
    transform: translate(-20%, -50%);
  }

  to {
    transform: translate(220%, -50%);
  }
}