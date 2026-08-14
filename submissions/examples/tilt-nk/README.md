# tilt-nk

**What does this do?**
Applies a smooth 3D perspective tilt effect to any element on hover —
the element rotates slightly in 3D space giving a natural depth and
interactivity feel, built entirely in pure CSS with no JavaScript required.

---

**How is it used?**
```html
<div class="ease-tilt ease-card">Hover me</div>
<button class="ease-btn ease-tilt">Tilt Button</button>
```

---

**Customization**
```css
:root {
  --ease-tilt-degree: 15deg; /* stronger tilt */
}
```

---

**CSS Variables**
| Variable | Default | Description |
|---|---|---|
| `--ease-tilt-degree` | `10deg` | Maximum rotation angle on hover |

---

**Tilt Behavior**
On hover, the element applies `perspective(600px) rotateX() rotateY()`
using the tilt degree variable. The X-axis rotation is scaled to 60% of
the Y-axis value to produce a natural diagonal lean rather than a flat
side-flip. Transition eases smoothly in and out at 0.35s.

---

**Why is it useful?**
3D tilt effects add perceived depth and tactile interactivity to static
cards, images, and buttons — making interfaces feel alive without
JavaScript. Only directional slide variants exist in the repo; a
centered perspective tilt class is missing entirely. Single class,
fully themeable via one CSS variable, fits EaseMotion's animation-first
single-class philosophy perfectly.

---

**Accessibility**
- Respects `prefers-reduced-motion` — transform and transition fully
  disabled, element stays flat
- Works on any block element — cards, buttons, images, divs

---

**Browser Support**
All modern browsers supporting CSS transforms, transitions, and custom
properties. IE not supported — consistent with EaseMotion CSS.

---

**Files**
| File | Purpose |
|---|---|
| `demo.html` | Self-contained demo, no CDN or server required |
| `style.css` | Tilt transform and transition styles |
| `README.md` | This file |

---

**Submitted by**
GitHub: [@nithinsai-dev](https://github.com/nithinsai-dev)
Identifier: `nk`