# Fix Modal Z-Index Conflict (Issue #9806)

1. **What does this do?**  
   Updates the `.ease-modal-overlay` z-index to exceed the tooltip z-index (`9999`), preventing background tooltips from bleeding through the active modal.

2. **How is it used?**  
   Update the z-index property in the `.ease-modal-overlay` class to a value higher than `var(--ease-z-toast, 9999)`.

3. **Why is it useful?**  
   Resolves bug #9806. It ensures proper stacking context management so background elements don't interfere with modal interactions.
