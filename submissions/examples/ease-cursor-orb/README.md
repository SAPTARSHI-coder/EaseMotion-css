# Submission: Cursor Orb Effect

## 1. What does this do?

Replaces the default cursor with a glowing purple orb that follows the
mouse with smooth inertia lag, a white dot that snaps instantly, and
purple glitter particles that scatter and fade along the trail.
Double-clicking triggers a 30-particle burst explosion.

---

## 2. How is it used?

```html
<body class="cursor-orb">
  <div class="orb" id="orb"></div>
  <div class="orb-dot" id="orbDot"></div>
  <!-- your content -->
</body>
```

Modifier classes applied via JS:

```js
// expand on hover over interactive elements
el.addEventListener('mouseenter', () => orb.classList.add('orb--expand'));

// press effect
document.addEventListener('mousedown', () => orb.classList.add('orb--click'));

// double-click burst
document.addEventListener('dblclick', e => spawnBurst(e.clientX, e.clientY));
```

---

## 3. Why is it useful?

EaseMotion CSS is animation-first — the cursor is the most-interacted
element on any page. Making it expressive fits the philosophy perfectly.
Class name reads like English: `cursor-orb` — instantly obvious.

- `cursor-orb` — enables the effect on the container, opt-in only
- `orb--expand` — enlarges on hover over interactive elements
- `orb--click` — shrinks + intensifies glow on mousedown
- `orb--burst` — flash on double-click
- Particles use CSS `--dx` / `--dy` variables for direction
- Hidden on mobile (`≤560px`) and `prefers-reduced-motion`
- GPU composited via `will-change: transform` — no layout thrash

---

## Proposed class names (maintainer decides)

| Raw name       | Proposed ease-* name    |
|----------------|-------------------------|
| `cursor-orb`   | `ease-cursor-orb`       |
| `orb`          | `ease-orb`              |
| `orb-dot`      | `ease-orb-dot`          |
| `orb-particle` | `ease-orb-particle`     |
| `orb--expand`  | `ease-orb-expand`       |
| `orb--click`   | `ease-orb-click`        |
| `orb--burst`   | `ease-orb-burst`        |