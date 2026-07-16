# magnetic-border-nk

**What does this do?**
Animates a rotating conic-gradient sweep around any element on hover —
giving a glowing, magnetic border effect using a CSS `::before`
pseudo-element with `@keyframes` rotation, with no extra HTML and no
JavaScript required.

---

**How is it used?**
```html
<div class="ease-magnetic-border ease-card">Hover me</div>

<button class="ease-btn ease-magnetic-border">
  Magnetic Button
</button>
```

Change color and speed via CSS variables:
```css
div {
  --ease-magnetic-color: #f97316; /* orange */
  --ease-magnetic-speed: 1.2s;    /* faster spin */
}
```

---

**Customization**
```css
:root {
  --ease-magnetic-color: #6c63ff; /* purple */
  --ease-magnetic-speed: 2s;
}
```

---

**CSS Variables**
| Variable | Default | Description |
|---|---|---|
| `--ease-magnetic-color` | `#6c63ff` | Border glow and sweep color |
| `--ease-magnetic-speed` | `2s` | Full rotation cycle duration |

---

**Border Trick**
`background-clip: padding-box` stops the element's own background at the
padding edge, leaving the 2px border ring transparent. The `::before`
pseudo-element at `z-index: -1` inside an isolated stacking context sits
behind the background but shines through that transparent ring — making
the rotating conic-gradient visible only as a border sweep.

---

**Why is it useful?**
Animated gradient borders are one of the most visually impressive modern
CSS effects and are currently absent from the framework. Works on any
element without extra markup — single class, fully themeable via two CSS
variables, zero JavaScript, fits EaseMotion's human-readable
animation-first philosophy perfectly.

---

**Accessibility**
- Respects `prefers-reduced-motion` — rotation animation disabled,
  static solid border shown instead so the visual effect is preserved
- Works on any element — cards, buttons, divs, links

---

**Browser Support**
All modern browsers supporting `conic-gradient`, CSS custom properties,
and pseudo-elements. IE not supported — consistent with EaseMotion CSS.

---

**Files**
| File | Purpose |
|---|---|
| `demo.html` | Self-contained demo, no CDN or server required |
| `style.css` | Magnetic border styles and spin keyframe |
| `README.md` | This file |

---

**Submitted by**
GitHub: [@nithinsai-dev](https://github.com/nithinsai-dev)
Identifier: `nk`