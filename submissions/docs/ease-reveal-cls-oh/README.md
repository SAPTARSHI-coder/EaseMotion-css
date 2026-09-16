# Guide: ease-reveal & Cumulative Layout Shift (CLS)

This submission provides documentation for GSSoC issue **#44494**.

## Description

A comprehensive guide demonstrating CLS (Cumulative Layout Shift) issues when ease-reveal triggers before image dimensions are known, along with documented fix patterns.

## Problem

EaseMotion CSS includes ease-reveal for scroll-triggered entrance animations, but when reveal fires on image-heavy content before images finish loading, the layout shifts as dimensions become known. This hurts Core Web Vitals CLS scores.

## What's Included

### CLS Monitor
- Live CLS score display
- Severity indicator (Good/Warning/Danger)
- Advice messages based on score

### Broken Demo
- Images without width/height attributes
- Demonstrates layout shift before images load
- Shows CLS impact

### Fixed Demo
- Images with explicit width/height
- Skeleton loading placeholders
- No layout shift

### Fix Patterns

1. **Explicit Width/Height**: Add width and height attributes
```html
<img src="image.jpg" width="400" height="300">
```

2. **Aspect Ratio CSS**: Reserve space with CSS
```css
.img-container {
  aspect-ratio: 4 / 3;
}
```

3. **Skeleton Placeholder**: Show loading state
```css
.skeleton {
  position: absolute;
  inset: 0;
  background: #e0e0e0;
  animation: shimmer 1.5s infinite;
}
```

4. **Delayed Reveal**: Wait for load event
```javascript
window.addEventListener('load', () => {
  document.querySelectorAll('.ease-reveal')
    .forEach(el => el.classList.add('revealed'));
});
```

## Best Practices

- Always specify width and height attributes on images
- Use CSS `aspect-ratio` to reserve space
- Add skeleton loading states for visual feedback
- Delay reveal animations until images are loaded
- Test with throttled network (Slow 3G) in DevTools
- Monitor CLS in Google PageSpeed Insights

## CLS Thresholds

| Score | Rating |
|-------|--------|
| ≤ 0.1 | Good |
| 0.1-0.25 | Needs Improvement |
| > 0.25 | Poor |

## Acceptance Criteria

- ✅ Reproducible CLS demo with ease-reveal
- ✅ Side-by-side broken vs fixed comparison
- ✅ CLS impact visualization
- ✅ 4 fix patterns documented
- ✅ Copy-ready HTML snippets
- ✅ Best practices list
- ✅ Responsive design
