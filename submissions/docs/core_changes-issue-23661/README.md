# Animated Gradient Border Utility

1. What does this do?
Adds classes (`gradient-border`, `gradient-border-hover`, `gradient-border-glow`) that apply a continuously rotating conic-gradient border using native CSS `@property` keyframes.

2. How is it used?

Apply the `.gradient-border` class to your container. You can customize the colors, animation duration, background, and border thickness via CSS variables:

```html
<!-- Default behavior -->
<div class="gradient-border">
  Card Content
</div>

<!-- Hover-only activation with neon ambient glow -->
<div class="gradient-border-hover gradient-border-glow">
  Card Content
</div>

<!-- Customized styling -->
<div class="gradient-border" style="
  --gradient-colors: red, yellow, blue, red; 
  --animation-speed: 2s; 
  --border-width: 4px;
  --bg-color: #000;
">
  Custom Card
</div>
```

3. Why is it useful?
Animated gradient borders are a popular styling choice in modern "dark mode" SaaS landing pages and component cards. Providing a lightweight, composable, and hardware-accelerated pure-CSS solution that is fully compatible with custom properties matches EaseMotion CSS's philosophy of powerful, zero-dependency visual styling.
