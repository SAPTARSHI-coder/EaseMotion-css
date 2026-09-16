# CSS Morph-Glow Dropdown (Glassmorphism UI)

An advanced, highly-interactive dropdown component utilizing pure CSS glassmorphism and morphing shape mechanics. It features an animated gradient glow behind the trigger button and relies strictly on CSS state management.

## 🚀 Features

- **Zero JavaScript:** Employs the hidden-checkbox hack (`input type="checkbox"`) to toggle the dropdown state, completely removing JS dependencies.
- **True Glassmorphism:** Uses `backdrop-filter: blur()` paired with semi-transparent rgba backgrounds and borders to create a frosted glass effect that refracts the background elements.
- **Morphing Architecture:** When toggled, the main button's `border-radius` morphs organically from a pill shape (`24px`) to a docked header shape (`16px 16px 4px 4px`), attaching visually to the expanding menu.
- **Animated Gradient Glow:** Features a pseudo-layer positioned behind the button utilizing `filter: blur()` and an animated `background-position` to create a continuous neon breathing effect.
- **Accessible & Performant:** Includes `tabindex="0"` and `:focus-visible` states for keyboard navigation. Fully disables all background drifts, pulses, and morphing transforms when `@media (prefers-reduced-motion: reduce)` is detected.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. The dropdown toggle relies on matching the `id` of the checkbox with the `for` attribute of the button label.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-glass-bg: rgba(255, 255, 255, 0.1);  /* Base glass opacity */
    --em-glow-color: rgba(99, 102, 241, 0.6); /* Color of the morphing glow */
    --em-anim-speed: 0.5s;                    /* Base spring animation duration */
}
