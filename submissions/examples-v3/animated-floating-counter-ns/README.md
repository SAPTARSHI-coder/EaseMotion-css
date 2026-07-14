# Animated Floating Counter Cards

## What Does This Do?

A smooth, visually appealing counter card component with floating animation, pulse rings, color variants, and animated number transitions that enhances statistics and metrics displays across web applications.

## How to Use It

### Basic HTML Structure
```html
<div class="floating-counter">
  <div class="counter-inner">
    <div class="counter-number" data-target="1250">0</div>
    <div class="counter-label">Projects</div>
  </div>
  <div class="counter-pulse"></div>
</div>
```

### With Suffix (Percentage, Time, etc.)
```html
<div class="floating-counter floating-counter-green">
  <div class="counter-inner">
    <div class="counter-number" data-target="98">0</div>
    <span class="counter-suffix">%</span>
    <div class="counter-label">Success Rate</div>
  </div>
  <div class="counter-pulse"></div>
</div>
```

### Color Variants

Apply one of these classes to change the card color:

| Class | Color | Use Case |
|-------|-------|----------|
| `.floating-counter` | Blue | Default, primary metrics |
| `.floating-counter-green` | Green | Success, growth metrics |
| `.floating-counter-orange` | Orange | Warnings, active tasks |
| `.floating-counter-pink` | Pink | Special features, highlights |

### JavaScript Integration

Include the `script.js` file to enable:
- **Smooth number animation** from 0 to target value
- **Intersection Observer** to trigger animation on scroll
- **Performance optimized** using requestAnimationFrame

```html
<script src="script.js"></script>
```

### Required CSS
```html
<link rel="stylesheet" href="style.css">
```

## Why This is Useful

### 1. **Enhances User Engagement**
   - Smooth animations draw attention to key metrics
   - Floating motion creates visual hierarchy and interest
   - Improves perceived performance and polish

### 2. **Professional Design Pattern**
   - Used in dashboards, landing pages, and SaaS platforms
   - Aligns with modern design trends (glassmorphism-inspired)
   - Fully responsive and mobile-friendly

### 3. **Accessibility & Performance**
   - Uses CSS animations (GPU accelerated, smooth 60fps)
   - Semantic HTML structure
   - No external dependencies
   - Works without JavaScript (CSS animations still run)
   - Optional counter animation with scroll trigger

### 4. **EaseMotion Philosophy**
   - **Smooth Motion**: Uses easing functions for natural feel
   - **Reusable Patterns**: Color variants extend use cases
   - **Lightweight**: Pure CSS animations, minimal JS
   - **Developer Friendly**: Simple class-based system, easy to customize

## Animation Details

### CSS Animations Included
- **float-up**: Cards slide up on page load (0.8s)
- **float-bob**: Continuous gentle floating motion (3s loop)
- **number-glow**: Glowing effect on counter numbers (3s loop)
- **pulse-ring**: Expanding pulse animation on card background (2s loop)
- **scale-pulse**: Subtle scale animation on inner content (2s loop)

### Interaction Effects
- **Hover**: Scale up (1.05) and strengthen shadow
- **Staggered Load**: Each card animates with 0.1s offset
- **Lazy Animation**: Counter numbers animate on scroll visibility

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Behavior

- Desktop: 200px × 240px cards
- Tablet: 160px × 200px cards
- Mobile: Auto-stacks with 40px gap

## Customization Tips

### Change Colors
Modify the `background` property:
```css
.floating-counter {
  background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

### Adjust Animation Speed
Change duration values (in seconds):
```css
animation: float-bob 3s ease-in-out; /* Change 3s to desired duration */
```

### Disable Hover Effect
Remove or modify hover styles:
```css
.floating-counter:hover {
  /* Remove or adjust */
}
```

---

**Contributor**: nishupr  
**License**: MIT (part of EaseMotion CSS)  
**Status**: Ready for review and standardization
