# Documentation: Animated Toggle Component (#15547)

Comprehensive integration guide and usage documentation for the EaseMotion library's **Animated Toggle** component (`#15547`), fully addressing documentation issue `#78865`.

## 🚀 Overview & Features

- **Smooth Sliding Knob:** Utilizes hardware-accelerated transforms for fluid switch state transitions.
- **Frosted Glassmorphism Styling:** Built with background blur (`backdrop-filter: blur(16px)`) and cyan accent glow highlights.
- **Accessibility:** Full support for keyboard focus outlines, ARIA labels, and `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage Example

```html
<label class="ease-animated-toggle" aria-label="Interactive Animated Toggle Switch">
    <input type="checkbox" class="em-toggle-input" checked>
    <span class="em-toggle-slider"></span>
</label>
