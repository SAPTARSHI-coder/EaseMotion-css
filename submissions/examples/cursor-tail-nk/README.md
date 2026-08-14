# cursor-trail

**What does this do?**
Creates a glowing neon particle trail that follows the user's cursor —
each particle fades out and shrinks after a short delay, leaving a
smooth dissolving light effect behind the cursor.

---

**How is it used?**

Apply the class to `<body>`:

```html
<body class="ease-cursor-trail">
  <!-- your content -->
</body>
```

Then add this JS snippet before your closing `</body>` tag:

```html
<script>
  const body = document.querySelector('.ease-cursor-trail');

  document.addEventListener('mousemove', (e) => {
    const particle = document.createElement('div');
    particle.classList.add('ease-trail-particle');
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    body.appendChild(particle);

    particle.addEventListener('animationend', () => {
      particle.remove();
    });
  });
</script>
```

---

**Customization**

```css
:root {
  --ease-trail-color: #00ffff;  /* cyan trail */
  --ease-trail-size: 8px;       /* smaller particles */
  --ease-trail-duration: 0.4s;  /* faster fade */
}
```

---

**CSS Variables**

| Variable | Default | Description |
|---|---|---|
| `--ease-trail-color` | `#bf00ff` | Particle glow color |
| `--ease-trail-size` | `10px` | Size of each particle |
| `--ease-trail-duration` | `0.6s` | Fade out duration |

---

**Why is it useful?**
Cursor trail effects add expressive motion to creative portfolios
and landing pages with zero layout impact. It fits EaseMotion's
animation-first philosophy — a single class activates the entire
effect, particles are self-cleaning via animationend, and the
trail color is fully themeable via CSS variables. Respects
`prefers-reduced-motion` by disabling particles entirely.

---

**Accessibility**
- Respects `prefers-reduced-motion` — particles hidden entirely
  when reduced motion is enabled at OS level
- All particle elements are `pointer-events: none` so they
  never block clicks or interactions

---

**Browser Support**
All modern browsers supporting CSS animations and custom properties.
IE not supported — consistent with EaseMotion CSS.

---

**Files**

| File | Purpose |
|---|---|
| `demo.html` | Self-contained demo, no CDN or server required |
| `style.css` | Particle styles, keyframe, and CSS variables |
| `README.md` | This file |

---

**Submitted by**
GitHub: [@nithinsai-dev](https://github.com/nithinsai-dev)
Identifier: `nk`