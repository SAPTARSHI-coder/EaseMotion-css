# CSS Morph-Glow Popover

A lightweight, pure CSS morph-glow popover component designed for SaaS showcase layouts.

## Features
- **Pure CSS**: No JavaScript required for hover/focus state handling or animations.
- **Morphing Glow Animation**: Uses radial gradients and keyframes to create an elegant, shifting ambient glow inside the popover.
- **Accessible**: Includes `prefers-reduced-motion` support. Semantic HTML with ARIA roles for accessibility.
- **Responsive**: Adapts gracefully to different screen sizes.
- **Custom Properties**: Easily customizable via CSS variables.

## Usage
Simply include the `style.css` and use the HTML structure from `demo.html` in your project. The popover trigger works on both hover and focus.

### Customization

You can customize the colors and glow effects by changing these CSS variables in `:root` inside `style.css`:

```css
:root {
  --primary: #6366f1;
  --primary-hover: #4f46e5;
  --bg-color: #0f172a;
  --surface: #1e293b;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --border-color: #334155;
  --glow-color: rgba(99, 102, 241, 0.4);
}
```
