# ease-neural-bg — Animated Neural Network Background

1. **What does this add?** A pure CSS, AI-inspired animated background made of pulsing nodes and animated "data flow" connection lines, suitable for hero sections, SaaS landing pages, and tech-themed portfolios. Includes a default purple/cyan theme and a teal color variant.
2. **How is it used?**

```html
<div class="ease-neural-bg">
  <div class="ease-neural-node n1"></div>
  <div class="ease-neural-node n2"></div>
  <!-- ... up to n10 ... -->

  <div class="ease-neural-connection c1"></div>
  <div class="ease-neural-connection c2"></div>
  <!-- ... up to c8 ... -->
</div>

<!-- Color variant -->
<div class="ease-neural-bg ease-neural-bg-teal">
  <!-- same node/connection structure -->
</div>
```

Place any content (e.g. a hero heading) absolutely positioned on top of `.ease-neural-bg` for an overlay effect. 3. **Why is it useful?** Built entirely with `@keyframes` (`ease-neural-pulse` for node pulsing, `ease-neural-flow` for connection "data flow"), zero JavaScript, and composable color variants — aligned with EaseMotion CSS's animation-first, human-readable, zero-dependency philosophy. Includes `prefers-reduced-motion` support, disabling animations for users who request reduced motion while keeping the visual structure intact.
