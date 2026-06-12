# Drawer / Off-canvas Component

1. **What does this do?** Provides a CSS-only slide-in drawer panel using a hidden checkbox hack, supporting left/right positions, header with close button, navigation items, and overlay backdrop — minimal JavaScript only needed for overlay click-to-close.

2. **How is it used?**
   ```html
   <input type="checkbox" id="my-drawer" class="drawer-input">
   <div class="drawer drawer-left">
     <div class="drawer-header">
       <h3>Title</h3>
       <label for="my-drawer" class="drawer-close">&times;</label>
     </div>
     <div class="drawer-body">
       <a href="#" class="drawer-item">Link</a>
     </div>
   </div>
   <label for="my-drawer" class="drawer-trigger">Open</label>
   ```

3. **Why is it useful?** Drawers provide secondary navigation or content panels without leaving the page. Pure CSS toggle via checkbox, dark mode, smooth slide animation.
