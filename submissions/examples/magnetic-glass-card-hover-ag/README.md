# Magnetic Glass Card Hover

A modern glassmorphic card with a smooth 3D-like lift and outer glow hover effect.

## How is it used?

Apply the `.glass-card` class to any container element (like a `div` or `a` tag).

```html
<div class="glass-card">
  <h3>Card Title</h3>
  <p>Your content here.</p>
</div>
```

```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease, border-color 0.4s ease;
  color: #ffffff;
}

.glass-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.1);
}

@media (prefers-reduced-motion: reduce) {
  .glass-card {
    transition: none;
  }
  .glass-card:hover {
    transform: none;
  }
}
```

## Why is it useful?

It provides an engaging, premium, and dynamic design aesthetic by leveraging glassmorphism and smooth motion without relying on JavaScript. It is perfect for modern tech and SaaS interfaces to make interactive elements feel responsive and alive. This implementation also respects the `prefers-reduced-motion` accessibility preference, ensuring users who prefer less motion aren't forced to experience it.
