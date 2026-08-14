# CSS Bounce-Pulse Card Grid

A modern, accessible, pure CSS card grid layout designed for e-commerce checkouts. It features smooth hover interactions, a satisfying bounce effect on selection, and an animated pulsing indicator.

## 🌟 Features

- **Pure CSS/HTML**: No JavaScript required for interactions or animations.
- **Bounce Animation**: Custom `cubic-bezier` keyframes create a physical "press" feeling.
- **Pulse Glow**: Continuous subtle animation on the active selection indicator.
- **Accessible & Responsive**: Fully responsive grid layout with `prefers-reduced-motion` support for users who disable animations.
- **Custom Properties**: Easy to theme and adjust colors/timings.

## 📁 Files Included

- `demo.html`: The markup structure for the checkout selection.
- `style.css`: The styling, grid layout, and keyframe animations.
- `README.md`: This documentation.

## 🛠️ Usage

To use this component in your project, copy the HTML structure and include the CSS variables in your root stylesheet.

### HTML Structure
The layout uses a visually hidden `<input type="radio">` wrapped in a `<label>`. This ensures the entire card is clickable and accessible while leveraging the `:checked` pseudo-class for state management.

```html
<label class="card-item">
  <input type="radio" name="group-name" class="card-input">
  <div class="card-content">
    <!-- Card Content Here -->
  </div>
</label>
```

### CSS Variables
Adjust these to match your brand:

```css
:root {
  --bg-color: #f4f7f6;
  --card-bg: #ffffff;
  --text-primary: #2d3748;
  --text-secondary: #718096;
  --primary-color: #4f46e5;
  --primary-glow: rgba(79, 70, 229, 0.4);
  --border-color: #e2e8f0;
  --transition-speed: 0.3s;
  --border-radius: 16px;
}
```

## ♿ Accessibility Considerations

- Focus states and keyboard navigation naturally work due to native radio inputs.
- The `prefers-reduced-motion` media query disables the bounce, pulse, and hover scale animations for sensitive users, falling back to instant color changes.
