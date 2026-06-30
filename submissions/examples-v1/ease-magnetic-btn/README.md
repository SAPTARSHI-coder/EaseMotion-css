# ease-magnetic-btn

A magnetic hover button component for EaseMotion CSS.

## Usage

```html
<button class="ease-magnetic-btn">Hover Me</button>
```

## Variants

```html
<button class="ease-magnetic-btn ease-magnetic-btn-outline">Outline</button>
<button class="ease-magnetic-btn ease-magnetic-btn-pill">Pill</button>
```

## JavaScript

Add this snippet to enable the magnetic effect:

```javascript
document.querySelectorAll(".ease-magnetic-btn").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0, 0)";
  });
});
```

## Classes

| Class                       | Description          |
| --------------------------- | -------------------- |
| `ease-magnetic-btn`         | Base magnetic button |
| `ease-magnetic-btn-outline` | Outline variant      |
| `ease-magnetic-btn-pill`    | Pill shape variant   |

## Features

- Magnetic cursor attraction effect
- Smooth transform transitions
- Outline and pill variants
- Respects prefers-reduced-motion
- Uses EaseMotion CSS design tokens
