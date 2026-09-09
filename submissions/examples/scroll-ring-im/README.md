# Scroll-Linked Progress Ring

## What does this do?
A circular reading-progress indicator that fills via `conic-gradient` based on the page's scroll position — using the native CSS Scroll-Driven Animations API (`animation-timeline: scroll(root)`) instead of a scroll event listener for the visual fill. A minimal JS scroll listener updates only the percentage text label.

## How to use it
```html
<div class="scroll-ring-fixed">
  <div class="scroll-ring">
    <div class="scroll-ring-inner">
      <span class="scroll-ring-label">0%</span>
    </div>
  </div>
</div>
```

```css
@property --ring-pct {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}

.scroll-ring {
  background: conic-gradient(
    var(--ease-color-primary) calc(var(--ring-pct) * 1%),
    rgba(255,255,255,0.1) 0
  );
  animation: ring-fill linear;
  animation-timeline: scroll(root);
}

@keyframes ring-fill {
  from { --ring-pct: 0; }
  to   { --ring-pct: 100; }
}
```

```js
// CSS handles the ring's visual fill. This only updates the text label,
// since CSS can't yet write computed numbers into text content.
document.addEventListener('scroll', () => {
  const pct = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
  label.textContent = `${pct}%`;
}, { passive: true });
```

## How it works
1. **`@property --ring-pct`** registers a custom property as an animatable `<number>`, so it can drive a `conic-gradient()` percentage
2. **`animation-timeline: scroll(root)`** ties the `ring-fill` keyframe's progress directly to the document's scroll position — 0% scrolled = 0% animation progress, 100% scrolled = 100%
3. **`conic-gradient()`** renders the ring using `--ring-pct` as the arc's percentage, growing as the user scrolls

## Browser support & fallback
`animation-timeline: scroll()` ships in Chrome/Edge 115+ and Firefox 131+ (Safari support pending). `@supports not (animation-timeline: scroll())` disables the scroll-driven animation, and the same JS scroll listener used for the text label also sets `--ring-pct` directly via `style.setProperty()` — identical visual result, different mechanism.

## Why it fits EaseMotion CSS
EaseMotion has linear `scroll-progress` bars, but applying the Scroll-Driven Animations API to a `conic-gradient`-based circular ring via `@property`-registered custom properties is a more advanced application with no existing example — and demonstrates a genuinely "no scroll listener needed" pattern for the primary visual effect. `prefers-reduced-motion` disables the scroll-driven animation entirely (the ring stays static, label still updates).
