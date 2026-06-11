# Dropdown Menu Component

1. **What does this do?** Provides a pure CSS dropdown menu component with two interaction modes (hover via `:hover` and click via `:focus-within`), left/right alignment, 3 size variants (sm, base, lg), item dividers, danger items, and optional icon support via `--dropdown-icon` — all with zero JavaScript.

2. **How is it used?**
   ```html
   <!-- Hover dropdown -->
   <div class="dropdown">
     <button class="dropdown-trigger">Menu ▾</button>
     <div class="dropdown-menu">
       <a href="#" class="dropdown-item">Profile</a>
       <hr class="dropdown-divider">
       <a href="#" class="dropdown-item dropdown-item-danger">Log out</a>
     </div>
   </div>

   <!-- Click dropdown (focus-within) -->
   <div class="dropdown dropdown-click">
     <button class="dropdown-trigger">Click ▾</button>
     <div class="dropdown-menu">...</div>
   </div>
   ```

3. **Why is it useful?** Dropdown menus are a fundamental navigation pattern for actions menus, profile menus, and context menus. This implementation follows EaseMotion CSS's philosophy by being pure CSS (using `:hover` and `:focus-within` instead of JavaScript), supporting keyboard accessibility via `:focus-visible`, respecting `prefers-reduced-motion`, supporting dark mode automatically, and providing a clean modifier-based API.
