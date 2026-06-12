# Button Glow

**What does this do?**  
Adds a color-matched outer glow (`box-shadow`) on button hover. Each color variant emits a glow in its own brand color, reinforcing the button's semantic meaning.

**How is it used?**

```html
<button class="glow-btn glow-btn-purple">Primary Action</button>
<button class="glow-btn glow-btn-green">Success</button>
<button class="glow-btn glow-btn-red">Danger</button>
```

**Why is it useful?**  
Glow effects on buttons are visually striking and provide strong hover feedback, especially on dark backgrounds. Unlike a simple `box-shadow`, a color-matched glow feels intentional and premium. This pairs naturally with EaseMotion CSS's existing button system — a single class (`ease-hover-glow`) could activate this without needing per-color variants.

---

Submitted by: @example-contributor  
Date: 2026-03-29  
Status: **Pending review**
