# ease-ripple-effect-button

A material-style ripple animation button component for EaseMotion CSS.

## What does it do?

Adds a radial ripple effect that expands outward from the exact click point on any button, providing tactile visual feedback inspired by Material Design.

## How is it used?

Add the base class `ripple-btn` plus a variant class to any `<button>` element, then attach the small JS snippet to inject the `.ripple-wave` span on click:

```html
<button class="ripple-btn ripple-primary">Click me</button>

<script>
document.querySelectorAll('.ripple-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple-wave';
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top  = (e.clientY - rect.top)  + 'px';
    this.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});
</script>
```

### Available variants

| Class | Description |
|---|---|
| `ripple-primary` | Solid blue |
| `ripple-success` | Solid green |
| `ripple-danger` | Solid red |
| `ripple-dark` | Dark surface |
| `ripple-outline-primary` | Outlined blue |
| `ripple-outline-success` | Outlined green |
| `ripple-outline-danger` | Outlined red |
| `ripple-sm` | Small size |
| `ripple-lg` | Large size |

## Why is it useful?

Ripple feedback gives users an immediate, physical sense that their input was registered — a proven UX pattern. This component is lightweight (zero dependencies, ~30 lines of CSS + JS), drops into any existing button markup, and respects `prefers-reduced-motion` by disabling the animation for users who request it.
