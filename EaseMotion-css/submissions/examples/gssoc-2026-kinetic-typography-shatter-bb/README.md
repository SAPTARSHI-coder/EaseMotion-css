# Kinetic Typography Shatter & Reassemble Animation

An interactive 3D typography component built with pure CSS keyframes, 3D transform perspectives, and GPU-accelerated spring physics.

## 1. What does this do?
This component renders an expressive typography element (`EASEMOTION`) whose individual character shards explode outward along 3D spatial trajectories (`--tx`, `--ty`, `--rz`) when hovered or activated, and seamlessly snap back to their pristine typographic position upon release.

## 2. How is it used?
Simply link `style.css` in your HTML file and structure your headline markup with `.shatter-text-wrapper` and `.char-shard` elements:

```html
<div class="shatter-text-wrapper">
  <span class="char-shard" style="--tx: -40px; --ty: -50px; --rz: -25deg; --delay: 0.02s;">E</span>
  <span class="char-shard" style="--tx: -20px; --ty: 40px; --rz: 15deg; --delay: 0.05s;">A</span>
  <span class="char-shard accent-shard" style="--tx: 30px; --ty: -35px; --rz: -18deg; --delay: 0.08s;">S</span>
</div>
```

## 3. Why is it useful?
- **Zero Heavy JS Dependencies**: Achieves complex 3D physics effects entirely using CSS custom properties (`var(--tx)`, `var(--ty)`) and 3D transforms (`translate3d`, `rotateZ`).
- **High Performance**: Optimized with `will-change` for smooth 60fps GPU acceleration.
- **Accessibility & Focus Ready**: Accessible keyboard navigation with `:focus` triggering the shatter effect.
