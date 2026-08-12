# CSS Zoom-In Stepper

A minimalist, functional stepper component utilizing pure CSS and HTML radio buttons to manage state without JavaScript. Features a smooth, elastic zoom-in animation when navigating between steps. Perfect for multi-step forms, deployment pipelines, or timeline layouts in modern tech interfaces.

## 🚀 Features

- **Pure CSS State Management:** Uses hidden radio buttons and the `:checked` pseudo-class to toggle between step contents seamlessly.
- **Elastic Zoom-In Animation:** Content cards enter with a satisfying, slightly bouncy zoom scale effect utilizing custom `cubic-bezier` transitions.
- **Interactive Navigation:** Hovering over step indicators provides immediate visual feedback.
- **System Dark Mode Support:** Colors automatically adjust based on the user's `prefers-color-scheme` settings.
- **Accessible & Responsive:** Adapts to mobile devices and fully supports `prefers-reduced-motion` to disable animations for sensitive users.

## 📂 File Structure

- `demo.html`: The structural markup including the radio button inputs.
- `style.css`: All logic, styling, and zoom animations.
- `README.md`: Component documentation.

## 🎨 Custom Properties (Variables)

Adjust colors and transition speeds easily from the `:root` variables.

```css
:root {
    --bg-color: #f1f5f9;
    --text-main: #0f172a;
    --card-bg: #ffffff;
    --primary-color: #3b82f6;
    --line-color: #cbd5e1;
    --transition-speed: 0.5s;
}
```

## 🛠 Usage

1. Copy the markup from `demo.html` to your project.
2. Link the `style.css` stylesheet.
3. **Important for logic:** The `<input type="radio">` tags must precede the `.stepper-nav` and `.stepper-content-wrapper` in the DOM tree, as CSS uses the general sibling combinator (`~`) to style elements based on the checked radio input.
4. Add more steps by adding a new radio input, a new `.step-btn` label linked to that input's ID, and a new `.step-content` div. Then update the CSS sibling selectors accordingly.

## ♿ Accessibility

This stepper natively respects OS-level motion preferences. Users with `prefers-reduced-motion` enabled will receive immediate content switching with no bouncy zoom-in effects.
