# Electric Toast

A toast notification with a rotating neon border, inspired by the alert style you'd see on a live news site. Slides in from the side, flickers a bit like electricity, and you can dismiss it without any JavaScript — just a hidden checkbox trick.

## Try it

Open `demo.html` in your browser. You'll see four toasts stacked up (info, success, warning, danger). Click the × on any of them to close it.

## How to use it

```html
<div>
  <input type="checkbox" id="toast-close-1" class="ease-electric-toast-toggle" />
  <div class="ease-electric-toast ease-electric-toast--info" role="status">
    <span class="ease-electric-toast__icon" aria-hidden="true">⚡</span>
    <div class="ease-electric-toast__body">
      <p class="ease-electric-toast__title">Breaking News</p>
      <p class="ease-electric-toast__message">Markets rally for a third straight session.</p>
    </div>
    <label for="toast-close-1" class="ease-electric-toast__close" aria-label="Dismiss Breaking News notification">
      <svg viewBox="0 0 12 12"><line x1="2" y1="2" x2="10" y2="10"/><line x1="10" y1="2" x2="2" y2="10"/></svg>
    </label>
  </div>
</div>
```

Just make sure each toast has its own checkbox `id` and the label's `for` matches it — that's what makes the dismiss button work without JS.

## Color variants

- `ease-electric-toast--info` (cyan, default)
- `ease-electric-toast--success` (green)
- `ease-electric-toast--warning` (yellow)
- `ease-electric-toast--danger` (red)

## Why it looks like that

The border is basically a spinning gradient ring — a `conic-gradient` behind the toast, masked down to just the edge, rotating slowly. There's also a faint glow behind it that flickers a little unevenly so it doesn't feel too mechanical.

The dismiss button isn't a real button — it's a `<label>` pointing at a hidden checkbox. When you click it, the checkbox gets checked, and a CSS selector (`:checked ~ .ease-electric-toast`) collapses the toast. No click handlers needed.

Everything — timing, colors, curves — is a CSS variable, so you can tweak `--ease-toast-accent` or `--ease-duration-slow` without touching the actual rules.

## Accessibility notes

- Each toast has `role="status"` so screen readers announce it
- The wrapping stack has `aria-live="polite"` for the same reason
- The lightning icon is `aria-hidden` since it's just decoration
- Each close label has its own specific `aria-label`, not just "close"
- Works fine with keyboard — tab to the checkbox, hit space/enter to dismiss
- Respects `prefers-reduced-motion` — turns off the slide-in, spin, and flicker for anyone who's asked for that

One honest limitation: once you dismiss a toast, it's still technically in the DOM (just visually collapsed), since there's no JS to remove it. Good enough for a demo, but a real production toast system would probably still want a bit of JS to fully unmount dismissed toasts and manage focus properly.

## Small screens

Under 480px the toasts go full width and the text shrinks a touch.

## Browser stuff

The rotating border ring uses `mask-composite`, which works in current Chrome, Firefox, Edge, and Safari. If a browser doesn't support it, the toast still looks fine — it just won't have that spinning ring, everything else still works.

## Files

```
electric-toast-rashmi/
├── demo.html
├── style.css
└── README.md
```