# Blur Entrance Modal

A pure CSS modal for glassmorphism layouts with a soft blur-entrance reveal. The interaction uses `:target`, so the example works without JavaScript while keeping the open and close controls reachable from the keyboard.

## Features

- Smooth opacity, blur, and scale entrance for the dialog surface
- Glassmorphism panel treatment with layered translucent surfaces
- CSS custom properties for duration, easing, blur strength, scale, and accent color
- Responsive layout for narrow and wide viewports
- Reduced-motion support for users who prefer less animation

## Custom Properties

```css
.bem-shell {
  --bem-duration: 520ms;
  --bem-easing: cubic-bezier(.2, .8, .2, 1);
  --bem-blur-start: 22px;
  --bem-scale-start: .92;
  --bem-accent-color: #36d1dc;
}
```

Open `demo.html` to preview the modal.
