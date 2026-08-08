# Expand Text Example

## Description
This is a standard HTML/CSS example demonstrating an "expand" animation applied to text elements (like links or inline phrases) on hover. The text scales up slightly and increases its letter-spacing, acting as an effective "Attention Seeker" that emphasizes interactivity.

## Installation
Open `demo.html` in any modern web browser to view the example. The required styles and keyframes are defined in `style.css`.

## Usage
To use this effect, apply the CSS classes to your text elements. Note that the text element must have `display: inline-block` (or block) applied for CSS transforms to work correctly on inline elements like `<a>` or `<span>`.

```html
<a href="#" class="ease-expand-text-link-ag">Hover me</a>
```

Ensure the keyframes and hover state are included in your stylesheet:

```css
.ease-expand-text-link-ag {
    display: inline-block;
}

.ease-expand-text-link-ag:hover,
.ease-expand-text-link-ag:focus {
    animation: easeExpandTextAnimationAg 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes easeExpandTextAnimationAg {
    /* See style.css for full keyframes (scale and letter-spacing) */
}
```

## Accessibility Considerations
- **Focus States:** The animation is triggered on `:focus` as well as `:hover` for interactive elements (like links) to ensure keyboard-only users receive the same visual feedback.
- **Reduced Motion:** A strict `prefers-reduced-motion: reduce` media query is included. If the user prefers reduced motion, the scaling and spacing animation is disabled entirely. Instead, a static fallback (e.g., adding an underline via `text-decoration`) is applied on hover/focus to indicate interactivity safely.
