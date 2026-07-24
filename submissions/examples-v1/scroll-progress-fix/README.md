# Fix: Scroll Progress Layering
**Issue:** `scroll-progress.css` was unlayered.
**Fix:** Wrapped the component styles inside `@layer easemotion-components`. 
This ensures it respects the cascade order and prevents it from overriding user-defined styles uncontrollably.