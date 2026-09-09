# CSS Glassmorphism Blur Background

A smooth animated glassmorphism background created entirely with
HTML and vanilla CSS.

The component combines animated blurred gradient blobs, translucent
glass surfaces, backdrop blur, and subtle transitions to create a
modern ambient background.

## Features

- Pure HTML and Vanilla CSS
- Animated blurred background blobs
- Glassmorphism overlay
- `backdrop-filter: blur()`
- Multiple translucent glass cards
- Smooth hover transitions
- Dark-mode friendly appearance
- Responsive layout
- Hardware-accelerated transforms
- Reduced-motion support
- No external libraries
- No JavaScript required

## Design

The background consists of several independently animated gradient
blobs.

Each blob uses:

- `filter: blur()`
- CSS animations
- `transform: translate3d()`
- `will-change: transform`

A translucent overlay uses `backdrop-filter` to create the
glassmorphism blur effect.

## Accessibility

The component respects the user's motion preference through:

```css
@media (prefers-reduced-motion: reduce)