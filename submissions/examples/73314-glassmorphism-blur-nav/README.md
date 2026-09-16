# CSS Nav: Glassmorphism Blur

A modern **Glassmorphism Blur Navigation** component created with pure HTML and Vanilla CSS.

The navigation combines translucent surfaces, backdrop blur, soft borders, layered lighting, and responsive interactions to create a frosted-glass interface.

## ✨ Features

- Glassmorphism navigation
- `backdrop-filter: blur()`
- Translucent layered surfaces
- Soft glass borders
- Animated background orbs
- Smooth hover interactions
- Keyboard focus states
- Responsive navigation layout
- Dark-mode compatible
- Light-mode compatible
- Reduced-motion support
- No JavaScript
- No external dependencies

## 🎨 Glassmorphism Effect

The primary visual treatment uses a semi-transparent background combined with backdrop blur.

```css
.glass-nav {
  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.16),
      rgba(255, 255, 255, 0.06)
    );

  backdrop-filter:
    blur(22px)
    saturate(145%);

  -webkit-backdrop-filter:
    blur(22px)
    saturate(145%);
}