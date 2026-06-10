# Bottom Navigation

1. **What does this do?** Provides a fixed-position mobile bottom navigation bar with icon + label per item, active state highlighting, and safe-area-inset support for notched devices — pure CSS.

2. **How is it used?**
   ```html
   <nav class="bottom-nav">
     <a href="#" class="bn-item bn-active">
       <span class="bn-icon">🏠</span>
       <span class="bn-label">Home</span>
     </a>
     <a href="#" class="bn-item">
       <span class="bn-icon">🔍</span>
       <span class="bn-label">Search</span>
     </a>
   </nav>
   ```

3. **Why is it useful?** Bottom navigation is the standard mobile UI pattern for top-level app navigation. Pure CSS, dark mode, safe-area support for modern devices.
