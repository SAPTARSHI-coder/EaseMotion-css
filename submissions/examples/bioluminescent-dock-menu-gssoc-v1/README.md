# Bioluminescent Floating Dock Navigation Menu

An interactive macOS-inspired floating dock navigation bar featuring bioluminescent hover glow halos, proximity spring scaling physics, and dynamic tooltip status indicators.

## 1. What does this do?
This component provides a sleek, floating application dock that responds dynamically to user interaction. When hovering over dock icons, icons expand using smooth elastic physics (`cubic-bezier(0.34, 1.56, 0.64, 1)`), emit a vibrant bioluminescent halo effect, display floating tooltips, and trigger neighboring item scale feedback.

## 2. How is it used?
Link `style.css` in your document and insert the `<nav class="biolum-dock">` element structured with icons and tooltips as demonstrated below:

```html
<nav class="biolum-dock">
  <ul class="dock-list">
    <li class="dock-item" data-tooltip="Dashboard">
      <button class="dock-btn" aria-label="Dashboard">
        <!-- SVG Icon -->
      </button>
      <span class="active-dot"></span>
    </li>
  </ul>
</nav>
```

Add click handling as shown in `demo.html` to toggle active navigation state indicators.

## 3. Why is it useful?
- **Modern Desktop UX:** Brings desktop-grade macOS/iOS dock fluidity to modern web application headers and persistent control panels.
- **Proximity Effects:** Utilizes modern CSS `:has()` relational selectors to create neighbor icon expansion physics without JavaScript overhead.
- **High Performance:** Employs backdrop-filter blur and hardware-accelerated transforms to maintain smooth 60 FPS transitions.
