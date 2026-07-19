# Neumorphic Toggle Switch

1. **What does this do?**
   A buttery-smooth toggle switch using the Neumorphism (Soft UI) aesthetic. Precise CSS box-shadows make the track appear pressed into the background while the thumb appears extruded. Thumb animates with a spring cubic-bezier on toggle.

2. **How is it used?**
   ```html
   <label class="neumorphic-toggle">
     <input type="checkbox">
     <span class="slider"></span>
   </label>

   <!-- With label text -->
   <label class="neumorphic-toggle">
     <input type="checkbox">
     <span class="slider"></span>
     <span class="nm-label">Dark Mode</span>
   </label>
   ```

3. **Variants**
   - Sizes: `neumorphic-toggle-sm`, `neumorphic-toggle-lg`
   - Colors: `neumorphic-toggle-pink`, `neumorphic-toggle-amber`, `neumorphic-toggle-cyan`
   - Disabled: `disabled` attribute on input

4. **Customization**
   ```css
   .my-toggle {
     --nm-bg: #e0e5ec;           /* background color */
     --nm-active: #7c3aed;       /* active thumb color */
     --nm-active-glow: rgba(124, 58, 237, 0.35);
   }
   ```

5. **Why is it useful?**
   Neumorphism depends entirely on precise shadow math — this does it correctly with inset shadows for the pressed track and extruded shadows for the thumb. Spring easing on the thumb slide feels premium. Pure CSS checkbox hack, zero JS. Respects prefers-reduced-motion.
