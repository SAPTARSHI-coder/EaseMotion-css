# spotlight-nk

**What does this do?**
Applies a cursor-following radial gradient spotlight to any dark section
— the illuminated circle tracks the mouse position in real time by
updating `--ease-cursor-x` and `--ease-cursor-y` CSS variables via a
lightweight JS listener, with smooth lerp-based following and no
external dependencies.

---

**How is it used?**
```html
<section class="ease-spotlight">
  <h1>Move your cursor here</h1>
  <p>The spotlight follows you.</p>
</section>

<div class="ease-spotlight ease-card">Card with spotlight</div>
```

Change spotlight color and size via CSS variables:
```css
section {
  --ease-spotlight-color: rgba(99, 179, 255, 0.12); /* blue tint */
  --ease-spotlight-size: 400px;
}
```

Then include the spotlight script before `</body>`:
```html
<script src="spotlight.js"></script>
```
In the framework this will follow the same pattern as `core/reveal.js`.

---

**Customization**
```css
:root {
  --ease-spotlight-color: rgba(255, 255, 255, 0.08);
  --ease-spotlight-size:  300px;
}
```

---

**CSS Variables**
| Variable | Default | Description |
|---|---|---|
| `--ease-cursor-x` | `50%` | Horizontal spotlight center (set by JS) |
| `--ease-cursor-y` | `50%` | Vertical spotlight center (set by JS) |
| `--ease-spotlight-color` | `rgba(255,255,255,0.08)` | Spotlight fill color and intensity |
| `--ease-spotlight-size` | `300px` | Radius of the spotlight circle |

---

**Spotlight Behavior**
A `::before` pseudo-element covers the entire section and renders a
`radial-gradient` at the cursor coordinates. JS reads `mousemove`
events, computes position relative to the element's bounding rect,
and lerps `curX/curY` toward the target at a 0.12 factor per frame
via `requestAnimationFrame` — this produces the smooth elastic
follow rather than instant snapping. On `mouseleave` the spotlight
drifts back to center.

---

**Why is it useful?**
Cursor spotlight effects are a staple of modern dark hero sections and
SaaS landing pages — they add depth, interactivity, and focus without
cluttering the UI. Currently absent from EaseMotion CSS. Follows the
JS-enhancement pattern of `core/reveal.js`, single class plus optional
CSS variable overrides, keeps HTML untouched, fits the
animation-first philosophy perfectly.

---

**Accessibility**
- Respects `prefers-reduced-motion` — `::before` pseudo-element hidden
  entirely and JS listener skipped, no animation runs
- All child content remains fully readable and accessible — the
  spotlight is purely decorative via a z-index-0 pseudo-element

---

**Browser Support**
All modern browsers supporting `radial-gradient`, CSS custom properties,
`requestAnimationFrame`, and `IntersectionObserver`. IE not supported
— consistent with EaseMotion CSS.

---

**Files**
| File | Purpose |
|---|---|
| `demo.html` | Self-contained demo, no CDN or server required |
| `style.css` | Spotlight pseudo-element and CSS variable definitions |
| `README.md` | This file |

---

**Submitted by**
GitHub: [@nithinsai-dev](https://github.com/nithinsai-dev)
Identifier: `nk`