# Interactive macOS-Style Dock Animation

A macOS-inspired dock where icons smoothly magnify as the cursor hovers over them, including a "sympathy" magnification effect on neighboring icons. Pure HTML and CSS — no JavaScript required.

## Features

- 🔍 Hovered icon lifts and scales up smoothly
- 🌊 Neighboring icons on either side also grow slightly, approximating macOS's distance-based magnification using the CSS `:has()` selector and adjacent sibling combinator
- 💬 Tooltip label fades in above each icon on hover
- 🟢 Optional "running app" indicator dot
- 📱 Responsive — scales down icon size and spacing on small screens
- ♿ Accessible structure: semantic `<ul>`/`<li>` list, `tabindex="0"` for keyboard focus, and `aria-label` on every icon
- ♿ Respects `prefers-reduced-motion`
- 🧩 Pure HTML + CSS — no JavaScript dependencies

## Usage

Include `style.css` and build the dock as an unordered list, giving each icon a unique color modifier class:

```html
<ul class="dock">
  <li class="dock-icon dock-icon--1 is-running" tabindex="0" aria-label="Messages">
    💬
    <span class="dock-label">Messages</span>
  </li>
  <li class="dock-icon dock-icon--2" tabindex="0" aria-label="Mail">
    ✉️
    <span class="dock-label">Mail</span>
  </li>
  <!-- add as many icons as you need -->
</ul>