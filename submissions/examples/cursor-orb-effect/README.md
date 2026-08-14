# Submission: Cursor Orb Effect

## 1. What does this do?

Replaces the default cursor with a glowing orb that follows the mouse
with smooth inertia (lag), a sharp dot that snaps instantly, and
yellow-white glitter particles that scatter and fade along the trail.

---

## 2. How is it used?

Add `cursor-orb` to any container (e.g. `<body>`), then include the
two required elements and the JS snippet from `demo.html`.

```html
<body class="cursor-orb">

  <!-- required: orb + snap dot -->
  <div class="orb" id="orb"></div>
  <div class="orb-dot" id="orbDot"></div>

  <!-- your page content -->

</body>
```

The JS handles:
- Mouse tracking with lerp for the orb lag
- Instant snap for the dot
- Glitter particle spawning on mousemove
- Expand on hover over interactive elements
- Burst on click

---

## 3. Why is it useful?

EaseMotion CSS is animation-first — the cursor is the most-interacted
element on any page, and making it expressive fits the philosophy perfectly.

Features:
- Pure CSS + vanilla JS, zero dependencies
- `cursor: none` scoped to `.cursor-orb` — opt-in, never global by accident
- GPU-accelerated via `will-change: transform` on both orb and dot
- Color tokens use CSS variables — easy to retheme
- Works on any container, not just `<body>`

Proposed class names (maintainer decides final naming):
- `ease-cursor-orb`     — enables the effect on the container
- `ease-orb`            — the lagging glow circle element
- `ease-orb-dot`        — the snapping center dot element
- `ease-orb-particle`   — auto-spawned glitter particles