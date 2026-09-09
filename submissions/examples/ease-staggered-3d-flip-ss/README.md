# Staggered 3D Flip Cascade

## Abstract
The **Staggered 3D Flip Cascade** component introduces a hardware-accelerated, perspective-driven list entrance animation. By leveraging CSS 3D transforms (`rotateX`, `preserve-3d`) alongside inline custom properties (`--delay`), items cascade smoothly into view along the X-axis with zero JavaScript rendering overhead.

---

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a staggered 3D flip cascade animation where list items rotate on the X-axis from a 90-degree perspective, scheduled dynamically via inline CSS variables (`--delay: N`).

### 2. How is it used?
Apply the `.flip-cascade-list` class to unordered lists (`<ul>` or `<ol>`) and `.flip-item` to list elements (`<li>`). Pass `--delay: [index]` via inline styles (e.g., `style="--delay: 1"`) to stagger the entrance timing automatically.

```html
<ul class="flip-cascade-list">
  <li class="flip-item" style="--delay: 1">First Item</li>
  <li class="flip-item" style="--delay: 2">Second Item</li>
  <li class="flip-item" style="--delay: 3">Third Item</li>
</ul>
```

### 3. Why is it useful?
Eliminates the need for complex JavaScript timeout loops or third-party animation libraries when choreographing high-end list and grid entrances, maintaining maximum performance and declarative style structures.

---

## 3D Perspective & Staggering Architecture

### Perspective Stage Setup
The parent container or body establishes a 3D perspective context (`perspective: 1200px`) allowing child elements configured with `transform-style: preserve-3d` to rotate realistically in 3D space relative to the viewer's focal point.

### Transform Origin & Initial State
Each `.flip-item` sets `transform-origin: top center` and starts at an initial keyframe state:
```css
opacity: 0;
transform: rotateX(90deg) translateY(20px);
```
This forces items to hinge from their top edge, tilted backward by 90 degrees and pushed slightly down. As the `@keyframes easeFlipCascade` runs, the items rotate down to `rotateX(0deg)` and `translateY(0)` with `opacity: 1`.

### Delay Choreography Math
Staggering is computed dynamically using CSS custom property arithmetic:
```css
animation-delay: calc(var(--delay, 1) * 0.12s);
```
- **Base Offset (`0.12s`)**: Provides a consistent 120ms interval between sequential item entrances.
- **Fallback (`var(--delay, 1)`)**: Guarantees that if `--delay` is omitted, the element defaults to a single unit delay factor (`0.12s`).
- **Mathematical Progression**:
  - Item 1 (`--delay: 1`): `1 * 0.12s = 0.12s`
  - Item 2 (`--delay: 2`): `2 * 0.12s = 0.24s`
  - Item 3 (`--delay: 3`): `3 * 0.12s = 0.36s`
  - Item N (`--delay: N`): `N * 0.12s`

---

## Custom CSS Properties

| Token | Default Value | Description |
| :--- | :--- | :--- |
| `--flip-bg` | `#030712` | Main background color of the viewport/stage |
| `--flip-surface` | `#1e293b` | Surface color for individual cascade items |
| `--flip-surface-hover` | `#334155` | Hover state surface color for cascade items |
| `--flip-text` | `#f8fafc` | Primary typography color |
| `--flip-muted` | `#94a3b8` | Muted subtitle text color |
| `--flip-accent` | `#38bdf8` | Accent color for highlight borders and replay trigger |
| `--flip-border` | `rgba(255, 255, 255, 0.08)` | Subtly opaque border color |
| `--flip-radius` | `12px` | Corner border radius for list items |
