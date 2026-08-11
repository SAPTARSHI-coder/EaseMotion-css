# Fade-In Toast

A pure HTML/CSS responsive toast notification system featuring a smooth, subtle fade-in entrance animation. Designed for minimalist technology layouts that require clean, non-distracting feedback.

## 1. What the Fade-In Toast Does
This component provides a lightweight structural UI for toast notifications. Upon rendering, each toast elegantly fades into view with a slight upward translation and scale, giving it a natural, polished feel. It includes distinct semantic variants (Success, Info, Warning, Error) styled entirely via CSS.

## 2. Main Features
- **Pure HTML and CSS**: Zero JavaScript required for styling and animations.
- **Fade-In Animation**: Utilizes hardware-accelerated CSS `@keyframes` (`transform` and `opacity`) for smooth performance.
- **Multiple Variants**: Comes pre-configured with Success, Information, Warning, and Error color accents.
- **Minimalist Tech UI**: Clean borders, minimal padding, robust SVG icons, and a layout that supports native dark mode via `prefers-color-scheme`.
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
        <strong class="toast-title">Operation Successful</strong>
        <span class="toast-message">Your changes have been saved.</span>
    </div>
    <div class="toast-timestamp">now</div>
</div>
```

## 4. HTML Class Structure
- `.toast-container`: The fixed-position wrapper that handles stacking multiple toasts.
- `.toast`: The base component grid providing structure and triggering the entrance animation.
- `.toast-success`, `.toast-info`, etc.: Modifier classes injecting specific accent colors.
- `.toast-icon`: Wraps the SVG for perfect sizing and alignment.
- `.toast-content`: Groups the title and message.
- `.toast-timestamp`: Optional metadata positioned to the far right.

## 5. CSS Custom Properties
Easily theme the toasts using these variables:
- `--toast-bg`, `--toast-border`, `--toast-text`: Base structure colors.
- `--toast-accent`: The primary color for icons and focus states (overridden by modifier classes).
- `--toast-shadow`: Box-shadow color.
- `--toast-radius`: Corner rounding.
- `--toast-duration`: Animation timing (default `0.4s`).

## 6. How the fade-in animation works
When a `.toast` is added to the DOM, it triggers the `fade-in-toast` animation. The toast begins slightly transparent (`opacity: 0`), shifted downwards (`translateY(10px)`), and slightly scaled down (`scale(0.98)`). It quickly and smoothly fades to full opacity and its natural position (`transform: translateY(0) scale(1)`) using a snappy `cubic-bezier(0.16, 1, 0.3, 1)` easing.

## 7. Responsive Behavior
- **Desktop/Tablet**: Fixed to the `bottom-right` with a `max-width` constraint of `360px` to prevent stretching.
- **Mobile**: Anchored to `bottom: 1rem`, `left: 1rem`, `right: 1rem` to fill the screen safely without causing horizontal overflow.

## 8. Accessibility Considerations
- Semantically marked with `role="alert"` and `aria-live="polite"` so screen readers immediately announce new toasts.
- Interactive keyboard support enabled by `tabindex="0"` combined with clear `:focus-visible` outlines.
- No status is communicated exclusively via color; each variant pairs color with a distinct, recognizable SVG icon.

## 9. `prefers-reduced-motion` Support
If reduced motion is requested by the user's OS, a media query entirely strips away the `fade-in-toast` animation, instantly rendering the toast at full opacity and default scale to ensure a comfortable experience.

## 10. Example Usage
Open `demo.html` to view four interconnected variants animating in sequence.

## 11. Why it fits EaseMotion CSS
This component exemplifies EaseMotion CSS by combining complex micro-interactions into a highly optimized, performant CSS structure. It requires zero external dependencies, natively supports dark mode, and strictly separates animation logic from application state.
