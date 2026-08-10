# CSS Shimmer-Sweep Stepper for Minimalist Tech Layouts

A modern, pure CSS stepper component featuring a sleek "shimmer sweep" animation across the active step indicator and the connecting line. Designed specifically for minimalist tech, dark mode interfaces, and futuristic dashboards.

## Features

- 🎨 **Pure CSS/HTML**: No external dependencies or JavaScript required for the animations.
- ✨ **Shimmer Sweep Animations**: Smooth linear-gradient sweeps across active states using standard keyframes.
- 📱 **Fully Responsive**: Adapts seamlessly to mobile, tablet, and desktop viewports.
- ♿ **Accessible**: Respects `prefers-reduced-motion` settings.
- 🌙 **Minimalist Tech Aesthetic**: Dark theme with high-contrast glowing accents and clean geometry.

## File Structure

- `demo.html` - The showcase HTML structure demonstrating the stepper component.
- `style.css` - The CSS implementation with all necessary keyframe animations and variables.

## Usage

1. Link the `style.css` file in your HTML document.
2. Structure your HTML using the `.shimmer-stepper` ordered list as demonstrated in `demo.html`.
3. Add the `.completed` class to finished steps and `.active` to the current step.

### HTML Structure

```html
<ol class="shimmer-stepper">
  <li class="step completed">
    <div class="step-icon">
      <!-- SVG Icon -->
    </div>
    <span class="step-text">Configure</span>
  </li>
  <li class="step active">
    <div class="step-icon">2</div>
    <span class="step-text">Authenticate</span>
  </li>
  <li class="step">
    <div class="step-icon">3</div>
    <span class="step-text">Deploy</span>
  </li>
</ol>
```

### CSS Variables

Customize the colors to match your theme by adjusting the CSS variables in `:root`:

```css
:root {
  --bg-color: #0b0f19;
  --card-bg: #111827;
  --border-color: #1f2937;
  --text-primary: #f9fafb;
  --text-secondary: #9ca3af;
  --accent-color: #3b82f6;
  --accent-glow: rgba(59, 130, 246, 0.4);
  --success-color: #10b981;
  --success-glow: rgba(16, 185, 129, 0.2);
}
```
