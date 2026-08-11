# ease-ripple

**What does this do?**
Adds a Material Design-style radial ripple effect to any element on
click or tap — a scale-and-fade animation on the `::after`
pseudo-element triggered by the `:active` state, built entirely in
pure CSS with no JavaScript required.

---

**How is it used?**
```html
<!-- Buttons -->
<button class="ease-btn ease-btn-primary ease-ripple">Click me</button>

<!-- Cards and any clickable element -->
<div class="ease-card ease-ripple">Click me</div>

<!-- Links -->
<a href="#" class="ease-ripple">Ripple Link</a>
```

Change ripple color and speed via CSS variables:
```css
button {
  --ease-ripple-color: rgba(0, 0, 0, 0.2); /* dark ripple on light bg */
  --ease-ripple-duration: 0.8s;
}
```

---

**Customization**
```css
:root {
  --ease-ripple-color:    rgba(255, 255, 255, 0.35);
  --ease-ripple-duration: 0.5s;
  --ease-ripple-opacity:  0.4;
}
```

---

**CSS Variables**
| Variable | Default | Description |
|---|---|---|
| `--ease-ripple-color` | `rgba(255,255,255,0.35)` | Ripple fill color |
| `--ease-ripple-duration` | `0.5s` | Duration of the ripple animation |
| `--ease-ripple-opacity` | `0.4` | Peak opacity at animation start |

---

**Ripple Behavior**
The `::after` pseudo-element sits at `inset: 0` and scales from 0 to
2.5× on `:active`, fading to opacity 0 by the end of the animation.
The ripple always originates from the center of the element. The parent
requires `position: relative` and `overflow: hidden` — both applied
automatically by the class. `border-radius: inherit` ensures the ripple
clips correctly on pill buttons and rounded cards.

---

**Why is it useful?**
Material Design-style ripple feedback is one of the most popular
interaction patterns for clickable elements and is completely absent
from EaseMotion CSS. Pure CSS via `::after` and `:active`, zero
JavaScript, works on buttons, cards, links, or any clickable block
element, fully themeable via three CSS variables, fits EaseMotion's
animation-first single-class philosophy perfectly.

---

**Accessibility**
- Respects `prefers-reduced-motion` — `::after` pseudo-element is
  hidden entirely, no animation plays
- Works on any interactive element — buttons, links, cards, divs

---

**Browser Support**
All modern browsers supporting CSS animations, pseudo-elements, and
custom properties. IE not supported — consistent with EaseMotion CSS.

---

**Files**
| File | Purpose |
|---|---|
| `demo.html` | Self-contained demo, no CDN or server required |
| `style.css` | Ripple styles and pop keyframe |
| `README.md` | This file |

---

**Submitted by**
GitHub: [@nithinsai-dev](https://github.com/nithinsai-dev)
Identifier: `nk`