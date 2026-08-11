# Liquid/Water Ripple Click Effect

### 1. What does this do?
This component creates a water-like ripple that expands outward from the exact coordinate clicked by the user.

### 2. How is it used?
Apply the `.ripple-effect` class to any button, card, or container:

```html
<button class="ripple-effect btn-celebrate">Click Me</button>
```

**Variants:**
- **Themes**:
  - `.ripple-dark`: Dark ripple optimized for light backgrounds.
  - `.ripple-color`: Accent color (indigo) ripple.
  - `.ripple-soft`: Larger, soft-blur diffuse ripple (perfect for cards).
- **Speeds**:
  - `.ripple-fast`: Shortens ripple duration (0.35s).
  - `.ripple-slow`: Lengthens ripple duration (1.1s).

**Required Click Coordinate JavaScript (Vanilla):**
Listen to `mousedown` events on ripple elements, inject a temporary `<span class="ripple-span"></span>`, and clear it on animation completion:

```javascript
document.querySelectorAll('.ripple-effect').forEach(element => {
  element.addEventListener('mousedown', e => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.classList.add('ripple-span');
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    element.appendChild(ripple);

    // Clean up after animation finishes
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  });
});
```

### 3. Why is it useful?
It provides an extremely tactile Material Design-style micro-interaction that makes elements feel responsive and satisfying to click. By offloading scaling, opacity, and transition curves to the CSS rendering pipeline, JavaScript is only used to compute coordinates, ensuring a stutter-free 60fps interaction profile. It also supports prefers-reduced-motion triggers to replace scaling with a simple background flash.
