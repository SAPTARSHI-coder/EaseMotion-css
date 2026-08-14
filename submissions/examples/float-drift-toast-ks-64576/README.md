# Float-Drift Toast

A pure HTML/CSS responsive toast notification system featuring a smooth "float + drift" entrance animation. Perfect for alerting users of system statuses, updates, and confirmations within modern minimalist layouts.

## 1. What the Float-Drift Toast Does
This component provides a lightweight visual structure for toast notifications. Upon rendering, each toast elegantly floats upwards while drifting slightly horizontally and fading in. It provides distinct semantic variants (Success, Info, Warning, Update) using only CSS variables.

## 2. Main Features
- **Pure HTML and CSS**: Zero JavaScript required for styling and animations.
- **Float-Drift Animation**: Utilizes hardware-accelerated CSS `@keyframes` (`transform` and `opacity`) for buttery-smooth entrances.
- **Multiple Variants**: Comes pre-configured with Success, Information, Warning, and Update styling.
- **Minimalist Tech UI**: Emphasizes clean borders, soft shadows, readable typography, and native scalable SVG icons.
- **Responsive Stack**: Automatically adapts position and width from desktop to mobile screens.
- **Accessible**: Features high-contrast `:focus-visible` outlines and respects OS-level motion preferences.

## 3. How to Use It
In a real application, you would dynamically inject this HTML structure via JavaScript into the `.toast-container` whenever an event occurs. This repository provides the structural CSS required to style and animate them upon injection.

```html
<!-- Example Usage -->
<div class="toast toast-success" role="alert" tabindex="0">
    <div class="toast-icon">
        <!-- SVG icon -->
    </div>
    <div class="toast-content">
        <strong class="toast-title">Deployment Successful</strong>
        <span class="toast-message">Application v2.4.1 is now live.</span>
    </div>
    <div class="toast-timestamp">Just now</div>
</div>
```

## 4. HTML Class Structure
- `.toast-container`: The fixed-position wrapper that handles stacking multiple toasts.
- `.toast`: The base component grid providing structure and triggering the entrance animation.
- `.toast-success`, `.toast-info`, etc.: Modifier classes injecting specific accent colors.
- `.toast-icon`: Wraps the SVG for perfect centering and background styling.
- `.toast-content`: Groups the title and message.
- `.toast-timestamp`: Optional metadata positioned to the right.

## 5. CSS Custom Properties
Easily theme the toasts using these variables:
- `--toast-bg`, `--toast-border`, `--toast-text`: Base structure colors.
- `--toast-accent`: The primary color for borders and icons (dynamically overridden by modifier classes).
- `--toast-shadow`: Box-shadow color.
- `--toast-radius`: Corner rounding.
- `--toast-duration`: Animation timing (default `0.6s`).

## 6. How the Float-Drift animation works
When a `.toast` is added to the DOM, it triggers the `float-drift-toast` animation. The toast begins slightly scaled down (`0.95`), offset downwards and horizontally. It smoothly drifts to an overshoot position (`scale(1.01)` and negative offset) before settling gracefully into its final `(0,0,0)` position. This gives it an organic, frictionless feel.

## 7. Responsive Behavior
- **Desktop/Tablet**: Fixed to the `top-right` with a max-width constrain.
- **Mobile**: Anchored to `top: 1rem`, `left: 1rem`, `right: 1rem` to fill the screen safely without causing horizontal overflow.

## 8. Accessibility Considerations
- Semantically marked with `role="alert"` or `aria-live="polite"` so screen readers immediately announce new toasts.
- Interactive keyboard support enabled by `tabindex="0"` combined with clear `:focus-visible` outlines.
- No status is communicated exclusively via color; each variant pairs color with a distinct, recognizable SVG icon.

## 9. `prefers-reduced-motion` Support
If reduced motion is requested, a media query strips away the `transform` keyframes, replacing the float-drift with a simple, instantaneous `opacity` fade-in, strictly prioritizing comfort over visual flair.

## 10. Example Usage
Open `demo.html` to view four interconnected variants animating in sequence.

## 11. Why it fits EaseMotion CSS
This component exemplifies EaseMotion CSS by combining complex micro-interactions (drifting, scaling, fading) into a highly optimized, performant CSS structure. It requires zero external dependencies, natively supports dark mode, and strictly separates animation logic from application state.
