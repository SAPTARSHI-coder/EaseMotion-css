# Bioluminescent Dock Navigation

## 1. What does this do?
This contribution delivers a responsive, bioluminescent macOS-style floating dock navigation interface with spring-physics magnification on hover, active state glow indicators, notification badge overlays, and frosted glass backdrop blur.

## 2. How is it used?
Include `style.css` in your HTML file and implement the dock list structure within `<nav class="dock-container">`.

```html
<link rel="stylesheet" href="style.css">

<nav class="dock-container">
  <ul class="dock">
    <li class="dock-item active">
      <button class="dock-btn" aria-label="Dashboard">
        <!-- SVG Icon -->
        <span class="dock-tooltip">Dashboard</span>
      </button>
    </li>
  </ul>
</nav>
```

## 3. Why is it useful?
It provides desktop-class navigation interaction dynamics for modern web applications and SaaS dashboards while maintaining zero JS runtime overhead and full keyboard accessibility support.
