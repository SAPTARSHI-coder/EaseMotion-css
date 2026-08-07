# CSS Zoom-Out Tabs (Cyberpunk Neon)

A striking, purely CSS-driven tabbed interface designed for Cyberpunk and Sci-Fi layouts. It features a dynamic Zoom-Out panel transition, bringing content from a scaled-up state into sharp, focused view, heavily inspired by futuristic UI terminals.

## 🚀 Features

- **Pure CSS State Management:** Leverages hidden `<input type="radio">` tags coupled with CSS general sibling combinators (`~`) to control active states flawlessly without any JavaScript.
- **Dynamic Zoom-Out Animation:** Applies a custom `@keyframes` animation (`em-zoom-out`) to the inner panel contents, shifting from `scale(1.15)` down to `scale(1)` for a punchy, digital entry effect.
- **Neon Aesthetic:** Stylized with dark backgrounds, monospace typography, and distinct, dynamic neon accents (Cyan, Magenta, Yellow) that adapt perfectly to the currently selected tab.
- **Accessible Design:** Features hidden inputs that remain fully focusable for keyboard navigation (`tabindex="0"` on labels with explicit `:focus-visible` outlines), and automatically disables scaling animations for users with `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the corresponding styles from `style.css`. 

### CSS Custom Properties
Tweak the zoom intensity and animation timing directly in the `:root` pseudo-class to match your app's tempo:

```css
:root {
    --em-zoom-start-scale: 1.15;    /* How large the panel starts before zooming out */
    --em-transition-timing: 0.45s;  /* Speed of the zoom effect */
    --em-easing: cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Creates a snappy 'locking-in' feel */
}
