# ease-btn-ripple

Material-style ripple effect on button click. The ripple animation is pure CSS; a small JS snippet positions it at the click coordinates.

## Usage

```html
<button class="ease-ripple-btn" onclick="createRipple(event)">Click me</button>
```

```js
function createRipple(e) {
  const btn = e.currentTarget;
  const ripple = document.createElement('span');
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.className = 'ease-ripple';
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
  btn.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
}
```

## Notes

- Ripple auto-removes itself after the animation ends, so repeated clicks don't accumulate DOM nodes.
- Requires `position: relative` and `overflow: hidden` on the button (already included in `.ease-ripple-btn`).

## Browser support

All modern browsers.