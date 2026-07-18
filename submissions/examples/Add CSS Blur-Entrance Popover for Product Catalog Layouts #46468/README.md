# Ease Blur-Entrance Popover

A premium, highly customizable pure CSS blur-entrance popover component, designed natively using the modern HTML `popover` API alongside cutting-edge CSS `@starting-style`. 

## Features
- **Native HTML Popover API**: Zero-JavaScript implementation using `<button popovertarget="id">` and `<div popover>`.
- **Pure CSS Animation**: Leverages the CSS `allow-discrete` transition to animate display and overlay states effortlessly with `@starting-style`.
- **Blur Entrance**: An immersive transition effect that smoothly animates opacity, blur scale, and transform scale.
- **Glassmorphism Aesthetic**: Styled for dark mode product catalog interfaces with vibrant colors, micro-animations, and translucent backdrops.
- **Keyboard Accessible**: Inherits native focus management, `Esc` key dismissing, and screen reader announcements directly from the browser's implementation of the `popover` API.

## Usage
Simply include the `style.css` and use the HTML structure demonstrated in `demo.html`.

### Customization (EaseMotion Variables)
You can fine-tune the popover physics directly using the provided EaseMotion CSS variables:
```css
:root {
    --ease-popover-transition-duration: 0.5s;
    --ease-popover-transition-easing: cubic-bezier(0.16, 1, 0.3, 1);
    --ease-popover-blur-amount: 24px;
    --ease-popover-scale-start: 0.9;
    --ease-popover-bg: rgba(24, 24, 27, 0.7);
    --ease-popover-backdrop-bg: rgba(0, 0, 0, 0.6);
    --ease-popover-backdrop-blur: 8px;
    --ease-popover-border: rgba(255, 255, 255, 0.15);
}
```

### Note on Browser Support
This component uses modern web features (the HTML Popover attribute and `@starting-style` in CSS). These are widely supported in up-to-date browsers (Chrome 114+, Safari 17+, Firefox 125+). In older browsers, the component will gracefully fall back without the entrance transition, but it might require a polyfill for the `popover` attribute behavior itself if target browsers are legacy.
