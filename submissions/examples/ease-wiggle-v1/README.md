## ease-wiggle

**What does this do?**
A fast, playful one-shot wiggle animation that swings an element naturally from the top — grabs attention without signaling an error.

**How is it used?**
Add the class `wiggle` to any element:

```html
<div class="wiggle">🔔</div>
<button class="wiggle">Try for Free</button>
```

Customize with CSS variables:

```css
.my-element {
  --wiggle-angle: 10deg;
  --wiggle-duration: 1s;
}
```

To replay on demand (e.g. on click):

```js
function replayWiggle(el) {
  el.classList.remove("wiggle");
  void el.offsetWidth;
  el.classList.add("wiggle");
}
```

**Why is it useful?**
EaseMotion CSS already has `ease-shake` for errors — `wiggle` fills the gap for delight and playfulness. Uses `transform-origin: top center` so elements swing like a hanging object, not a flat shake. Supports `prefers-reduced-motion` for accessibility.

Perfect for:

- 🔔 Notification bells with unread badges
- ✨ Call-to-action buttons on landing pages
- 📭 Empty state illustrations to prompt user action
