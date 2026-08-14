# CSS Hover: Bouncing Spring Variation (#73378)

A smooth, accessible, and performant pure CSS hover effect featuring bouncing spring physics (`cubic-bezier(0.34, 1.56, 0.64, 1)`), dark mode compatibility, and hardware acceleration for the EaseMotion library, fully addressing issue `#73378`.

## 🚀 Features

- **Spring Physics Animation:** Leverages overshoot cubic-bezier timing functions for organic, elastic spring-back hover effects.
- **Hardware Accelerated:** Uses `transform` and `box-shadow` properties for buttery-smooth 60fps performance.
- **Accessibility:** Full support for keyboard navigation, focus-visible outlines, and `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage Example

```html
<button class="ease-bouncing-spring-btn" aria-label="Interactive Bouncing Spring Button">
    <span class="em-btn-label">Hover & Bounce</span>
</button>
