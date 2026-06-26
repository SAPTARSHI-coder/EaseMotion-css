# neon-cursor

**What does this do?**
Replaces the default browser cursor with a glowing neon dot and a
lagging outer ring effect — giving any webpage an expressive,
cyberpunk-style cursor using CSS custom properties and minimal JS.

---

**How is it used?**

Add these two elements right after your opening `<body>` tag and
apply the class to `<body>`:

```html
<body class="ease-neon-cursor">

  <div class="ease-neon-cursor__dot" id="cursorDot"></div>
  <div class="ease-neon-cursor__ring" id="cursorRing"></div>

  <!-- your content -->

</body>
```

Then add this JS snippet before your closing `</body>` tag:

```html
<script>
  const body = document.querySelector('.ease-neon-cursor');
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');

  document.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
  });

  const interactives = document.querySelectorAll(
    'a, button, input, [role="button"]'
  );

  interactives.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      body.classList.add('cursor--hover');
    });
    el.addEventListener('mouseleave', () => {
      body.classList.remove('cursor--hover');
    });
  });
</script>
```

---

**Customization**

Override these CSS variables to theme the cursor to any color:

```css
:root {
  --ease-cursor-color: #00ffff;   /* cyan */
  --ease-cursor-size: 10px;
  --ease-cursor-ring-size: 40px;
}
```

---

**Classes**

| Class | Apply To | Description |
|---|---|---|
| `ease-neon-cursor` | `<body>` | Hides default cursor, activates effect |
| `ease-neon-cursor__dot` | `<div>` | Inner glowing dot that tracks cursor precisely |
| `ease-neon-cursor__ring` | `<div>` | Outer ring that follows with a smooth lag |

---

**CSS Variables**

| Variable | Default | Description |
|---|---|---|
| `--ease-cursor-color` | `#bf00ff` | Neon glow color |
| `--ease-cursor-size` | `12px` | Size of the inner dot |
| `--ease-cursor-ring-size` | `36px` | Size of the outer ring |

---

**Hover State**

When the cursor moves over any `a`, `button`, `input`, or
`[role="button"]` element, the outer ring automatically expands
and shifts to a brighter magenta glow — no extra classes needed.

---

**Why is it useful?**

Cursor effects are a high-impact visual touch for creative portfolios,
landing pages, and interactive demos. This fits EaseMotion's
animation-first philosophy — expressive motion through a single class,
fully themeable via CSS variables, with zero dependencies beyond a
small inline JS tracker (the same pattern already used by
`core/reveal.js` in the framework).

---

**Accessibility**

- Respects `prefers-reduced-motion` — disables all transitions when
  reduced motion is enabled at the OS level
- Cursor element is `pointer-events: none` so it never blocks clicks
- Does not interfere with keyboard navigation

---

**Browser Support**

All modern browsers supporting CSS custom properties and `box-shadow`.
IE is not supported — consistent with EaseMotion CSS.

---

**Files**

| File | Purpose |
|---|---|
| `demo.html` | Self-contained working demo, no CDN required |
| `style.css` | All cursor styles and CSS variable definitions |
| `README.md` | This file |

---

**Submitted by**
GitHub: [@nithinsai-dev](https://github.com/nithinsai-dev)
Identifier: `nk`