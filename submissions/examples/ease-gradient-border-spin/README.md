# Ease Gradient Border Spin

### 1. What does this do?
The `ease-gradient-border-spin` component creates a modern Vercel-style spinning conic-gradient card border. It rotates a multi-colored conic gradient seamlessly behind a masked content layer using pure CSS `@keyframes` animations to generate an eye-catching, glowing animated border effect.

### 2. How is it used?
Wrap your card container with `.ease-gradient-border-spin` and place your content inside a child element with `.ease-card-content`:

```html
<div class="ease-gradient-border-spin">
  <div class="ease-card-content">
    <h2>Pro Tier</h2>
    <p>$29/mo</p>
    <p>Includes advanced features & keyframe engine</p>
    <button>Upgrade Now</button>
  </div>
</div>
```

You can customize the border width, card radius, and gradient colors via CSS custom variables:

```css
.my-custom-card {
  --ease-border-width: 3px;
  --ease-card-radius: 24px;
  --ease-gradient-border: conic-gradient(from 0deg, #ff007f, #7928ca, #00dfd8, #ff007f);
}
```

### 3. Why is it useful?
It provides a high-end, premium SaaS aesthetic (commonly seen on Vercel, Linear, and Next.js landing pages) using 100% pure CSS. By utilizing GPU-accelerated CSS `transform: rotate()` animations on pseudo-elements, it avoids expensive JavaScript runtime overhead, `requestAnimationFrame` loops, or DOM mutations, delivering silky smooth 60fps performance across modern browsers and mobile devices.
