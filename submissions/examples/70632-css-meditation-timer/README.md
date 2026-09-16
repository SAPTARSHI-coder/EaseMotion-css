# CSS Meditation Timer

A calm breathing-animation timer built with pure HTML and Vanilla CSS.

## ✨ Features

- Guided breathing animation
- Expanding and contracting breathing core
- Inhale, hold, and exhale rhythm visualization
- Responsive layout
- Dark-mode compatible design
- Reduced-motion support
- Accessible semantic structure
- Native buttons for session controls
- No external dependencies
- No JavaScript required

## 🧘 Breathing Cycle

The central breathing indicator follows a simple visual rhythm:

1. Inhale
2. Hold
3. Exhale

The animation continuously loops to provide a lightweight visual
meditation guide.

## 🎨 Animation

The breathing effect is created using CSS keyframes.

```css
@keyframes breathe {
  0%,
  8% {
    transform: scale(0.82);
  }

  33%,
  41% {
    transform: scale(1);
  }

  74%,
  82% {
    transform: scale(0.82);
  }
}