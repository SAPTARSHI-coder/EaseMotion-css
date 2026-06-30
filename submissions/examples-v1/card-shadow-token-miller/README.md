# Card Shadow Token Fix

1. **What does this fix?**
   `.ease-card:hover` had a hardcoded `box-shadow: 0 20px 40px rgba(0,0,0,0.15)` that ignored the design token system and couldn't be themed without overriding component CSS.

2. **The fix**
   Introduced two CSS custom properties and replaced the hardcoded value:

   ```css
   :root {
     --ease-shadow-card:
       0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06);
     --ease-shadow-hover:
       0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.08);
   }

   .ease-card:hover {
     box-shadow: var(--ease-shadow-hover); /* was hardcoded */
   }
   ```

3. **How developers can now theme it**

   ```css
   /* No component CSS needed — just override the token */
   .my-card {
     --ease-shadow-hover: 0 20px 40px rgba(236, 72, 153, 0.25);
   }
   ```

4. **Why it fits EaseMotion CSS?**
   CSS custom properties are the correct, composable approach. Token-based shadows are themeable per-element, per-component, or globally — without touching component CSS. Aligns with EaseMotion's design token philosophy.
