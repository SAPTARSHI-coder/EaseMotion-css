# Skew-Active Carousel (SaaS Showcase)

A pure CSS animated carousel featuring a smooth skew-active transition, styled for modern SaaS (Software as a Service) showcase interfaces.

## Features
- **Pure CSS**: Fully functional without any JavaScript for state management or animation.
- **Skew-Active Animation**: Inactive slides are gracefully skewed (`-6deg`) and scaled down. When a slide becomes active, it elegantly un-skews to `0deg` and scales up, providing a highly dynamic, kinetic feel as the cards slide into view.
- **SaaS Aesthetics**: Clean white cards, soft large shadows, generous padding, rounded corners, and vibrant primary colors (`#4f46e5` indigo) that look great on landing pages.
- **Responsive & Accessible**: Adapts to mobile screens cleanly and provides full keyboard navigation natively via visually hidden HTML radio inputs.

## Customization
All animation parameters and colors are exposed as CSS Custom Properties in the `:root` pseudo-class inside `style.css`. You can easily tweak the skew angle or transition speed globally:

```css
:root {
    /* Animation Speeds */
    --crsl-speed: 0.65s;
    --crsl-easing: cubic-bezier(0.16, 1, 0.3, 1);
    
    /* Skew-Active Configuration */
    --crsl-skew-inactive: -6deg;
    --crsl-skew-active: 0deg;
    --crsl-scale-inactive: 0.88;
}
```

## Accessibility Note
Because the carousel uses native `<input type="radio">` elements (visually hidden with standard `.sr-only` clipping), keyboard users can press `Tab` to reach the carousel controls, and then use the `Arrow Keys` (Left/Right) to navigate between slides. The active label will receive a distinct focus outline ring conforming to WCAG standards.
