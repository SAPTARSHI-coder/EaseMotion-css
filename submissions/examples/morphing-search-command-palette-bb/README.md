# Morphing Search / Command Palette

1. **What does this do?**
   A keyboard-accessible command palette that opens from a search-bar trigger with a smooth spring-physics scale-and-fade entrance, blurred backdrop overlay, grouped command results with live filtering, and full keyboard navigation (↑↓ arrow, Enter to select, Escape to close, ⌘K to toggle).

2. **How is it used?**
   ```html
   <!-- Trigger -->
   <button class="search-trigger"
           aria-expanded="false"
           aria-controls="command-palette">
     <span class="search-icon">🔍</span>
     <span class="search-placeholder">Search commands…</span>
     <kbd class="search-shortcut">⌘K</kbd>
   </button>

   <!-- Palette -->
   <div class="palette-overlay" aria-hidden="true">
     <div class="palette-modal" id="command-palette"
          role="dialog" aria-modal="true">
       <div class="palette-search-row">
         <input class="palette-input" type="text"
                placeholder="Type a command…" />
       </div>
       <div class="palette-results" role="listbox">
         <div class="palette-group">
           <p class="palette-group-label">Navigation</p>
           <button class="palette-item" role="option">
             <span class="palette-item-icon">🏠</span>
             <span class="palette-item-text">Go to Home</span>
             <kbd class="palette-item-shortcut">G H</kbd>
           </button>
         </div>
       </div>
     </div>
   </div>
   ```

3. **Why is it useful?**
   Command palettes are a high-value power-user pattern used in VS Code, Linear, Vercel, and Notion. This submission demonstrates EaseMotion-aligned animation techniques: a spring-physics modal entrance (`cubic-bezier(0.34,1.56,0.64,1)`), backdrop blur overlay transition, and hover highlight state — all implemented with zero external dependencies. The component is fully accessible with ARIA `role="dialog"`, `role="listbox"`, `aria-modal`, and keyboard navigation. Maps to planned framework utilities `ease-scale-in`, `ease-backdrop-blur`, and `ease-modal`.
