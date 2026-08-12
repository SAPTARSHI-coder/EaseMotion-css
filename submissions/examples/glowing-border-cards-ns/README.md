# Glowing Border Cards

## What Does This Do?

Elegant card components with animated glowing borders that rotate smoothly, creating a premium visual effect. Perfect for showcasing products, services, features, or pricing tiers with modern, eye-catching animations.

## How to Use It

### Basic HTML Structure
```html
<div class="glowing-card">
  <div class="glowing-border"></div>
  <div class="card-content">
    <div class="card-icon">✨</div>
    <h3>Card Title</h3>
    <p>Card description text goes here.</p>
    <button class="card-button">Action Button</button>
  </div>
</div>
```

### Color Variants

Apply one of these classes to the `.glowing-card` for different glow colors:

| Class | Gradient Colors | Use Case |
|-------|---|---|
| `.glowing-card` | Blue → Cyan | Default, primary features |
| `.glowing-card-purple` | Purple → Pink | Premium, exclusive features |
| `.glowing-card-green` | Green → Teal | Success, security features |
| `.glowing-card-pink` | Pink → Red | Special, standout features |
| `.glowing-card-orange` | Orange → Amber | Alerts, active features |
| `.glowing-card-cyan` | Cyan → Blue | Cool, tech-focused features |

### Complete Example with Variant
```html
<div class="glowing-card glowing-card-purple">
  <div class="glowing-border"></div>
  <div class="card-content">
    <div class="card-icon">🚀</div>
    <h3>Pro Plan</h3>
    <p>Get everything you need to scale your business.</p>
    <button class="card-button">Upgrade Now</button>
  </div>
</div>
```

## Features

### 1. **Animated Rotating Border**
   - Smooth 360° rotation using conic-gradient animation
   - 4-second default rotation (speeds up on hover)
   - GPU-accelerated for smooth 60fps performance

### 2. **Color Variants**
   - 6 beautiful gradient combinations
   - Each variant has matching button gradients
   - Customizable shadow colors for each theme

### 3. **Interactive Hover Effects**
   - Card lifts up (translateY -8px) with scale boost
   - Border rotation speeds up for visual feedback
   - Glow intensity increases on hover
   - Button enhances with shadow effect

### 4. **Staggered Animations**
   - Each card fades in sequentially (0.1s offset)
   - Creates professional cascade effect
   - Works perfectly in grid layouts

### 5. **Responsive Design**
   - Works on all device sizes
   - Tablet: Slightly reduced padding
   - Mobile: Optimized touch targets, larger spacing
   - Auto-stacking in single column

### 6. **Accessibility**
   - Semantic HTML structure
   - High contrast text on dark backgrounds
   - Keyboard-accessible buttons
   - No animation jank on low-end devices

## Why This is Useful

### 1. **Modern Design Pattern**
   - Used in high-end SaaS platforms (Stripe, Vercel, Framer)
   - Creates premium, sophisticated impression
   - Stands out from flat/minimal designs

### 2. **Visual Hierarchy**
   - Glowing borders draw attention to important content
   - Color variants help categorize information
   - Hover effects provide clear interactivity feedback

### 3. **Engagement**
   - Smooth animations keep users engaged
   - Premium feel increases perceived value
   - Motion guides user attention

### 4. **Real-World Applications**
   - **Pricing Tables**: Highlight different plan tiers
   - **Feature Cards**: Showcase product capabilities
   - **Service Boxes**: Display team services or offerings
   - **Portfolio**: Showcase projects with premium feel
   - **Product Showcase**: Highlight featured items
   - **Team Members**: Display team profiles

### 5. **EaseMotion Philosophy**
   - **Smooth Motion**: Uses linear easing for continuous rotation
   - **Performance**: GPU-accelerated animations, minimal JS
   - **Reusable**: Color variants extend use cases
   - **Lightweight**: Pure CSS animations, no external dependencies

## Animation Details

### CSS Animations Included
- **rotate-gradient**: Rotating border animation (4s default, 2s on hover)
- **float-bounce**: Icon floating motion (3s default, 1.5s on hover)
- **fade-in-up**: Staggered card entrance (0.6s with 0.1s delays)

### Interaction Effects
- **Hover**: Card scales to 1.02 and lifts up 8px
- **Button Hover**: Lifts 2px and enhances shadow
- **Border Glow**: Increases brightness and blur on hover
- **Staggered Load**: Each card animates with 0.1s offset

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Customization Tips

### Change Glow Colors
Modify the conic-gradient in a new variant:
```css
.glowing-card-mycolor .glowing-border {
  background: conic-gradient(
    from 0deg,
    #your-color-1,
    #your-color-2,
    #your-color-1
  );
}
```

### Adjust Rotation Speed
Change animation duration:
```css
.glowing-border {
  animation: rotate-gradient 6s linear infinite; /* Change 4s to desired duration */
}
```

### Change Card Size
Adjust padding and font sizes:
```css
.card-content {
  padding: 40px 30px; /* Increase for larger cards */
}
```

### Disable Hover Effects
Remove hover animations:
```css
.glowing-card:hover {
  /* Remove or comment out transforms */
}
```

## Performance Notes

- Uses CSS animations (GPU accelerated)
- No JavaScript required
- Conic-gradient is supported in all modern browsers
- Smooth 60fps on desktop and mobile
- Minimal memory footprint

## Related Patterns

This submission pairs well with:
- Button hover effects
- Hero sections with featured content
- Feature grids and showcases
- Testimonial cards
- Pricing tier displays

---

**Contributor**: nishupr  
**License**: MIT (part of EaseMotion CSS)  
**Status**: Ready for review and standardization
