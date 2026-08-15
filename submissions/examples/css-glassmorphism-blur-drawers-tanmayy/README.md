# CSS Glassmorphism Blur Drawers

A hardware-accelerated, pure CSS sidebar featuring a sleek frosted acrylic aesthetic. This component demonstrates how to leverage native CSS backdrop filters over a dynamic background to create a highly premium, modern UI without any JavaScript.

## 📋 Mandatory Questions

### 1. What does this do?

This component renders an interactive, off-canvas navigation drawer. When the user clicks the "Menu" button, a frosted glass sidebar slides seamlessly into the viewport from the left, while a dark overlay fades in over the main content. The viewport background features massive, vibrant color orbs that slowly float around; as these orbs pass behind the opened drawer, their colors beautifully diffuse and blur through the glass panel natively. The entire component perfectly maps to the user's OS Light or Dark mode.

### 2. How is it used?

The sidebar interactivity is fully managed by HTML and CSS via the "Checkbox Hack".

**The State Engine:**
An invisible `<input type="checkbox" id="drawer-toggle">` handles the boolean state of the UI. The "Menu" button, the dark overlay, and the drawer's "X" close button are all `<label for="drawer-toggle">` elements. Clicking any of them natively checks or unchecks the hidden input.

**The Glassmorphism Engine:**
The drawer (`.glass-drawer`) utilizes `backdrop-filter: blur(32px)`. When the drawer slides in (triggered by the `:checked` pseudo-class), the browser's hardware compositor automatically captures the background elements (the floating orbs) behind the drawer, heavily blurs them in real-time, and re-renders them inside the drawer pane.

```css
.glass-drawer {
  background: rgba(255, 255, 255, 0.5); /* Semi-transparent base */
  backdrop-filter: blur(32px); /* The magic hardware blur */
  border-right: 1px solid rgba(255, 255, 255, 0.9); /* Frosty edge */
  
  transform: translateX(-100%);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.drawer-toggle:checked ~ .glass-drawer {
  transform: translateX(0); /* Slide in */
}
```

### 3. Why is it useful?

Building responsive, off-canvas sidebars typically requires JavaScript event listeners to manage the open/close state, while creating dynamic blurred backgrounds traditionally required expensive Canvas or WebGL shaders. 

By routing the state logic through a native HTML checkbox and utilizing CSS `backdrop-filter` for the blur, this component offloads all the heavy processing directly to the browser's GPU compositor. This ensures butter-smooth 60fps animations and flawless real-time blurring without the massive performance penalty or battery drain of JavaScript rendering libraries. Additionally, the component adheres strictly to accessibility standards by utilizing `@media (prefers-reduced-motion: reduce)`, instantly snapping the drawer open and freezing the background orbs for motion-sensitive users.
