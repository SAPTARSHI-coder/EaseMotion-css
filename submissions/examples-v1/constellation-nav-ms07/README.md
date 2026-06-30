# Constellation Navigation

1. **What does this do?**
   Replaces a traditional nav menu with a "living" star map: navigation items are stars positioned across an SVG canvas. Hovering or focusing a star lights up connection lines to its nearest neighbors, sends a traveling energy pulse along those lines, gently drifts the other stars to make the layout feel alive, promotes the hovered star into a glowing "command node," and slides in an info panel describing that destination.

2. **How is it used?**
   The whole thing lives inside `.constellation-nav`, wrapping an SVG `.constellation-canvas`. Each nav item is a `.constellation-star` group (with `data-star="name"` and a `tabindex` for keyboard access) containing a glow circle, a core circle, and a text label. Connections between stars are plain SVG `<line>` elements tagged `.constellation-link` with `data-link="a-b"`, plus a matching `.constellation-pulse` circle for the traveling-energy effect. A small vanilla JS snippet toggles `constellation-star-active` / `constellation-link-active` / `constellation-pulse-active` on hover/focus and writes the destination's title/copy into `.constellation-panel`.

   ```html
   <g
     class="constellation-star"
     data-star="products"
     data-cx="320"
     data-cy="130"
     tabindex="0"
     role="link"
     aria-label="Products"
   >
     <circle class="constellation-star-glow" cx="320" cy="130" r="22"></circle>
     <circle class="constellation-star-core" cx="320" cy="130" r="6"></circle>
     <text class="constellation-star-label" x="320" y="100">Products</text>
   </g>
   ```

3. **Why is this useful?**
   It's a striking, fully-animated alternative navigation pattern for landing pages, portfolios, or product showcases that want something more memorable than a standard menu, while staying true to EaseMotion CSS's "pure CSS animation, vanilla JS only for state toggling" approach. It also demonstrates several techniques other contributors might reuse: per-segment pulse-travel keyframes generated from real coordinates, the CSS `r` property for animating SVG circle radius, and a layout that gracefully degrades under `prefers-reduced-motion`.

### Notes for the maintainer

- The five star positions and their connecting links were computed as actual nearest-neighbor pairs (`home↔products`, `home↔docs`, `products↔about`, `docs↔contact`, `about↔contact`) rather than placed arbitrarily, so the constellation shape is structurally coherent, not random scatter.
- The "constellation rearranges itself" behavior is a small per-star random drift (±7px) applied to the _non-active_ stars whenever any star becomes active — large enough to feel alive, small enough that stars never drift off their click targets or overlap.
- Each `.constellation-pulse` has its own `@keyframes` because each link has different SVG coordinates; this is the simplest way to get a pulse to travel along an exact path without introducing `<animateMotion>` or a JS-driven `requestAnimationFrame` loop.
- `prefers-reduced-motion: reduce` removes the traveling pulse and the per-star drift (purely decorative motion) but keeps the lit-up connection lines and the command-node highlight, since those convey actual state.
- Stars are keyboard accessible via `tabindex="0"` and respond to `focus`/`blur` the same way as `mouseenter`/`mouseleave`.
- Tested in Chrome, Firefox, and Edge.
