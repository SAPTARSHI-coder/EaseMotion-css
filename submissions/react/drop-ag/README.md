# EaseMotion Drop SCSS Mixin

This submission introduces a highly reusable, configurable, and GPU-accelerated SCSS mixin for implementing "Drop" animations across various UI components in React applications.

## ✨ Feature Overview

The `@include ease-drop()` mixin allows developers to easily apply consistent drop-in animations without duplicating keyframes or transition logic. It dynamically generates keyframes based on the provided parameters, ensuring flexibility while maintaining optimal performance.

### Key Benefits:
*   **Modular Architecture**: Write the logic once, use it everywhere.
*   **GPU Accelerated**: Strictly uses `transform: translateY()` and `opacity`. No layout-triggering properties (`margin`, `top`) are animated, preventing layout thrashing.
*   **Highly Configurable**: Control distance, duration, easing, delay, and starting opacity.
*   **Accessibility Built-in**: Natively supports `@media (prefers-reduced-motion: reduce)` to disable animations for users who prefer it.

## 🚀 Installation & Usage

1.  Copy the `@mixin ease-drop` definition from `App.scss` into your project's global styles or a dedicated `_mixins.scss` file.
2.  Import the mixin into any component stylesheet.

### Basic Usage

```scss
.my-card {
  /* Applies a default 24px drop over 0.35s with a slight bounce */
  @include ease-drop();
}
```

### Advanced Configuration

The mixin accepts the following parameters (all optional):

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$distance` | `length` | `24px` | The distance the element drops from. |
| `$duration` | `time` | `0.35s` | How long the animation takes. |
| `$timing` | `timing-function` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | The easing curve (defaults to a slight bounce). |
| `$opacity` | `number` | `0` | The starting opacity (0 = fade in, 1 = solid). |
| `$delay` | `time` | `0s` | Delay before the animation starts. |

**Example: A fast, subtle dropdown menu:**
```scss
.dropdown-menu {
  @include ease-drop($distance: 10px, $duration: 0.2s, $timing: ease-out);
}
```

**Example: Staggering list items using a SCSS loop:**
```scss
.list-item {
  @for $i from 1 through 5 {
    &:nth-child(#{$i}) {
      @include ease-drop($delay: $i * 0.1s);
    }
  }
}
```

## 🛠️ Running the Demo

This is a Vite + React project demonstrating the mixin in action.

1.  Navigate to `submissions/react/drop-ag/`.
2.  Run `npm install`.
3.  Run `npm start`.

The demo showcases four different configurations: a standard notification, a subtle dropdown, a heavy delayed feature card, and a staggered list.

## ♿ Accessibility

This mixin guarantees that any component utilizing it will automatically respect OS-level motion preferences. If `prefers-reduced-motion` is detected, the `animation` and `transform` properties are stripped, instantly setting `opacity` to `1` so the content remains fully visible and usable without the motion effect.
