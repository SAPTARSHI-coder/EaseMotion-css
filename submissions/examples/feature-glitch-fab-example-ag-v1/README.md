# Glitch FAB Example

## Description
This is a standard HTML/CSS example demonstrating a "glitch" animation applied to a Floating Action Button (FAB) on hover. The glitch effect utilizes quick, small 2D translations to simulate a digital jitter, making it a highly engaging and stylized "Attention Seeker" pattern, particularly suited for tech, gaming, or modern brutalist interfaces.

## Installation
Open `demo.html` in any modern web browser to view the example. The required styles and keyframes are defined in `style.css`.

## Usage
To use this effect, structure your HTML with a standard `<button>` and apply the `.ease-glitch-fab-ag` class.

```html
<button class="ease-glitch-fab-ag" aria-label="Add new item">+</button>
```

Ensure the keyframes and hover state are included in your stylesheet. The button is absolutely positioned to the bottom right corner (a standard FAB position).

```css
.ease-glitch-fab-ag:hover,
.ease-glitch-fab-ag:focus {
    animation: easeGlitchFabAnimationAg 0.3s linear;
}

@keyframes easeGlitchFabAnimationAg {
    /* See style.css for full keyframes (translations) */
}
```

## Accessibility Considerations
- **Semantic HTML & ARIA:** Since FABs often use icons or symbols (like `+`), it is critical to provide an `aria-label` describing the action (e.g., "Add new item") so screen readers can interpret its purpose.
- **Focus States:** The animation is triggered on `:focus` as well as `:hover` to ensure keyboard-only users receive the interactive feedback.
- **Reduced Motion:** A strict `prefers-reduced-motion: reduce` media query is included. If the user prefers reduced motion, the erratic glitch animation is entirely disabled. Instead, the button slightly scales up and darkens its background on hover/focus to provide safe, non-erratic interactive feedback.
