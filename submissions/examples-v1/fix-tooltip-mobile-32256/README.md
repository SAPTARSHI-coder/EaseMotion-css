# Fix Tooltip Mobile Fallback (Issue #9803)

1. **What does this do?**  
   Fixes the mobile fallback for the top tooltip so that its animation direction and arrow alignment are fully consistent with bottom-positioned tooltips.

2. **How is it used?**  
   Replace the `@media (max-width: 640px)` override in the core `tooltips.css` with this updated styling.

3. **Why is it useful?**  
   Resolves bug #9803, preventing visual misalignment of the tooltip arrow and ensuring a natural animation flow on small screens.
