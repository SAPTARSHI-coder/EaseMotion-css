# Direction-Aware Slide Animations (`ease-diagonal-slides`)

A proposal providing CSS keyframes and utility classes for diagonal (corner-originating) slide-in animations. 

## 🚀 Features

- **Four Corners Supported**: Provides `.ease-slide-in-top-left`, `.ease-slide-in-top-right`, `.ease-slide-in-bottom-left`, and `.ease-slide-in-bottom-right`.
- **Hardware Accelerated**: Driven purely by `transform: translate()` and `opacity` to ensure buttery 60fps animations.
- **Consistent Easing**: Matches EaseMotion's standard `cubic-bezier(0.4, 0, 0.2, 1)` easing curve for native-feeling entry.
- **Accessible**: Disables duration via `prefers-reduced-motion: reduce` so motion-sensitive users get instant transitions.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. 

You can apply the proposed classes to any element:

```html
<div class="ease-slide-in-bottom-right">
  Content appears from the bottom right!
</div>
