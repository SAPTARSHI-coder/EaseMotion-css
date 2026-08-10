# ease-ripple-feedback-xk

Click ripple effect for buttons — a material-inspired circle that expands from the click point and fades out.

## How to use

```html
<link rel="stylesheet" href="style.css" />

<button class="ripple-btn primary">Click me</button>

<script>
  document.querySelectorAll('.ripple-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = document.createElement('span');
      ripple.className = 'ripple-effect';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });
</script>
```

## Variants

- `primary` – indigo filled
- `secondary` – slate filled
- `outline` – transparent with border

## Customisation

```css
:root {
  --rf-duration: .6s;           /* ripple spread speed */
  --rf-color: rgba(255,255,255,.5);  /* ripple tint */
  --rf-primary: #6366f1;
  --rf-secondary: #64748b;
  --rf-outline: #6366f1;
  --rf-radius: 8px;
}
```

## Accessibility

- Ripple element removed after animation — no leftover DOM
- Ripple animation disabled with `prefers-reduced-motion: reduce`
