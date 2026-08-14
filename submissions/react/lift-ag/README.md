# EaseMotion CSS - Lift SCSS Mixin

This submission introduces a highly customizable and reusable SCSS mixin for the "Lift" hover animation pattern. It allows developers to apply smooth, GPU-accelerated lift effects across various UI components while ensuring a consistent, modular codebase.

## 🌟 Feature Overview

The `@mixin ease-lift` provides a standardized way to elevate elements on hover. By using a mixin instead of plain CSS classes, developers can easily tweak animation properties on a per-component basis without duplicating transition logic or worrying about hardware acceleration nuances.

**Key Features:**
- **Customizable Parameters:** Easily adjust distance, duration, timing function, and shadow intensity.
- **Performance Optimized:** Uses `transform`, `box-shadow`, and `will-change` to guarantee 60FPS animations without layout thrashing.
- **Accessibility Built-in:** Automatically disabled if the user's OS has `prefers-reduced-motion` enabled.
- **Jitter Prevention:** Implements `-webkit-backface-visibility: hidden` and `translateZ(0)` to prevent text anti-aliasing jitter during transitions.

## 🚀 Installation Instructions

1. Copy the `@mixin ease-lift` block from `App.scss` into your project's `_mixins.scss` or equivalent file.
2. Ensure your project is set up to compile SCSS to CSS.

## 💻 Usage Examples

### Basic Usage

Import the mixin and call it inside any class with the default settings:

```scss
.btn-primary {
  @include ease-lift();
}
```

### Advanced Customization

Pass parameters to the mixin to customize the behavior for specific components, such as a feature card requiring a slower, softer lift:

```scss
.feature-card {
  @include ease-lift(
    $distance: -4px,
    $duration: 0.4s,
    $shadow: 0 8px 16px rgba(59, 130, 246, 0.15),
    $scale: true // Adds a slight scale(1.02)
  );
}
```

### Bouncy Profile Badge

Use custom cubic-bezier timing functions for expressive animations:

```scss
.profile-badge {
  @include ease-lift(
    $distance: -6px,
    $timing: cubic-bezier(0.34, 1.56, 0.64, 1),
    $duration: 0.5s
  );
}
```

## ⚙️ SCSS Mixin Parameters

| Parameter | Default Value | Description |
| :--- | :--- | :--- |
| `$distance` | `-8px` | The vertical distance the element moves on the Y-axis. |
| `$duration` | `0.3s` | The time it takes for the transition to complete. |
| `$timing` | `cubic-bezier(0.25, 0.8, 0.25, 1)` | The easing function controlling acceleration. |
| `$shadow` | `0 12px 24px rgba(0, 0, 0, 0.15)` | The box-shadow applied when lifted. |
| `$scale` | `false` | If true, appends `scale(1.02)` to the transform. |

## 🌐 Browser Compatibility

Tested and fully supported in:
- Google Chrome (Latest)
- Mozilla Firefox (Latest)
- Apple Safari (Latest)
- Microsoft Edge (Latest)

## ♿ Accessibility Considerations

The mixin natively includes a `@media (prefers-reduced-motion: reduce)` block. If a user has indicated they prefer less motion via their operating system settings, the transform and transition properties are instantly neutralized `!important`. The component will still render its hover shadow to indicate interactivity without triggering the physical movement.
