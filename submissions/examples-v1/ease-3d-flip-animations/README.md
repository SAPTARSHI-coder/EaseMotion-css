# 3D Flip Animations Proposal (`ease-3d-flip-animations`)

A proposal for `core/animations.css` adding `.em-flip-x` and `.em-flip-y` 3D entry animations.

## 🚀 Features

- **`.em-flip-x`**: Enters by flipping downwards along the horizontal X-axis.
- **`.em-flip-y`**: Enters by flipping sideways along the vertical Y-axis.
- **`.em-perspective`**: A companion utility class to apply `perspective: 1000px` to parent containers, which is required for the 3D effect to render correctly.
- **Bouncy Easing**: Uses `cubic-bezier(0.175, 0.885, 0.32, 1.275)` for a playful, physical snap effect.
- **Accessible & Motion Safe**: Fully respects `prefers-reduced-motion: reduce` by stripping the animation duration entirely.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`.

You can apply the proposed classes to your elements:

```html
<!-- The parent container needs perspective for 3D depth -->
<div class="em-perspective">
  <div class="em-flip-y">Flips in 3D!</div>
</div>
```

_Note: This is submitted via the `submissions/examples/` directory to adhere to the strict CI/CD guidelines preventing external modification of `core/` files. The maintainer can easily merge these rules into `core/animations.css`._

## 🔗 Related Issue

Resolves Issue #16956
