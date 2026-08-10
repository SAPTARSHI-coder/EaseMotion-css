# Micro-Gravity Orbital Manufacturing Terminal — Phase #722

**EaseMotion CSS Showcase** · `submissions/examples/micro-gravity-orbital-manufacturing-terminal-phase-722/`

A space industrial UI showcase representing a zero-gravity manufacturing and 3D printing terminal. Features CSS-rendered spinning centrifuges, zero-g floating particles, articulating robotic printer arms, and firing laser beams.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/micro-gravity-orbital-manufacturing-terminal-phase-722/demo.html
```

---

## Design Theme

Space station interior, zero-g manufacturing, 3D printing in space, and industrial robotics.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#09090b` | Deep Space background |
| `--clr-laser`| `#0ea5e9` | Laser Cyan / Primary Action |
| `--clr-mat`| `#f59e0b` | Print Material Amber / Materials |
| `--clr-caution`| `#eab308` | Caution Yellow / Moving Parts |

---

## Component Breakdown

### 1. Zero-G Print Chamber (Center View)
- The `.chamber-panel` has a background overlay (`::before`) simulating an anti-gravity containment field using `repeating-linear-gradient` that fades in and out (`field-pulse` keyframe).
- `.particle` elements simulate floating debris or print material. They use the `float-zg` keyframe to translate in a wide, slow, curved path while rotating, giving the illusion of weightlessness.
- `.arm` elements simulate robotic printer arms. `transform-origin` is set to the outer edge, and they rotate up and down using a mechanical easing curve (`ease-mech: cubic-bezier(0.68, -0.55, 0.265, 1.55)`) via `arm-move-l` and `arm-move-r` keyframes.
- `.laser-beam` elements periodically fire out of the arms by scaling on the X-axis from 0 to 1 and back (`fire-laser` keyframe).
- The `.print-obj` in the center rotates continuously to simulate a 3D part being built from all sides (`obj-spin`).

### 2. Gravity Separator Centrifuge (Left Sidebar)
- The `.centrifuge` container is a dashed circle that rotates continuously (`spin-cw`).
- Inner `.c-arm` and `.c-pod` elements create the mechanical structure of a spinning centrifuge used for processing materials in space.

### 3. Space Station Background
- `body::after` uses a faint grid pattern created with `linear-gradient` to give the UI a structured, technical blueprint feel.

---

## File Structure

```
micro-gravity-orbital-manufacturing-terminal-phase-722/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
