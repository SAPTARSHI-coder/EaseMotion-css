# Glowing Orb

## 1. What does this do?
A floating orb with an animated glow using layered `box-shadow` and vertical float via `translateY`.

## 2. How is it used?
Add a `.orb` element. Customize with `--glow-color` (color), `--float-duration` (animation speed), and modifier classes (`.orb-cyan`).
```html
<div class="orb" style="--glow-color: #22c55e; --float-duration: 4s"></div>
```

## 3. Why is it useful?
Creates a sci-fi aesthetic floating glow element using pure CSS. The radial gradient gives a 3D sphere appearance. Fully customizable via CSS variables. Respects `prefers-reduced-motion`.
