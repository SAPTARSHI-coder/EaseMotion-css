# Glow Running Border Mixin

1. **What does this do?**  
It creates a hardware-accelerated, continuously rotating glowing border effect on any relative container.

2. **How is it used?**  
Include the SCSS mixin in your styles or use the utility class on your HTML element:
```html
<div class="ease-anim-glow-running-border-ag">
  Your content here
</div>
```
```scss
.custom-card {
  @include glow-running-border-ag;
}
```

3. **Why is it useful?**  
It provides a premium, attention-grabbing animation without relying on heavy JavaScript, adhering to EaseMotion's philosophy of high-performance, CSS-only animations while fully respecting `prefers-reduced-motion` accessibility preferences.
