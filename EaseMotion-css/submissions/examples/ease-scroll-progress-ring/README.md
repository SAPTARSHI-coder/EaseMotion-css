# ease-scroll-progress-ring

> A zero-JavaScript circular reading-progress indicator powered by CSS `scroll-timeline`, `@property`, and `conic-gradient`.
>
> **Issue:** #61746 · **Category:** Scroll-Driven Animation · **JS Required:** None

---

## 1. What does this do?

`ease-scroll-progress-ring` renders a small circular ring — fixed to the bottom-right corner of the viewport — that fills clockwise as the user scrolls down the page. When the page is at the very top the ring is empty; when the page is at the very bottom the ring is completely filled.

The entire effect is achieved with three modern CSS primitives working together:

| Primitive | Role |
|---|---|
| `@property --progress-angle` | Registers a typed `<angle>` custom property so the browser can **interpolate** it (strings cannot be tweened; typed values can). |
| `@keyframes ease-fill-ring` | Drives `--progress-angle` from `0deg` to `360deg`. |
| `animation-timeline: scroll(root)` | **Replaces time** as the animation driver with the root scroll container's progress — 0 % scroll → 0 % playback, 100 % scroll → 100 % playback. |
| `conic-gradient(... var(--progress-angle) ...)` | Paints the filled arc using the interpolated angle as a hard colour stop. |
| `::after` pseudo-element | Masks the centre of the filled circle with a matching background colour, turning the solid pie into a hollow ring. |

The result is a smooth, 60 fps progress indicator that is visually indistinguishable from a JavaScript equivalent — but runs entirely on the browser's GPU compositor thread.

---

## 2. How is it used?

### Step 1 — Add the stylesheet

```html
<link rel="stylesheet" href="path/to/ease-scroll-progress-ring/style.css" />
```

Or copy the rules directly into your project's CSS file.

### Step 2 — Add the single HTML element

Place this `<div>` anywhere inside `<body>` (conventionally as the last child for clean DOM order):

```html
<div class="ease-scroll-progress-ring" aria-hidden="true"></div>
```

That's it. The component **automatically tracks the root scroll container** via `animation-timeline: scroll(root)`. There is nothing to initialise, no options object to pass, and no event listeners to clean up.

### Step 3 — Optional: customise the appearance

Override any of the following values in your own stylesheet to theme the ring:

```css
.ease-scroll-progress-ring {
  /* Size */
  width: 60px;
  height: 60px;

  /* Position */
  bottom: 24px;
  right: 24px;

  /* Colours — fill colour, track colour */
  background: conic-gradient(
    #3b82f6 var(--progress-angle), /* ← fill  */
    #1e293b 0                       /* ← track */
  );
}

.ease-scroll-progress-ring::after {
  inset: 6px;               /* ← ring thickness (larger = thinner ring) */
  background-color: #0f172a; /* ← must match your page background        */
}
```

### Browser Support

| Browser | Minimum Version |
|---|---|
| Chrome / Edge | 115+ |
| Safari | 18+ |
| Firefox | 132+ |

On unsupported browsers the ring is invisible — a graceful degradation that never breaks content.

---

## 3. Why is it useful?

### Performance — compositor vs. main thread

The traditional implementation of a scroll progress indicator looks like this:

```js
// ❌ JavaScript approach — runs on the main thread
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  ring.style.strokeDashoffset = circumference - pct * circumference; // forces layout
});
```

Every pixel of scroll fires the callback, which:

1. **Wakes the main thread** — competing with input handling, style recalculation, and JavaScript execution.
2. **Forces a style mutation** — reading `scrollY` and `scrollHeight` causes a *forced synchronous layout* (layout thrashing), which blocks the next paint.
3. **Bypasses the compositor** — because the mutation is driven from JS, the browser cannot batch and optimise it.

The CSS `scroll-timeline` approach eliminates all three problems:

```css
/* ✅ CSS approach — runs entirely on the compositor thread */
.ease-scroll-progress-ring {
  animation: ease-fill-ring linear;
  animation-timeline: scroll(root); /* no JS, no callbacks */
}
```

- **Zero main-thread CPU cost during scroll.** The browser maps the scroll offset to animation progress internally, with no JavaScript callback ever invoked.
- **No layout thrashing.** There is nothing to read or write from JavaScript; `conic-gradient` repaint is handled by the GPU rasteriser.
- **Sub-pixel smooth.** The compositor operates at the display's native refresh rate (including 120 Hz / 144 Hz displays) without any throttling or debounce compromise.

### Developer Experience

- **1 CSS file + 1 HTML element.** No npm install, no build step, no runtime dependency.
- **Accessible by default.** `aria-hidden="true"` ensures screen readers skip the decorative element.
- **Themeable.** All visual decisions live in plain CSS properties — no magic numbers buried in JavaScript logic.
- **Composable.** Works alongside any CSS framework or vanilla project without conflict.

---

## Files

```
ease-scroll-progress-ring/
├── style.css   ← The component (< 30 lines)
├── demo.html   ← Standalone demo with long-scrolling article
└── README.md   ← This file
```

---

*Part of the [EaseMotion CSS](https://github.com/Viidhii19/EaseMotion-css) project — zero-JS animation utilities for the modern web.*
