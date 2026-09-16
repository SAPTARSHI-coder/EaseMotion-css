# Shape-Shifting Dynamic Island FAB

**What does this do?**
A next-generation, pure CSS Floating Action Button inspired by modern shape-shifting UI patterns (like Apple's Dynamic Island). 
Initially, it is a sleek circular button at the bottom center of the screen. When hovered, the container physically morphs and stretches into a wide pill shape using custom spring physics, while the internal action icons shoot out horizontally from the center.

**Why is it useful?**
This demonstrates the absolute pinnacle of what CSS transitions can achieve without JavaScript. It utilizes complex width/height morphological transitions paired with `cubic-bezier` timing functions to create a highly fluid, organic-feeling component that feels alive.

**How is it used?**
```html
<div class="dynamic-fab-wrapper">
  <div class="dynamic-fab">
    <div class="fab-default-icon">
      <!-- Plus Icon SVG -->
    </div>
    <div class="fab-actions">
      <button class="fab-action-btn" style="--item-index: 1;">A</button>
      <button class="fab-action-btn" style="--item-index: 2;">B</button>
      <button class="fab-action-btn" style="--item-index: 3;">C</button>
      <button class="fab-action-btn" style="--item-index: 4;">D</button>
    </div>
  </div>
</div>
```
