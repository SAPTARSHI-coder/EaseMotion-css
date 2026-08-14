# Blur Dropdown Mixin

## Description
The `ease-blur-dropdown-mixin-ag` is an SCSS mixin that applies a "blur-in" entrance animation to dropdown menus. As the menu appears, it un-blurs, fades in, and slides down slightly. This creates a highly polished, modern "frosted glass" style reveal often seen in modern desktop operating systems.

## Installation & Usage

```scss
@import 'path/to/feature-blur-dropdown-mixin-ag/blur-dropdown';

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  
  /* Apply mixin when the dropdown becomes visible */
  display: none;
  
  &.is-visible {
    display: block;
    @include ease-blur-dropdown-mixin-ag(0.4s, ease-out);
  }
}
```

## Parameters
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$duration` | Time | `0.4s` | Duration of the blur entrance. |
| `$easing` | Timing-Function | `ease-out` | Timing function for the animation curve. |

## How It Works
The keyframes animate three properties from their initial state to their final state:
- `filter: blur(8px) → blur(0)` — the content comes into sharp focus.
- `transform: translateY(-10px) → translateY(0)` — a subtle slide down.
- `opacity: 0 → 1` — a standard fade in.

## Accessibility Considerations
- **Reduced Motion**: A `@media (prefers-reduced-motion: reduce)` block disables the animation entirely. The dropdown will appear instantly without blur or sliding, ensuring a safe experience for users who prefer reduced motion.
