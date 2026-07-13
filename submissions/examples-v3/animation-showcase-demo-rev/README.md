# Animation Showcase Demo

## Overview
An interactive demo page showcasing all available CSS animations in the EaseMotion CSS framework. This allows users to preview animations before using them in their projects.

## Features

### Live Preview
- **Real-time animation display**: Each animation is demonstrated in a dedicated preview box
- **Interactive replay**: Click the replay button to re-trigger entrance and exit animations
- **Hover demonstrations**: Hover animations activate on mouse interaction

### Animation Categories
- **Entrance Animations**: fade-in, slide-up, slide-down, slide-in-left, slide-in-right, zoom-in, flip, bounce-in, blur-to-focus
- **Looping Animations**: bounce, pulse, rotate, wave, ping, float, shimmer-sweep, gradient-rotation
- **Hover Animations**: hover-grow, hover-shrink, hover-lift, hover-glow, hover-underline, hover-shimmer, hover-morph-card, hover-bounce-text
- **Exit Animations**: fade-out, shake-card-exit, bounce-button-exit, scale-text-exit
- **Special Animations**: typewriter-loop, shimmer-text, mask-reveal, mask-reveal-circle, skeleton-shimmer, shake, count-up

### Copy Functionality
- **One-click copy**: Click the copy button to copy the CSS class name to clipboard
- **Toast notification**: Visual confirmation when class is copied
- **Class name display**: Each card shows the exact CSS class to use

### Filtering System
- **Category filters**: Filter animations by type (All, Entrance, Looping, Hover, Exit, Special)
- **Smooth transitions**: Animated filtering between categories
- **Active state indication**: Clear visual feedback for selected filter

### Responsive Design
- **Mobile-friendly**: Adapts to all screen sizes
- **Grid layout**: Responsive grid that adjusts based on viewport
- **Touch-optimized**: Large touch targets for mobile devices

## Usage

### Live Preview
Simply open `demo.html` in any modern web browser. No server or build process required.

### Integration
To use any animation in your project:

1. **Include EaseMotion CSS**:
   ```html
   <link rel="stylesheet" href="path/to/easemotion.css">
   ```

2. **Add the animation class** to your element:
   ```html
   <div class="ease-fade-in">Your content</div>
   ```

3. **For hover animations**, the animation activates on mouse hover:
   ```html
   <div class="ease-hover-grow">Hover me</div>
   ```

### Customization
The demo page uses CSS custom properties for easy theming:

```css
:root {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --accent-color: #6366f1;
    /* ... more variables */
}
```

## Technical Details

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance
- GPU-accelerated animations using transforms and opacity
- Minimal repaints and reflows
- Optimized for 60fps performance

### File Structure
```
animation-showcase-demo/
├── demo.html          # Main showcase page
├── style.css          # Demo page styling
└── README.md          # This file
```

## Benefits

### For Users
- **Better exploration**: Easily discover and compare animations
- **Visual confirmation**: See exactly how each animation behaves
- **Quick implementation**: Copy class names directly from the demo
- **Improved documentation**: Interactive reference for all animations

### For Developers
- **Faster development**: No need to test animations manually
- **Better UX decisions**: Choose the right animation for the context
- **Reduced trial and error**: Preview before implementation
- **Consistent experience**: Standardized animation showcase

## Future Enhancements

Potential improvements for the demo:
- Search functionality to find specific animations
- Animation duration controls
- Custom color scheme picker
- Animation combination examples
- Code snippet generator with multiple classes
- Dark/light mode toggle
- Animation speed controls
