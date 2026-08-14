# Neon Glow Button Variants

1. **What does this do?**
   A comprehensive neon-themed button system with 5 color families (purple, cyan, green, pink, orange), 4 variants (solid, outline, pulse ring, ripple-on-click), icon support, and animated neon glow on hover — all driven by CSS custom properties for effortless color customization.

2. **How is it used?**
   ```html
   <!-- Solid neon button -->
   <button class="neon-btn neon-purple">⚡ Purple Neon</button>

   <!-- Outline neon button -->
   <button class="neon-btn neon-outline neon-cyan">◇ Outline Cyan</button>

   <!-- Pulse animation ring -->
   <button class="neon-btn neon-green neon-pulse">🔴 Pulse Alert</button>

   <!-- Ripple on click -->
   <button class="neon-btn neon-cyan neon-ripple">💫 Ripple Effect</button>

   <!-- Icon + text -->
   <button class="neon-btn neon-purple neon-icon-btn">
     <span class="neon-icon">🚀</span>Launch
   </button>
   ```
   Color modifiers: `neon-purple`, `neon-cyan`, `neon-green`, `neon-pink`, `neon-orange`

3. **Why is it useful?**
   Neon UI aesthetics are popular in gaming, developer tools, and creative dashboards. This submission demonstrates advanced EaseMotion CSS animation patterns: multi-layer `box-shadow` glow animation, `color-mix()` for dynamic glow falloffs, CSS custom property-driven color system (`--neon-color`, `--neon-bg`, `--neon-glow`), a pulsing ring animation using `::before` pseudo-element, and a JS-powered ripple with CSS `@keyframes`. The entire color palette is configurable with 3 custom properties. Maps to planned `ease-glow`, `ease-neon-pulse`, and `ease-ripple` utilities.
