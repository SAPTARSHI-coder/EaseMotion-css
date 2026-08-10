# CSS Animated Sidebar Toggle

1. **What does this do?**
   Provides a pure CSS off-canvas navigation drawer featuring a smooth push/slide animation for main page content paired with a synchronized backdrop overlay transition.

2. **How is it used?**
   Connect a hidden state input (`.sidebar-checkbox`) with matching label elements (`.toggle-btn`, `.close-btn`, `.sidebar-overlay`) alongside the sidebar drawer (`.sidebar-drawer`) and content area (`.main-content`):

   ```html
   <input type="checkbox" id="sidebar-toggle" class="sidebar-checkbox" aria-label="Toggle Navigation Menu">

   <div class="layout-wrapper">
     <label for="sidebar-toggle" class="sidebar-overlay" aria-hidden="true" tabindex="-1"></label>

     <aside class="sidebar-drawer" aria-label="Sidebar Navigation">
       <div class="sidebar-header">
         <span class="sidebar-title">Menu</span>
         <label for="sidebar-toggle" class="close-btn" tabindex="0" role="button" aria-label="Close sidebar">&times;</label>
       </div>
       <nav class="sidebar-nav">
         <ul class="sidebar-menu">
           <li><a href="#" class="sidebar-link active">Dashboard</a></li>
           <li><a href="#" class="sidebar-link">Projects</a></li>
         </ul>
       </nav>
     </aside>

     <main class="main-content">
       <label for="sidebar-toggle" class="toggle-btn" tabindex="0" role="button" aria-label="Toggle Navigation Sidebar">
         ☰ Toggle Sidebar
       </label>
     </main>
   </div>
   ```

3. **Why is it useful?**
   Enables complex off-canvas drawer navigation and content-push micro-interactions without relying on JavaScript state handlers or third-party UI framework dependencies.

---

### Component Features

- **Pure CSS Architecture**: State is driven entirely via standard HTML checkbox elements and CSS general sibling combinators (`~`).
- **Synchronized Motion**: The sidebar slides in via `transform: translateX(-100%)` to `translateX(0)` while the main page content shifts right in unison.
- **Interactive Overlay**: Features a semi-transparent backdrop overlay that fades in when open and allows closing the sidebar by clicking anywhere outside the drawer.
- **Keyboard Accessibility**: Toggle controls contain `tabindex="0"`, `role="button"`, and `:focus-visible` outline rings for screen reader and keyboard accessibility.
- **Responsive Layout**: On mobile screens (`max-width: 768px`), the content shift is disabled to prevent horizontal viewport overflow while maintaining the overlay drawer experience.
- **Reduced Motion Support**: All motion transitions honor `prefers-reduced-motion: reduce` media preferences.

### Design Tokens & Custom Properties

| CSS Variable | Default Value | Description |
|---|---|---|
| `--sidebar-width` | `260px` | Width of the off-canvas sidebar panel |
| `--sidebar-speed` | `300ms` | Transition duration for slide and fade animations |
| `--sidebar-easing` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing curve for drawer movement |
| `--overlay-color` | `rgba(15, 23, 42, 0.6)` | Background color of the backdrop overlay |
