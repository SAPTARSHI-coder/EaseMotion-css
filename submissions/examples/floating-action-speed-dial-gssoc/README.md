# Floating Action Speed Dial

1. **What does this do?**  
Adds a floating action button (FAB) speed dial menu with staggered pop-out action buttons and label tooltips on hover or focus.

2. **How is it used?**  
Apply the `.speed-dial-container` class around a floating action button and menu wrapper:
```html
<div class="speed-dial-container">
  <div class="speed-dial-menu">
    <div class="speed-dial-item item-1">
      <span class="speed-dial-label">Action</span>
      <button class="speed-dial-action">...</button>
    </div>
  </div>
  <button class="speed-dial-fab">+</button>
</div>
```

3. **Why is it useful?**  
It provides a compact, space-saving quick action menu for mobile and desktop web apps while supporting `prefers-reduced-motion` accessibility.
