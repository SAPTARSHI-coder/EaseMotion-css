# CSS Tada-Click Tabs with Glassmorphism

A pure CSS tab component featuring a smooth "Tada" interaction animation upon selection, styled with a modern Glassmorphism aesthetic.

## Features
- **Pure CSS**: No JavaScript required for state management or animations.
- **Glassmorphism**: Translucent panels with background blur and vibrant underlying colors.
- **Tada Interaction**: A playful, customizable "tada" animation that triggers when a tab is clicked.
- **Accessible**: Visually hidden radio buttons ensure native keyboard navigation (arrow keys, space/enter to select) and focus styles remain intact.
- **Responsive**: Adapts gracefully to smaller screen sizes by stacking the tab labels.
- **Customizable**: Exposes CSS Custom Properties (variables) for easy tweaking of animation timings, scale factors, and glass styling.

## Custom Properties
You can customize the component by overriding the following CSS variables in the `:root` scope:

```css
:root {
  /* Tada Animation */
  --tada-duration: 0.75s;
  --tada-easing: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --tada-scale: 1.15;
  --tada-rotate: 4deg;

  /* Glassmorphism */
  --glass-bg: rgba(255, 255, 255, 0.15);
  --glass-border: rgba(255, 255, 255, 0.25);
  --glass-blur: 16px;
  --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
}
```

## Usage
Simply open `demo.html` in your browser to view the component in action, or integrate the HTML and CSS into your project.
