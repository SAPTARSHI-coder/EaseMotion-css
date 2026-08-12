# macOS Dock Magnification Bar

A desktop macOS-inspired floating navigation bar featuring CSS `:has()` neighbor magnification physics, active indicator dots, and glassmorphic blur reflections.

## 1. What does this do?
This component creates a responsive floating dock menu that scales icons when hovered or focused, while using modern CSS selector mechanics to smoothly magnify adjacent icons.

## 2. How is it used?
Link `style.css` in your project and structure your dock links inside a `<nav class="mac-dock">` element:

```html
<link rel="stylesheet" href="style.css">

<nav class="mac-dock">
  <a href="#" class="dock-item">
    <span class="dock-tooltip">Finder</span>
    <span class="dock-icon">📁</span>
  </a>
</nav>
```

## 3. Why is it useful?
It brings operating-system level interactive polish and accessibility to web applications, desktop dashboards, and portfolio sites without relying on heavy JavaScript event listeners.
