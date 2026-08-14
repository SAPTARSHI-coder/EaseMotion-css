# EaseMotion CSS - Toast SCSS Mixin

This submission introduces a highly configurable SCSS mixin for creating Toast notifications. It removes the need for developers to duplicate animation, positioning, and base styling CSS across various toast notification types (success, error, warning, etc.).

## 🌟 Feature Overview

The `@mixin ease-toast` generates all the necessary CSS to display a beautiful, animated toast notification. It leverages modern CSS animations for the entrance effect and CSS transitions for interactive hover states.

**Key Features:**
- **Modular Design:** One mixin powers infinite toast variations.
- **Configurable:** Tweak background color, text color, radius, duration, shadow, and entrance animation direction.
- **Hardware Accelerated:** Animations use `transform` and `opacity` with `will-change` hints for buttery smooth 60FPS performance.
- **Accessible:** Respects `prefers-reduced-motion` at the OS level to automatically disable entrance animations and hover transformations for users sensitive to motion.

## 🚀 Installation Instructions

1. Copy the `@mixin ease-toast` and its associated `@keyframes` from `App.scss` into your project's SCSS files (e.g., `_mixins.scss`).
2. Include the mixin in your toast component classes.

## 💻 Usage Examples

### Basic Implementation

```scss
.my-toast {
  // Uses all default values (dark slate background, bottom entrance)
  @include ease-toast();
}
```

### Creating Variants

Pass parameters to create semantic variants:

```scss
.toast-success {
  @include ease-toast(
    $background: #10b981,
    $color: #ffffff,
    $shadow: 0 8px 16px rgba(16, 185, 129, 0.25)
  );
}

.toast-error {
  @include ease-toast(
    $background: #ef4444,
    $color: #ffffff,
    $shadow: 0 8px 16px rgba(239, 68, 68, 0.25)
  );
}
```

### Changing Entrance Direction

If your toast container is at the top of the screen, you can change the entrance animation to slide down:

```scss
.toast-top-notification {
  @include ease-toast($position: 'top');
}
```

## ⚙️ SCSS Mixin Parameters

| Parameter | Default Value | Description |
| :--- | :--- | :--- |
| `$background` | `#2d3748` | The background color of the toast element. |
| `$color` | `#ffffff` | The text color of the toast element. |
| `$radius` | `12px` | The border-radius applied to the toast. |
| `$duration` | `0.3s` | The duration for both entrance animation and hover transition. |
| `$shadow` | `0 10px 24px rgba(0,0,0,0.15)` | The box-shadow for depth. |
| `$position` | `'bottom'` | Dictates entrance animation (`'bottom'` slides up, `'top'` slides down). |

## 🌐 Browser Compatibility

Tested and fully supported in:
- Google Chrome (Latest)
- Mozilla Firefox (Latest)
- Apple Safari (Latest)
- Microsoft Edge (Latest)

## ♿ Accessibility Considerations

- **Reduced Motion:** Includes a `@media (prefers-reduced-motion: reduce)` block. If enabled by the user, the slide entrance animation and hover transforms are disabled instantly using `!important`, ensuring a static, non-distracting presentation.
- **ARIA Roles:** The provided `App.jsx` example demonstrates adding `role="alert"` to the toast containers and `aria-label` to the close buttons for screen reader support.
