# ☄️ Comet Cursor

A magical, celestial cursor effect where the cursor leaves a glowing comet tail behind it as you move your mouse, creating a stunning cosmic experience with shimmering particles and a pulsing core.

---

## What it does

- Replaces the default cursor with a **glowing pulsing core** (the comet head)
- Spawns **shimmering trail particles** (hues 200–230°, sizes 3–9 px) that drift and fade behind the cursor
- **Click** anywhere for a **30-particle comet burst** flying outward in all directions
- **Hover** over interactive elements for a smaller **15-particle burst**
- Smooth 60 fps animation via `requestAnimationFrame`
- Touch devices and `prefers-reduced-motion` users see the default cursor — no effect applied

---

## File structure

```
comet-cursor/
├── demo.html   # HTML + embedded JS
├── style.css   # All styles & keyframe animations
└── README.md   # This file
```

---

## How to use

### 1. Add the styles

```html
<link rel="stylesheet" href="style.css">
```

### 2. Add the comet core element

```html
<!-- Place just before </body> -->
<div class="comet-core" id="cometCore"></div>
```

### 3. Add the JavaScript

```html
<script>
    const core = document.getElementById('cometCore');
    const particles = [];
    const maxParticles = 24;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let coreX = mouseX, coreY = mouseY;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Click burst
    document.addEventListener('click', e => spawnBurst(e.clientX, e.clientY, 30));

    // Hover burst on specific elements
    document.querySelectorAll('.interactive-card').forEach(el => {
        el.addEventListener('mouseenter', e => {
            const r = el.getBoundingClientRect();
            spawnBurst(r.left + r.width / 2, r.top + r.height / 2, 15);
        });
    });

    function spawnBurst(x, y, count) {
        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            p.className = 'comet-burst-particle';
            document.body.appendChild(p);
            const angle = (Math.PI * 2 * i) / count;
            const speed = 60 + Math.random() * 80;
            const size  = 3 + Math.random() * 5;
            const hue   = 200 + Math.random() * 40;
            const life  = 600 + Math.random() * 400;
            p.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px;
                background:hsl(${hue},100%,70%);box-shadow:0 0 ${size*2}px hsl(${hue},100%,60%)`;
            const dx = Math.cos(angle) * speed, dy = Math.sin(angle) * speed;
            p.animate([
                { transform:'translate(-50%,-50%) scale(1)', opacity:1 },
                { transform:`translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) scale(0)`, opacity:0 }
            ], { duration:life, easing:'cubic-bezier(0,0,0.2,1)', fill:'forwards' })
             .finished.then(() => p.remove());
        }
    }

    function createTrailParticle() {
        const p = document.createElement('div');
        p.className = 'comet-particle';
        document.body.appendChild(p);
        return p;
    }

    function animate() {
        coreX += (mouseX - coreX) * 0.18;
        coreY += (mouseY - coreY) * 0.18;
        core.style.left = coreX + 'px';
        core.style.top  = coreY + 'px';

        if (particles.length < maxParticles) {
            particles.push({ el: createTrailParticle(), x: coreX, y: coreY, life: 1,
                size: 3 + Math.random() * 6, hue: 200 + Math.random() * 30 });
        } else {
            const oldest = particles.shift();
            Object.assign(oldest, { x: coreX, y: coreY, life: 1,
                size: 3 + Math.random() * 6, hue: 200 + Math.random() * 30 });
            particles.push(oldest);
        }

        for (const p of particles) {
            p.life -= 0.04;
            if (p.life <= 0) { p.el.style.opacity = '0'; continue; }
            p.x += (Math.random() - 0.5) * 1.5;
            p.y += (Math.random() - 0.5) * 1.5;
            const s = p.size * p.life;
            p.el.style.cssText = `left:${p.x}px;top:${p.y}px;width:${s}px;height:${s}px;
                opacity:${p.life * 0.85};
                background:radial-gradient(circle,hsl(${p.hue},100%,80%),hsl(${p.hue+20},100%,50%));
                box-shadow:0 0 ${s*1.5}px hsl(${p.hue},100%,60%)`;
        }

        requestAnimationFrame(animate);
    }
    animate();
</script>
```

---

## CSS classes

| Class | Description |
|---|---|
| `.comet-core` | Pulsing glowing cursor head |
| `.comet-particle` | Spawned trail particle (sized & styled via JS) |
| `.comet-burst-particle` | Burst particle (click / hover events) |

---

## Keyframe animations

| Name | Purpose |
|---|---|
| `ease-comet-core-pulse` | Scale + glow oscillation on the cursor core (1.5 s cycle) |

---

## Customisation

| What | How |
|---|---|
| Trail length | Change `maxParticles` (default `24`) |
| Core size | Edit `.comet-core` `width` / `height` |
| Color range | Adjust `hue` range — default `200–230°` (deep-blue/violet) |
| Burst count (click) | Change the `30` passed to `spawnBurst` in the click handler |
| Burst count (hover) | Change the `15` passed to `spawnBurst` in the mouseenter handler |
| Trail fade speed | Change `p.life -= 0.04` (larger value = faster fade) |
| Core follow speed | Change the `0.18` lerp factor (higher = snappier) |

---

## Accessibility

- `@media (prefers-reduced-motion: reduce)` — hides all comet elements, restores default cursor
- `@media (hover: none) and (pointer: coarse)` — hides all comet elements on touch devices, restores default cursor

---

## Perfect for

✅ Space-themed interfaces · ✅ Magical / fantasy experiences · ✅ Creative portfolios  
✅ Astronomy / planetarium sites · ✅ Gaming interfaces · ✅ Sci-fi / cosmic brands

---

## Why it fits EaseMotion CSS

- Minimal JavaScript — only cursor tracking + particle lifecycle management
- Pure CSS animation for the pulsing core (`ease-comet-core-pulse`)
- Respects `prefers-reduced-motion` and touch-device detection
- Smooth 60 fps via `requestAnimationFrame`
- Self-contained: one HTML file, one CSS file
