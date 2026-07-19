# Blur-Entrance Carousel (Minimalist Tech)

A pure CSS animated carousel featuring a smooth blur-entrance transition, designed for Minimalist Tech interface aesthetics.

## Features
- **Pure CSS**: Zero JavaScript required for navigation and transitions.
- **Blur-Entrance Animation**: Slides cross-fade, un-blur, and scale up simultaneously for a premium, high-tech reveal.
- **Minimalist Tech Theme**: High contrast, stark typography, neon accents (`#00f0ff`), and subtle tech grid backgrounds.
- **Responsive Design**: Adapts cleanly from desktop landscape layouts to mobile portrait modes.
- **Keyboard Accessible**: Uses standard HTML radio inputs to provide native keyboard navigation (Tab to focus, Arrow keys to switch).

## Usage
Simply drop the HTML structure into your project and link the included `style.css`. 
You can customize the animation variables globally in `:root`:

```css
:root {
    /* Modify these to tweak the interaction feel */
    --crsl-transition-duration: 0.8s;
    --crsl-transition-easing: cubic-bezier(0.16, 1, 0.3, 1);
    --crsl-blur-amount: 24px;
    --crsl-scale-out: 0.92;
    --crsl-scale-in: 1;
}
```

## Accessibility Note
Since the radio buttons are visually hidden but logically present, keyboard users can press `Tab` to reach the carousel controls, and then use the `Arrow Keys` (Left/Right) to navigate between slides. The active label will receive a distinct focus outline ring.
