# Click Ripple Button

A button with a Material-inspired ripple effect that originates from the click position using JavaScript.

## Features

- Ripple animation scales from 0 to large while fading out
- Ripple originates from exact pointer coordinates
- Fully customizable via CSS custom properties
- Multiple color and size variants

## CSS Custom Properties

| Property              | Default                  | Description             |
| --------------------- | ------------------------ | ----------------------- |
| `--ripple-duration`   | `0.6s`                   | Ripple animation speed  |
| `--ripple-color`      | `rgba(255,255,255,0.6)`  | Ripple color / opacity  |
| `--ripple-btn-bg`     | `#4f46e5`                | Button background       |
| `--ripple-btn-color`  | `#fff`                   | Button text color       |
| `--ripple-btn-radius` | `8px`                    | Button border radius    |

## Usage

```html
<button class="btn-ripple btn-ripple--primary">Click me</button>
```

The JavaScript automatically attaches to all `.btn-ripple` elements:

```js
document.querySelectorAll('.btn-ripple').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    this.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});
```
