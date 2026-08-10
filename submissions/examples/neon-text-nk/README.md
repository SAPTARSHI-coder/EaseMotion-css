# neon-text

**What does this do?**
Applies an animated neon sign effect to any text element — a 
multi-layered glow bloom with a realistic flicker keyframe that 
mimics a real neon tube, built entirely in pure CSS with no 
JavaScript required.

---

**How is it used?**

```html
<h1 class="ease-neon-text">Hello World</h1>
<p class="ease-neon-text">Glowing text</p>
```

Change the neon color via CSS variable:

```css
h1 {
  --ease-neon-color: #00ffff; /* cyan */
}
```

---

**Customization**

```css
:root {
  --ease-neon-color: #ff00aa; /* pink neon */
}
```

---

**CSS Variables**

| Variable | Default | Description |
|---|---|---|
| `--ease-neon-color` | `#bf00ff` | Neon glow and bloom color |

---

**Flicker Behavior**

The flicker keyframe uses multi-step percentage stops to create 
an irregular, natural-feeling on/off pattern — mimicking the 
behavior of a real neon gas tube. The animation loops every 3s.

---

**Why is it useful?**
Neon text is one of the most visually expressive CSS effects for 
creative portfolios, hero sections, and landing pages. It fits 
EaseMotion's animation-first philosophy perfectly — a single class 
delivers a full animated effect, the color is themeable via one 
CSS variable, and no JavaScript is needed at all. The 
`prefers-reduced-motion` fallback keeps accessibility intact by 
showing a static glow instead of removing the effect entirely.

---

**Accessibility**
- Respects `prefers-reduced-motion` — flicker animation disabled,
  static glow preserved so the visual effect remains
- Works on any text element — headings, paragraphs, spans

---

**Browser Support**
All modern browsers supporting CSS animations, text-shadow, and 
custom properties. IE not supported — consistent with EaseMotion CSS.

---

**Files**

| File | Purpose |
|---|---|
| `demo.html` | Self-contained demo, no CDN or server required |
| `style.css` | Neon glow styles and flicker keyframe |
| `README.md` | This file |

---

**Submitted by**
GitHub: [@nithinsai-dev](https://github.com/nithinsai-dev)
Identifier: `nk`