# Animated Testimonial Cards Demo

A beautiful, responsive testimonial cards showcase demonstrating EaseMotion CSS animations in action.

## Overview

This demo features three animated customer testimonial cards with smooth entrance animations, hover effects, and responsive design. It's built entirely with CSS animations and no JavaScript dependencies.

## Features

✨ **Animation Effects**
- **Fade In**: Smooth opacity transition on page load
- **Slide Up**: Cards slide up from below with fade effect
- **Scale Up**: Customer images scale smoothly into view
- **Hover Animations**: Cards lift up with star rating animations
- **Staggered Timing**: Each card animates in sequence for visual appeal

🎨 **Design Elements**
- Three responsive testimonial cards
- 5-star rating display with animation on hover
- Customer profile images with circular borders
- Customer name and designation
- Review text in italics for emphasis
- Gradient header background (purple to violet)
- Smooth hover transitions and shadow effects

📱 **Responsive**
- Mobile-first responsive design
- Grid layout adapts from 1 column (mobile) to 3 columns (desktop)
- Optimized typography and spacing for all screen sizes
- Accessibility support for reduced motion preferences

## File Structure

```
testimonial-cards-demo/
├── index.html          # Main HTML markup
├── styles.css          # All animations and styling
└── README.md           # This file
```

## Demo Preview

The demo includes:

1. **Header Section**
   - "What Our Customers Say" title
   - Subtitle text

2. **Three Testimonial Cards**
   - ⭐ 5-star ratings (animated on hover)
   - 💬 Review testimonials
   - 👤 Customer profile images
   - 📝 Customer name and designation

## Animation Details

### Keyframes Used

| Animation | Duration | Effect |
|-----------|----------|--------|
| fadeIn | 0.8s | Opacity from 0 to 1 |
| slideUp | 0.8s | Moves up 30px while fading in |
| scaleUp | 0.6s | Scales from 0.8 to 1 |
| cardHover | - | Lifts card on hover |
| starAnimation | 0.6s | Stars bounce on card hover |

### Animation Classes

```css
.fade-in       /* Fade in effect */
.slide-up      /* Slide up with fade */
.scale-up      /* Scale in effect */
```

## How to Use

1. **Copy all three files** (index.html, styles.css, README.md) to your project
2. **Open index.html** in a web browser to see the demo
3. **Customize content**:
   - Replace testimonial text in index.html
   - Update customer names and designations
   - Replace image URLs with your own customer images
4. **Adjust timing**: Modify `animation-delay` values to change stagger timing

## Customization

### Change Card Delay

Edit the `animation-delay` in index.html:
```html
<div class="testimonial-card fade-in slide-up" style="animation-delay: 0.2s;">
```

### Modify Colors

Update the gradient in styles.css:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adjust Animation Speed

Change duration in the animation classes:
```css
.fade-in {
    animation: fadeIn 0.8s ease-out forwards; /* Change 0.8s to desired duration */
}
```

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Supports `prefers-reduced-motion` for users who prefer minimal animations
- Semantic HTML structure
- Proper contrast ratios for text
- Alt text for images

## Performance

- Pure CSS animations (GPU-accelerated)
- No JavaScript required
- Lightweight and fast-loading
- Optimized for all devices

## Demo Integration

This demo can be easily integrated into:
- Documentation sites
- Portfolio projects
- Marketing websites
- Client testimonial sections
- Case study pages

## Credits

Built as a contribution to the EaseMotion CSS project, showcasing practical animation usage patterns.

---

**Issue Reference**: #42223
**Folder**: `/submissions/examples/testimonial-cards-demo/`