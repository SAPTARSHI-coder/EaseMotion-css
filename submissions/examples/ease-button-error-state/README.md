# Ease-button-error-state

Button error state that **shakes** and shows a clear **red error UI**.

## What it includes

- `style.css`
  - `.em-btn--error`: red border/background/text styles
  - `@keyframes em-shake`: shake animation
  - `.em-btn--error.em-shake`: combines error visuals + shake
  - `prefers-reduced-motion` support
- `demo.html`
  - A working demo with a small script that toggles classes to reliably restart the shake animation.

## How to use

1. Add the base button class (or your own button styling):

```html
<button class="em-btn" type="button">Trigger error</button>
```

2. Toggle classes to show error + shake:

```js
button.classList.add('em-btn--error', 'em-shake');
```

3. Remove shake after the animation (optional):

```js
button.classList.remove('em-shake');
```

## Notes

- For repeated clicks, the demo removes and re-adds `em-shake` to restart the animation.
- When `prefers-reduced-motion: reduce`, the shake animation is disabled.

