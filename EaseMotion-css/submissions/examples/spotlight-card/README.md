# Spotlight Card

1. What does this do? A dark card whose gradient glow follows the pointer via CSS custom properties, with the glow layer animating in on hover.
2. How is it used? Build a `.spotlight-card` with a `.spotlight-card__glow` layer and a `.spotlight-card__content` block. The glow is a radial gradient centered at `calc(var(--mx) * 1%) calc(var(--my) * 1%)`, so the light tracks the `--mx`/`--my` custom properties (0..100). By default the light sits at the center and fades in/out on hover. To make it follow the pointer for real, wire a tiny inline script that updates the properties on `mousemove`:

   ```js
   card.addEventListener("mousemove", (e) => {
     const r = card.getBoundingClientRect();
     card.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100);
     card.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100);
   });
   ```

   Adjust the glow size via `--slc-glow`.
3. Why is it useful? It produces a premium pointer-reactive spotlight effect driven by CSS custom properties (works fully with CSS-only defaults, and upgrades to true pointer tracking with a few lines of JS), and respects `prefers-reduced-motion`.
