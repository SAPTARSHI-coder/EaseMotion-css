# Speed Dial Menu

A modern, standalone Speed Dial Menu showcase built using only HTML and CSS (no JavaScript, no external libraries). Features a floating action button that expands into a radial arc of quick-action shortcuts with smooth, premium animations.

## Description

This Speed Dial Menu provides a clean, accessible, and beautiful floating action button component perfect for dashboards, mobile apps, productivity tools, and more. The main FAB expands to reveal 5 colorful action buttons arranged in a radial arc, with smooth staggered animations.

## Features

- 🌟 **Pure HTML & CSS**: No JavaScript, no external dependencies
- 🎨 **Premium Gradient Styling**: Vibrant, modern gradient colors for all buttons
- 📐 **Radial Arc Layout**: Beautiful radial arrangement of action buttons
- ⚡ **Smooth Animations**:
  - Floating effect on main FAB
  - Staggered scale/rotate animations for actions
  - Plus (+) icon rotates to X when expanded
  - Hover scaling with glow effects
- 💬 **Tooltips**: Labels appear on hover
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- 🔒 **Accessible**: Semantic HTML with ARIA labels
- 🎯 **Material Design Inspired**: Clean, modern UI
- 📦 **Reusable Code**: CSS variables for easy customization

## Folder Structure

```
submissions/examples/speed-dial-menu-av/
├── demo.html      # Standalone demo page
├── style.css      # Production-ready styles
└── README.md      # This file
```

## Usage Instructions

### Basic Usage

1. **Copy the HTML**: Use the structure from `demo.html`
2. **Link the CSS**: Include `style.css` in your project
3. **Customize**:
   - Modify CSS variables in `:root` to change colors and dimensions
   - Update action icons and labels as needed
   - Add your own functionality (links, onclick handlers, etc.)

### Customization

Modify the CSS variables in `style.css` to match your design:

```css
:root {
    /* Main Button Colors */
    --em-speed-dial-primary-start: #667eea;
    --em-speed-dial-primary-end: #764ba2;
    
    /* Button Sizes */
    --em-speed-dial-size: 64px;
    --em-speed-dial-action-size: 52px;
    
    /* Animations */
    --em-speed-dial-transition: all 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Opera 47+

Works on all modern browsers that support CSS Grid, CSS Variables, and CSS Animations.
