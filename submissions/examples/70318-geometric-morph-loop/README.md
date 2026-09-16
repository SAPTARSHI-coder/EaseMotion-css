# CSS Geometric Morph Loop

A continuous geometric shape morphing animation built entirely with **HTML and Vanilla CSS**.

The central shape continuously transitions between rounded, polygonal, and organic forms using CSS keyframes, border-radius, transforms, gradients, and filters.

## ✨ Features

- Continuous infinite morph animation
- Multiple geometric transformations
- Smooth border-radius interpolation
- Rotational transitions
- Gradient lighting
- Orbital background rings
- Responsive design
- Dark-mode compatible
- Light-mode compatible
- Reduced-motion support
- Hardware-friendly CSS transforms
- No JavaScript
- No external libraries

## 🎬 Animation Stages

The main shape moves through several visual stages:

1. Rounded circle
2. Soft polygon
3. Rounded square
4. Organic blob
5. Compressed circular form
6. Asymmetric geometric shape
7. Organic angular form
8. Smooth return to the initial state

The complete animation repeats continuously.

## 🛠️ CSS Techniques

The animation uses:

- `@keyframes`
- `border-radius`
- `transform`
- `filter`
- CSS gradients
- CSS shadows
- CSS pseudo-elements

Example:

```css
@keyframes geometric-morph {
  0% {
    border-radius: 50%;
    transform: rotate(0deg) scale(1);
  }

  25% {
    border-radius: 8%;
    transform: rotate(90deg) scale(0.92);
  }

  50% {
    border-radius: 50%;
    transform: rotate(180deg) scale(0.88);
  }

  100% {
    border-radius: 50%;
    transform: rotate(360deg) scale(1);
  }
}