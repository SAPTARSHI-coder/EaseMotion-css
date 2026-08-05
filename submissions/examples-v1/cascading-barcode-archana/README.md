# 🎬 Cascading Barcode Animation

A smooth, responsive CSS animation component inspired by admin panel design patterns. The cascading barcode displays vertical bars that animate sequentially, creating a waterfall effect perfect for loading states, data visualizations, or decorative UI elements.

## Features

✨ **Pure CSS Animation** — No JavaScript required  
📦 **Customizable Variables** — Easy color, size, and timing adjustments  
🎨 **Multiple Variants** — Wide bars, slow cascade, loops, pulses, and more  
♿ **Accessible** — Respects `prefers-reduced-motion` for users with motion sensitivity  
📱 **Fully Responsive** — Adapts beautifully to mobile, tablet, and desktop  
🎯 **EaseMotion CSS Compatible** — Uses CSS custom properties and keyframe animations  

---

## Basic Usage

### HTML Structure
```html
<div class="barcode-wrapper">
    <div class="cascading-bar" style="--bar-index: 0;"></div>
    <div class="cascading-bar" style="--bar-index: 1;"></div>
    <div class="cascading-bar" style="--bar-index: 2;"></div>
    <!-- Add more bars as needed -->
</div>
```

### CSS Import
```css
@import url('style.css');
```

### Key Points
- **`--bar-index`** CSS variable controls the animation delay for each bar (0, 1, 2, etc.)
- Each bar animates sequentially based on its index
- Container should use `display: flex` with appropriate gap for spacing

---

## Customization

All default values use CSS custom properties and can be overridden:

```css
:root {
    --cascade-bar-width: 4px;           /* Bar thickness */
    --cascade-bar-height: 80px;         /* Bar max height */
    --cascade-bar-color: #667eea;       /* Bar color */
    --cascade-bar-duration: 0.8s;       /* Animation duration */
    --cascade-bar-delay: 0.1s;          /* Delay between bars */
    --cascade-ease: cubic-bezier(0.34, 1.56, 0.64, 1);  /* Easing function */
}
```

### Override for Specific Elements
```html
<div class="cascading-bar" style="
    --bar-index: 0;
    --cascade-bar-width: 6px;
    --cascade-bar-color: #10b981;
"></div>
```

---

## Variants

### **Default Cascade**
Standard growing animation with smooth easing.
```html
<div class="cascading-bar" style="--bar-index: 0;"></div>
```

### **Wide Bars** (`.cascading-bar--wide`)
Thicker bars (8px) with slightly longer delays.
```html
<div class="cascading-bar cascading-bar--wide" style="--bar-index: 0;"></div>
```

### **Slow Cascade** (`.cascading-bar--slow`)
Extended animation duration (1.2s) for a more relaxed feel.
```html
<div class="cascading-bar cascading-bar--slow" style="--bar-index: 0;"></div>
```

### **Fast Cascade** (`.cascading-bar--fast`)
Quick animation (0.5s) with tighter spacing.
```html
<div class="cascading-bar cascading-bar--fast" style="--bar-index: 0;"></div>
```

### **Infinite Loop** (`.cascading-bar--loop`)
Continuous animation that repeats indefinitely.
```html
<div class="cascading-bar cascading-bar--loop" style="--bar-index: 0;"></div>
```

### **Loop with Shrink** (`.cascading-bar--loop-shrink`)
Bars grow then shrink in an infinite cycle.
```html
<div class="cascading-bar cascading-bar--loop-shrink" style="--bar-index: 0;"></div>
```

### **Pulse** (`.cascading-bar--pulse`)
Subtle pulsing effect instead of full grow/shrink.
```html
<div class="cascading-bar cascading-bar--pulse" style="--bar-index: 0;"></div>
```

### **Fade In** (`.cascading-bar--fade`)
Gentle fade-in with scale animation.
```html
<div class="cascading-bar cascading-bar--fade" style="--bar-index: 0;"></div>
```

---

## Color Variants

Quick color presets for common UI states:

```html
<!-- Success state -->
<div class="cascading-bar cascading-bar--success" style="--bar-index: 0;"></div>

<!-- Warning state -->
<div class="cascading-bar cascading-bar--warning" style="--bar-index: 0;"></div>

<!-- Danger/Error state -->
<div class="cascading-bar cascading-bar--danger" style="--bar-index: 0;"></div>

<!-- Info state -->
<div class="cascading-bar cascading-bar--info" style="--bar-index: 0;"></div>
```

---

## Responsive Behavior

The component automatically adjusts for different screen sizes:

| Breakpoint | Bar Height | Bar Width | Delay |
|-----------|-----------|----------|-------|
| Desktop (> 768px) | 80px | 4px | 0.1s |
| Tablet (768px ↓) | 60px | 3px | 0.1s |
| Mobile (480px ↓) | 50px | 2.5px | 0.08s |

### Custom Responsive Adjustments
```css
@media (max-width: 480px) {
    :root {
        --cascade-bar-height: 40px;
        --cascade-bar-width: 2px;
    }
}
```

---

## Accessibility

### Reduced Motion Support
The component respects the `prefers-reduced-motion` media query:

```css
@media (prefers-reduced-motion: reduce) {
    .cascading-bar {
        animation: none;
        height: var(--cascade-bar-height);
        opacity: 1;
    }
}
```

**For users with motion sensitivity**, the bars display at full height without animation.

### Best Practices
- Always test with `prefers-reduced-motion` enabled
- Use meaningful context around the animation
- Avoid auto-playing animations on page load when possible
- Consider adding `aria-label` if the barcode represents data:
  ```html
  <div class="cascading-bar" aria-label="Loading indicator 1 of 8"></div>
  ```

---

## Use Cases

📊 **Data Loading Visualization** — Show progress while fetching data  
🎵 **Audio Visualizer** — Represent audio frequencies  
📈 **Admin Dashboards** — Visual element for dashboard polish  
🔄 **Loading States** — Animated feedback for async operations  
🎬 **Motion Design** — Decorative element in hero sections  

---

## Example: Complete Setup

### HTML
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="barcode-wrapper">
        <div class="cascading-bar" style="--bar-index: 0;"></div>
        <div class="cascading-bar" style="--bar-index: 1;"></div>
        <div class="cascading-bar" style="--bar-index: 2;"></div>
        <div class="cascading-bar" style="--bar-index: 3;"></div>
        <div class="cascading-bar" style="--bar-index: 4;"></div>
    </div>
</body>
</html>
```

### CSS (Wrapper)
```css
.barcode-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 6px;
    padding: 30px;
}
```

---

## Browser Support

✅ Chrome/Edge 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Opera 76+  

The component uses standard CSS animations and custom properties supported across all modern browsers.

---

## Performance

- ⚡ **GPU Accelerated** — Uses `height` and `opacity` properties optimized for smooth 60fps animations
- 📦 **Minimal CSS** — No external dependencies, ~3KB total (CSS + HTML)
- 🎯 **Efficient Selectors** — Simple class-based targeting for fast DOM processing

---

## License

Part of the **EaseMotion CSS** library. Use freely in personal and commercial projects.

---

## Credits

Created for **GSSoC '26** (GirlScript Summer of Code)  
Contribution to the **EaseMotion CSS** open source project  

---

## Questions or Feedback?

Feel free to open an issue or submit a PR with improvements! 🚀