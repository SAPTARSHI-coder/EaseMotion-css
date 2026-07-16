# ease-spotlight — Cursor Spotlight Hover Card

1. **What does this add?** A card component where a radial-gradient "spotlight" follows the cursor on hover, illuminating part of the card surface — the signature interaction seen on GitHub, Linear, and Vercel's marketing pages. Includes 3 color variants (purple, blue, warm) and 2 intensity variants (subtle, strong).
2. **How is it used?**
```html
<div class="ease-spotlight ease-spotlight-purple">
  <h3>Spotlight Card</h3>
  <p>Move your cursor over this card.</p>
</div>

<div class="ease-spotlight ease-spotlight-blue ease-spotlight-strong">
  <h3>Bigger, brighter blue spotlight</h3>
</div>

<div class="ease-spotlight ease-spotlight-warm ease-spotlight-subtle">
  <h3>Small, dim warm spotlight</h3>
</div>
```

```js
// Required: tracks cursor position to drive --mouse-x / --mouse-y
document.querySelectorAll('.ease-spotlight').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  });
});
```
3. **Why is it useful?** A minimal `mousemove` listener updates two CSS custom properties (`--mouse-x`, `--mouse-y`), which drive a `radial-gradient` on a pseudo-element — all visual styling and color/size variants stay pure CSS. This is the most requested "premium" interaction pattern for modern landing pages, and EaseMotion CSS currently has no cursor-reactive component.

**Note:** A tiny JS snippet (~6 lines) is required to track cursor position — CSS alone cannot read `mousemove` coordinates. This keeps EaseMotion CSS's core philosophy ("zero JS") intact for all *animation* utilities, while this one *interactive component* documents its minimal JS dependency clearly, consistent with other interactive components (e.g. theme toggle, copy button) already in `submissions/examples/`.