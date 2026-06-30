# counter-nk

**What does this do?**
Animates a number element counting up from 0 to its target value when
scrolled into view — using IntersectionObserver for scroll detection and
`requestAnimationFrame` for smooth number interpolation, with an
easeOutCubic curve for natural deceleration.

---

**How is it used?**

```html
<!-- Basic usage -->
<h2 class="ease-counter" data-target="1000">0</h2>

<!-- Decimal support -->
<p class="ease-counter" data-target="99.9">0</p>

<!-- Custom duration -->
<span
  class="ease-counter"
  data-target="5000"
  style="--ease-counter-duration: 3s;"
  >0</span
>
```

Then include the counter script before `</body>`:

```html
<script src="counter.js"></script>
```

In the framework this will follow the same pattern as `core/reveal.js`.

---

**Customization**

```css
:root {
  --ease-counter-duration: 2s; /* count-up animation duration */
}
```

---

**CSS Variables**
| Variable | Default | Description |
|---|---|---|
| `--ease-counter-duration` | `2s` | Duration of the count-up animation |

---

**Counter Behavior**
The IntersectionObserver fires when 20% of the element enters the
viewport. It triggers once per page load and does not replay on
re-scroll. Decimals are detected automatically from the `data-target`
value and preserved with the correct precision throughout the animation.
The easeOutCubic easing starts fast and decelerates naturally toward
the final value.

---

**Why is it useful?**
Count-up animations are a staple of landing pages and dashboards for
highlighting stats, metrics, and achievements. Currently absent from
the framework. Follows the same JS-enhancement pattern already
established by `core/reveal.js` — CSS class + data attribute keeps
usage human-readable and composable, consistent with EaseMotion's
single-class philosophy.

---

**Accessibility**

- Respects `prefers-reduced-motion` — number jumps directly to the
  final value with no animation, avoiding vestibular discomfort
- Works on any inline or block text element — headings, paragraphs,
  spans, table cells

---

**Browser Support**
All modern browsers supporting IntersectionObserver, `requestAnimationFrame`,
and CSS custom properties. IE not supported — consistent with EaseMotion CSS.

---

**Files**
| File | Purpose |
|---|---|
| `demo.html` | Self-contained demo, no CDN or server required |
| `style.css` | Counter base styles and CSS variable definitions |
| `README.md` | This file |

---

**Submitted by**
GitHub: [@nithinsai-dev](https://github.com/nithinsai-dev)
Identifier: `nk`
