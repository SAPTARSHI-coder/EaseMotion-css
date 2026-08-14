# CSS Scale-Hover Stepper

A sleek, modern, and purely CSS-based stepper component designed for gaming hub layouts. It features a scale-hover effect with smooth transitions, providing a high-quality interactive feel.

## Features
- **Pure CSS**: No JavaScript required for transitions and hover effects.
- **Scale-Hover Effect**: Interactive elements slightly scale up on hover to draw attention.
- **Neon Glow**: Active and completed steps have a neon box-shadow to fit the gaming aesthetic.
- **Responsive**: Adapts gracefully to mobile screens, changing from horizontal to vertical layout.
- **Accessible**: Includes `prefers-reduced-motion` support to disable scaling/animations for accessibility.

## Usage
Simply include the `demo.html` structure and link `style.css` in your project.

### Custom Properties
You can easily customize the appearance by overriding the CSS variables in `:root`:

- `--bg-color`: The main background color (dark theme by default).
- `--primary-color`: The accent color used for active/completed steps.
- `--inactive-color`: The background color for uncompleted steps.
- `--hover-scale`: The amount of scaling on hover (e.g., `1.15`).
- `--transition-speed`: The speed of hover animations (e.g., `0.3s`).
