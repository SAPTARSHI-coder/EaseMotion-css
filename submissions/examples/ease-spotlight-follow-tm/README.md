# ease-spotlight-follow

CSS spotlight effect that follows the cursor.

## Usage

```html
<div class="spotlight-card"><div class="spotlight-overlay"></div>Content</div>
```

```js
card.addEventListener('mousemove', (e) => { const rect = card.getBoundingClientRect(); card.style.setProperty('--sx', (e.clientX - rect.left) + 'px'); card.style.setProperty('--sy', (e.clientY - rect.top) + 'px'); });
```

CSS: `radial-gradient(300px circle at var(--sx) var(--sy), rgba(108,99,255,0.15), transparent 40%)`.
