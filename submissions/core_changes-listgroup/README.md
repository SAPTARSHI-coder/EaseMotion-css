# List Group Component

1. **What does this do?** Provides a styled list group component with variants including active item (`list-item-active`), disabled item (`list-item-disabled`), badge support (`.list-badge`), flush (borderless), bordered, and 4 color variants (primary, success, warning, error) — all pure CSS.

2. **How is it used?**
   ```html
   <ul class="list-group">
     <li class="list-item list-item-active">Dashboard</li>
     <li class="list-item">
       <span>Notifications</span>
       <span class="list-badge">12</span>
     </li>
     <li class="list-item list-item-disabled">Settings</li>
   </ul>

   <!-- Variants: list-group-flush, list-group-bordered -->
   <!-- Color: list-item-primary, list-item-success, etc. -->
   ```

3. **Why is it useful?** List groups present collections of items in a clean, scannable format for navigation menus, settings panels, and data lists. This implementation follows EaseMotion CSS's philosophy by using semantic HTML `<ul>`/`<li>`, supporting dark mode automatically, respecting `prefers-reduced-motion`, and providing clear visual states through simple modifier classes — all without JavaScript.
