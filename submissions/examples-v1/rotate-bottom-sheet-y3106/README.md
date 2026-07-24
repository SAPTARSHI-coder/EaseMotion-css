# Rotate Bottom Sheet

1. **What does this do?**  
   It provides an interactive, CSS-only modal bottom sheet component that rotates forward on a 3D perspective axis while sliding up from the screen bottom when triggered.

2. **How is it used?**  
   Implement the structure using a checkbox toggle input, a background backdrop mask overlay, and the main slide container (`bottom-sheet`):
   ```html
   <input type="checkbox" id="admin-sheet-toggle" class="sheet-checkbox" />
   
   <!-- Backdrop -->
   <label for="admin-sheet-toggle" class="sheet-backdrop"></label>
   
   <!-- Bottom Sheet -->
   <div class="bottom-sheet">
     <div class="sheet-handle"></div>
     <div class="sheet-header">...</div>
     <div class="sheet-body">...</div>
   </div>
   ```

3. **Why is it useful?**  
   Bottom sheets are widely utilized in admin consoles, mobile hubs, and control dashboards for toggling actions. This implementation handles 3D perspective translations and smooth overlays purely in CSS, completely bypassing the need for bulky JS layout frameworks or event listeners.
