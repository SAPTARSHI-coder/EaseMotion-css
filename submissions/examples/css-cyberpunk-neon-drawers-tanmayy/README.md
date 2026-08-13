# CSS Cyberpunk Neon Drawers

A hardware-accelerated, interactive sci-fi terminal sidebar built entirely without JavaScript. This component leverages advanced CSS pseudo-class state management to handle complex UI toggling alongside high-performance neon glow effects.

## 📋 Mandatory Questions

### 1. What does this do?

This component renders an immersive "Cyberpunk" themed viewport. It features a glowing neon button that, when clicked, triggers a dark overlay to fade in while a sleek, high-tech drawer seamlessly slides into view from the right side of the screen. The drawer includes a scanning neon laser on its border, glitch-art hover interactions on buttons, and stylized sci-fi data readouts.

### 2. How is it used?

The entire interactivity of the drawer (opening, closing, overlay toggling) is managed purely by HTML and CSS using the "Checkbox Hack".

**The State Engine:**
An invisible `<input type="checkbox" id="drawer-toggle">` sits at the top of the DOM tree. The glowing terminal button, the drawer's "X" close button, and the dark background overlay are all `<label>` elements mathematically tied to this checkbox via the `for="drawer-toggle"` attribute. Clicking any of them toggles the checkbox state.

**The Animation Trigger:**
Using the CSS General Sibling Combinator (`~`), we listen for the `:checked` pseudo-class to trigger hardware-accelerated transforms on the drawer:

```css
/* Start hidden off-screen to the right */
.cyber-drawer {
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Slide in when the checkbox is checked */
.drawer-toggle:checked ~ .cyber-drawer {
  transform: translateX(0);
}
```

### 3. Why is it useful?

Managing off-canvas sidebars and drawers typically requires importing heavy UI libraries or writing custom JavaScript event listeners to handle `onClick` state toggling. 

By offloading the boolean open/closed state directly to the browser's native form mechanics (the checkbox), we eliminate the need for JavaScript entirely. The sliding animations rely exclusively on `transform: translateX()`, ensuring the browser's GPU compositor handles the rendering at a flawless 60fps without triggering expensive DOM layout repaints. Furthermore, the component ensures accessibility by respecting `@media (prefers-reduced-motion: reduce)`, stripping out the sliding transition and neon animations so the drawer snaps open instantly for users with motion sensitivities.
