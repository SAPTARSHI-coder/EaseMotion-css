# Transform Origin Utilities

This submission introduces utility classes for controlling the CSS `transform-origin` property inside EaseMotion CSS.

---

## 1. What does this do?

These utility classes allow developers to instantly change the pivot (origin) point of CSS transformations (rotation, scaling, or 3D flipping) on any element.

---

## 2. How is it used?

Apply any of the utility classes directly to an element alongside standard EaseMotion animations.

```html
<!-- Element rotating around its top-left corner -->
<div class="ease-spin origin-top-left">Swinging Element</div>

<!-- Element scaling up from the bottom-right corner -->
<div class="ease-zoom-in origin-bottom-right">Zooming Card</div>
```

---

## 3. Why is it useful?

In motion design, the placement of the anchor or pivot point dictates the emotion and physical weight of an animation. By separating the transform origin from the animation class, EaseMotion CSS remains modular, letting designers reuse the same animation (e.g. rotation, zoom) while altering the pivot point to achieve vastly different effects (e.g., center spin vs. pendulum swing).

---

## Utility Classes List

| Class Name             | CSS Rule                          | Description                     |
| ---------------------- | --------------------------------- | ------------------------------- |
| `.origin-center`       | `transform-origin: center;`       | Default center pivot point      |
| `.origin-top`          | `transform-origin: top;`          | Top-center pivot point          |
| `.origin-bottom`       | `transform-origin: bottom;`       | Bottom-center pivot point       |
| `.origin-left`         | `transform-origin: left;`         | Left-center pivot point         |
| `.origin-right`        | `transform-origin: right;`        | Right-center pivot point        |
| `.origin-top-left`     | `transform-origin: top left;`     | Top-left corner pivot point     |
| `.origin-top-right`    | `transform-origin: top right;`    | Top-right corner pivot point    |
| `.origin-bottom-left`  | `transform-origin: bottom left;`  | Bottom-left corner pivot point  |
| `.origin-bottom-right` | `transform-origin: bottom right;` | Bottom-right corner pivot point |

---

## Expected Behavior

- **Rotation (`rotate`)**:
  - `origin-center`: Rotates around its own midpoint like a wheel.
  - `origin-top-left` / `origin-top-right`: Acts like a pendulum hanging from the top corners.
  - `origin-bottom`: Anchored to the ground, wiggling or tilting from the base.
- **Scale (`scale`)**:
  - `origin-center`: Expands or shrinks uniformly outwards/inwards.
  - `origin-top`: Expands downwards or shrinks upwards, keeping the top line locked.
  - `origin-bottom-left`: Scales outwards towards the top-right, keeping the bottom-left corner locked in place.
- **Flip (`rotateY` / `rotateX`)**:
  - `origin-left`: Flips open like a door hinge.
  - `origin-right`: Flips open like a reverse door hinge.

---

## Folder Structure

```text
submissions/examples/transform-origin-utilities/
├── demo.html     # Interactive responsive HTML demo (No JS)
├── style.css     # Utility definitions & premium visualization styles
└── README.md     # Documentation, usage guide, and contribution questions
```
