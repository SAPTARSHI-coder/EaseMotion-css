# CSS Bounce-Pulse Stepper for Gaming Hub Layouts

A lightweight, pure CSS and HTML stepper component designed for gaming hubs and interfaces. It features a modern dark mode aesthetic with smooth bounce and pulse keyframe animations on active steps.

## 🚀 Features

- **Pure CSS/HTML:** No JavaScript required for layout and styling.
- **Gaming Aesthetic:** Dark mode background, neon glow effects, and modern typography styling.
- **Bounce-Pulse Animation:** Active steps command attention using a custom keyframe animation that combines bouncing and a radiating pulse shadow.
- **Responsive Design:** Automatically adjusts layout and text sizes for mobile, tablet, and desktop viewports.
- **Accessibility:** Includes `prefers-reduced-motion` support to disable continuous animations when requested by the user.

## 📂 File Structure

- `demo.html` - HTML structure of the stepper showcasing 4 states (completed, active, inactive).
- `style.css` - Pure CSS containing variables, layout rules, and the `@keyframes` definitions for the animations.

## 🎨 CSS Custom Properties

The component uses custom properties to easily customize the color scheme:

```css
:root {
    --ease-bg: #0f172a;
    --ease-text: #e2e8f0;
    --ease-primary: #8b5cf6;
    --ease-primary-glow: rgba(139, 92, 246, 0.5);
    --ease-secondary: #1e293b;
    --ease-success: #10b981;
    --ease-success-glow: rgba(16, 185, 129, 0.5);
    --ease-inactive: #334155;
}
```

## 🎮 Usage

Copy the HTML structure and link the stylesheet. To change a step's state, apply the following classes to the `.ease-step` element:
- `.completed` - Turns the step green with a success glow.
- `.active` - Triggers the bounce and pulse animation with the primary color glow.
- *(No Class)* - Default inactive state.

Enjoy using this high-performance, eye-catching stepper in your gaming dashboards and user flows!
