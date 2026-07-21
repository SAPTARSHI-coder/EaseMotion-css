# Orbital Motion Animation Utility

A reusable CSS animation utility that moves elements along a smooth circular path around a central point — perfect for hero sections, loaders, space-themed UIs, and decorative accents.

This submission addresses issue **#5704** — *[FEATURE] Add Orbital Motion Animation Utility*.

---

## 1. What does this do?

It provides three drop-in CSS animation classes that make any element orbit around its parent's center using pure CSS keyframes — no JavaScript required.

| Class             | Behavior                                  |
| ----------------- | ----------------------------------------- |
| `orbit`           | Smooth clockwise orbit (8s, default)      |
| `orbit-fast`      | Faster clockwise orbit (3s)               |
| `orbit-reverse`   | Smooth counter-clockwise orbit (8s)       |

---

## 2. How is it used?

Place an orbit container with a central element and any number of orbiting items. Apply one of the three orbit classes to each orbiting element. The orbit radius is controlled by a single CSS custom property (`--orbit-radius`).

```html
<div class="orbit-stage">
  <!-- Central element (the "sun") -->
  <div class="orbit-center">☀️</div>

  <!-- Orbiting elements -->
  <div class="orbit-ring ring-normal">
    <div class="orbit-item orbit">🌍</div>
  </div>

  <div class="orbit-ring ring-fast">
    <div class="orbit-item orbit-fast">🚀</div>
  </div>

  <div class="orbit-ring ring-reverse">
    <div class="orbit-item orbit-reverse">🌙</div>
  </div>
</div>
```

### Key classes

| Class             | Purpose                                                    |
| ----------------- | ---------------------------------------------------------- |
| `.orbit-stage`    | The container that defines the orbital space               |
| `.orbit-center`   | The central element around which others orbit              |
| `.orbit-ring`     | Optional dashed ring showing the orbital path              |
| `.orbit-item`     | Any element that will orbit (positioned at ring's edge)    |
| `.orbit`          | Normal speed clockwise orbit                               |
| `.orbit-fast`     | Fast clockwise orbit                                       |
| `.orbit-reverse`  | Normal speed counter-clockwise orbit                       |

### Customizing the orbit radius

Each orbit's distance from the center is set via the `--orbit-radius` custom property:

```css
.my-element.orbit {
  --orbit-radius: 120px;
}
```

---

## 3. Why is it useful?

EaseMotion CSS focuses on **animation-first, reusable, and visually engaging** motion utilities. Orbital motion fills a unique gap in the library — most CSS animation libraries cover fade, slide, bounce, rotate, and float, but **circular path motion is rarely included** despite being commonly used in:

- 🚀 **Hero sections** (orbiting product highlights, badges, icons)
- 🌌 **Space / tech-themed interfaces** (loaders, decorative elements)
- 📊 **Interactive dashboards** (rotating indicators, status orbs)
- ⏳ **Loading states** (multi-element circular spinners)
- 🎨 **Modern landing pages** (eye-catching decorative motion)

### Key benefits

- ⚡ **Pure CSS** — zero JavaScript, zero dependencies
- 🎯 **Three ready-to-use variants** for different speeds and directions
- 🧩 **Easy to customize** — single CSS variable controls orbit radius
- ♿ **GPU-accelerated** — uses `transform` only, smooth at 60fps
- 🪶 **Lightweight** — just a few keyframes and utility classes
- 🔁 **Reusable pattern** — drop-in for any project

The animation remains easy to use through human-readable utility classes while expanding the variety of motion effects available in EaseMotion CSS — perfectly aligned with the framework's philosophy.

---

## Technical Notes

The orbit effect uses a classic two-rotation transform technique:

```css
@keyframes orbitMotion {
  from { transform: rotate(0deg)   translateX(var(--orbit-radius)) rotate(0deg); }
  to   { transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg); }
}
```

- The first `rotate()` moves the element around the center.
- `translateX()` pushes it outward by the orbit radius.
- The second (negative) `rotate()` keeps the element upright as it orbits.

For `orbit-reverse`, both rotation directions are flipped to produce counter-clockwise motion.

---

## Files

```
orbital-motion-sou/
├── demo.html      # Self-contained HTML demo (solar system + individual variants)
├── style.css      # All styles + the three orbit keyframe utilities
└── README.md      # This file
```

## Preview

Open `demo.html` directly in any modern browser — no server, no build step, no dependencies required.