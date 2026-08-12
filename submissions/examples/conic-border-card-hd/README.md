# Conic Border Card

1. **What does this do?** Adds a continuously rotating conic-gradient border around a card using the CSS `@property` rule to smoothly animate the gradient angle.

2. **How is it used?** Apply `.conic-border-card` to any container element. Optionally add `.spin-slow` or `.spin-fast` to control rotation speed.

```html
<div class="conic-border-card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>

<div class="conic-border-card spin-slow">...</div>

<div class="conic-border-card spin-fast">...</div>
```

3. **Why is it useful?** It demonstrates a modern, cutting-edge CSS technique (`@property` registered custom properties) to create a visually premium animated border effect — entirely without JavaScript. The effect is composable with existing hover utilities, respects `prefers-reduced-motion`, and fits EaseMotion CSS's philosophy of human-readable, animation-first utility classes.
