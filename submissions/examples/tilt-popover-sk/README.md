# Tilt Popover (tilt-popover-sk)

1. **What does this do?**
   A pure-CSS popover that pops in using a 3D perspective tilt (rotateX) instead of a plain fade or slide.

2. **How is it used?**
   Wrap a trigger button and the popover box inside `.tilt-popover-wrapper`:
```html
   <div class="tilt-popover-wrapper">
     <button class="tilt-trigger">Hover me</button>
     <div class="tilt-popover-box">Popover content</div>
   </div>
```
   You can tweak the feel using CSS variables: `--tilt-duration`, `--tilt-easing`, `--tilt-angle`, `--tilt-scale`.

3. **Why is it useful?**
   Adds a more modern, tactile feel to popovers with zero JavaScript. Works with keyboard focus too (not just mouse hover), and respects `prefers-reduced-motion` for accessibility.