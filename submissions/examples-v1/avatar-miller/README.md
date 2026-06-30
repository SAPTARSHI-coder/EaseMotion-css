# Avatar Component

1. **What does this do?**
   A circular avatar component with image support, initials fallback, status dots (online/offline/busy), size variants, and group stacking with hover lift.

2. **How is it used?**

   ```html
   <!-- Image avatar with status -->
   <div class="ease-avatar ease-avatar-online">
     <img src="..." alt="User" />
   </div>

   <!-- Initials fallback -->
   <div class="ease-avatar ease-avatar-pink">AB</div>

   <!-- Group stacking -->
   <div class="ease-avatar-group">
     <div class="ease-avatar ease-avatar-count">+3</div>
     <div class="ease-avatar"><img src="..." alt="User" /></div>
     <div class="ease-avatar"><img src="..." alt="User" /></div>
   </div>
   ```

3. **Variants**
   - Status: `ease-avatar-online`, `ease-avatar-offline`, `ease-avatar-busy`
   - Sizes: `ease-avatar-sm`, `ease-avatar-lg`, `ease-avatar-xl`
   - Colors: `ease-avatar-pink`, `ease-avatar-amber`, `ease-avatar-cyan`, `ease-avatar-green`, `ease-avatar-slate`
   - Group: `ease-avatar-group` wrapper + `ease-avatar-count` for overflow badge

4. **Why is it useful?**
   Fully composable, animation-first (hover lift on group stacking), zero JavaScript. Class names read like plain English and follow EaseMotion CSS's human-readable philosophy.
